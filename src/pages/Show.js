import { Link, useLoaderData, Form } from "react-router-dom"

function Show(props) {
    const recipe = useLoaderData()

    return (
        <div className="show-page">
            <img src={recipe.image} alt={recipe.name} />
            <h1>{recipe.name}</h1>
            <h2>{recipe.ingredients}</h2>
            <h2>{recipe.directions}</h2>
            <Link to={`/update/${recipe._id}}`}>
                <h2>Edit</h2>
            </Link>
            <Form action={`/delete/${recipe._id}`} method="delete">
                <input type="submit" value={`Delete ${recipe.name}`} />
            </Form>
        </div>
    )
}

export default Show
