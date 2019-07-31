import styled, { keyframes } from 'styled-components'
import { NavLink, Link } from 'react-router-dom'
const appRed = '#eb5757';
const appGrey = '#828282';

export const AddListingDiv = styled.div`
    margin: 10px 100px;
    @media (max-width: 600px) {
        margin: 0;
    }
`;

export const AddListingWrapper = styled.div`
    border-top: 1px solid ${appRed};
    padding-top: 20px;
    display: flex;
    justify-content: space-evenly;
    @media (max-width: 600px) {
        flex-direction: column;
        width: 95%;
        margin: 0 auto;
    }
`;

export const UploadImageDiv = styled.div`
    width: 480px;
    height: 379px;
    @media (max-width: 600px) {
        width: 100%;
        height: 100px;
    }
`;

export const UploadImageText = styled.div`
    font-family: 'Montserrat';
    color: black;
    text-decoration: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    width: 100%;
    height: 379px;
    box-shadow: 0 2px 2px #bdbdbd;
    position: relative;
    border: solid #bdbdbd 1px;
    background-color: #f1f1f1;
    margin-block-end: 0;
    margin-block-start: 0;
    &:hover {
        transition: transform .2s;
        transform: scale(1.02);
    }
    p {
        margin: 0
    }
    .plus-sign{
        font-size: 4rem;
    }

    @media (max-width: 600px) {
        height: 100%;
    }
`;

export const ListingFormWrapper = styled.div`
    @media (max-width: 600px) {
        width: 100%;
    }
`;

export const AddListingHeader = styled.h1`
font-family: Montserrat;
font-style: normal;
font-weight: 500;
font-size: 36px;
line-height: 44px;
text-transform: uppercase;
color: #EB5757;
@media(max-width: 600px) {
    text-align: center;
}
`;

export const ListingFormDiv = styled.div`
    width: 561px;
    background: #EB5757;
    padding: 30px 50px;
    @import url("https://fonts.googleapis.com/css?family=Montserrat&display=swap");
    box-shadow: 7px 7px 5px rgba(0, 0, 0, 0.4);
    @media (max-width: 600px) {
        width: 100%;
        padding: 10px 0;
        margin-bottom: 20px;
    }
`;

export const ListingForm = styled.form`
    color: white;
    display: flex;
    flex-direction: column;
    width: 561px;
    @media (max-width: 600px) {
        width: 90%;
        margin: 0 auto;
    }
`;

export const ListingFormLabel = styled.label`
    margin-bottom: 30px;
    font-weight: bold;
    font-size: .8rem;
    line-height: 17px;
    font-family: 'Montserrat', sans-serif;
    @media (max-width: 600px) {
        margin-bottom: 10px;
    }
`;

export const ListingFormSelect = styled.select`
    margin-top: 5px;
    height: 31px;
    width: 100%;
    font-family: 'Montserrat', sans-serif;
`;

export const ListingFormInput = styled.input`
    margin-top: 5px;
    height: 31px;
    width: 100%;
    border: none;
    @media (max-width: 600px) {
        &:focus {
            outline: none;
        }
    }

`;

export const ListingFormButton = styled.button`
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
    &:hover{
        transition: transform .2s;
        transform: scale(1.1);
        cursor: pointer;
    }
    
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
    @media(max-width: 800px)
    {
        display: none;
    }
`;

export const MobileNavDiv = styled.div`
    /* display: flex; */
    background-color: ${appGrey};
    border:none;
    align-items: center;
    justify-content: space-around;
    height: 65px;
    display: none;
    @media(max-width: 800px)
    {
        display: flex;
        position: fixed;
        bottom: 0;
        width: 100%;
    }
`;

export const StyledMobileNavLink = styled(NavLink)`
    color: white;
    text-decoration: none;
    &:hover
    {
        -webkit-text-stroke: 1px white;
        transition: transform .2s;
        transform: scale(1.1);
    }
`;

export const StyledNavLink = styled(NavLink)`
    color: white;
    text-decoration: none;
    padding: 0 30px;
    margin-right: 30px;
    letter-spacing: .5px;
    &:hover
    {
        -webkit-text-stroke: 1px white;
        transition: transform .2s;
        transform: scale(1.1);
    }
    @media(max-width: 900px)
    {
        margin-right: 0;
    }
`;

export const StyledHeader = styled.div`
    padding-left: 40px;
    font-family: 'Montserrat', sans-serif;
    font-size: .8rem;
    margin-top: 20px;
    display:flex;
    justify-content: space-between;
    align-items:center;
    @import url('https://fonts.googleapis.com/css?family=Rock+Salt&display=swap');
    h1
    {
        color: ${appRed};
        font-family: 'Rock Salt', cursive;
        @media(max-width: 580px)
        {
            margin: 0 auto;
        }
    }
    @media(max-width: 800px)
    {
        padding-left: 0;
        justify-content: center;
    }
    @media(max-width: 580px)
    {
        margin: 0 auto;
    }
`;

export const HeaderIconH1Div = styled.div`
    display: flex;
    align-items: center;

    img
    {
        margin-right: 15px;
        width: 45px;
        height: 45px;
    }
`;

