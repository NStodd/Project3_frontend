import { Form, Link, useLoaderData } from "react-router-dom"

function Create(props) {
    const recipe = useLoaderData()

    return (
        <div className="create-page">
            <h2>Create New Recipe</h2>
            <Form action="/create" method="post">
                <input type="input" name="name" defaultValue={recipe.name} />
                <input type="input" name="image" defaultValue={recipe.image} />
                <input type="input" name="ingredients" defaultValue={recipe.ingredients} />
                <input type="directions" name="directions" defaultValue={recipe.directions} />
                <input type="submit" value="Create Recipe" />
            </Form>
        </div>
    )
}

export default Create