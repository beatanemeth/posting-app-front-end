import { Fragment, useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Card from "../components/Card";
import CardFormField from "../components/CardFormField";
import ErrorModal from "../components/ErrorModal";
import { UserContext } from "../context/UserContext";
//import * as userAPI from "../api/users"
import * as userValidation from "../utils/userValidation"


function LoginPage() {
    const navigate = useNavigate();

    const [loginUser, setLoginUser] = useState({
        email: "",
        password: ""
    });
    const [error, setError] = useState();
    const { setUserInfo } = useContext(UserContext);


    function enteredUserCredentialsHandleChange(e) {
        const { name, value } = e.target;

        // state updates on every keystroke
        console.log(e.target.value);

        setLoginUser(prevValue => {
            return {
                ...prevValue,
                [name]: value
            };
        });
    };


    function loginUserHandler(e) {
        e.preventDefault();

        // some validation
        const { email, password } = loginUser;

        const emptyField = userValidation.validateField(email, password)
        if (emptyField) {
            setError(emptyField);
            return
        }

        const notValidEmail = userValidation.validateEmail(email)
        if (notValidEmail) {
            setError(notValidEmail)
            return
        }

        const notValidPassword = userValidation.validatePassword(password)
        if (notValidPassword) {
            setError(notValidPassword)
            return
        }

        //login user
        async function userLogin() {
            try {
                const response = await fetch("http://localhost:8000/api/user/login", {
                    method: "POST",
                    mode: "cors",
                    body: JSON.stringify(loginUser),
                    headers: {
                        "Content-Type": "application/json"
                    },
                    // if there is a token, it will be included in the request
                    credentials: "include",
                });
                console.log(response)
                const data = await response.json();
                console.log(data)

                if (!response.ok) {
                    throw new Error(data)
                }

                setUserInfo(data);
                navigate("/blog/create")

            } catch (error) {
                setError({ errorMessage: error.message });
            }
        };

        userLogin();

        // userAPI.userLogin(loginUser)
        //     .then(data => {
        //         if (!data.ok) {
        //             throw new Error(data)
        //         }

        //         setUserInfo(data);
        //         navigate("/blog/create")
        //     })
        //     .catch(error => setError({ errorMessage: error.message }));

        setLoginUser({
            email: "",
            password: ""
        });
    };


    function clearErrorHandler() {
        setError(null);
    };

    return (
        <Fragment>
            {error &&
                <ErrorModal
                    onClose={clearErrorHandler}
                >
                    {error}
                </ErrorModal>
            }
            <Card>
                <h1>Login to create a new post</h1>
                <h2>Don't have an account yet?&nbsp;
                    <Link to="/register">
                        Register now
                    </Link>
                </h2>
            </Card>
            <section className="auth">
                <form onSubmit={loginUserHandler}>

                    <CardFormField>
                        <label htmlFor="email">Your Email</label>
                        <input
                            id="email"
                            value={loginUser.email}
                            onChange={enteredUserCredentialsHandleChange}
                            placeholder="your@email.com"
                            name="email"
                        />
                    </CardFormField>

                    <CardFormField>
                        <label htmlFor="password">Your Password</label>
                        <input
                            id="password"
                            type="password"
                            value={loginUser.password}
                            onChange={enteredUserCredentialsHandleChange}
                            placeholder="********"
                            name="password"
                        />
                    </CardFormField>

                    <div className="actions">
                        <button
                            data-testid="loginBtn"
                        >
                            Login
                        </button>
                    </div>

                </form>
            </section>
        </Fragment>
    )
}

export default LoginPage;
