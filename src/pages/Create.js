import { Form } from "react-router-dom"

function Create(props) {

    return (
        <div className="create-page">
            <h2>Create New Recipe</h2><br/>
            <Form action="/create" method="post">
                <h4>Name:</h4>
                    <textarea type="input" name="name" placeholder="Name" /><br/>
                <h4>Image:</h4>
                    <textarea type="input" name="image" placeholder="Image Link"/><br/>
                <h4>Ingredients:</h4>
                    <textarea type="input" name="ingredients" placeholder="Ingredients"/><br/>
                <h4>Directions:</h4>
                    <textarea type="directions" name="directions" placeholder="Directions"/><br/>
                <input type="submit" value="Create Recipe" />
            </Form>
        </div>
    )
}

export default Create