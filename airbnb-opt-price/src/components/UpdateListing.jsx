import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';

import { AddListingDiv, AddListingWrapper, AddListingHeader, UploadImageDiv, UploadImageText, ListingFormWrapper, ListingFormDiv, ListingForm, ListingFormLabel, ListingFormInput, ListingFormButton } from '../StyledComps'
import { getNeighborhoods, getNeighborhoodGroups } from '../store/actions';

const UpdateListing = (props) => {
    const [listing, setListing] = useState({address: '', guests: 0, nights: 0})

    const handleChange = event => {
        setListing({ ...listing, [event.target.name]: event.target.value });
        console.log(event.target.name, event.target.value)
    };

    const handleSubmit = e => {
        e.preventDefault()
        console.log("Updated Listing", listing)
    }

    useEffect(() => {
        props.getNeighborhoods();
        props.getNeighborhoodGroups();
    }, [])
    
    return (
        <AddListingDiv>
            <AddListingHeader>Update Listing</AddListingHeader>
            <AddListingWrapper>
                <ListingFormWrapper>
                <ListingFormDiv>
                    <ListingForm>
                        <ListingFormLabel>
                            ADDRESS:
                            <br />
                            <ListingFormInput
                            name='address' 
                            placeholder='Address'
                            onChange={handleChange}
                            />
                        </ListingFormLabel>
                        <ListingFormLabel>
                            GUESTS:
                            <br />
                            <ListingFormInput
                            name='guests' 
                            placeholder='Number Of Guests'
                            onChange={handleChange}
                            type='number'
                            />
                        </ListingFormLabel>
                        <ListingFormLabel>
                            MINIMUM NIGHTS:
                            <br />
                            <ListingFormInput
                            name='nights' 
                            placeholder='Number of Minimum Nights'
                            onChange={handleChange}
                            type='number'
                            />
                        </ListingFormLabel>
                        <ListingFormButton type='submit' onClick={handleSubmit}>UPDATE LISTING</ListingFormButton>
                    </ListingForm>
                </ListingFormDiv>
                </ListingFormWrapper>
                <UploadImageDiv>
                    <UploadImageText>
                        <p className='plus-sign'>+</p>
                        <p>UPLOAD IMAGE</p>
                    </UploadImageText>
                </UploadImageDiv>
            </AddListingWrapper>
        </AddListingDiv>
    )
}

const mapStateToProps = (state) => {
    return{
        neighborhoods: state.neighborhoods,
        neighborhoodGroups: state.neighborhoodGroups
    }
}
export default connect(mapStateToProps, { getNeighborhoods, getNeighborhoodGroups })(UpdateListing)