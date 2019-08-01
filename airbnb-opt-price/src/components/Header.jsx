import React from "react"
import { StyledHeader, HeaderIconH1Div } from '../StyledComps'
import { Link } from 'react-router-dom'
import Nav from './Nav'

const Header = (props) =>
{
    const {loggedIn, setLoggedIn} = props
    return (
        <StyledHeader>
            <Link to={`/`} style={{textDecoration: `none`}}>
                <HeaderIconH1Div>
                    <img src={require(`../assets/airlyticsicon.png`)} alt="airlytics icon" />
                    <h1 className="app-name">AIRLYTICS</h1>
                </HeaderIconH1Div>
            </Link>
            <Nav loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
        </StyledHeader>
    )
}

export default Header
