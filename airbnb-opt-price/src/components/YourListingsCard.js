import React from 'react'

import trash from '../assets/trash.svg'
import house from '../assets/property/house.jpg'
import apart from '../assets/property/apart.jpg'
import condo from '../assets/property/condo.jpg'
import stock from '../assets/house.svg'

import YourListingsModal from './YourListingsModal'
import { StyledListingsCard, StyledAddListingsLink, StyledUpdateListingsLink, StyledListingsCardContent, StyledLCBC, StyledListingGrid } from '../StyledComps'

const YourListingsCard = (props) => {
    const { data, handleDelete } = props

    function houseImg(object) {
        switch (object.propertyType.name) {
            case 'Guesthouse':
                return house
            case 'Apartment':
                return apart
            case 'Condominium':
                return condo
            default:
                return stock
        }
    }

    return (
        <StyledListingGrid>
            {data.map((listing,index) => (
                <StyledListingsCard key={index}>
                    <img src={houseImg(listing)} alt='house img'></img>
                    <StyledListingsCardContent>
                        <p>{listing.name}</p>
                        <p className='listing-info'>NEIGHBORHOOD GROUP:</p>
                        <p>{listing.neighbourHood.neighbourHoodGroup.name}</p>
                        <p className='listing-info'>NEIGHBORHOOD:</p>
                        <p>{listing.neighbourHood.name}</p>
                        <p>ACCOMMODATES: {listing.accommodates}</p>
                        <p>MINIMUM NIGHTS: {listing.minimum_nights}</p>
                        {/* <p>ACTUAL PRICE: {listing.act_price}</p>
                        <p>OPTIMAL PRICE: {listing.opt_price}</p> */}
                        <p>REVIEWS: {listing.number_of_reviews}</p>
                        <p>{`OPTIMAL PRICE RANGE: $${Math.round(parseInt(listing.price || 50)*.95)}-${Math.round(parseInt(listing.price || 50)*1.05)}`}</p>
                    </StyledListingsCardContent>

                    <StyledLCBC>
                        <YourListingsModal listing={listing} houseImg={houseImg} handleDelete={handleDelete}>VIEW DETAILS</YourListingsModal>
                        
                        <StyledUpdateListingsLink to={{
                            pathname: "/update-listing/",
                            state: {listing}
                        }}>UPDATE LISTING</StyledUpdateListingsLink>
                    </StyledLCBC>
                    <img className='trash-icon' src={trash} alt='delete icon' onClick={(e) => handleDelete(e, listing, listing.listing_id)}></img>
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