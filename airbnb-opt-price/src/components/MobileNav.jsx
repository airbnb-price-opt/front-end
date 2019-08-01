import React, {useEffect } from "react"
import { MobileNavDiv, StyledMobileNavLink } from "../StyledComps"

const MobileNav = (props) =>
{
    const {loggedIn, setLoggedIn} = props

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
                <StyledMobileNavLink to="/your-listings/" activeClassName="active-nav">YOUR LISTINGS</StyledMobileNavLink>
                <StyledMobileNavLink to="/" exact onClick={logoutClick} activeClassName="active-nav">LOGOUT</StyledMobileNavLink>
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
}

export default MobileNav