// @@@@@@@@@@ Start Your Listings Styles @@@@@@@@@@

export const StyledYourListings = styled.div`
    margin-top: 4rem;

    @media(max-width: 800px) {
        margin-bottom: 4rem;
    }
    h1 {
        font-family: 'Montserrat';
        color: #eb5757;
        text-align: center;
        margin: 0 5%;
        font-weight: normal;
    }
    hr {
        border-color: #eb5757;
        border-style: solid;
        border-top: none;
        margin: 0 5% 2rem;
    }
`

export const StyledListingGrid = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    font-family: 'Montserrat', sans-serif;
`

export const StyledListingsCard = styled.div`
    font-family: 'Montserrat', sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;
    max-width: 300px;
    width: 100%;
    height: 450px;
    padding: 10px;
    box-shadow: 0 2px 2px #bdbdbd;
    margin: 20px;
    position: relative;
    border: solid #bdbdbd 1px;
    &:hover {
        transition: transform .2s;
        transform: scale(1.02);
    }
    @media(max-width: 800px) {
        max-width: 255px;
        height: 392px;
    }
    p {
        margin: 0;
    }
    img {
        max-width: 327px;
        width: 100%;
        max-height: 200px;
        height: 100%;
        @media(max-width: 800px) {
            max-height: 170px;
        }
    }
    .listing-info {
        text-decoration: underline;
    }
    .trash-icon {
        position: absolute;
        right: -15px;
        top: -25px;
        border-radius: 50%;
        width: 36px;
        height: 36px;
        background-color: #eb5757;
        color: white;
        padding: 5px;
        cursor: pointer;
        @media(max-width: 800px) {
            width: 30px;
            height: 30px;
            right: -10px;
            top: -20px;
        }
        &:hover {
            background-color: #e84141;
        }
    }
`;

export const StyledUpdateListingsLink = styled(Link)`
    color: white;
    text-decoration: none;
    border-radius: 5px;
    background-color: #eb5757;
    width: 100%;
    text-align: center;
    padding: 5px 0;
    color: white;
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
    font-size: .9rem;
    @media(max-width: 800px) {
        font-size: 13px;
        padding: 3px 0;
    }
    &:hover {
        background-color: #e84141;
        color: white;
    }
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
    height: 450px;
    padding: 10px;
    box-shadow: 0 2px 2px #bdbdbd;
    margin: 20px;
    position: relative;
    border: solid #bdbdbd 1px;
    background-color: #f1f1f1;
    &:hover {
        color: black;
        transition: transform .2s;
        transform: scale(1.02);
    }
    @media(max-width: 800px) {
        max-width: 255px;
        height: 392px;
    }
    p {
        margin: 0;
    }
    .plus-sign{
        font-size: 4rem;
    }
`;

export const StyledListingsCardContent = styled.div`
    text-align: left;
    margin: 5px 0;
    font-size: .9rem;
    @media(max-width: 800px) {
        font-size: 12px;
    }
`

export const StyledLCBC = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-height: 62px;
    height: 100%;
    .ui.button {
        font-family: 'Montserrat';
        margin: 0%;
        padding: 7.5px 0;
        @media(max-width: 800px) {
            font-size: 13px;
            padding: 6px 0;
        }
    }
`

export const StyledYLMContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 28px 0 0;
    @media(max-width: 767px) {
        padding: 0;
    }
    img {
        margin-bottom: 10px;
    }
`

export const StyledModalUpdateListingsLink = styled(Link)`
    color: white;
    text-decoration: none;
    border-radius: 5px;
    background-color: #eb5757;
    width: 100%;
    text-align: center;
    padding: 5px 0;
    color: white;
    &:hover {
        background-color: #e84141;
        color: white;
    }
`;

// @@@@@@@@@@ End Your Listings Styles @@@@@@@@@@

// @@@@@@@@@@ Start Loading Screen @@@@@@@@@@

export const StyledLoadingScreen = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 50vh;
`;

export const StyledLoadingIconContainer = styled.div`
    display: flex;
`

const loadingSpinner = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

export const StyledLoadingCoin = styled.img`
    pointer-events: none;
    width: 100px;
    animation: ${loadingSpinner} 1s infinite;
`

// @@@@@@@@@@ End Loading Screen Styles @@@@@@@@@@

//Login Form Styles
export const LoginContainerDiv = styled.div`
    font-family: 'Montserrat', sans-serif;
    display: flex;
    justify-content: space-around;
    color: white;
    margin: 161px 0 0px 0;
    align-items: flex-end;
    @media(max-width: 1000px)
    {
        flex-direction: column;
        align-items: center;
    }
    @media(max-width: 580px)
    {
        margin-top: 0;
        width: 95%;
        margin: 0 auto;
    }
`;

export const LoginFormLabelInputDiv = styled.div`
    display: flex;
    flex-flow: column nowrap;
    align-items: flex-start;
`;

