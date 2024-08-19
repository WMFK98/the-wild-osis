import { createClient } from '@supabase/supabase-js';
export const supabaseUrl = 'https://hcqrrmfawgcveghchpky.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhjcXJybWZhd2djdmVnaGNocGt5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjM5MTM1NTQsImV4cCI6MjAzOTQ4OTU1NH0.Ej82m6VIzYi-kPs8e9fMkRG00DCAewSd7w2jNLS_Knc';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
