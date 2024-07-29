import { View, Text, Alert, ScrollView } from "react-native";
import { Ingredient } from "@/components/ingredient";
import { Selected } from "@/components/selected";
import { Loading } from "@/components/loading";
import { useState, useEffect } from "react";
import { services } from "@/services";
import { router } from "expo-router";
import { styles } from "./styles";

export default function Index() { 
    const [isLoading, setIsLoading] = useState(true) // Carregamento
    const [selected, setSelected] = useState<string[]>([]) // Armazena os ingredientes selecionados e ingredientes disponíveis
    const [ingredients, setIngredients] = useState<IngredientResponse[]>([])

    function handToggleSelected(value: string){ // Quando um ingrediente é marcado ou desmarcado
        if(selected.includes(value)) {
            return setSelected((state) => state.filter((item) => item !== value))
        }

        setSelected((state) => [...state, value])
        console.log(selected)
    }

    function handClearSelected(){ // Chamada quando o usuário deseja limpar todos os ingredientes selecionados
        Alert.alert("Limpar", "Deseja limpar tudo?", [
            {text: "Não", style: "cancel"},
            {text: "Sim", onPress: () => setSelected([])},
        ])
    }

    function handleSearch() { // Quando o usuário deseja buscar receitas nos ingredientes selecionados
        router.navigate("/recipes/" + selected)
    }

    useEffect(() => { // Quando a lista de ingredientes disponíveis quando o componente é montado
        services.ingredients
            .findAll()
            .then(setIngredients)
            .finally(() => setIsLoading(false))
    }, [])

    if (isLoading) {
        return <Loading />
      }
    
    return (
        <View style={styles.container}>

            <Text style={styles.title}>Escolha {"\n"}
            <Text style={styles.subtitle}>os Produtos</Text>
            </Text>
            
            <Text style={styles.message}>
                E descubra receitas com base nos insumos que você possui!
            </Text>

            <ScrollView // Rolado verticalmente
                contentContainerStyle={styles.ingredients}
                showsVerticalScrollIndicator={false}>
                
                {ingredients.map((item) => ( // Ingredientes
                    <Ingredient
                    key={item.id}
                    name={item.name}
                    image={`${services.storage.imagePath}/${item.image}`}
                    selected={selected.includes(item.id)}
                    onPress={() => handToggleSelected(item.id)}
                />
            ))}
            </ScrollView>

            { selected.length > 0 && ( //  Se existir algum item na lista de seleção, mostrar botões

            <Selected // Botão
            quantity={selected.length}
            onClear={handClearSelected}
            onSearch={handleSearch}
            />

            )}

        </View>
    )
}