export const LoginForm = styled.form`
    background-color: ${appRed};
    display: flex;
    flex-direction: column;
    align-items: center;
    /* padding-left: 50px; */
    padding: 30px;
    color: white;
    box-shadow: 7px 7px 5px rgba(0,0,0,0.5);
    @media(max-width: 1200px)
    {
        width: 420px
    }
    @media(max-width: 1000px)
    {
        margin-bottom: 20px;
        width: 549px;
    }
    @media(max-width: 580px)
    {
        width: 400px;
    }
    @media(max-width: 580px)
    {
        width: 310px;
    }
    
    input
    {
        width: 461px;
        margin-bottom: 25px;
        padding: 4px 0%;
        border: none;
        @media(max-width: 1200px)
        {
            width: 390px;
        }
        @media(max-width: 1000px)
        {
            width: 461px;
        }
        @media(max-width: 580px)
        {
            width: 380px;
        }
        @media(max-width: 580px)
        {
            width: 300px;
        }
    }
    label
    {
        /* margin-top: 24px; */
        font-family: 'Montserrat', sans-serif;
        font-size: .7rem;
        font-weight: bold;
        padding-bottom: 2px;
    }
    button
    {
        width: 462px;
        background-color: white;
        border: none;
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
        @media(max-width: 1200px)
        {
            width: 390px
        }
        @media(max-width: 1000px)
        {
            width: 461px;
        }
        @media(max-width: 580px)
        {
            width: 380px;
        }
        @media(max-width: 580px)
        {
            width: 300px;
        }
    }
`;

export const LoginFormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 40%;
    
    h2
    {
        color: ${appRed};
        font-weight: normal;
        font-size: 2rem;
        margin-bottom: 0px;
        font-family: Montserrat;
    }
    hr
    {
        border-color: ${appRed};
        border-top: none;
        width: 50%;
        margin-bottom: 20px;
        @media (max-width: 600px) {
            width: 100%;
        }
    }
    @media (max-width: 600px) {
        width: 95%;
    }
`;

export const LoginImage = styled.div`
    margin-bottom: -8px;
    width: 500px;
    @media(max-width: 580px)
    {
        display: none;
    }

    
`;
//end Login Form Styles

//REGISTER FORM STYLES
export const RegisterHeader =styled.div`
    display: flex;
    flex-direction: column;
    @media (max-width: 600px) {
        width: 100%;
    }
`

export const LeftColumnDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 40%;
    @media (max-width: 600px) {
        width: 100%;
    }
`

export const RegisterH1 = styled.h2`
    color: #eb5757;
    font-family: 'Montserrat', sans-serif;
    font-weight: normal;
    text-align: center;
    margin-top: 50px;
    @media (max-width: 600px) {
        margin-top: 0.83em;
        font-size: 2rem;
    }
`

export const RegisterHR = styled.hr`
    border: 0;
    height: 1px;
    background: #eb5757;
    margin: -20px 25% 25px 25%;
`

export const RegisterPageDiv = styled.div`
    font-family: 'Montserrat', sans-serif;
    display: flex;
    justify-content: space-around;
    color: white;
    margin: 10px 0 0px 0;
    align-items: flex-end;
    @media (max-width: 950px) {
        flex-flow: column nowrap;
        align-items: center;
    }
    @media (max-width: 600px) {
        margin: 0;
    }
`

export const RegisterForm = styled.form`
    background-color: #eb5757;
    display: flex;
    flex-direction: column;
    padding: 30px;
    box-shadow: 7px 7px 5px rgba(0,0,0,0.5);
`

export const RegisterFormInputs = styled.input`
    margin: 0px 1% 25px 3%;
    padding: 4px 0% 4px 0%;
    border: none;
    @media (max-width: 600px) {
        margin: 0px 1% 20px 3%;
    }
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
    border: none;
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
    margin-bottom: -8px;
    width: 500px;
    @media (max-width: 950px) {
        margin-top: 20px;
    }
    @media (max-width: 580px) {
        display: none;
    }
`

export const UndrawImage = styled.img`
    width: 100%;
`;

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
    @media (max-width: 600px) {
        margin-bottom: 0;
    }
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

//Footer Styles

export const FooterContainerDiv = styled.div`

`;

export const FooterDiv = styled.div`
    display: flex;
    font-family: 'Montserrat', sans-serif;
    font-size: .8rem;
    padding: 0px 3%;
    justify-content: space-between;
    align-items: center;
    background-color: ${appRed};
    height: 47px;
    color: white;
    @media(max-width: 800px)
    {
        display: none;
    }
`;

export const Copyright = styled.div`
    font-weight: bold;
    letter-spacing: .2px;
`

export const FooterLink = styled(Link)`
    color: white;
    margin-right: 50px;
    text-decoration: none;
    font-weight: bold;
    letter-spacing: .2px;
    &:hover
    {
        -webkit-text-stroke: 1px white;
        transition: transform .2s;
        transform: scale(1.1);
    }
`;

export const FooterLink2 = styled(Link)`
    color: white;
    margin-right: 0px;
    text-decoration: none;
    font-weight: bold;
    letter-spacing: .2px;
    &:hover
    {
        -webkit-text-stroke: 1px white;
        transition: transform .2s;
        transform: scale(1.1);
    }
`;