import { StyleSheet } from "react-native"
import { theme } from "@/theme"

export const styles = StyleSheet.create({

  container: { 
    flex: 1
  },

  image: {
    backgroundColor: theme.colors.gray_300,
    width: "100%",
    height: 192,
  },

  body: {
    borderTopStartRadius: theme.borderRadius.lg,
    borderTopEndRadius: theme.borderRadius.lg,
    backgroundColor: theme.colors.white,
    marginTop: -24,
  },

  header: {
    padding: 32,
  },

  content: {
    padding: 32,
  },

  name: {
    fontSize: theme.fonts.size.heading.md,
    fontFamily: theme.fonts.family.bold,
    marginTop: 22,
  },

  preparation: {
    fontSize: theme.fonts.size.heading.sm,
    fontFamily: theme.fonts.family.medium,
    marginBottom: 16,
  },

  time: {
    fontFamily: theme.fonts.family.regular,
    fontSize: theme.fonts.size.body.sm,
    color: theme.colors.gray_400,
  },

})