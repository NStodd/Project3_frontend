import { useLoaderData } from "react-router-dom"
import { Card } from "react-bootstrap"


function Index(props) {
    const recipe = useLoaderData()

    return <div className="cardDisplay">
        <div id="search_recipe_bar"><label>Search Recipe: <input className="search_recipe_txtbox" type="text"></input></label></div>
        {recipe.map(recipe => (
            <Card className="recipe">
                <Card.Header as="h5">{recipe.name}</Card.Header>
                <a href={`/${recipe._id}`}>
                    <Card.Img variant="top" src={recipe.image} alt={recipe.name}></Card.Img>
                </a>
            </Card>
        ))}
    </div>
}
export default Index