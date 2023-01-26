import { useLoaderData } from "react-router-dom"

// export function ReplaceWithBr(props) {
//     const recipe = useLoaderData()
//     return recipe.ingredients.replace(/,/g, "<br />")
//    }


export function CreateArray(props) {
    const recipe = useLoaderData()
    const ingredient = recipe.ingredients.split(", ")
    return ingredient
}


