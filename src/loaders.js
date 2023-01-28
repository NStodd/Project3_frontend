const URL = "http://localhost:3565"

export const recipesLoader = async () => {
    const response = await fetch(URL + "/recipe")
    const recipes = await response.json()
    return recipes;
}

export const recipeLoader = async ({ params }) => {
    const response = await fetch(URL + "/recipe/" + params.id)
    const recipe = await response.json()
    return recipe;
}