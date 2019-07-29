import React from 'react'
import { Link } from 'react-router-dom'

import AddListing from './AddListing'
import UpdateListing from './UpdateListing'

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
                    <span className='update-listing'><StyledUpdateListingsLink to="/update-listing/">UPDATE LISTING</StyledUpdateListingsLink></span>
                    <button className='trash-icon'>TRASH</button>
                </StyledListingsCard>
            ))}
            <StyledAddListingsLink to="/add-listing/">
                <p>ICON</p>
                <p>ADD LISTING</p>
            </StyledAddListingsLink>
        </StyledListingGrid>
    )
}

export default YourListingsCard