import React, { useState } from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../store/actions';

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
        <div>
            <form>
                <input 
                    onChange={handleChanges}
                    name='password'
                    placeholder="Password:"
                />
                <input 
                    onChange={handleChanges}
                    name='email'
                    placeholder="Email:"
                />
                <button onClick={verifyUser}>SUBMIT</button>
            </form>
        </div>
    )
}

export default connect(null, { loginUser })(Login);