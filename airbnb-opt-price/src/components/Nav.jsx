import React from "react"
import { NavDiv, StyledNavLink } from "../StyledComps"



const Nav = () =>
{
    return (
        <NavDiv>
            <StyledNavLink to="/your-listings" activeClassName="active-nav">YOUR LISTINGS</StyledNavLink>
            <StyledNavLink to="/register" activeClassName="active-nav">REGISTER</StyledNavLink>
            <StyledNavLink to="/" activeClassName="active-nav">LOGIN</StyledNavLink>
            <StyledNavLink to="/logout" activeClassName="active-nav">LOGOUT</StyledNavLink>
        </NavDiv>
    )
}

export default Nav