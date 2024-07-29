import { Redirect, router, useLocalSearchParams } from "expo-router" // Navegação entre telas
import MaterialIcons from "@expo/vector-icons/MaterialIcons"
import { FlatList, Image, Text, View } from "react-native"
import { Ingredients } from "@/components/ingredients"
import { Loading } from "@/components/loading" // Loading
import { useEffect, useState } from "react"
import { Step } from "@/components/step"
import { services } from "@/services"
import { styles } from "./styles"

export default function Recipes() {
  const [isLoading, setIsLoading] = useState(true) // Define estado para controlar o carregamento da página
  const [recipe, setRecipe] = useState<RecipeResponse | null>(null) // Define estado para armazenar os dados da receita
  const [ingredients, setIngredients] = useState<IngredientResponse[]>([]) // Define estado para armazenar os ingredientes da receita
  const [preparations, setPreparations] = useState<PreparationsResponse[]>([]) // Define estado para armazenar as etapas de preparo da receita

  const { id } = useLocalSearchParams<{ id: string }>() // Obtém o ID da receita 

  useEffect(() => {
    services.recipes
      .show(id)
      .then((response) => setRecipe(response)) // Atualiza o estado com os dados da receita
      .finally(() => setIsLoading(false)) // Define isLoading como falso após carregar
  }, [])

  useEffect(() => {
    services.ingredients
      .findByRecipeId(id)
      .then((response) => setIngredients(response))
  }, [])

  useEffect(() => {
    services.preparations
      .findByRecipeId(id)
      .then((response) => setPreparations(response))
  }, [])

  // Se a página estiver carregando, exibe o componente de carregamento
  if (isLoading) {
    return <Loading />
  }

  // Se o ID da receita não estiver presente ou se os dados da receita não estiverem disponíveis, redireciona para a página inicial
  if (!id || !recipe) {
    return <Redirect href="/" />
  }

  return (
    <View style={styles.container}>
      <Image source={{ uri: recipe.image }} style={styles.image} />

      <View style={styles.body}>
        <View style={styles.header}>
          <MaterialIcons
            size={32}
            name="arrow-back"
            onPress={() => router.back()}
          />

          <Text style={styles.name}>{recipe.name}</Text>
          <Text style={styles.time}>{recipe.minutes} minutos de preparo</Text>
        </View>

        <Ingredients ingredients={ingredients} />

        <View style={styles.content}>
          <Text style={styles.preparation}>Modo de preparo:</Text>

          <FlatList
            data={preparations}
            renderItem={({ item }) => (
              <Step step={item.step} description={item.description} />
            )}
            contentContainerStyle={{ gap: 16 }}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    </View>
  )
}