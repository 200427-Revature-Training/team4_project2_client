import React from 'react';
import './signup.component.css';
import { Link } from 'react-router-dom';

export const SignUpComponent: React.FC = () => {
    return (
        <div className="wrapper">

            <div className="form-wrapper">
    

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

                    <div className="confirmPassword">
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input

                            placeholder="Confirm Password"
                            type="password"
                            name="confirmPassword"
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
                </form>
                <div className="createAccount">
                    <button type="submit">Sign Up</button>
                    <small>
                        <Link to="/login">
                            Already Have an Account?
                        </Link>
                        </small>
                </div>
            </div>
        </div>
    )
}