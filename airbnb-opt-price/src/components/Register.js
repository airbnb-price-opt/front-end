import React, { useState } from 'react';
import { connect } from 'react-redux';
import { registerUser } from '../store/actions';

const Register = (props) => {

    const [ newUser, setNewUser ] = useState({ firstName: '', lastName: '', password:'', email: '' })
    
    const handleChanges = (e) => {
        setNewUser({ ...newUser, [e.target.name]: e.target.value })
    }

    const addUser = (e) => {
        e.preventDefault();
        props.registerUser(newUser)
    }
    console.log(newUser)
    return(
        <div>
            <form>
                <input 
                    onChange={handleChanges}
                    name='firstName'
                    placeholder="First Name:"
                />
                <input 
                    onChange={handleChanges}
                    name='lastName'
                    placeholder="Last Name:"
                />
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
                <button onClick={addUser}>SUBMIT</button>
            </form>
        </div>
    )
}

export default connect(null, { registerUser })(Register);