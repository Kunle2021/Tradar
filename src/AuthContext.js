// import {
//   createUserWithEmailAndPassword,
//   onAuthStateChanged,
//   signInWithEmailAndPassword,
// } from "firebase/auth";
// import React, { useContext, useEffect, useState } from "react";
// import { auth } from "./firebase";

// const AuthContext = React.createContext();

// export function useAuth() {
//   return useContext(AuthContext);
// }

// export function AuthProvider({ children }) {
//   const [currentUser, setCurrentUser] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   function register(formData) {
//     console.log(formData.email);
//     const email = formData.email;
//     const password = formData.email;

//     //Need to create a database table to store additinial values - need to link to the user - can be done in the backend

//     return createUserWithEmailAndPassword(auth, email, password);
//   }

//   const signInUser = (email, password) => {
//     setLoading(true);
//     signInWithEmailAndPassword(auth, email, password)
//       .then((res) => console.log(res))
//       .catch((err) => setError(err.code))
//       .finally(() => setLoading(false));
//   };

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       setCurrentUser(user);
//       setLoading(false);
//     });

//     return unsubscribe;
//   }, []);

//   const value = {
//     currentUser,
//     register,
//     signInUser,
//   };

//   return (
//     <div>
//       <AuthContext.Provider value={value}>
//         {!loading && children}
//       </AuthContext.Provider>
//     </div>
//   );
// }

// // const name = formData.name;
// //     const company = formData.company;
// //     const email = formData.email;
// //     const password = formData.email;
// //     const location = formData.email;
// //     const contact = formData.contact;
// //     const experience = formData.experience;
