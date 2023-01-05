import "./page-styles/Signup.css"
import React, { useState } from 'react';

function Signup() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    let SubmitAccountData = async (e) => {
        let data = JSON.stringify({
            email: email,
            password: password,
            type: "user",
        })
        console.log(data);
        e.preventDefault();
        try {
        let res = await fetch("api/account/create", {
            headers: {'Content-Type':'application/json'},
            method: "POST",
            body: data,
        });
        let resJson = await res.json();
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

              <button type="submit">Create account</button>
          </form>
      </>
    )
}

export default Signup