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
        const { listing } = this.props

        return (
            <Modal open={open} onOpen={this.open} onClose={this.close} trigger={<Button>VIEW DETAILS</Button>} closeIcon>
                <Modal.Header>{listing.neighborhood}, {listing.neighborhood_group}</Modal.Header>
                <Modal.Content image scrolling>
                    {/* <StyledYLMContainer> */}
                        <Image wrapped size='medium' src={listing.img_url !== null ? listing.img_url : house} />
                    {/* </StyledYLMContainer> */}
                    <Modal.Description>
                        <Header>ADDRESS HERE
                            <Header.Subheader>Host Listing Number: #</Header.Subheader>
                        </Header>
                        <p>Cleaning Fee: $#</p>
                        <p>Security Deposit: $#</p>
                        <p>Extra People Fee: $#</p>
                        <hr></hr>
                        <p>Accomodation Max: #</p>
                        <p>Guests Allowed: #</p>
                        <hr></hr>
                        <p>Availability: # Days</p>
                        <p>Room Type: string</p>
                        <p>Bedrooms: #</p>
                        <p>Number of Beds: #</p>
                        <p>Bed Types: #/string</p>
                        <p>Bathrooms: #</p>
                        <p>Amenities: #</p>
                        <hr></hr>
                        <p>Cancellation Policy: string</p>
                    </Modal.Description>
                </Modal.Content>
                <Modal.Actions>
                    <StyledModalUpdateListingsLink as={ Link } to="/update-listing/" onClick={this.close} className='fluid'>UPDATE LISTING</StyledModalUpdateListingsLink>
                </Modal.Actions>
            </Modal>
        )
    }
}

export default YourListingsModal