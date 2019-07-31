import React, { useState } from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../store/actions';
import {LoginContainerDiv, LoginForm, LoginFormContainer, LoginImage, LoginFormLabelInputDiv, UndrawImage} from '../StyledComps'
import { history } from "../helpers/history";


const Login = (props) => {

    const [ currentUser, setCurrentUser ] = useState({ username: '', password:'' })
    
    const handleChanges = (e) => {
        setCurrentUser({ ...currentUser, [e.target.name]: e.target.value })
    }
    console.log(history)
    const verifyUser = (e) => {
        e.preventDefault();
<<<<<<< HEAD
        props.loginUser(currentUser);
        // localStorage.getItem('token')? props.history.push('/your-listings') : null
=======
        props.loginUser(currentUser, history)
>>>>>>> 59f6a3c48d1dd71c659600fedc3e089cbdf120ff
    }
    console.log(currentUser)
    return(
        <LoginContainerDiv className="page">
            <LoginFormContainer>
                <h2>LOGIN</h2>
                <hr/>
                <LoginForm>
                    <LoginFormLabelInputDiv>
                        <label>
                            USERNAME:
                        </label>
                        <input
                            type="text"
                            name="username"
                            onChange={handleChanges}
                        />
                    </LoginFormLabelInputDiv>
                    <LoginFormLabelInputDiv>
                        <label>
                            PASSWORD:
                        </label>
                        <input
                            type="password"
                            name="password"
                            onChange={handleChanges}
                        />
                    </LoginFormLabelInputDiv>
                    <button type="submit" onClick={verifyUser}>SUBMIT</button>
                </LoginForm>
            </LoginFormContainer>
            <LoginImage>
                <UndrawImage src={require(`../assets/bnb.png`)} alt="listing and money" />
            </LoginImage>
        </LoginContainerDiv>
    )
}

export default connect(null, { loginUser })(Login);