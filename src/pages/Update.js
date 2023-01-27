import { Form, useLoaderData } from "react-router-dom"

function Update(props) {
    const recipe = useLoaderData()

    return (
        <div className="form-page">
            <h2>Update {recipe.name}</h2>
            
            <Form action={`/update/${recipe._id}`} method="post">
                <h4>Name:</h4>
                <textarea type="input" name="name" defaultValue={recipe.name} /><br/>
                <h4>Image:</h4>
                <textarea type="input" name="image" defaultValue={recipe.image} /><br/>
                <h4>Ingredients:</h4>
                <textarea type="input" name="ingredients" defaultValue={recipe.ingredients} /><br/>
                <h4>Directions:</h4>
                <textarea type="directions" name="directions" defaultValue={recipe.directions} /><br/>
                <input type="submit" value="Update Recipe" />
            </Form>
        </div>
    )
}

export default Update