import { Button, Card } from "react-bootstrap";

function RecipeCard() {
    return (
        <Card style={{}}>
            <Card.Img variant="top" src="img_url" alt="img URL" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    Lorem ipsum etc...
                </Card.Text>
                <Button variant="primary">Button</Button>
            </Card.Body>
        </Card>
    )
}

export default RecipeCard;