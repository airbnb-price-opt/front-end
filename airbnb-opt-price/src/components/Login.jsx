import React, { useState } from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../store/actions';
import {LoginContainerDiv, LoginForm, LoginFormContainer, LoginImage, LoginFormLabelInputDiv, UndrawImage} from '../StyledComps'

const Login = (props) => {

    const [ currentUser, setCurrentUser ] = useState({ password:'', email: '' })
    
    const handleChanges = (e) => {
        setCurrentUser({ ...currentUser, [e.target.name]: e.target.value })
    }

    const verifyUser = (e) => {
        e.preventDefault();
        props.loginUser(currentUser)
    }
    console.log(currentUser)
    return(
        // <div>
        //     <form>
        //         <input 
        //             onChange={handleChanges}
        //             name='password'
        //             placeholder="Password:"
        //         />
        //         <input 
        //             onChange={handleChanges}
        //             name='email'
        //             placeholder="Email:"
        //         />
        //         <button onClick={verifyUser}>SUBMIT</button>
        //     </form>
        // </div>
        <LoginContainerDiv>
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