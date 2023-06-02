const validateField = (...userInput) => {
    for (const input of userInput) {
        if (!input) {
            return ({
                errorTitle: "Invalid Input",
                errorMessage: "Please eneter a valid name, Email, and password (non-empty values)."
            });
        }
    }
}


const validateEmail = (email) => {
    const emailRegEx =
        /^(([^<>()[\].,:\s@"]+(\.[^<>()[\].,:\s@"]+)*)|(".+!"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i

    const validEmail = String(email)
        .toLowerCase()
        .match(emailRegEx)

    if (!validEmail) {
        return ({
            errorTitle: "Invalid Email",
            errorMessage: "Please enter a valid Email address."
        });
    }
}


const validatePassword = (password) => {
    const passwordRegEx =
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{4,}$/

    const validPassword = String(password)
        .match(passwordRegEx)

    if (!validPassword) {
        return ({
            errorTitle: "Invalid Password",
            errorMessage: "Password must be min. 4 characters, must contain at least one upper case and one lower case letter, and one number!"
        });
    }
}


export { validateField, validateEmail, validatePassword }
