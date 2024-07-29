import { supabase } from "./supabase"

async function findByIds(ids: string[]) { // Buscar ingredientes por IDs
  const { data } = await supabase // Aguarda resposta de solicitação
    .from("ingredients") // Consulta
    .select() // Tudo
    .in("id", ids) //  Filtrar
    .order("name") // Ordenar ingredientes por nome
    .returns<IngredientResponse[]>() // Retornar ingredientes como tipo de resposta

  return data ?? [] // Retornar ingredientes ou array vazio
}

async function findByRecipeId(id: string) {
  const { data } = await supabase
    .from("recipes_ingredients")
    .select("ingredients (id, name, image)")
    .eq("recipe_id", id)
    .returns<{ ingredients: IngredientResponse }[]>()

  // Se houver dados, mapeia e retorna apenas a lista de ingredientes
  return data ? data.map((item) => item.ingredients) : []
}

async function findAll() {
  const { data } = await supabase
    .from("ingredients")
    .select()
    .order("name")
    .returns<IngredientResponse[]>() // Retorna resultados como um array de objetos


  return data ?? []
}

// Exporta as funções para utilização em outros arquivos
export { findAll, findByIds, findByRecipeId }