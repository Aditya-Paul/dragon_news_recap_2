import { useState } from "react";
import { createContext } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";
import { useEffect } from "react";

export const Authcontext = createContext(null)
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const[user,setUser] = useState(null);
    const[loading, setLoading] = useState(true)

    // create user
    const createUser = (email,password) =>{
        setLoading(true)
       return createUserWithEmailAndPassword(auth, email, password)
    }

    // login
    const login = (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
     }

    //log out
    const logout = ()=>{
        setLoading(true)
       return  signOut(auth)
    }

    //state change
    useEffect(()=>{
     const unsubcribe = onAuthStateChanged(auth, (currenuser)=>{
            console.log('state change', currenuser)
            setUser(currenuser)
            setLoading(false)
        });
        return ()=>{
            unsubcribe()
        }

    },[])

    const AUthinfo={
        user,
        createUser,
        logout,
        login,
        loading,
    }
    return (
        <Authcontext.Provider value={AUthinfo}>
            {children}
        </Authcontext.Provider>
    );
};

export default AuthProvider;