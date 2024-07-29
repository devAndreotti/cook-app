import { Pressable, PressableProps, Text, Image } from "react-native"; // Importando módulos necessários do React Native
import { styles } from "./styles"; // Importando estilos para o componente

export type IngredientsProps = {
    name: string // Nome do ingrediente
    image: string // URL da imagem do ingrediente
    selected?: boolean // Indica se o ingrediente está selecionado (opcional)
}

export function Ingredient({
    name,
    image,
    selected = false,
    ...rest
}: IngredientsProps & PressableProps){
    return (
        <Pressable style={[styles.container, selected && styles.selected]}
        {...rest}>

        <Image source={{uri: image }} style={styles.image} />
        
        <Text style={styles.title}>{name}</Text>
        </Pressable>
    )
}