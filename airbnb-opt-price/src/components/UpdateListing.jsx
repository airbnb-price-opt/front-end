import React from 'react'
import { AddListingDiv, AddListingWrapper, AddListingHeader, UploadImageDiv, UploadImageText, ListingFormWrapper, ListingFormDiv, ListingForm, ListingFormLabel, ListingFormInput, ListingFormButton } from '../StyledComps'

const UpdateListing = (props) => {

    const handleSubmit = e => {
        e.preventDefault()
        console.log("Update Listing")
    }

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
                            <ListingFormInput />
                        </ListingFormLabel>
                        <ListingFormLabel>
                            GUESTS:
                            <br />
                            <ListingFormInput />
                        </ListingFormLabel>
                        <ListingFormLabel>
                            MINIMUM NIGHTS:
                            <br />
                            <ListingFormInput />
                        </ListingFormLabel>
                        <ListingFormButton type='submit' onClick={handleSubmit}>UPDATE LISTING</ListingFormButton>
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

export default UpdateListing;