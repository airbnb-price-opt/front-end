import React from 'react'

import trash from '../assets/trash.svg'
import house from '../assets/house.svg'

import YourListingsModal from './YourListingsModal'
import { StyledListingsCard, StyledAddListingsLink, StyledUpdateListingsLink, StyledListingsCardContent, StyledListingGrid } from '../StyledComps'

const YourListingsCard = ( { data, EditListing, DeleteListing, listingEdit, setListingEdit } ) => {
    return (
        <StyledListingGrid>
            {data.map((listing,index) => (
                <StyledListingsCard key={index}>
                    <img src={listing.img_url !== null ? listing.img_url : house} alt='house img'></img>
                    <StyledListingsCardContent>
                        <p className='listing-info'>NEIGHBORHOOD GROUP:</p>
                        <p>{listing.neighborhood_group}</p>
                        <p className='listing-info'>NEIGHBORHOOD:</p>
                        <p>{listing.neighborhood}</p>
                        <p>GUESTS: {listing.guests}</p>
                        <p>MINIMUM NIGHTS: {listing.minimum_nights}</p>
                        <p>ACTUAL PRICE: {listing.act_price}</p>
                        <p>OPTIMAL PRICE: {listing.opt_price}</p>
                    </StyledListingsCardContent>
                    <YourListingsModal listing={listing}>VIEW DETAILS</YourListingsModal>
                    <StyledUpdateListingsLink to={"/update-listing/"} onClick={setListingEdit(listing)}>UPDATE LISTING</StyledUpdateListingsLink>
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