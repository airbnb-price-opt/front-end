import React from 'react'

import trash from '../assets/trash.svg'
import stock from '../assets/house.svg'
import { Houses, Aparts, Condos } from '../ImageData'

import YourListingsModal from './YourListingsModal'
import { StyledListingsCard, StyledAddListingsLink, StyledUpdateListingsLink, StyledListingsCardContent, StyledLCBC, StyledListingGrid } from '../StyledComps'

const YourListingsCard = (props) => {
    const { data, handleDelete } = props

    function houseImg(object) {
        switch (object.propertyType.name) {
            case 'Guesthouse':
                return Houses[Math.floor(Math.random()*Houses.length)]
            case 'Apartment':
                return Aparts[Math.floor(Math.random()*Aparts.length)]
            case 'Condominium':
                return Condos[Math.floor(Math.random()*Condos.length)]
            default:
                return stock
        }
    }

    return (
        <StyledListingGrid>
            {data.map((listing,index) => {
                if(!listing.neighbourHood.neighbourHoodGroup) return null;
                let img_url = houseImg(listing)
                return (
                
                <StyledListingsCard key={index}>
                    <img src={img_url} alt='house img'></img>
                    <h1>{listing.name}</h1>
                    <StyledListingsCardContent>
                        <p className='listing-info'>NEIGHBORHOOD GROUP:</p>
                        <p>{listing.neighbourHood.neighbourHoodGroup.name}</p>
                        <p className='listing-info'>NEIGHBORHOOD:</p>
                        <p>{listing.neighbourHood.name}</p>
                        <p>ACCOMMODATES: {listing.accommodates}</p>
                        <p>MINIMUM NIGHTS: {listing.minimum_nights}</p>
                        <p>REVIEWS: {listing.number_of_reviews}</p>
                        <p>OPTIMAL PRICE RANGE: ${Math.round(parseInt(listing.price || 50)*.95)}-${Math.round(parseInt(listing.price || 50)*1.05)}</p>
                    </StyledListingsCardContent>

                    <StyledLCBC>
                        <YourListingsModal listing={listing} img_url={img_url} handleDelete={handleDelete}>VIEW DETAILS</YourListingsModal>
                        
                        <StyledUpdateListingsLink to={{
                            pathname: "/update-listing/",
                            state: {listing}
                        }}>UPDATE LISTING</StyledUpdateListingsLink>
                    </StyledLCBC>
                    <img className='trash-icon' src={trash} alt='delete icon' onClick={(e) => handleDelete(e, listing, listing.listing_id)}></img>
                </StyledListingsCard>
            )})}

            <StyledAddListingsLink to="/add-listing/">
                <p className='plus-sign'>+</p>
                <p>ADD LISTING</p>
            </StyledAddListingsLink>
        </StyledListingGrid>
    )
}

export default YourListingsCard