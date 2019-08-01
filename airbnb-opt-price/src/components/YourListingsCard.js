import React from 'react'

import trash from '../assets/trash.svg'
import house from '../assets/house.svg'

import YourListingsModal from './YourListingsModal'
import { StyledListingsCard, StyledAddListingsLink, StyledUpdateListingsLink, StyledListingsCardContent, StyledLCBC, StyledListingGrid } from '../StyledComps'

const YourListingsCard = (props) => {
    const { data, EditListing, DeleteListing, listingEdit, setListingEdit } = props

    return (
        <StyledListingGrid>
            {data.map((listing,index) => (
                <StyledListingsCard key={index}>
                    <img src={house} alt='house img'></img>
                    {/* <img src={listing.img_url !== null ? listing.img_url : house} alt='house img'></img> */}
                    {/* <img src={((houseImgs[index].webformatURL !== null) && (houseImgs[index].webformatURL !== undefined) && (houseImgs[index].webformatURL !== false) && (houseImgs[index].webformatURL !== NaN)) ? houseImgs[index].webformatURL : house} alt='house img'></img> */}
                    <StyledListingsCardContent>
                        <p className='listing-info'>NEIGHBORHOOD GROUP:</p>
                        <p>{listing.neighbourHood.neighbourHoodGroup.name}</p>
                        <p className='listing-info'>NEIGHBORHOOD:</p>
                        <p>{listing.neighbourHood.name}</p>
                        <p>ACCOMMODATES: {listing.accommodates}</p>
                        <p>MINIMUM NIGHTS: {listing.minimum_nights}</p>
                        {/* <p>ACTUAL PRICE: {listing.act_price}</p> */}
                        {/* <p>OPTIMAL PRICE: {listing.opt_price}</p> */}
                        <p>REVIEWS: {listing.number_of_reviews}</p>
                    </StyledListingsCardContent>
                    <StyledLCBC>
                        <YourListingsModal listing={listing} DeleteListing={DeleteListing}>VIEW DETAILS</YourListingsModal>
                        <StyledUpdateListingsLink to={"/update-listing/"} onClick={setListingEdit(listing)}>UPDATE LISTING</StyledUpdateListingsLink>
                    </StyledLCBC>
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