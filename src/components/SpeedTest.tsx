import { useState } from 'react';
import ScrollReveal from './ui/ScrollReveal';
import { submitSpeedTestResults } from '@/lib/formHandler';
import { useToast } from '@/hooks/use-toast';
import { useSpeedTestCore } from './SpeedTest/SpeedTestCore';
import SpeedTestResults from './SpeedTest/SpeedTestResults';
import SpeedTestProgress from './SpeedTest/SpeedTestProgress';

const SpeedTest = () => {
  const [showSaveForm, setShowSaveForm] = useState(false);
  const [saveFormData, setSaveFormData] = useState({ email: '', notes: '', location: '' });
  const [isSaving, setIsSaving] = useState(false);
  const { toast } = useToast();

  const {
    testStatus,
    testPhase,
    progress,
    results,
    chartData,
    currentSpeed,
    setTestStatus,
    setTestPhase,
    setProgress,
    setResults,
    setChartData,
    setCurrentSpeed,
    abortController,
    measurePingAdvanced,
    warmUpConnection,
    measureDownloadSpeedParallel,
    measureUploadSpeedParallel,
    measureConsistency
  } = useSpeedTestCore();

  const startTest = async () => {
    if (testStatus === 'running') {
      abortController.current?.abort();
      setTestStatus('idle');
      setProgress(0);
      setCurrentSpeed(0);
      return;
    }
    
    console.log("=== ENHANCED SPEED TEST START ===");
    setTestStatus('running');
    setProgress(0);
    setChartData([]);
    setCurrentSpeed(0);
    setResults({ download: 0, upload: 0, ping: 0, packetLoss: 0, consistency: 0 });
    setShowSaveForm(false);
    abortController.current = new AbortController();

    try {
      // Phase 1: Ping test (5%)
      setTestPhase('ping');
      setProgress(5);
      const { ping, packetLoss } = await measurePingAdvanced();
      setResults(prev => ({ ...prev, ping, packetLoss }));

      if (abortController.current?.signal.aborted) return;

      // Phase 2: Warm-up (10%)
      setTestPhase('warmup');
      setProgress(10);
      await warmUpConnection();

      if (abortController.current?.signal.aborted) return;

      // Phase 3: Enhanced download test (60%)
      setTestPhase('download');
      setProgress(15);
      
      const downloadSpeed = await measureDownloadSpeedParallel((speed, time) => {
        setChartData(prev => [...prev, { time, speed }]);
        setProgress(15 + Math.min((time / 10) * 45, 45));
      });
      
      setResults(prev => ({ ...prev, download: downloadSpeed }));

      if (abortController.current?.signal.aborted) return;

      // Phase 4: Enhanced upload test (80%)
      setTestPhase('upload');
      setProgress(80);
      const uploadSpeed = await measureUploadSpeedParallel();
      setResults(prev => ({ ...prev, upload: uploadSpeed }));

      if (abortController.current?.signal.aborted) return;

      // Phase 5: Consistency test (95%)
      setTestPhase('consistency');
      setProgress(90);
      const consistency = await measureConsistency();
      setResults(prev => ({ ...prev, consistency }));

      setProgress(100);
      setTestPhase('complete');
      setTestStatus('complete');
      setCurrentSpeed(0);
      
      console.log("=== ENHANCED SPEED TEST COMPLETE ===");
      
    } catch (error) {
      if (error.name !== 'AbortError') {
        console.error('Speed test error:', error);
        setTestStatus('idle');
        setCurrentSpeed(0);
        toast({
          title: "Chyba testu",
          description: "Došlo k chybe při měření rychlosti. Zkuste to znovu.",
          variant: "destructive",
        });
      }
    }
  };

  const handleSaveResults = async () => {
    if (!saveFormData.email) {
      toast({
        title: "Vyplňte email",
        description: "Email je povinný pro uložení výsledků.",
        variant: "destructive",
      });
      return;
    }

    setIsSaving(true);
    
    const formData = {
      email: saveFormData.email,
      notes: saveFormData.notes,
      location: saveFormData.location,
      downloadSpeed: results.download.toFixed(1),
      uploadSpeed: results.upload.toFixed(1),
      ping: results.ping.toFixed(0),
      packetLoss: results.packetLoss.toFixed(1),
      consistency: results.consistency.toFixed(1),
      testDate: new Date().toLocaleString('cs-CZ'),
      userAgent: navigator.userAgent
    };

    const result = await submitSpeedTestResults(formData);
    
    if (result.success) {
      toast({
        title: "Výsledky uložené",
        description: "Výsledky testu byly úspěšně uložené a odeslané na váš email.",
      });
      setShowSaveForm(false);
      setSaveFormData({ email: '', notes: '', location: '' });
    } else {
      toast({
        title: "Chyba při ukládání",
        description: result.error || "Došlo k chybe při ukládání výsledků.",
        variant: "destructive",
      });
    }
    
    setIsSaving(false);
  };

  return (
    <section id="test-rychlosti" className="section bg-gray-50">
      <div className="section-container">
        <ScrollReveal>
          <h2 className="section-title">Test rychlosti internetu</h2>
          <p className="section-subtitle">
            Vylepšené měření s paralelními stahováním a CDN endpoints
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <div className="max-w-4xl mx-auto mt-12 glass-card rounded-xl p-6 md:p-8">
            {/* Test Button */}
            <div className="text-center mb-8">
              <button
                onClick={startTest}
                className={`px-8 py-4 text-lg font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                  testStatus === 'running' 
                    ? 'bg-red-500 hover:bg-red-600 text-white' 
                    : 'button-secondary'
                }`}
                aria-label={testStatus === 'running' ? 'Zastavit test rychlosti' : 'Spustit test rychlosti internetu'}
              >
                {testStatus === 'running' ? 'Zastavit test' : testStatus === 'complete' ? 'Spustit znovu' : 'Spustit test rychlosti'}
              </button>
            </div>

            {/* Progress Component */}
            <SpeedTestProgress 
              testStatus={testStatus}
              testPhase={testPhase}
              progress={progress}
              currentSpeed={currentSpeed}
            />

            {/* Results Component */}
            <SpeedTestResults 
              results={results}
              chartData={chartData}
              testStatus={testStatus}
            />

            {/* CTA and Save Results Buttons */}
            {testStatus === 'complete' && !showSaveForm && (
              <div className="text-center mt-8 space-y-4">
                <button
                  onClick={() => {
                    const element = document.getElementById('lead-form');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="
                    bg-green-500 hover:bg-green-600 text-white
                    px-6 py-3 rounded-lg font-medium mr-4
                    transition-all duration-300
                    focus:outline-none focus:ring-2 focus:ring-green-500/30
                  "
                >
                  Najít lepší internet na tuto rychlost
                </button>
                <button
                  onClick={() => setShowSaveForm(true)}
                  className="button-secondary"
                >
                  Uložit výsledky
                </button>
              </div>
            )}

            {/* Save Results Form */}
            {showSaveForm && (
              <div className="mt-8 p-6 bg-white border border-gray-200 rounded-lg">
                <h4 className="font-semibold mb-4">Uložit výsledky testu</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                    <input
                      type="email"
                      value={saveFormData.email}
                      onChange={(e) => setSaveFormData(prev => ({ ...prev, email: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="vas@email.cz"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Lokalita</label>
                    <input
                      type="text"
                      value={saveFormData.location}
                      onChange={(e) => setSaveFormData(prev => ({ ...prev, location: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Praha, Brno..."
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Poznámky</label>
                  <textarea
                    value={saveFormData.notes}
                    onChange={(e) => setSaveFormData(prev => ({ ...prev, notes: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    rows={3}
                    placeholder="Dodatečné informace o testu nebo problémy s připojením..."
                  />
                </div>
                <div className="flex gap-3 mt-4">
                  <button
                    onClick={handleSaveResults}
                    disabled={isSaving}
                    className="flex-1 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50"
                  >
                    {isSaving ? 'Ukládá se...' : 'Uložit a odeslat email'}
                  </button>
                  <button
                    onClick={() => setShowSaveForm(false)}
                    className="px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50"
                  >
                    Zrušit
                  </button>
                </div>
              </div>
            )}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default SpeedTest;