import { Link, useLoaderData, Form } from "react-router-dom"
import {CreateArray} from "../function"


function Show(props) {
    const recipe = useLoaderData()

    return (
        <div className="show-page">
            <h1 className="showTitle">{recipe.name}</h1>
            <img className="showImage" src={recipe.image} alt={recipe.name} />
            
            <h1>Ingredients:</h1>
            <div className="break-string">
            {/* <h3 dangerouslySetInnerHTML={{__html: ReplaceWithBr()}} /> */}
            {console.log("in the Show page")}
            {CreateArray().map(ingredient => (
            <ul>
                <li><h4>{ingredient}</h4></li>
            </ul>
        ))}
            </div>
            <h2>Cooking Directions:</h2>
                <p>{recipe.directions}</p>
            <Link to={`/edit/${recipe._id}`}>
                <button>Edit</button>
            </Link>
            <Form action={`/delete/${recipe._id}`} method="delete">
                <input type="submit" value={`Delete ${recipe.name}`} />
            </Form>
        </div>
    )
}

export default Show
