import { Suspense } from 'react';
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import { routes } from './routes/routes';
import AIChatWidget from './components/AIChatWidget';

const queryClient = new QueryClient();

function AppRoutes() {
  return (
    <Routes>
      {routes.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <TooltipProvider>
          <Toaster />
          <AIChatWidget />
          <BrowserRouter>
            <div className="min-h-screen bg-gradient-to-br from-background via-background to-background/30 dark:from-background dark:via-background dark:to-background/30">
              <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Načítání...</div>}>
                <AppRoutes />
              </Suspense>
            </div>
          </BrowserRouter>
        </TooltipProvider>
      </HelmetProvider>
    </QueryClientProvider>
  );
}

export default App;
