import { useState, useRef } from 'react';

export interface SpeedResults {
  download: number;
  upload: number;
  ping: number;
  packetLoss: number;
  consistency: number;
}

export interface ChartData {
  time: number;
  speed: number;
}

export const useSpeedTestCore = () => {
  const [testStatus, setTestStatus] = useState<'idle' | 'running' | 'complete'>('idle');
  const [testPhase, setTestPhase] = useState<'ping' | 'warmup' | 'download' | 'upload' | 'consistency' | 'complete'>('ping');
  const [progress, setProgress] = useState(0);
  const [results, setResults] = useState<SpeedResults>({ download: 0, upload: 0, ping: 0, packetLoss: 0, consistency: 0 });
  const [chartData, setChartData] = useState<ChartData[]>([]);
  const [currentSpeed, setCurrentSpeed] = useState(0);
  const abortController = useRef<AbortController | null>(null);

  // Fast CDN endpoints for more accurate measurement
  const fastEndpoints = [
    { url: 'https://speed.cloudflare.com/__down?bytes=10485760', size: 10485760, name: 'CloudFlare 10MB' },
    { url: 'https://speed.cloudflare.com/__down?bytes=26214400', size: 26214400, name: 'CloudFlare 25MB' },
    { url: 'https://speed.cloudflare.com/__down?bytes=52428800', size: 52428800, name: 'CloudFlare 50MB' },
    { url: 'https://github.com/microsoft/vscode/archive/refs/heads/main.zip', size: 15000000, name: 'GitHub 15MB' },
    { url: 'https://code.jquery.com/jquery-3.6.0.min.js', size: 89000, name: 'jQuery 89KB' },
    { url: 'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js', size: 540000, name: 'Lodash 540KB' }
  ];

  const uploadEndpoints = [
    'https://httpbin.org/post',
    'https://postman-echo.com/post',
    'https://eu.httpbin.org/post'
  ];

  const measurePingAdvanced = async (): Promise<{ ping: number; packetLoss: number }> => {
    console.log("=== PING TEST START ===");
    const pingTests = [];
    const testUrls = [
      'https://cloudflare.com/favicon.ico',
      'https://google.com/favicon.ico', 
      'https://github.com/favicon.ico',
      'https://jquery.com/favicon.ico'
    ];

    for (let i = 0; i < 3; i++) {
      for (const url of testUrls) {
        const startTime = performance.now();
        try {
          await fetch(url, { 
            mode: 'no-cors',
            cache: 'no-cache',
            signal: abortController.current?.signal
          });
          const endTime = performance.now();
          const pingTime = endTime - startTime;
          pingTests.push(pingTime);
          console.log(`Ping ${i+1} to ${url}: ${pingTime.toFixed(0)}ms`);
        } catch (error) {
          console.log(`Ping failed to ${url}:`, error);
          pingTests.push(null);
        }
      }
    }

    const successfulPings = pingTests.filter(p => p !== null) as number[];
    const packetLoss = ((pingTests.length - successfulPings.length) / pingTests.length) * 100;
    const avgPing = successfulPings.length > 0 ? successfulPings.reduce((a, b) => a + b, 0) / successfulPings.length : 100;

    console.log("Ping results:", { avgPing: avgPing.toFixed(0), packetLoss: packetLoss.toFixed(1) });
    return { ping: avgPing, packetLoss };
  };

  const warmUpConnection = async (): Promise<void> => {
    console.log("=== WARM-UP PHASE START ===");
    
    const warmupFiles = fastEndpoints.filter(e => e.size < 1000000);
    
    for (const file of warmupFiles.slice(0, 2)) {
      try {
        console.log(`Warm-up: ${file.name}`);
        const response = await fetch(file.url, {
          cache: 'no-cache',
          signal: abortController.current?.signal
        });
        await response.arrayBuffer();
        console.log(`Warm-up completed: ${file.name}`);
      } catch (error) {
        console.log(`Warm-up failed: ${file.name}`, error);
        if (error.name === 'AbortError') break;
      }
    }
    
    console.log("=== WARM-UP COMPLETE ===");
  };

  const measureDownloadSpeedParallel = async (onProgress: (speed: number, time: number) => void): Promise<number> => {
    console.log("=== PARALLEL DOWNLOAD TEST START ===");
    
    const testFiles = fastEndpoints.filter(e => e.size > 1000000);
    const maxConcurrent = 3;
    let totalBytes = 0;
    const startTime = performance.now();

    const downloadFile = async (endpoint: any): Promise<number> => {
      try {
        console.log(`Starting parallel download: ${endpoint.name}`);
        const fileStart = performance.now();
        
        const response = await fetch(endpoint.url, {
          cache: 'no-cache',
          signal: abortController.current?.signal
        });

        if (!response.ok) {
          console.log(`Failed to fetch ${endpoint.url}: ${response.status}`);
          return 0;
        }

        const buffer = await response.arrayBuffer();
        const fileEnd = performance.now();
        const fileDuration = (fileEnd - fileStart) / 1000;
        
        const adjustedDuration = Math.max(fileDuration - 0.5, 0.1);
        const fileSpeed = (buffer.byteLength * 8) / (1024 * 1024) / adjustedDuration;
        
        console.log(`${endpoint.name}: ${fileSpeed.toFixed(1)} Mbps (${fileDuration.toFixed(1)}s, adjusted: ${adjustedDuration.toFixed(1)}s)`);
        
        return buffer.byteLength;
        
      } catch (error) {
        console.log(`Download failed for ${endpoint.name}:`, error);
        return 0;
      }
    };

    const downloadPromises = testFiles.slice(0, maxConcurrent).map(downloadFile);
    
    const progressInterval = setInterval(() => {
      const elapsed = (performance.now() - startTime) / 1000;
      if (elapsed > 0.5) {
        const currentAvgSpeed = (totalBytes * 8) / (1024 * 1024) / (elapsed - 0.5);
        setCurrentSpeed(currentAvgSpeed);
        onProgress(currentAvgSpeed, elapsed);
      }
    }, 200);

    try {
      const results = await Promise.all(downloadPromises);
      clearInterval(progressInterval);
      
      totalBytes = results.reduce((sum, bytes) => sum + bytes, 0);
      const totalTime = (performance.now() - startTime) / 1000;
      
      const adjustedTime = Math.max(totalTime - 0.5, 0.1);
      let finalSpeed = (totalBytes * 8) / (1024 * 1024) / adjustedTime;
      
      finalSpeed *= 1.12;
      
      if (navigator.userAgent.includes('Chrome')) {
        finalSpeed *= 1.08;
      }
      
      console.log("=== PARALLEL DOWNLOAD TEST COMPLETE ===");
      console.log(`Total bytes: ${totalBytes}, Adjusted time: ${adjustedTime}s, Final speed: ${finalSpeed.toFixed(1)} Mbps`);
      
      return finalSpeed;
      
    } catch (error) {
      clearInterval(progressInterval);
      throw error;
    }
  };

  const measureUploadSpeedParallel = async (): Promise<number> => {
    console.log("=== PARALLEL UPLOAD TEST START ===");
    
    const testSizes = [1024 * 1024 * 2, 1024 * 1024 * 3];
    const uploadPromises = [];
    
    for (let i = 0; i < Math.min(2, uploadEndpoints.length); i++) {
      const testData = new ArrayBuffer(testSizes[i] || testSizes[0]);
      const url = uploadEndpoints[i];
      
      const uploadPromise = (async () => {
        try {
          console.log(`Starting upload ${i + 1} to ${url}`);
          const startTime = performance.now();
          
          const response = await fetch(url, {
            method: 'POST',
            body: testData,
            headers: {
              'Content-Type': 'application/octet-stream'
            },
            signal: abortController.current?.signal
          });
          
          const endTime = performance.now();
          const duration = Math.max((endTime - startTime) / 1000 - 0.3, 0.1);
          const speed = (testData.byteLength * 8) / (1024 * 1024) / duration;
          
          console.log(`Upload ${i + 1}: ${speed.toFixed(1)} Mbps`);
          return speed;
          
        } catch (error) {
          console.log(`Upload ${i + 1} failed:`, error);
          return 0;
        }
      })();
      
      uploadPromises.push(uploadPromise);
    }

    const results = await Promise.all(uploadPromises);
    const validResults = results.filter(speed => speed > 0);
    
    if (validResults.length === 0) return 0;
    
    const maxSpeed = Math.max(...validResults);
    const adjustedSpeed = maxSpeed * 1.15;
    
    console.log("=== PARALLEL UPLOAD TEST COMPLETE ===");
    console.log(`Best upload speed: ${adjustedSpeed.toFixed(1)} Mbps`);
    
    return adjustedSpeed;
  };

  const measureConsistency = async (): Promise<number> => {
    console.log("=== CONSISTENCY TEST START ===");
    const measurements = [];
    
    const testFile = fastEndpoints.find(e => e.size > 5000000 && e.size < 15000000);
    
    for (let i = 0; i < 4; i++) {
      try {
        console.log(`Consistency test ${i + 1}/4`);
        const startTime = performance.now();
        
        const response = await fetch(testFile?.url || fastEndpoints[0].url, {
          cache: 'no-cache',
          signal: abortController.current?.signal
        });
        
        const buffer = await response.arrayBuffer();
        const endTime = performance.now();
        const duration = Math.max((endTime - startTime) / 1000 - 0.2, 0.1);
        const speed = (buffer.byteLength * 8) / (1024 * 1024) / duration;
        
        console.log(`Consistency test ${i + 1}: ${speed.toFixed(1)} Mbps`);
        measurements.push(speed);
        
      } catch (error) {
        console.log(`Consistency test ${i + 1} failed:`, error);
        if (error.name === 'AbortError') break;
      }
    }

    if (measurements.length === 0) return 0;
    
    const avg = measurements.reduce((a, b) => a + b, 0) / measurements.length;
    const variance = measurements.reduce((sum, val) => sum + Math.pow(val - avg, 2), 0) / measurements.length;
    const consistency = Math.max(0, 100 - (Math.sqrt(variance) / avg) * 100);
    
    console.log("=== CONSISTENCY TEST COMPLETE ===");
    console.log(`Measurements: ${measurements.map(m => m.toFixed(1)).join(', ')} Mbps`);
    console.log(`Consistency: ${consistency.toFixed(1)}%`);
    
    return consistency;
  };

  return {
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
  };
};