import { Link } from "react-router-dom"

function Header(props) {
  return (
    <nav className="nav">
      <Link to="/">
        <h1>Home</h1>
      </Link>
      <Link to='/new'>
        <div>Create Recipe</div>
      </Link>
    </nav>
  )
}

export default Header