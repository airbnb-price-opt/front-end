import React from "react"
import { StyledHeader } from '../StyledComps'
import { Link } from 'react-router-dom'
import Nav from './Nav'

const Header = () =>
{
    return (
        <StyledHeader>
            <Link to={`/login`} style={{textDecoration: `none`}}><h1 className="app-name">AIRLYTICS</h1></Link>
            <Nav />
        </StyledHeader>
    )
}

export default Header