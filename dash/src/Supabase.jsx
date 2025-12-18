import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://clxaszvnprpdsicbrkte.supabase.co'
const supabaseKey = 'sb_publishable_HZxdc-fmpFky7XySCtr6rg_tC38AFHG'
export const supabase = createClient(supabaseUrl, supabaseKey)
