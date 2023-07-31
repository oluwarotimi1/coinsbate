import React, { useEffect, useState } from 'react'
import { doc, getDoc } from "firebase/firestore";
import { useNavigate } from 'react-router-dom';
import { db } from '../../auth/firebase/firebase';
export const UserContext = React.createContext();

const UserProvider = (props) => {
  const [loadingUser, setLoadingUser] = useState(true);
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(
    JSON.parse(localStorage.getItem("isLoggedIn"))
  );

  useEffect(()=>{
    console.log(isLoggedIn);
    if(isLoggedIn){
      handleGetUser(localStorage.getItem("token"))
      setLoadingUser(false)
    }else{
      setLoadingUser(false);
    }
  },[isLoggedIn])

  const handleGetUser = async (id) => {
    setLoadingUser(true);
    // console.log(id)
    //The docSnap below code is actually not neccesary for auth.. Basically for chat system
    const docRef = doc(db, "users", id);
    const docSnap = await getDoc(docRef);
//
    if (docSnap.exists()) {
      setUser(docSnap.data());
      setLoadingUser(false);
      // console.log("Document data:", docSnap.data());
    } else {
      // doc.data() will be undefined in this case
      
      // console.log("No such document!");
    }
  };
  const logIn = ()=>{
    setIsLoggedIn(true);
  }
  const logOut = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/login")
  };

  return (
    <UserContext.Provider
    value={{
      user,
        setUser,
        loadingUser,
        setLoadingUser,
        handleGetUser,
        logOut,
        isLoggedIn,
        setIsLoggedIn,
        logIn,

    }}
    >
      {props.children}
    </UserContext.Provider>
  )
}

export default UserProvider;