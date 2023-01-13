import "./page-styles/Signup.css"
import React, { useState } from 'react';
import Cookies from "../components/tools/Cookies";

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    let SubmitAccountData = async (e) => {
        let data = JSON.stringify({
            email: email,
            password: password
        })
        console.log(data);
        e.preventDefault();
        try {
        let res = await fetch("/api/account/login", {
            headers: {'Content-Type':'application/json'},
            method: "POST",
            body: data,
        });
        let resJson = await res.json().then( res => {
            if(!res.error){
                Cookies.setCookie("sessionid", res.sessionid, 1);
    
                window.location.href = 'a/dashboard';
            }
            else {
                console.log(res.message);
            }
        } )
        if (res.status === 200) {
            setPassword("");
            setEmail("");
            // get token and redirect
        } else {
            console.log("An error occured while logging in.");
        }
        } catch (err) {
            console.log(err);
        }
    }
    return (
      <>
          Sign up:
          <form onSubmit={SubmitAccountData}>
              <label>Email:</label>
              <input 
              name="email" 
              id="email" 
              placeholder="Email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              ></input>

              <label>Password:</label>
              <input 
              name="password"
              type="password" 
              id="password" 
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              ></input>

              <button type="submit">Login</button>
          </form>
      </>
    )
}

export default Login