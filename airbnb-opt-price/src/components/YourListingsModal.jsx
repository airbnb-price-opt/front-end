import React from 'react'
import { Link } from 'react-router-dom'
import { Header, Button, Modal, Image } from 'semantic-ui-react'

import RequestAddress from './RequestAddress'

import { StyledModalUpdateListingsLink } from '../StyledComps'
import 'semantic-ui-css/semantic.min.css'

class YourListingsModal extends React.Component {
    state = { open: false }

    open = () => this.setState({ open: true })
    close = () => this.setState({ open: false })

    render() {
        const { open } = this.state
        const { listing, img_url, handleDelete } = this.props

        return (
            <Modal
                open={open}
                onOpen={this.open}
                onClose={this.close}
                trigger={<Button>VIEW DETAILS</Button>}
                closeIcon
            >
                <Modal.Header>{listing.name}</Modal.Header>
                <Modal.Content image scrolling>
                    <Image wrapped size='medium' src={img_url} />
                    <Modal.Description>
                        <RequestAddress listing={listing}/>
                        <p><b>CLEANING FEE:</b> ${listing.cleaning_fee}.00</p>
                        <p><b>SECURITY DEPOSIT:</b> ${listing.security_deposit}.00</p>
                        <p><b>EXTRA PERSONS FEE:</b> ${listing.extra_people}.00</p>
                        <hr></hr>
                        <p><b>ACCOMMODATES:</b> {listing.accommodates}</p>
                        <p><b>GUESTS INCLUDED:</b> {listing.guests_included}</p>
                        <hr></hr>
                        <p><b>MINUMUM NIGHTS:</b> {listing.minimum_nights}</p>
                        <p><b>MAXIMUM NIGHTS:</b> {listing.maximum_nights}</p>
                        <hr></hr>
                        <p><b>PROPERTY:</b> {listing.propertyType.name.toUpperCase()}</p>
                        <p><b>ROOM TYPE:</b> {listing.roomType.name.toUpperCase()}</p>
                        <p><b>BEDROOMS:</b> {listing.bedrooms}</p>
                        <p><b>BED TYPES:</b> {listing.bedType.name.toUpperCase()}</p>
                        <p><b>BATHROOMS:</b> {listing.bathrooms}</p>
                        <p><b>AMENITIES:</b> {listing.amenities}</p>
                        <hr></hr>
                        <p><b>CANCELLATION POLICY:</b> {listing.cancellationPolicy.name.replace(/_/g, ' ').toUpperCase()}</p>
                        <p><b>OPTIMAL PRICE RANGE:</b> ${Math.round(parseInt(listing.price || 50)*.95)}-${Math.round(parseInt(listing.price || 50)*1.05)}</p>
                    </Modal.Description>
                </Modal.Content>
                <Modal.Actions>
                    <StyledModalUpdateListingsLink
                        as={ Link }
                        to={{pathname:"/update-listing/", state: {listing}}}
                        onClick={this.close}
                        className='fluid'>
                        UPDATE
                    </StyledModalUpdateListingsLink>
                    <Button negative onClick={(e) => handleDelete(e, listing, listing.listing_id)}>DELETE</Button>
                    <Button color='blue' onClick={this.close}>CLOSE</Button>
                </Modal.Actions>
            </Modal>
        )
    }
}

export default YourListingsModal