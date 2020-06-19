import React from 'react';
import './login.component.css';

export const LoginComponent: React.FC = () => {
    return (
        <div className="wrapper">

            <div className="form-wrapper">
                <h1> Sign in </h1>
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
                
                <div className="signIn">
                    <button type="submit">Sign In</button>
                </div>
                
                <h1>Create Account</h1>
                <form>
                    <div className="firstName">
                        <label htmlFor="firstName">First Name</label>
                        <input
                            placeholder="First Name"
                            type="text"
                            name="firstName"
                        />
                    </div>

                    <div className="lastName">
                        <label htmlFor="lastName">Last Name</label>
                        <input

                            placeholder="Last Name"
                            type="text"
                            name="lastName"
                            />
                    </div>
                        <div className="username">
                            <label htmlFor="username">Username</label>
                            <input
                                placeholder="Username"
                                type="text"
                                name="username"
                            />
                        </div>
                    
                    <div className="email">
                        <label htmlFor="email">Email</label>
                        <input

                            placeholder="Email"
                            type="email"
                            name="email"
                        />
                    </div>
                    <div className="password">
                        <label htmlFor="password">Password</label>
                        <input

                            placeholder="Password"
                            type="password"
                            name="password"
                        />
                    </div>

                    <div className="address">
                        <label htmlFor="address">Address</label>
                        <input

                            placeholder="Street Adrress, City, State, Zip Code"
                            type="text"
                            name="address"
                        />
                    </div>
                            <div className="createAccount">
                        <button type="submit">Create Account</button>
                    </div>
                </form>
            </div>
        </div>
    )
}