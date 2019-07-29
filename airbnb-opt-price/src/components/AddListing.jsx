import React from 'react'
import { AddListingDiv, AddListingWrapper, AddListingHeader, UploadImageDiv, UploadImageText, ListingFormWrapper, ListingFormDiv, ListingForm, ListingFormLabel, ListingFormInput, ListingFormButton } from '../StyledComps'

const AddListing = (props) => {

    const handleSubmit = e => {
        e.preventDefault()
        console.log("Add Listing")
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