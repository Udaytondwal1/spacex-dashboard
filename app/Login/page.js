"use client";
import React, { useState, useEffect } from "react";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import Link from "next/link";

function Login(props) {
  const [user, setUser] = useState([]);
  const [profile, setProfile] = useState([]);

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (error) => console.log("Login Failed:", error),
  });

  useEffect(() => {
    if (user) {
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${user.access_token}`,
              Accept: "application/json",
            },
          }
        )
        .then((res) => {
          setProfile(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [user]);

  useEffect(() => {
    googleLogout();
    setProfile(null);
  }, [])

  // log out function to log the user out of google and set the profile array to null
  const logOut = () => {
    googleLogout();
    setProfile(null);
  };

  return (
    <>
      {profile ? (
        <div className="btn-container">
            <img src={profile.picture} alt="user image" className="user-img"/>
            <div>
            <h3>User Logged in</h3>
            <p>Name: {profile.name}</p>
            <p>Email: {profile.email}</p>
            </div>
            <div>
            <button onClick={logOut} className="logout-btn">LogOut</button>
            <Link href='./Homepage'><button className="next-btn">Next</button></Link>
            </div>
        </div>
      ) : (
        <div className="btn-container">
          <h2 className="h2">SpaceX - Dashboard</h2>
        <button className='login-btn' onClick={() => login()}>Sign in with Google 🚀 </button>
        <span className="footer">@2024 SpaceX TM - All Rights Reserved | Privacy Policy</span>
        </div>
      )}
      <div id='Caution'>Open Site in Desktop Mode</div>
    </>
  );
}
export default Login;
