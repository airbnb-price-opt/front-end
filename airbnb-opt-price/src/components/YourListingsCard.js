import React from 'react'

import { StyledListingsCard, StyledListingsCardContent, StyledListingGrid } from '../StyledComps'

const YourListingsCard = ( { data } ) => {
    return (
        <StyledListingGrid>
            {data.map(listing => (
                <StyledListingsCard>
                    <img src={listing.img_url}></img>
                    <StyledListingsCardContent>
                        <p>NEIGHBORHOOD: {listing.neighborhood}</p>
                        <p>GUESTS: {listing.guests}</p>
                        <p>MINIMUM NIGHTS: {listing.min_nights}</p>
                        <p>ACTUAL PRICE: {listing.act_price}</p>
                        <p>OPTIMAL PRICE: {listing.opt_price}</p>
                    </StyledListingsCardContent>
                    <span className='update-listing'>UPDATE LISTING</span>
                    <button className='trash-icon'>TRASH</button>
                </StyledListingsCard>
            ))}
            
            <StyledListingsCard>
                <p>ICON</p>
                <p>ADD LISTING</p>
            </StyledListingsCard>
        </StyledListingGrid>
    )
}

export default YourListingsCard