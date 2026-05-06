import React from 'react';

interface SpeedTestProgressProps {
  testStatus: 'idle' | 'running' | 'complete';
  testPhase: 'ping' | 'warmup' | 'download' | 'upload' | 'consistency' | 'complete';
  progress: number;
  currentSpeed: number;
}

const SpeedTestProgress: React.FC<SpeedTestProgressProps> = React.memo(({
  testStatus,
  testPhase,
  progress,
  currentSpeed
}) => {
  const getPhaseText = () => {
    switch (testPhase) {
      case 'ping': return 'Měření odezvy a packet loss...';
      case 'warmup': return 'Zahřívá se TCP spojení malými soubory...';
      case 'download': return 'Paralelní test stahování...';
      case 'upload': return 'Paralelní test nahrávání...';
      case 'consistency': return 'Test konzistence připojení...';
      default: return 'Dokončeno';
    }
  };

  if (testStatus !== 'running') return null;

  return (
    <div className="space-y-4">
      {/* Progress Bar */}
      <div className="w-full bg-gray-200 rounded-full h-3">
        <div 
          className="bg-gradient-to-r from-green-500 to-green-600 h-3 rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
      
      {/* Phase Text */}
      <div className="text-center">
        <p className="text-gray-700 font-medium">{getPhaseText()}</p>
        <p className="text-sm text-gray-500">{progress.toFixed(0)}% dokončeno</p>
        
        {/* Current Speed Display */}
        {testPhase === 'download' && currentSpeed > 0 && (
          <p className="text-lg font-bold text-green-600 mt-2">
            {currentSpeed.toFixed(1)} Mb/s
          </p>
        )}
      </div>
    </div>
  );
});

SpeedTestProgress.displayName = 'SpeedTestProgress';
export default SpeedTestProgress;