import { Fragment, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CardFormField from "../components/CardFormField";
import ErrorModal from "../components/ErrorModal";
import Card from "../components/Card";
//import * as userAPI from "../api/users"
import * as userValidation from "../utils/userValidation"


function RegisterPage() {
    const navigate = useNavigate();

    const [registerUser, setRegisterUser] = useState({
        name: "",
        email: "",
        password: ""
    });

    const [error, setError] = useState();


    function enteredUserCredentialsHandleChange(e) {
        const { name, value } = e.target;

        // state updates on every keystroke
        console.log(e.target.value);

        setRegisterUser(prevValue => {
            return {
                ...prevValue,
                [name]: value
            };
        });
    };


    function registerUserHandler(e) {
        e.preventDefault();

        // some validation
        const { name, email, password } = registerUser;

        const emptyField = userValidation.validateField(name, email, password)
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

        // register new user
        async function userRegister() {
            try {
                const response = await fetch("http://localhost:8000/api/user/register", {
                    method: "POST",
                    mode: "cors",
                    body: JSON.stringify(registerUser),
                    headers: {
                        "Content-Type": "application/json"
                    },
                });
                console.log(response)
                const data = await response.json();
                console.log(data)

                if (!response.ok) {
                    throw new Error(data)
                }

                navigate("/login")


            } catch (error) {
                setError({ errorMessage: error.message });
            }
        };

        userRegister();

        //userAPI.userRegister(registerUser)
        // .then(data => {

        //     if (data.name) {
        //         navigate("/login")
        //     }

        // })
        // .catch(error => setError({ errorMessage: error.message }));


        setRegisterUser({
            name: "",
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
                <h1>Register</h1>
                <h2>Already a member?&nbsp;
                    <Link to="/login">
                        Login now
                    </Link>
                </h2>
            </Card>
            <section className="auth">
                <form onSubmit={registerUserHandler}>

                    <CardFormField>
                        <label htmlFor="name">Your First Name</label>
                        <input
                            id="name"
                            type="text"
                            value={registerUser.name}
                            onChange={enteredUserCredentialsHandleChange}
                            placeholder="John"
                            name="name"
                        />
                    </CardFormField>

                    <CardFormField>
                        <label htmlFor="email">Your Email</label>
                        <input
                            id="email"
                            value={registerUser.email}
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
                            value={registerUser.password}
                            onChange={enteredUserCredentialsHandleChange}
                            placeholder="********"
                            name="password"
                        />
                    </CardFormField>

                    <div className="actions">
                        <button
                            data-testid="registerBtn"
                        >
                            Register
                        </button>
                    </div>

                </form>
            </section>
        </Fragment>
    )
}

export default RegisterPage;
