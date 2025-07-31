export {}
// import { createContext, useContext, useEffect, useMemo, useState } from "react";
// import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, User } from "firebase/auth";
// import { auth } from "../firebase";
// import Router, { useRouter } from 'next/router'
// // import { route } from "next/dist/server/router";


// const AuthContext = createContext<any>({})

// // hook to get value out of the provider value object
// export const useAuth = () => useContext(AuthContext)  

// export const AuthContextProvider = ({ children }: {children: React.ReactNode}) => {

//     const [user, setUser] = useState<any>(null)
//     const [loading, setLoading]= useState(false)
//     const [error, setError] = useState(null)
//     const [initialLoading, setInitialLoading] = useState(true)
//     const router = useRouter()

//     // console.log(user)
// // Persisting 
//     // useEffect(() => {
//     //     const unsubscribe = onAuthStateChanged(auth, (user) => {
//     //         if(user) {
//     //             setUser({
//     //               // logged in
//     //                 uid: user.displayName,
//     //                 email: user.email,
//     //                 displayName: user.displayName
//     //             })
//     //             setLoading(true)
//     //         } else {
//     //           // not logged in
//     //             setUser(null)
//     //             setLoading(true)
//     //             Router.push('/login')
//     //         }
//     //     })
//     //     setInitialLoading(false)
//     //     // remove all the listeners from firebase when component unmounts
//     //     return () => unsubscribe()

//     // }, [auth])
//     useEffect(() => {
//         const unsubscribe = onAuthStateChanged(auth, (user) => {
//             if(user) {
//                 setUser(user)
//                 setLoading(false)
//             } else {
//               // not logged in
//                 setUser(null)
//                 setLoading(true)
//                 Router.push('/login')
//             }
//         })
//         setInitialLoading(false)
//         // remove all the listeners from firebase when component unmounts
//         return () => unsubscribe()

//     }, [auth])

//     const signUp = async (email: string, password: string) => {
//         setLoading(true)

//         await createUserWithEmailAndPassword(auth, email, password)
//               .then((userCredential) => {
//                 setUser(userCredential.user)
//                 router.push("/")
//                 setLoading(false)
//               })
//               .catch( (error) => alert(error.message))
//               .finally(() => setLoading(false))
        
//     }

//     const signIn = async (email: string, password: string) => {
//         setLoading(true)
  
//         await signInWithEmailAndPassword(auth, email, password)
//               .then((userCredential) => {
//                 setUser(userCredential.user)
//                 router.push("/")
//                 setLoading(false)
//               })
//               .catch((error) => alert(error.message))
//               .finally(() => setLoading(false))  
//       }

//       const logout = async () => {
//         setLoading(true)
  
//         signOut(auth)
//           .then(() => {
//             setUser(null)
//           })
//           .catch((error) => alert(error.message))
//           .finally(() => setLoading(false))
//       }


//       const memoedValue = useMemo(() => ({
//         user, signIn, signUp, loading, logout, error
//       }), [user, loading])

//     return <AuthContext.Provider value={{ memoedValue }}>{initialLoading ? null : children}</AuthContext.Provider>
// }

// // export default function useAuth() {
// //   return useContext(AuthContext)
// // }