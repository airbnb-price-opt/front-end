import React from 'react'

import trash from '../assets/trash.svg'

import { StyledListingsCard, StyledAddListingsLink, StyledUpdateListingsLink, StyledListingsCardContent, StyledListingGrid } from '../StyledComps'

const YourListingsCard = ( { data } ) => {
    return (
        <StyledListingGrid>
            {data.map((listing,index) => (
                <StyledListingsCard key={index}>
                    <img src={listing.img_url}></img>
                    <StyledListingsCardContent>
                        <p>NEIGHBORHOOD: {listing.neighborhood}</p>
                        <p>GUESTS: {listing.guests}</p>
                        <p>MINIMUM NIGHTS: {listing.min_nights}</p>
                        <p>ACTUAL PRICE: {listing.act_price}</p>
                        <p>OPTIMAL PRICE: {listing.opt_price}</p>
                    </StyledListingsCardContent>
                    <StyledUpdateListingsLink to="/update-listing/">UPDATE LISTING</StyledUpdateListingsLink>
                    <img className='trash-icon' src={trash} alt='delete icon'></img>
                </StyledListingsCard>
            ))}
            <StyledAddListingsLink to="/add-listing/">
                <p className='plus-sign'>+</p>
                <p>ADD LISTING</p>
            </StyledAddListingsLink>
        </StyledListingGrid>
    )
}

export default YourListingsCard