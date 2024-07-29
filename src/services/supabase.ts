import "react-native-url-polyfill"
import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL ?? "" // Não reclama da tipagem
const supabaseKey = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY ?? ""

// Criando cliente Supabase com a URL e chave fornecidas
export const supabase = createClient(supabaseUrl, supabaseKey)