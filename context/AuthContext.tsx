// import { createContext, useContext, useEffect, useState } from "react";
// import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, User} from 'firebase/auth'
// import { auth } from "../firebase";
// import { isError } from "util";
// import { LogoutIcon } from "@heroicons/react/solid";
// import { async } from "@firebase/util";

// const AuthContext = createContext<any>({})

// export const useAuth = () => useContext(AuthContext)

// export const AuthContextProvider = ({children}: {children: React.ReactNode}) => {

//     const [user, setUser] = useState<any>(null)
//     const [loading, setLoading] = useState(true)
//     // console.log(user)

//     useEffect(() => {
//         const unsubscribe = onAuthStateChanged(auth, (user) => {
//             if(user){
//                 setUser({
//                     uid: user.uid,
//                     email: user.email,
//                     displayName: user.displayName
//                 })
//             }else {
//                 setUser(null)
//             }
//             setLoading(false)
//         })

//         return () => unsubscribe()
//     }, [])

//     const signUp = async (email: string, password: string) => {
//         await createUserWithEmailAndPassword(auth, email, password)
//     }

//     const signIn = async (email: string, password: string) => {
//         await signInWithEmailAndPassword(auth, email, password)
//     }

//     const Logout = async () => {
//         setUser(null)
//         await signOut(auth)
//     }   

//     return <AuthContext.Provider value={{user, signIn, signUp, Logout}}>
//                 {loading ? null : children}
//             </AuthContext.Provider>
// }