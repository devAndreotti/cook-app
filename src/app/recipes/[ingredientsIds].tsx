import { router, useLocalSearchParams } from "expo-router"
import { Ingredients } from "@/components/ingredients"
import { View, Text, FlatList } from "react-native"
import { MaterialIcons } from "@expo/vector-icons"
import { Loading } from "@/components/loading"
import { Recipe } from "@/components/recipe"
import { useState, useEffect } from "react"
import { services } from "@/services"
import { styles } from "./styles"

export default function Recipes() {
  const [isLoading, setIsLoading] = useState(true)
  const [ingredients, setIngredients] = useState<IngredientResponse[]>([])
  const [recipes, setRecipes] = useState<RecipeResponse[]>([])
  
  const params = useLocalSearchParams<{ ingredientsIds: string}>() // Obtém os IDs dos ingredientes dos parâmetros de busca locais
  const ingredientsIds = params.ingredientsIds.split(",") // Separa os IDs dos ingredientes em uma matriz

  useEffect(() => {
    services.recipes
      .findByIngredientsIds(ingredientsIds)
      .then((response) => setRecipes(response))
      .finally(() => setIsLoading(false))
  },[])

  useEffect(() => {
    services.ingredients
      .findByIds(ingredientsIds)
      .then((response) => setIngredients(response))
      .finally(() => setIsLoading(false))
  },[])

  if (isLoading) {
    return <Loading />
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <MaterialIcons
          name="arrow-back"
          size={32}
          onPress={() => router.back()}
        />

        <Text style={styles.title}>Ingredientes:</Text>
      </View>

      <Ingredients ingredients={ingredients}/>
   
      <FlatList
          data={recipes}
          keyExtractor={item => item.id}
          renderItem={({item}) => <Recipe recipe={item} 
          onPressOut={() => router.navigate("/recipe/" + item.id)} />}
          style={styles.recipes}
          contentContainerStyle={styles.recipesContent}
          showsVerticalScrollIndicator={true}
          columnWrapperStyle={{ gap: 16}}
          numColumns={2}
        />

    </View>
  )
}