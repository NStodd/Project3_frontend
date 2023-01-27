import { useLoaderData, Link } from "react-router-dom"
import { Card } from "react-bootstrap"


function Index(props) {
    const recipe = useLoaderData()

    return <div className="cardDisplay">
        {recipe.map(recipe => (
            <Card className="recipe">
                <Card.Header as="h5">{recipe.name}</Card.Header>
                <Link to={`/${recipe._id}`}>
                    <Card.Img variant="top" src={recipe.image} alt={recipe.name}></Card.Img>
                </Link>
            </Card>
        ))}
    </div>
}
export default Index