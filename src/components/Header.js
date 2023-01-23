import { Link } from "react-router-dom"

function Header(props) {
    return (
        <nav className="nav">
            <Link to="/">
                <div>Cookbook App</div>
            </Link>
            <button onClick="window.location = 'http://www.google.com'">Home</button>
            <button onClick="window.location = 'http://www.google.com'">Create</button>
        </nav>
    )
}
export default Header