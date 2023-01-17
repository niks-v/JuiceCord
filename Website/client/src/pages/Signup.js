import "./page-styles/Signup.css"
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Cookies from "../components/tools/Cookies";

function Signup() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [affiliate, setAffiliate] = useState("");
    const [message, setMessage] = useState("");
    const [disabled, setDisabled] = useState("");

    const [searchParams] = useSearchParams("");
    let affCode = searchParams.get("aff");

    useEffect(()=> {
        if(affCode){
            setDisabled(true);
            setAffiliate(affCode);
        }
    }, [affCode])

    let SubmitAccountData = async (e) => {
        let data = JSON.stringify({
            email: email,
            password: password,
            affiliate: affiliate,
            type: "user",
        })
        console.log(data);
        e.preventDefault();
        try {
        let res = await fetch("/api/account/create", {
            headers: {'Content-Type':'application/json'},
            method: "POST",
            body: data,
        });
        await res.json().then( res => {
            console.log(res);
            if(!res.error){
                Cookies.setCookie("sessionid", res.sessionid, 1);
                Cookies.setCookie("loggedin", true, 1);
                window.location.href = 'a/dashboard';
            }
            else {
                console.log(res.message);
                setMessage(res.message);
            }
        } )
        if (res.status === 200) {
            setPassword("");
            setEmail("");
            // get token and redirect
        } else {
            console.log("An error occured while signing up.");
        }
        } catch (err) {
            console.log(err);
        }
    }
    return (
      <div className="LoginForm form">
          <h1>Sign Up:</h1><br></br>
          <form onSubmit={SubmitAccountData}>
              <input 
              name="email" 
              id="email" 
              placeholder="Email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              ></input><br></br>

              <input 
              name="password"
              type="password" 
              id="password" 
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              ></input><br></br>

              <input 
              hidden={disabled ? "hidden": ""}
              name="affiliate"
              id="affiliate" 
              placeholder="Affiliate code"
              value={affiliate}
              onChange={(e) => setAffiliate(e.target.value)}
              ></input><br></br>
              
              <button type="submit">Create account</button>
              
              <div id="MessageBox">{message}</div>
          </form>
      </div>
    )
}

export default Signup