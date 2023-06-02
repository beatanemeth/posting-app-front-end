const baseURL = "http://localhost:8000/api/user/";

// register user
// const userRegister = async (registerUser) => {
//     try {
//         const response = await fetch(baseURL + "register", {
//             method: "POST",
//             mode: "cors",
//             body: JSON.stringify(registerUser),
//             headers: {
//                 "Content-Type": "application/json"
//             },
//         });
//         const data = await response.json();
//         console.log(data)
//         if (!response.ok) {
//             throw new Error(data)
//         }
//         return data;

//     } catch (error) {
//         console.error(error)
//     }
// };


// login user
// const userLogin = async (loginUser) => {
//     try {
//         const response = await fetch(baseURL + "login", {
//             method: "POST",
//             mode: "cors",
//             body: JSON.stringify(loginUser),
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             // if there is a token, it will be included in the request
//             credentials: "include",
//         });
//         const data = await response.json();
//         return data;

//     } catch (error) {
//         console.error(error)
//     }
// };


// user profile
const userProfile = async () => {
    try {
        const response = await fetch(baseURL + "profile", {
            method: "GET",
            mode: "cors",
            credentials: "include",
        });
        const userInfo = await response.json();
        return userInfo;

    } catch (error) {
        console.error(error)
    }
}


// logout user
const userLogout = () => {
    try {
        fetch(baseURL + "logout", {
            method: "POST",
            mode: "cors",
            credentials: "include",
        });

    } catch (error) {
        console.error(error)
    }
}


export { userProfile, userLogout }
