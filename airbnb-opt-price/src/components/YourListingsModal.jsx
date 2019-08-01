import React from 'react'
import { Link } from 'react-router-dom'
import { Header, Button, Modal, Image } from 'semantic-ui-react'

import house from '../assets/house.svg'

import { StyledModalUpdateListingsLink, StyledYLMContainer } from '../StyledComps'
import 'semantic-ui-css/semantic.min.css'

class YourListingsModal extends React.Component {
    state = { open: false }

    open = () => this.setState({ open: true })
    close = () => this.setState({ open: false })

    render() {
        const { open } = this.state
        const { listing, DeleteListing } = this.props

        return (
            <Modal open={open} onOpen={this.open} onClose={this.close} trigger={<Button>VIEW DETAILS</Button>} closeIcon>
                <Modal.Header>{listing.neighbourHood.name}, {listing.neighbourHood.neighbourHoodGroup.name}</Modal.Header>
                <Modal.Content image scrolling>
                    <Image wrapped size='medium' src={house} />
                        {/* <Image wrapped size='medium' src={listing.img_url !== null ? listing.img_url : house} /> */}
                    <Modal.Description>
                        <Header>ADDRESS HERE
                            <Header.Subheader>Host Listing Number: {listing.listing_id}</Header.Subheader>
                        </Header>
                        <p>Cleaning Fee: ${listing.cleaning_fee}.00</p>
                        <p>Security Deposit: ${listing.security_deposit}.00</p>
                        <p>Extra People Fee: ${listing.extra_people}.00</p>
                        <hr></hr>
                        <p>Accommodates: {listing.accommodates}</p>
                        <p>Guests Included: {listing.guests_included}</p>
                        <hr></hr>
                        <p>Minumum Nights: {listing.minimum_nights}</p>
                        <p>Maximum Nights: {listing.maximum_nights}</p>
                        <hr></hr>
                        <p>Property: {listing.propertyType.name}</p>
                        <p>Room Type: {listing.roomType.name}</p>
                        <p>Bedrooms: {listing.bedrooms}</p>
                        <p>Bed Types: {listing.bedType.name}</p>
                        <p>Bathrooms: {listing.bathrooms}</p>
                        <p>Amenities: #</p>
                        <hr></hr>
                        <p>Cancellation Policy: {listing.cancellationPolicy.name.replace(/_/g, ' ')}</p>
                    </Modal.Description>
                </Modal.Content>
                <Modal.Actions>
                    <StyledModalUpdateListingsLink as={ Link } to="/update-listing/" onClick={this.close} className='fluid'>UPDATE</StyledModalUpdateListingsLink>
                    <Button negative onClick={() => DeleteListing(listing)}>DELETE</Button>
                    <Button color='blue' onClick={this.close}>CLOSE</Button>
                </Modal.Actions>
            </Modal>
        )
    }
}

export default YourListingsModal