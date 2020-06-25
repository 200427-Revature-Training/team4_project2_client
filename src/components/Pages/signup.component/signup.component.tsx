import React, { useState, useEffect } from 'react';
import './signup.component.css';
import { Link, useHistory } from 'react-router-dom';
import * as  signupRemote from '../../../remotes/signup.remote'
import { createNewAccount } from '../../../remotes/signup.remote';
import { Alert } from '@material-ui/lab';



export const SignUpComponent: React.FC = () => {
    
    const history = useHistory();
    const [enteruserFirstName, setEnteruserFirstName] = useState('');
    const [enteruserLastName, setEnteruserLastName] = useState('');
    const [enterUsername, setEnterUsername] = useState('');
    const [enteruserEmail, setEnteruserEmail] = useState('');
    const [enteruserPassword, setEnteruserPassword] = useState('');
    const [verifyPassword, setVerifyPassword] = useState('');
    const [alertSetting, setAlert] = useState(false);

    
    useEffect(() =>{
    }, []);

    let response: any;
    const setInfo = async () =>{
        setEnteruserFirstName('');
        setEnteruserLastName('');
        setEnterUsername('');
        setEnteruserEmail('');
        setEnteruserPassword('');
        history.push('/myevent');
    }
    
    const inputNewAccountInfo = async () =>{

        
        if (enteruserPassword !==verifyPassword){
            alert('password do not match');
        }
    
        const payload ={
            userFirstName: enteruserFirstName,
            userLastName: enteruserLastName,
            username: enterUsername,
            userEmail: enteruserEmail,
            userPassword: enteruserPassword
        };

        try{
            response = await signupRemote.createNewAccount(payload);
            console.log(response);
            await setInfo();
        } catch {setAlert(true)};
    }
    
    
    
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

                            value={enteruserFirstName} onChange={
                                (e) => setEnteruserFirstName(e.target.value)}
                        
                        />
                    </div>

                    <div className="lastName">
                        <label htmlFor="lastName">Last Name</label>
                        <input

                            placeholder="Last Name"
                            type="text"
                            name="lastName"
                            
                            value={enteruserLastName} onChange={
                                (e) => setEnteruserLastName(e.target.value)}
                        />
                    </div>
                    <div className="username">
                        <label htmlFor="username">Username</label>
                        <input
                            placeholder="Username"
                            type="text"
                            name="username"

                            value={enterUsername} onChange={
                                (e) => setEnterUsername(e.target.value)}
                        />
                    </div>

                    <div className="email">
                        <label htmlFor="email">Email</label>
                        <input

                            placeholder="Email"
                            type="email"
                            name="email"

                            value={enteruserEmail} onChange={
                                (e) => setEnteruserEmail(e.target.value)}
                        />
                    </div>
                    <div className="password">
                        <label htmlFor="password">Password</label>
                        <input

                            placeholder="Password"
                            type="password"
                            name="password"

                            value={enteruserPassword} onChange={
                                (e) => setEnteruserPassword(e.target.value)}
                        />
                    </div>

                    <div className="confirmPassword">
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input

                            placeholder="Confirm Password"
                            type="password"
                            name="confirmPassword"

                            onChange={(e) => setVerifyPassword(e.target.value)}
                            value={verifyPassword}
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
                    <button type="submit" onClick={() => inputNewAccountInfo()}>Sign Up</button>
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