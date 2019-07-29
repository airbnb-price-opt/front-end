import styled from 'styled-components';

export const RegisterFormDiv = styled.div`
    font-family: 'Montserrat', sans-serif;
    display: flex;
    justify-content: space-around;
    color: white;
    margin: 123px 13% 0px 4%;
    align-items: flex-end;
`

export const RegisterForm = styled.form`
    background-color: #eb5757;
    display: flex;
    flex-direction: column;
    padding: 30px;
    width: 40%;
    box-shadow: 7px 7px 5px rgba(0,0,0,0.5);
`

export const RegisterFormInputs = styled.input`
    margin: 0px 1% 25px 3%;
    padding: 4px 0% 4px 0%;
    border: none;
`

export const RegisterLabel = styled.label`
    font-size: .6rem;
    font-weight: bold;
    letter-spacing: 1px;
    text-align: left;
    margin-left: 3%;
    margin-bottom: 1px;
`

export const RegisterFormButton = styled.button`
    background-color: white;
    margin-left: 3%;
    border-radius: 5px;
    padding: 10px;
    color: #eb5757;
    font-weight: bold;
    font-family: 'Montserrat', sans-serif;
    box-shadow: 5px 5px 3px rgba(0,0,0,0.2);

    &:hover{
        transition: transform .2s;
        transform: scale(1.1);
        cursor: pointer;
    }
`

export const RegisterImageDiv = styled.div`
    margin-bottom: -4px;
    width: 50%;
`

export const NameLabel = styled.label`
    font-size: .6rem;
    font-weight: bold;
    letter-spacing: 1px;
    text-align: left;
    margin-bottom: 1px;
`

export const RegisterFormTopRow = styled.div`
    display: flex;
    margin: 0px 1% 0px 3%;
    padding: 4px 0% 4px 0%;
`

export const NameInputDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 14px;
    width: 50%;
`
export const NameInputs = styled.input`
    border: none;
    margin: 0px 0% 10px 0%;
    padding: 4px 0% 4px 0%;
`

export const RegisterFirstNameInput = styled.input`
    border: none;
    margin: 0px 6% 10px 0%;
    padding: 4px 0% 4px 0%;
`