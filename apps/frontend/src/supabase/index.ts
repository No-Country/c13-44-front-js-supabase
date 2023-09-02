
import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const url = import.meta.env.VITE_SUPABASE_URL??'' //Que si no existe simplemente dejalo vacio
const key = import.meta.env.VITE_SUPABASE_KEY??''
const supabase = createClient(url, key)

export {
    supabase as supabaseClient,
}