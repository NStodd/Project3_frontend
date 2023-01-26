import { Link, useLoaderData } from "react-router-dom"


function Index(props) {
    const recipe = useLoaderData()

    return <div className="cardDisplay">
        {recipe.map(recipe => (
            <div key={recipe._id} className="recipe">
                <Link to={`/${recipe._id}`}>
                    <h1>{recipe.name}</h1>
                </Link>
                <img src={recipe.image} alt={recipe.name} />
            </div>
        ))}
    </div>
}
export default Index