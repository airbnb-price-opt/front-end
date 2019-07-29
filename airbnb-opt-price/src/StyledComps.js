import styled from 'styled-components'
import { NavLink, Link } from 'react-router-dom'
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

// @@@@@@@@@@ Start Your Listings Styles @@@@@@@@@@

export const StyledYourListings = styled.div`
    margin-top: 4rem;
    h1 {
        font-family: 'Montserrat';
        color: #eb5757;
        margin: 0 8%;
    }
    hr {
        border-color: #eb5757;
        border-style: solid;
        margin: 0 8%;
    }
`

export const StyledListingGrid = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

export const StyledListingsCard = styled.div`
    font-family: 'Montserrat';
    display: flex;
    flex-direction: column;
    text-align: center;
    max-width: 300px;
    width: 100%;
    height: 375px;
    /* height: 100%; */
    padding: 10px;
    box-shadow: 0 2px 2px #bdbdbd;
    margin: 20px;
    position: relative;
    border: solid #bdbdbd 1px;
    p {
        margin: 0;
    }
    img {
        /* max-width: 325px; */
        max-width: 327px;
        width: 100%;
        /* max-height: 225px; */
        max-height: 234px;
        height: 100%;
    }
    button {
        background-color: #eb5757
    }
    .update-listing {
        border-radius: 5px;
        background-color: #eb5757;
        width: 100%;
        text-align: center;
        padding: 5px 0;
        color: white;
    }
    .trash-icon {
        position: absolute;
        right: -10px;
        top: -10px;
        border-radius: 50%;
    }
`;

export const StyledUpdateListingsLink = styled(Link)`
    color: white;
    text-decoration: none;
`;

export const StyledAddListingsLink = styled(Link)`
    font-family: 'Montserrat';
    color: black;
    text-decoration: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    max-width: 300px;
    width: 100%;
    height: 375px;
    /* height: 100%; */
    padding: 10px;
    box-shadow: 0 2px 2px #bdbdbd;
    margin: 20px;
    position: relative;
    border: solid #bdbdbd 1px;
    background-color: #f1f1f1;
    p {
        margin: 0;
    }
`;

export const StyledListingsCardContent = styled.div`
    text-align: left;
    margin: 5px 0;
`

// @@@@@@@@@@ End Your Listings Styles @@@@@@@@@@

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
