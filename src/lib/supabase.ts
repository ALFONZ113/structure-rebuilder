
import { createClient } from '@supabase/supabase-js';

// Use environment variables for Supabase connection
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

// Check if Supabase credentials are available
const isSupabaseConfigured = supabaseUrl && supabaseAnonKey;

// Create Supabase client or a mock version for simulation mode
export const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl, supabaseAnonKey)
  : createSimulatedClient();

// Function to create a simulated client when credentials aren't available
function createSimulatedClient() {
  console.warn('Running in Supabase simulation mode. Form submissions will be simulated without actual database storage.');
  
  // Create a mock Supabase client that mimics the real client's API
  return {
    from: () => ({
      insert: () => Promise.resolve({ error: null }),
    }),
    functions: {
      invoke: () => Promise.resolve({ error: null }),
    }
  } as any;
}
