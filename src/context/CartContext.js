import { createContext, useReducer } from 'react'
import React from 'react'

export const UserContext = createContext()

const dataCart = {
    id:'',
    title:'',
    topping:[]
}
