import { StyleSheet } from "react-native"
import { theme } from "@/theme"

export const styles = StyleSheet.create({

  container: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 22,
  },

  step: {
    width: 16,
    textAlign: "center",
    fontSize: theme.fonts.size.body.sm,
    fontFamily: theme.fonts.family.bold,
    color: theme.colors.black,
  },

  description: {
    flex: 1,
    fontSize: theme.fonts.size.body.sm,
    fontFamily: theme.fonts.family.regular,
    color: theme.colors.gray_400,
  },
  
})