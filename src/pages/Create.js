import { Form } from "react-router-dom"

function Create(props) {

    return (
        <div className="create-page">
            <h2>Create New Recipe</h2>
            <Form action="/create" method="post">
                <input type="input" name="name" placeholder="Name" /><br/>
                <input type="input" name="image" placeholder="Image Link"/>
                <br/>
                <input type="input" name="ingredients" placeholder="Ingredients"/>
                <br/>
                <input type="directions" name="directions" placeholder="Directions"/><br/>
                <input type="submit" value="Create Recipe" />
            </Form>
        </div>
    )
}

export default Create