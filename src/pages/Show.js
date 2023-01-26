import { Link, useLoaderData, Form } from "react-router-dom"
import {CreateArray} from "../function"


function Show(props) {
    const recipe = useLoaderData()

    return (
        <div className="show-page">
            <img src={recipe.image} alt={recipe.name} />
            <h1>{recipe.name}</h1>
            <h2>Ingredients:</h2>
            <div className="break-string">
            {/* <h3 dangerouslySetInnerHTML={{__html: ReplaceWithBr()}} /> */}
            {console.log("in the Show page")}
            {CreateArray().map(ingredient => (
            <div>
                <h3>{ingredient}</h3>
            </div>
        ))}
            </div>
            <h2>Cooking Directions:</h2>
                <p>{recipe.directions}</p>
            <Link to={`/edit/${recipe._id}`}>
                <h2>Edit</h2>
            </Link>
            <Form action={`/delete/${recipe._id}`} method="delete">
                <input type="submit" value={`Delete ${recipe.name}`} />
            </Form>
        </div>
    )
}

export default Show
