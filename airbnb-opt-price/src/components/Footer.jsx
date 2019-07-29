import React from "react"
import { Link } from 'react-router-dom'
import { FooterDiv, FooterLink } from '../StyledComps'

const Footer = () =>
{
    return (
        <FooterDiv>
            <div className="copyright">&copy; 2019 ALL RIGHTS RESERVED</div>
            <div className="footer-links">
                <FooterLink to="/privacy">PRIVACY POLICY</FooterLink>
                <FooterLink to="/terms-and-conditions" >TERMS AND CONDITIONS</FooterLink>
            </div>
        </FooterDiv>
    )
}

export default Footer