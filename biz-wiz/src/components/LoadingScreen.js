import React from 'react'

import coin from '../assets/coin.svg'

import { StyledLoadingScreen, StyledLoadingIconContainer, StyledLoadingCoin } from '../StyledComps'

const LoadingScreen = () => {
    return (
        <StyledLoadingScreen>
            <StyledLoadingIconContainer>
                <StyledLoadingCoin src={coin}></StyledLoadingCoin>
            </StyledLoadingIconContainer>
        </StyledLoadingScreen>
    )
}

export default LoadingScreen