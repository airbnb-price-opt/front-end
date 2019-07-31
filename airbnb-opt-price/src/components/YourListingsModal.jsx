import React from 'react'
import { Header, Button, Modal, Image } from 'semantic-ui-react'

import house from '../assets/house.svg'
import 'semantic-ui-css/semantic.min.css'

const YourListingsModal = ({listing}) => {
    return (
        <Modal trigger={<Button>VIEW DETAILS</Button>} closeIcon>
            <Modal.Header>{listing.neighborhood}, {listing.neighborhood_group}</Modal.Header>
            <Modal.Content image scrolling>
                <Image wrapped size='medium' src={listing.img_url !== null ? listing.img_url : house} />
                <Modal.Description>
                    <Header>ADDRESS HERE</Header>
                    <p>Cleaning Fee: </p>
                    <p>Security Deposit: </p>
                    <p>Extra People Fee: </p>
                    <hr></hr>
                    <p>Accomodation Max: </p>
                    <p>Guests Allowed: </p>
                    <hr></hr>
                    <p>Availability: # Days</p>
                    <p>Room Type: </p>
                    <p>Bedrooms: </p>
                    <p>Number of Beds: </p>
                    <p>Bed Types: </p>
                    <p>Bathrooms: </p>
                    <p>Amenities: </p>
                    <hr></hr>
                    <p>Cancellation Policy: </p>
                </Modal.Description>
            </Modal.Content>
        </Modal>
    )
}

export default YourListingsModal