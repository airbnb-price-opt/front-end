import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const NavDiv = styled.div`
    display: flex;
    background-color: #828282;
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
        color: #eb5757;
        font-family: 'Rock Salt', cursive;
    }
`;

// @@@@@ Start Your Listings Styles @@@@@

export const StyledListingGrid = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

export const StyledListingsCard = styled.div`
    @import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
    display: flex;
    flex-direction: column;
    text-align: center;
    max-width: 300px;
    width: 100%;
    height: 400px;
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

export const StyledAddListingsCard = styled.div`
    @import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    max-width: 300px;
    width: 100%;
    height: 400px;
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

// @@@@@ End Your Listings Styles @@@@@