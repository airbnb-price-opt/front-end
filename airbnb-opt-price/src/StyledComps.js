import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
const appRed = '#eb5757';
const appGrey = '#828282';

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