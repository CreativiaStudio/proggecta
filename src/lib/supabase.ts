import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://cqbukewguowonuutyqap.supabase.co";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "sb_publishable_7AeexHsTPwO5bNuXT0zl0g_bGbdj4AF";
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

// Client per uso pubblico / client-side (rispetta RLS)
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Client amministrativo per uso server-side (bypassa RLS se service_role è presente, altrimenti fallback anon)
export const supabaseAdmin = createClient(
  supabaseUrl,
  supabaseServiceRoleKey && supabaseServiceRoleKey.length > 0 ? supabaseServiceRoleKey : supabaseAnonKey,
  {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  }
);
