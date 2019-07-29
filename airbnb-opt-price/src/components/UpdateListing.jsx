import React from 'react'
import { FormDiv, Form, FormLabel, FormInput, FormButton } from '../StyledComps'

const UpdateListing = (props) => {

    const handleSubmit = e => {
        e.preventDefault()
        console.log("Update Listing")
    }

    return (
        <div>
            <h1>Update Listing</h1>
            <div>
                <div>
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
                        <FormButton type='submit' onClick={handleSubmit}>UPDATE LISTING</FormButton>
                    </Form>
                </FormDiv>
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}

export default UpdateListing;