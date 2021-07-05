import React from "react";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Feed from "./components/Feed/Feed";
import Rightbar from "./components/Rightbar/Rightbar";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import Login from "./components/Login/Login";
import { useEffect } from "react";
import { auth } from "./firebase";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      //Adds an observer for changes to the user's sign-in state.
      if (userAuth) {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.displayName,
            photoURL: userAuth.photoURL,
          })
        );
      } else dispatch(logout);
    });
  }, [dispatch]);
  return (
    <div className="App">
      <Header />
      {!user ? (
        <Login />
      ) : (
        <div className="App__body">
          <Sidebar />
          <Feed />
          <Rightbar />
        </div>
      )}
    </div>
  );
}

export default App;
