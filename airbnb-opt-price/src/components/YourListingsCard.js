import React from 'react'

import trash from '../assets/trash.svg'
import house from '../assets/house.svg'

import { StyledListingsCard, StyledAddListingsLink, StyledUpdateListingsLink, StyledListingsCardContent, StyledListingGrid } from '../StyledComps'

const YourListingsCard = ( { data, DeleteListing } ) => {
    return (
        <StyledListingGrid>
            {data.map((listing,index) => (
                <StyledListingsCard key={index}>
                    <img src={listing.img_url !== null ? listing.img_url : house}></img>
                    <StyledListingsCardContent>
                        <p>NEIGHBORHOOD: {listing.neighborhood}</p>
                        <p>GUESTS: {listing.guests}</p>
                        <p>MINIMUM NIGHTS: {listing.min_nights}</p>
                        <p>ACTUAL PRICE: {listing.act_price}</p>
                        <p>OPTIMAL PRICE: {listing.opt_price}</p>
                    </StyledListingsCardContent>
                    <StyledUpdateListingsLink to="/update-listing/">UPDATE LISTING</StyledUpdateListingsLink>
                    <img className='trash-icon' src={trash} alt='delete icon' onClick={() => DeleteListing(listing)}></img>
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