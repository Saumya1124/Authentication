import React , {useState} from "react";

const AuthContext = React.createContext({
    token : '',
    isLoggedIn : false,
    logIn : (token) => {},
    logOut : () => {}
});

export const AuthContextProvider = (props) => {

    const initialToken = localStorage.getItem('token');

    const [token , setToken] = useState(initialToken);

    const userIsLoggedIn = !!token ;

    const logInHandler = (token) => {
        setToken(token)
        localStorage.setItem('token' , token)
    }

    const logOutHandler = () => {
        setToken(null)
        localStorage.removeItem('token')
    }

    const contextValue = {
        token : token ,
        isLoggedIn : userIsLoggedIn,
        logIn : logInHandler,
        logOut : logOutHandler

    }


    return <AuthContext.Provider value={contextValue}>{props.children}</AuthContext.Provider>

}

export default AuthContext