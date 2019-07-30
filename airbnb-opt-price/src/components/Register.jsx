import React, { useState } from 'react';
import { connect } from 'react-redux';
import { registerUser } from '../store/actions';

import {
    RegisterPageDiv,
    RegisterForm,
    RegisterFormInputs,
    NameInputDiv,
    RegisterLabel,
    RegisterFormButton,
    RegisterFormTopRow,
    RegisterImageDiv,
    NameInputs,
    NameLabel,
    RegisterFirstNameInput,
    RegisterHR,
    RegisterH1,
    RegisterHeader,
    LeftColumnDiv,
    UndrawImage
} from '../StyledComps';

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
        <RegisterPageDiv className="page">
            <LeftColumnDiv>
                <RegisterHeader>
                    <RegisterH1>REGISTER</RegisterH1>
                    <RegisterHR/>
                </RegisterHeader>
                <RegisterForm>
                    <RegisterFormTopRow>
                        <NameInputDiv>
                            <NameLabel>FIRST NAME:</NameLabel>
                            <RegisterFirstNameInput
                                onChange={handleChanges}
                                name='firstName'
                            />
                        </NameInputDiv>
                        <NameInputDiv>
                            <NameLabel>LAST NAME:</NameLabel>
                            <NameInputs 
                                onChange={handleChanges}
                                name='lastName'
                            />
                        </NameInputDiv>
                    </RegisterFormTopRow>
                    <RegisterLabel>EMAIL:</RegisterLabel>
                    <RegisterFormInputs 
                        onChange={handleChanges}
                        name='email'
                    />
                    <RegisterLabel>USERNAME:</RegisterLabel>
                    <RegisterFormInputs 
                        onChange={handleChanges}
                        name='username'
                    />                
                    <RegisterLabel>PASSWORD:</RegisterLabel>
                    <RegisterFormInputs 
                        onChange={handleChanges}
                        name='password'
                    />
                    <RegisterFormButton onClick={addUser}>SUBMIT</RegisterFormButton>
                </RegisterForm>
            </LeftColumnDiv>
            <RegisterImageDiv>
                <UndrawImage src={require('../imgs/bnb.png')} alt="Listing and Money" />
            </RegisterImageDiv>
        </RegisterPageDiv>
    )
}

export default connect(null, { registerUser })(Register);