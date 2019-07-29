import React from "react"
import { FooterDiv, FooterLink2, FooterLink } from '../StyledComps'

const Footer = () =>
{
    return (
        <FooterDiv>
            <div className="copyright">&copy; 2019 ALL RIGHTS RESERVED</div>
            <div className="footer-links">
                <FooterLink to="/privacy">PRIVACY POLICY</FooterLink>
                <FooterLink2 to="/terms-and-conditions" >TERMS AND CONDITIONS</FooterLink2>
            </div>
        </FooterDiv>
    )
}

export default Footer