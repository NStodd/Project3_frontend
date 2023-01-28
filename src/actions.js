import {redirect} from "react-router-dom"

// this is the render site for the hosted backend
const URL = "http://localhost:3565"

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
    // set up new version of recipe
    const updatedRecipe = {
        name: formData.get("name"),
        image: formData.get("image"),
        ingredients: formData.get("ingredients"),
        direcitons: formData.get("directions"),
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

// createUser action
export const createUser = async ({request}) => {
        // need form data
        const formData = await request.formData()
        
        //set up the new recipe according to the recipe schema
        const newUser = {
            username: formData.get("username"),
            password: formData.get("password"),
            email: formData.get("email")
        }

        // send the new recipe over
        await fetch(URL + "/auth_recipe/recipe_user_signup", {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newUser),
        })
        // redirect to index
        return redirect("/")
}

// loginUser action
export const loginUser = async ({}) => {
    // form data
    const formData = await request.formData()

    const User = {
        username: formData.get("username"),
        password: formData.get("password"),
    }

    try{
        const {username, password} = request.body
        const user = await User.findOne({username})
        if(user){
            const match = await bcryptjs.compare(password, user.password)
            if(match){
                const token = await jwt.sign({username}, SECRET);
                //response.status(200).json({token{})
                response.json(token)
                console.log(request.body, token)
            }
            else{
                //response.status(400).json({error: "Incorrect Password. Please Try Again....."})
                response.json({error: "Incorrect Password. Please Try Again....."})
            }
        }
        else{
            //response.status(400).json({error: "Incorrect Username. Please Try Again......."})
            response.json({user: "Incorrect Username. Please Try Again......."})
        }
    }
        catch(error){
            //response.status(400).json({error: "Incorrect Username. Please Try Again......."})
            response.json({error: "Incorrect Username. Please Try Again......."})
        }


    // needs to send formdata un/pw to '/auth_recipe/recipe_user_login'

    // give access if user is real and password matches
}