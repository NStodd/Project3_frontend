import { useLoaderData } from "react-router-dom"

function Show(props) {
    const recipe = useLoaderData()

    return (
        <div className="show-page">
            <img src={recipe.image} alt={recipe.name} />
            <h1>{recipe.name}</h1>
            <h2>{recipe.ingredients}</h2>
            <h2>{recipe.directions}</h2>
            <button onClick="window.location = 'http://www.google.com'">Edit Recipe</button>
            <button onClick="window.location = 'http://www.google.com'">Delete Recipe</button>
        </div>
    )
}

export default Show
