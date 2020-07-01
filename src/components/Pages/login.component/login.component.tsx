import React, { useState, useEffect } from 'react';
import './login.component.css';
import { Link, useHistory } from 'react-router-dom';
import * as loginRemote from '../../../remotes/login.remote';

export const LoginComponent: React.FC = () => {
const history = useHistory();
const [inputUsername, setInputUsername] = useState('');
const [inputUserPassword, setInputUserPassword] = useState('');
    

useEffect(() => {}, [])

let response: any;
const setInformation = async () => {
        setInputUsername('');
        setInputUserPassword('');
        // const authToken = response.data.accessToken;
        const username = response.data.username;
        const userId = response.data.userId;
        const firstName = response.data.firstName;
        const lastName = response.data.lastName;
        const email = response.data.email;
        // localStorage.setItem('accessToken', authToken);
        localStorage.setItem('accessToken', username);
        localStorage.setItem('accessToken', userId);
        localStorage.setItem('accessToken', firstName);
        localStorage.setItem('accessToken', lastName);
        localStorage.setItem('accessToken', email);
        console.log(response.data)
        history.push('/myevent');
    }

    const addLoginCredentials = async () => {
        const payload = {
            username: inputUsername,
            userPassword: inputUserPassword
        };
  
        try {
            response = await loginRemote.checkLoginCredentials(payload);
            console.log(response)
            await setInformation();
        } catch { 
            alert('Incorrect username and/or password')
            }
        } 

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
                        value={inputUsername} onChange={
                            (e) => setInputUsername(e.target.value)}
                        />
                    </div>
                    <div className="loginPassword">
                        <label htmlFor="loginPassword">Password</label>
                        <input

                            placeholder="Password"
                            type="password"
                            name="loginPassword"
                        value={inputUserPassword} onChange={
                            (e) => setInputUserPassword(e.target.value)}
                            />
                    </div>
                    </form>
                
                <div className="logIn">
                <button type="submit" onClick={() => addLoginCredentials()}>Log In</button>
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