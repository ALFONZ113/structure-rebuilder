import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ArrowRight, AlertTriangle, CheckCircle, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SpeedResults, ChartData } from './SpeedTestCore';
import { memo } from 'react';

interface SpeedTestResultsProps {
  results: SpeedResults;
  chartData: ChartData[];
  testStatus: 'idle' | 'running' | 'complete';
}

const SpeedTestResults = memo(({
  results,
  chartData,
  testStatus
}: SpeedTestResultsProps) => {
  const getSpeedClass = (speed: number) => {
    if (speed > 100) return 'text-green-500';
    if (speed > 50) return 'text-primary';
    if (speed > 20) return 'text-amber-500';
    return 'text-red-500';
  };

  const getPingClass = (ping: number) => {
    if (ping < 10) return 'text-green-500';
    if (ping < 20) return 'text-primary';
    if (ping < 30) return 'text-amber-500';
    return 'text-red-500';
  };

  const getSpeedRating = (down: number, up: number, ping: number, consistency: number) => {
    const score = (down * 0.4) + (up * 0.3) - (ping * 0.1) + (consistency * 0.2);
    if (score > 120) return { label: 'Vynikající', icon: CheckCircle, color: 'text-green-500' };
    if (score > 80) return { label: 'Velmi dobré', icon: CheckCircle, color: 'text-primary' };
    if (score > 40) return { label: 'Dobré', icon: TrendingUp, color: 'text-amber-500' };
    if (score > 20) return { label: 'Průměrné', icon: AlertTriangle, color: 'text-amber-500' };
    return { label: 'Pomalé', icon: AlertTriangle, color: 'text-red-500' };
  };

  const getRecommendation = () => {
    const { download, upload, ping } = results;
    if (download > 100 && upload > 50 && ping < 20) {
      return { 
        text: 'Vaše připojení je vynikající! Přesto můžete ušetřit změnou poskytovatele.',
        showCta: true,
        ctaText: 'Porovnat ceny'
      };
    }
    if (download > 50 && upload > 25 && ping < 30) {
      return { 
        text: 'Dobré připojení, ale možná platíte víc než musíte. Porovnejte nabídky.',
        showCta: true,
        ctaText: 'Najít levnější'
      };
    }
    if (download > 25 && upload > 10) {
      return { 
        text: 'Vaše připojení je průměrné. Můžeme vám najít rychlejší za stejnou cenu!',
        showCta: true,
        ctaText: 'Získat rychlejší internet'
      };
    }
    return { 
      text: 'Vaše připojení je pomalé. Najdeme vám lepší nabídku - zdarma!',
      showCta: true,
      ctaText: 'Zlepšit připojení'
    };
  };

  const handleCtaClick = () => {
    const element = document.getElementById('lead-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (testStatus !== 'complete') return null;

  const rating = getSpeedRating(results.download, results.upload, results.ping, results.consistency);
  const recommendation = getRecommendation();
  const RatingIcon = rating.icon;

  return (
    <div className="space-y-6">
      {/* Results Grid */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        <div className="text-center p-4 bg-card rounded-lg border border-border">
          <div className={`text-2xl md:text-3xl font-bold ${getSpeedClass(results.download)}`}>
            {results.download.toFixed(1)}
          </div>
          <div className="text-xs md:text-sm text-muted-foreground mt-1">Mb/s stahování</div>
        </div>
        
        <div className="text-center p-4 bg-card rounded-lg border border-border">
          <div className={`text-2xl md:text-3xl font-bold ${getSpeedClass(results.upload)}`}>
            {results.upload.toFixed(1)}
          </div>
          <div className="text-xs md:text-sm text-muted-foreground mt-1">Mb/s nahrávání</div>
        </div>
        
        <div className="text-center p-4 bg-card rounded-lg border border-border">
          <div className={`text-2xl md:text-3xl font-bold ${getPingClass(results.ping)}`}>
            {results.ping.toFixed(0)}
          </div>
          <div className="text-xs md:text-sm text-muted-foreground mt-1">ms odezva</div>
        </div>
        
        <div className="text-center p-4 bg-card rounded-lg border border-border">
          <div className="text-2xl md:text-3xl font-bold text-primary">
            {results.consistency.toFixed(0)}%
          </div>
          <div className="text-xs md:text-sm text-muted-foreground mt-1">konzistence</div>
        </div>
        
        <div className="text-center p-4 bg-card rounded-lg border border-border col-span-2 md:col-span-1">
          <div className={`flex items-center justify-center gap-2 ${rating.color}`}>
            <RatingIcon className="w-5 h-5" />
            <span className="text-lg md:text-xl font-bold">{rating.label}</span>
          </div>
          <div className="text-xs md:text-sm text-muted-foreground mt-1">hodnocení</div>
        </div>
      </div>

      {/* Chart */}
      {chartData.length > 0 && (
        <div className="bg-card p-4 md:p-6 rounded-lg border border-border">
          <h3 className="text-lg font-semibold mb-4 text-foreground">Průběh testu rychlosti</h3>
          <div className="h-48 md:h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis 
                  dataKey="time" 
                  tickFormatter={(value) => `${value.toFixed(1)}s`}
                  stroke="hsl(var(--muted-foreground))"
                  fontSize={12}
                />
                <YAxis 
                  tickFormatter={(value) => `${value.toFixed(0)}`} 
                  stroke="hsl(var(--muted-foreground))"
                  fontSize={12}
                />
                <Tooltip 
                  formatter={(value: number) => [`${value.toFixed(1)} Mb/s`, 'Rychlost']}
                  labelFormatter={(value) => `Čas: ${value.toFixed(1)}s`}
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--card))', 
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px'
                  }}
                />
                <Line 
                  type="monotone" 
                  dataKey="speed" 
                  stroke="hsl(var(--primary))" 
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}

      {/* CTA Recommendation Box */}
      <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-xl p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-1">
              {results.download < 50 ? '💡 Tip pro vás' : '🎯 Doporučení'}
            </h3>
            <p className="text-muted-foreground">{recommendation.text}</p>
          </div>
          {recommendation.showCta && (
            <Button 
              onClick={handleCtaClick}
              className="btn-primary whitespace-nowrap group"
              size="lg"
            >
              <span className="flex items-center gap-2">
                {recommendation.ctaText}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
});

SpeedTestResults.displayName = 'SpeedTestResults';
export default SpeedTestResults;