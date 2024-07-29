import Animated, { SlideInDown, BounceOutDown } from "react-native-reanimated"
import { MaterialIcons } from "@expo/vector-icons";
import { View, Text } from "react-native";
import { Button } from "../button";
import { styles } from "./styles";
import { theme } from "@/theme";


type Props = {
    quantity: number // Quantidade de ingredientes selecionados
    onClear: () => void // Função para limpar ingredientes selecionados
    onSearch: () => void // Função para buscar receitas usando ingredientes selecionados
}

export function Selected({ quantity, onClear, onSearch }: Props) {
    // Verifica se há apenas um ingrediente selecionado
    const label = quantity === 1 ? "ingrediente selecionado" : "ingredientes selecionados";
  
    return (
      <Animated.View style={styles.container} entering={SlideInDown.duration(500)} exiting={BounceOutDown}>
        <View style={styles.header}>
          {/* Exibe o texto com base na quantidade de ingredientes selecionados */}
          <Text style={styles.label}>{quantity} {label}</Text>
          <MaterialIcons
            name="close"
            size={24}
            onPress={onClear}
            color={theme.colors.gray_400}
          />
        </View>
        <Button title="Encontrar" onPress={onSearch} />
      </Animated.View>
    );
  }
  