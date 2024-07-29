import * as recipes from "./recipesService"
import * as ingredients from "./ingredientsService"
import * as preparations from "./preparationsService"

export const services = {
  preparations,
  ingredients,
  recipes,

  storage: {
    imagePath: "https://ynastjdxrqzjcusdqjxu.supabase.co/storage/v1/object/public/ingredients",
  },
}