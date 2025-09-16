import React, { Children, createContext, useContext, useReducer } from 'react'
     const AuthContext = createContext()

    const initialState = {
        isLogedIn : false
    }

    const authReducer = (state, action) =>{
        switch(action.type){
            case "Login" : return {isLogedIn : true}
            case "Logout" : return {isLogedIn : false}
            default : return state
        }

    }

const UrNUcStateManage = ({children}) => {
    
    const [state, dispatch] = useReducer(authReducer, initialState)


  return (
    <AuthContext.Provider value={{state, dispatch}}>
    {children}
    </AuthContext.Provider>
  )
}

export default UrNUcStateManage

export const useAuth = () => useContext(AuthContext)