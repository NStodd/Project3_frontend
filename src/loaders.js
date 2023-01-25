const URL = "https://project3-backend-tay4.onrender.com/"

export const recipesLoader = async () => {
    const response = await fetch(URL + "/recipes")
    const recipes = await response.json()
    return recipes;
}

export const recipeLoader = async ({ params }) => {
    const response = await fetch(URL + "/recipes/" + params.id)
    const recipe = await response.json()
    return recipe;
}