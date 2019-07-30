import React from "react"
import MobileNav from './MobileNav'
import { Copyright, FooterDiv, FooterLink2, FooterLink, FooterContainerDiv } from '../StyledComps'

const Footer = () =>
{
    return (
        <FooterContainerDiv>
            <FooterDiv>
                <Copyright>&copy; 2019 ALL RIGHTS RESERVED</Copyright>
                <div className="footer-links">
                    <FooterLink to="/privacy/">PRIVACY POLICY</FooterLink>
                    <FooterLink2 to="/terms-and-conditions/" >TERMS AND CONDITIONS</FooterLink2>
                </div>
            </FooterDiv>
            <MobileNav/>
        </FooterContainerDiv>
    )
}

export default Footer