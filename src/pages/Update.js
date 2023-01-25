import { Form, useLoaderData } from "react-router-dom"

function Update(props) {
    const recipe = useLoaderData()

    return (
        <div className="update-page">
            <h2>Update {recipe.name}</h2>
            
            <Form action={`/update/${recipe._id}`} method="post">
                <input type="input" name="name" defaultValue={recipe.name} /><br/>
                <input type="input" name="image" defaultValue={recipe.image} /><br/>
                <input type="input" name="ingredients" defaultValue={recipe.ingredients} /><br/>
                <input type="directions" name="directions" defaultValue={recipe.directions} /><br/>
                <input type="submit" value="Update Recipe" />
            </Form>
        </div>
    )
}

export default Update