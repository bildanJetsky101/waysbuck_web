import React, { createContext, useReducer } from 'react'

export const UserContext = createContext()

const initialState = {
    isLogin: false,
    status:'',
    user: {}
}

const reducer = (state, action) => {
    const { type, payload, userStat } = action

    switch (type) {
        case 'USER_SUCCESS':
        case 'LOGIN_SUCCESS':
            return {
                isLogin: true,
                status:userStat,
                user: payload
            }
        case 'ADD_CART':
            return{
                isLogin: true,
                status:userStat,
                user: payload
            }
        case 'ADD_PAY':
            return{
                isLogin: true,
                status:userStat,
                user: payload
            }
        case 'LOGOUT':
        case 'AUTH_ERROR':
            return {
                isLogin: false,
                status:'', 
                user: {}
            }
        default:
            throw new Error()
    }
}

export const UserContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <UserContext.Provider value={ [state, dispatch] }>
            { children }
        </UserContext.Provider>
    )
}