import { createContext,useContext, useState } from "react";
const Usercontext = createContext()

export function UserProvider({children}){
const[userId,setId]=useState(null)
const[userType,setType]=useState(null)
const[isLogin,setLogin]=useState(false)
    return(
        <Usercontext.Provider value={{userId,setId,userType,setType,isLogin,setLogin}}>
            {
                children
            }
        </Usercontext.Provider>
    )
}

export function useUser(){
    return useContext(Usercontext)
}