import { ActivityIndicator } from "react-native" // Importando o indicador de atividade do React Native
import { styles } from "./styles" // Importando estilos para o componente
import { theme } from "@/theme" // Importando o tema para consistência na estilização

export function Loading() {
  return (
    <ActivityIndicator
      style={styles.container} // Aplicando estilos ao indicador de atividade
      color={theme.colors.green_600} // Definindo a cor do indicador de atividade
    />
  )
}