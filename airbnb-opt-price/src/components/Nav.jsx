import React from "react"
import { NavDiv, StyledNavLink } from "../StyledComps"



const Nav = () =>
{

    const checkActive = (match, location) =>
    {
        if(!location) return false
        const {pathname} = location
        return pathname === "/"
    }

    return (
        <NavDiv>
            <StyledNavLink to="/your-listings" activeClassName="active-nav">YOUR LISTINGS</StyledNavLink>
            <StyledNavLink to="/register" activeClassName="active-nav">REGISTER</StyledNavLink>
            <StyledNavLink to="/" activeClassName="active-nav" isActive={checkActive}>LOGIN</StyledNavLink>
            <StyledNavLink to="/logout" activeClassName="active-nav">LOGOUT</StyledNavLink>
        </NavDiv>
    )
}

export default Nav