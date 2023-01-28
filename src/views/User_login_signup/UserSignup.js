import { Link, Form} from "react-router-dom"

function User_Signup(props) {

    return (
        <div className="user_signup_page">
            <h1>React Recipe Cookbook Signup</h1>
            <br></br>
            <body class="usersignup_container">
            <Form action="/signup" method="post">
                <fieldset>
                        <label>
                            UserName: <input className="signup_username" type="text" required></input>
                        </label><br></br>
                        <label>
                            Email: <input className="signup_email" type="text" required></input>
                        </label><br></br>
                        <label>
                            Password: <input className="signup_password" type="password" required></input>
                        </label><br></br>
                        <label>
                            Confirm Password: <input className="signup_password" type="password" required></input>
                        </label>
                </fieldset>
                <button>
                    <input type="submit" className="signup_button" defaultValue="Log In" />
                    <a href="/login" className="back_to_user_login"></a>
                </button>
            </Form>
            <button><a href="/login" className="back_to_user_login">Back to Login Page</a></button>
            </body>
        </div>
    )
}

export default User_Signup