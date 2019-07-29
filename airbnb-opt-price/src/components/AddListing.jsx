import React from 'react'
import { FormDiv, Form, FormLabel, FormInput, FormButton } from '../StyledComps'

const AddListing = (props) => {

    const handleSubmit = e => {
        e.preventDefault()
        console.log("Add Listing")
    }

    return (
        <FormDiv>
            <Form>
                <FormLabel>
                    ADDRESS:
                    <br />
                    <FormInput />
                </FormLabel>
                <FormLabel>
                    GUESTS:
                    <br />
                    <FormInput />
                </FormLabel>
                <FormLabel>
                    MINIMUM NIGHTS:
                    <br />
                    <FormInput />
                </FormLabel>
                <FormButton type='submit' onClick={handleSubmit}>ADD LISTING</FormButton>
            </Form>
        </FormDiv>
    )
}

export default AddListing;