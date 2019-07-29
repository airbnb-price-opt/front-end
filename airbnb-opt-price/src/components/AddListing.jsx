import React, { useState } from 'react'
import { AddListingDiv, AddListingWrapper, AddListingHeader, UploadImageDiv, UploadImageText, ListingFormWrapper, ListingFormDiv, ListingForm, ListingFormLabel, ListingFormInput, ListingFormButton } from '../StyledComps'

const AddListing = (props) => {
    const [listing, setListing] = useState({address: '', guests: 0, nights: 0})

    const handleChange = event => {
        setListing({ ...listing, [event.target.name]: event.target.value });
        console.log(event.target.name, event.target.value)
    };

    const handleSubmit = e => {
        e.preventDefault()
        console.log("Added Listing", listing)
    }

    return (
        <AddListingDiv>
            <AddListingHeader>Add Listing</AddListingHeader>
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
                        <ListingFormButton type='submit' onClick={handleSubmit}>ADD LISTING</ListingFormButton>
                    </ListingForm>
                </ListingFormDiv>
                </ListingFormWrapper>
                <UploadImageDiv>
                    <UploadImageText>Upload Image</UploadImageText>
                </UploadImageDiv>
            </AddListingWrapper>
        </AddListingDiv>
    )
}

export default AddListing;