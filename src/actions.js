import {redirect} from "react-router-dom"

// this is the render site for the hosted backend
const URL = "https://project3-backend-tay4.onrender.com"

// createRecipe action
export const createRecipe = async ({request}) => {
    // need form data
    const formData = await request.formData()
    //set up the new recipe according to the recipe schema
    const newRecipe = {
        name: formData.get("name"),
        image: formData.get("image"),
        ingredients: formData.get("ingredients"),
        directions: formData.get("directions"),
    }
    // send the new recipe over
    await fetch(URL + "/recipe", {
        method: "post",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newRecipe),
    })
    // redirect to index
    return redirect("/")
}

// updateRecipe action
export const updateRecipe = async ({request, params}) => {
    // need form data
    const formData = await request.formData()

    //console logs for debugging
    console.log(formData.get("name"))
    console.log(formData.get("image"))
    console.log(formData.get("ingredients"))
    console.log(formData.get("directions"))

    // set up new version of recipe
    const updatedRecipe = {
        name: formData.get("name"),
        image: formData.get("image"),
        ingredients: formData.get("ingredients"),
        directions: formData.get("directions"),
    }
    // send the udpated version over
    await fetch (URL +"/recipe/" + params.id, {
        method: "put",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedRecipe)
    })
    //redirect to updated recipe's show page
    return redirect(`/${params.id}`)
}

// deleteRecipe action
export const deleteRecipe = async ({params}) => {
    // delete the recipe
    await fetch (URL + "/recipe/" + params.id, {
        method: "delete"
    })
    // redirect to index
    return redirect("/")
}