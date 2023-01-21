import { useLoaderData } from "react-router-dom"

function Index(props) {
    const recipe = useLoaderData

    return (
        <div className="index-page">
            <h2>Index Page</h2>
            <h2>My Recipes</h2>
        </div>
    )
}
export default Index