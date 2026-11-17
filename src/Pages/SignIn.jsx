import React from 'react';
import { useState } from "react";
import '../Styles/SignIn.css';

const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        setMessage("Welcome back to Queen's Handmade, " + email + "!");
    }

    return(
        <div className="signin-page">
            <div className="signin-card">
                <h2>Sign In</h2>
                <p>Access your Queen's Handmade beaded bag orders</p>

                {message && <h4 style={{ color: "green" }}>{message}</h4>}

                <form onSubmit={handleLogin}>
                    <input 
                        type="email" 
                        placeholder="Email Address" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                    />
                    <input 
                        type="password" 
                        placeholder="Password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                    />
                    <button type="submit">Sign In</button>
                </form>
            </div>
        </div>
    )
}

export default SignIn;