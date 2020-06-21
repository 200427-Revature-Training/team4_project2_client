import React from 'react';
import './login.component.css';
import { Link } from 'react-router-dom';

export const LoginComponent: React.FC = () => {
    return (
        <div className="wrapper">

            <div className="form-wrapper">
                <h1> Log in </h1>
                <form>
                    <div className="loginUsername">
                        <label htmlFor="username">Username</label>
                        <input
                            placeholder="Username"
                            type="text"
                            name="loginUsername"
                        />
                    </div>
                    <div className="loginPassword">
                        <label htmlFor="loginPassword">Password</label>
                        <input

                            placeholder="Password"
                            type="password"
                            name="loginPassword"
                            />
                    </div>
                    </form>
                
                <div className="logIn">
                    <button type="submit">Log In</button>
                    <small> 
                        <Link to="/signup">
                            Don't have an account? Create one
                        </Link>
                        </small>
                </div>
            </div>
        </div>
    )
}