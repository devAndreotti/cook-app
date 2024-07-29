import { StyleSheet } from "react-native";
import { theme } from "@/theme"

export const styles = StyleSheet.create({ // Objeto para estilos dos componentes

    container: {
        padding: 24,
        flex: 1, // Espaço total
    },

    title: {
        fontSize: theme.fonts.size.heading.xl,
        fontFamily: theme.fonts.family.bold,
        lineHeight: 44,
        marginTop: 42,
    },

    subtitle: {
        fontFamily: theme.fonts.family.regular,
    },

    message: {
        fontFamily: theme.fonts.family.regular,
        fontSize: theme.fonts.size.body.md,
        color: theme.colors.gray_400,
        marginBottom: 38,
        marginTop: 12,
    },

    ingredients: {
      justifyContent: 'center',
        flexDirection: "row", 
        flexWrap: "wrap", // Outra linha quando não couberem na mesma
        paddingBottom: 200,
        gap: 4,
    },
    
})