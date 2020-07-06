import React, { useState, useEffect } from 'react';
import './signup.component.css';
import { Link, useHistory } from 'react-router-dom';
import * as  signupRemote from '../../../remotes/signup.remote'
import { createNewAccount } from '../../../remotes/signup.remote';
import TextField from '@material-ui/core/TextField';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'; 

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            flexWrap: 'wrap',
            '& .MuiTextField-root': {
                margin: theme.spacing(1),
                width: 200,
            },
        },
        textField: {
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1),
            width: '25ch',
        },
    }),
);



export const SignUpComponent: React.FC = () => {
    const classes = useStyles();

    const history = useHistory();
    const [enteruserFirstName, setEnteruserFirstName] = useState('');
    const [enteruserLastName, setEnteruserLastName] = useState('');
    const [enterUsername, setEnterUsername] = useState('');
    const [enteruserEmail, setEnteruserEmail] = useState('');
    const [enteruserPassword, setEnteruserPassword] = useState('');
    const [verifyPassword, setVerifyPassword] = useState('');
    const [alertSetting, setAlert] = useState(false);


    useEffect(() => {
    }, []);

    let response: any;
    const setInfo = async () => {
        setEnteruserFirstName('');
        setEnteruserLastName('');
        setEnterUsername('');
        setEnteruserEmail('');
        setEnteruserPassword('');
        history.push('/login');
    }

    const inputNewAccountInfo = async () => {


        if (enteruserPassword !== verifyPassword) {
            alert('password do not match');
            return
        }

        const payload = {
            firstName: enteruserFirstName,
            lastName: enteruserLastName,
            username: enterUsername,
            email: enteruserEmail,
            password: enteruserPassword
        };

        try {
            response = await signupRemote.createNewAccount(payload);
            console.log(response);
            await setInfo();
        } catch { setAlert(true)
            alert('Username already exists')
        };
    }
    

    return (
        
        <div className="wrapper">
            <div className="form-wrapper">
            <form className={classes.root} noValidate autoComplete="off">
                <div className={classes.root}>
                    <div>
                        <h1>Create an Account </h1>
                        <TextField id="outlined-margin-dense"
                            className={classes.textField}
                            margin="dense"
                            variant="outlined" label="First Name"
                            name="firstName"
                            value={enteruserFirstName} 
                            onChange={(e) => setEnteruserFirstName(e.target.value)}/>
                        
                        <TextField id="outlined-margin-dense"
                            className={classes.textField}
                            margin="dense"
                            variant="outlined" label="Last Name" 
                            value={enteruserLastName} 
                            onChange={(e) => setEnteruserLastName(e.target.value)}/>
                        
                        <TextField id="outlined-margin-dense"
                            className={classes.textField}
                            margin="dense"
                            type="email"
                            variant="outlined" label="Email Address"
                            value={enteruserEmail} 
                            onChange={(e) => setEnteruserEmail(e.target.value)}/>

                        <TextField id="outlined-margin-dense"
                            className={classes.textField}
                            margin="dense"
                            variant="outlined" 
                            label="Username"  
                            value={enterUsername} 
                            onChange={(e) => setEnterUsername(e.target.value)}/>

                        <TextField type="password" id="outlined-margin-dense"
                            className={classes.textField}
                            margin="dense"
                            variant="outlined"label="Password" 
                            value={enteruserPassword} 
                            onChange={(e) => setEnteruserPassword(e.target.value)}/>

                        <TextField type="password" id="outlined-margin-dense"
                            className={classes.textField}
                            margin="dense"
                            variant="outlined" 
                            label="Confirm Password"
                            onChange={(e) => setVerifyPassword(e.target.value)}
                            value={verifyPassword}/>
                        </div>
                
                </div>
                </form>
                
                <div className="createAccount">
                    <button type="submit" onClick={() => inputNewAccountInfo()}>Sign Up</button>
                </div>
                <small>
                    <Link to="/login">
                        Already Have an Account?
                        </Link>
                </small>
        </div>
        </div>
    );
}