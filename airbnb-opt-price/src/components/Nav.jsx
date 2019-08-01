import React, {useEffect} from "react"
import { NavDiv, StyledNavLink } from "../StyledComps"



const Nav = (props) =>
{
    const {loggedIn, setLoggedIn} = props
    const checkActive = (match, location) =>
    {
        if(!location) return false
        const {pathname} = location
        return pathname === "/"
    }

    useEffect(_ =>
        {
            return   
        }, [loggedIn])

    const logoutClick = _ =>
    {
        localStorage.removeItem('token')
        setLoggedIn(false)
    }

    if(loggedIn) {
        return (
            <NavDiv>
                <StyledNavLink to="/your-listings/" activeClassName="active-nav">YOUR LISTINGS</StyledNavLink>
                <StyledNavLink to="/" exact onClick={logoutClick} activeClassName="active-nav">LOGOUT</StyledNavLink>
            </NavDiv>
        )
    }
    else {
        return (
                <NavDiv>
                    <StyledNavLink to="/register/" activeClassName="active-nav">REGISTER</StyledNavLink>
                    <StyledNavLink to="/" exact activeClassName="active-nav" isActive={checkActive}>LOGIN</StyledNavLink>
                </NavDiv>
        )
    }

    // return (
    //     <NavDiv>
    //         <StyledNavLink to="/your-listings/" activeClassName="active-nav">YOUR LISTINGS</StyledNavLink>
    //         <StyledNavLink to="/register/" activeClassName="active-nav">REGISTER</StyledNavLink>
    //         <StyledNavLink to="/" activeClassName="active-nav" isActive={checkActive}>LOGIN</StyledNavLink>
    //         <StyledNavLink to="/logout/" activeClassName="active-nav">LOGOUT</StyledNavLink>
    //     </NavDiv>
    // )
}

export default Nav
