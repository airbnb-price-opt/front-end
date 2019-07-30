import React from "react"
import { MobileNavDiv, StyledMobileNavLink } from "../StyledComps"



const Nav = () =>
{

    const checkActive = (match, location) =>
    {
        if(!location) return false
        const {pathname} = location
        return pathname === "/"
    }

    // if(localStorage.getItem('token') !== null) {
    //     return (
    //         <MobileNavDiv>
    //             <StyledMobileNavLink to="/your-listings/" activeClassName="active-nav">YOUR LISTINGS</StyledMobileNavLink>
    //             <StyledMobileNavLink to="/logout/" activeClassName="active-nav">LOGOUT</StyledMobileNavLink>
    //         </MobileNavDiv>
    //     )
    // }
    // else {
    //     return (
    //             <MobileNavDiv>
    //                 <StyledMobileNavLink to="/register/" activeClassName="active-nav">REGISTER</StyledMobileNavLink>
    //                 <StyledMobileNavLink to="/" activeClassName="active-nav" isActive={checkActive}>LOGIN</StyledMobileNavLink>
    //             </MobileNavDiv>
    //     )
    // }

    return (
        <MobileNavDiv>
            <StyledMobileNavLink to="/your-listings/" activeClassName="active-nav">YOUR LISTINGS</StyledMobileNavLink>
            <StyledMobileNavLink to="/register/" activeClassName="active-nav">REGISTER</StyledMobileNavLink>
            <StyledMobileNavLink to="/" activeClassName="active-nav" isActive={checkActive}>LOGIN</StyledMobileNavLink>
            <StyledMobileNavLink to="/logout/" activeClassName="active-nav">LOGOUT</StyledMobileNavLink>
        </MobileNavDiv>
    )
}

export default Nav