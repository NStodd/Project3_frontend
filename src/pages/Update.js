import { Form, useLoaderData } from "react-router-dom"

function Update(props) {
    const recipe = useLoaderData()

    return (
        <div className="update-page">
            <h2>Update {recipe.name}</h2>
            
            <Form action={`/update/${recipe._id}`} method="post">
                <h4>Name:</h4>
                <input type="input" name="name" defaultValue={recipe.name} /><br/>
                <h4>Image:</h4>
                <input type="input" name="image" defaultValue={recipe.image} /><br/>
                <h4>Ingredients:</h4>
                <input type="input" name="ingredients" defaultValue={recipe.ingredients} /><br/>
                <h4>Directions:</h4>
                <input type="directions" name="directions" defaultValue={recipe.directions} /><br/>
                <input type="submit" value="Update Recipe" />
            </Form>
        </div>
    )
}

export default Update