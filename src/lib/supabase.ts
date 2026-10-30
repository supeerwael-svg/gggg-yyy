import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://xpmbrohtyhllhcczbmfp.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhwbWJyb2h0eWhsbGhjY3pibWZwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTM0MDMzNzk0LCJleHAiOjIwNDE2MjEwODk1NTQzNH0.2bYqru2hKsfHvzgA_KoQ4z5TTD_DaDNboduZV27FWLc';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true }
});