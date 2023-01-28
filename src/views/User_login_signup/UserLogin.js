import { Link, Form} from "react-router-dom"

function User_Login(props) {

    return (
        <div className="user_login_page">
            <h1>React Recipe Cookbook Login</h1>
            <br></br>
            <body class="userlogin_container">
            <Form action="/login" method="post">
                <fieldset>
                        <label>
                            UserName: <input className="login_username" type="text" required></input>
                        </label><br></br>
                        <label>
                            Password: <input className="login_password" type="password" required></input>
                        </label>
                </fieldset>
                <button><input type="submit" className="login_button" defaultValue="Log In" />
                <a href="/" className="home_page"></a></button>
            </Form>
            <button><a href="/signup" className="user_signup">
                Sign Up as New User</a></button>
            </body>
        </div>
    )
}

export default User_Login