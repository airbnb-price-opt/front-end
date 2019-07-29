import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
const appRed = '#eb5757';
const appGrey = '#828282';

export const FormDiv = styled.div`
    width: 561px;
    background: #EB5757;
    padding: 30px 50px;
    @import url("https://fonts.googleapis.com/css?family=Montserrat&display=swap");
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const Form = styled.form`
    color: white;
    display: flex;
    flex-direction: column;
`;

export const FormLabel = styled.label`
    margin-bottom: 30px;
    font-style: normal;
    font-size: 1.2rem;
    line-height: 17px;
`;

export const FormInput = styled.input`
    margin-top: 5px;
    height: 31px;
    width: 100%;
`;

export const FormButton = styled.button`
    width: 100%;
    background: #FFFFFF;
    border: 1px solid #BDBDBD;
    box-sizing: border-box;
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;
    text-align: center;
    text-transform: uppercase;
    color: #EB5757;
    padding: 10px;
    
`;

export const NavDiv = styled.div`
    display: flex;
    background-color: ${appGrey};
    box-shadow: 3px 8px 18px rgba(130, 130, 130, 70);
    border:none;
    border-bottom-left-radius: 6px;
    border-top-left-radius: 6px;
    align-items: center;
    height: 65px;
`;

export const StyledNavLink = styled(NavLink)`
    color: white;
    text-decoration: none;
    padding: 0 30px;
    
    &:hover
    {
        transition: transform .2s;
        transform: scale(1.1);
    }
`;

export const StyledHeader = styled.div`
    padding-left: 40px;
    margin-top: 20px;
    display:flex;
    justify-content: space-between;
    align-items:center;
    @import url('https://fonts.googleapis.com/css?family=Rock+Salt&display=swap');
    h1
    {
        color: ${appRed};
        font-family: 'Rock Salt', cursive;
    }
`;

export const LoginContainerDiv = styled.div`
    /* width: 80%; */
    display: flex;
    margin-top: 50px;
    justify-content: space-around;
    align-items: flex-end;
    align-content: center;
    
`;

export const LoginForm = styled.form`
    background-color: ${appRed};
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-left: 50px;
    height: 315px;
    width: 549px;
    color: white;
    box-shadow: 5px 5px 3px rgba(0, 0, 0, 0.2);
    input
    {
        width: 461px;
        height: 34px;
    }
    label
    {
        margin-top: 40px;
    }
    button
    {
        background-color: white;
        color: ${appRed};
        box-shadow: 5px 5px 3px rgba(0, 0, 0, 0.2);
        width: 459px;
        height: 45px;
        border-radius: 5px;
        border: none;
        margin-left: 3px;
        margin-top: 40px;
        font-size: 24px;
    }
`;

export const LoginFormContainer = styled.div`
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    
    h2
    {
        color: ${appRed};
        font-weight: normal;
        font-size: 36px;
        margin-bottom: 0px;
    }
    hr
    {
        border-color: ${appRed};
        border-top: none;
        width: 60%;
        margin-bottom: 20px;
    }
`;