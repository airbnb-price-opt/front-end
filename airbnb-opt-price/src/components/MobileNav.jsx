import React, {useState, useEffect } from "react"
import { MobileNavDiv, StyledMobileNavLink } from "../StyledComps"



const MobileNav = (props) =>
{
    const {loggedIn, setLoggedIn} = props
    // const [loggedIn, setLoggedIn] = useState(false)

    useEffect((_ => 
        {
            return
        }
        ), [loggedIn])

    const checkActive = (match, location) =>
    {
        if(!location) return false
        const {pathname} = location
        return pathname === "/"
    }

    const logoutClick = _ =>
    {
        localStorage.removeItem('token')
        setLoggedIn(false)
    }

    if(loggedIn) {
        return (
            <MobileNavDiv>
                <StyledMobileNavLink to="/your-listings/" exact activeClassName="active-nav">YOUR LISTINGS</StyledMobileNavLink>
                <StyledMobileNavLink to="/" onClick={logoutClick} activeClassName="active-nav">LOGOUT</StyledMobileNavLink>
            </MobileNavDiv>
        )
    }
    else {
        return (
                <MobileNavDiv>
                    <StyledMobileNavLink to="/register/" activeClassName="active-nav">REGISTER</StyledMobileNavLink>
                    <StyledMobileNavLink to="/" exact activeClassName="active-nav" isActive={checkActive}>LOGIN</StyledMobileNavLink>
                </MobileNavDiv>
        )
    }

    // return (
    //     <MobileNavDiv>
    //         <StyledMobileNavLink to="/your-listings/" activeClassName="active-nav">YOUR LISTINGS</StyledMobileNavLink>
    //         <StyledMobileNavLink to="/register/" activeClassName="active-nav">REGISTER</StyledMobileNavLink>
    //         <StyledMobileNavLink to="/" activeClassName="active-nav" isActive={checkActive}>LOGIN</StyledMobileNavLink>
    //         <StyledMobileNavLink to="/logout/" activeClassName="active-nav">LOGOUT</StyledMobileNavLink>
    //     </MobileNavDiv>
    // )
}

export default MobileNav