import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';

import { getLatLong } from '../getLatLong';

import { 
    getNeighborhoods, 
    getNeighborhoodGroups, 
    updateListing, 
    getBedTypes, 
    getRoomTypes, 
    getCancellationTypes,
    getPropertyTypes 
} from '../store/actions';

import { 
    AddListingDiv, 
    AddListingWrapper, 
    AddListingHeader, 
    // UploadImageDiv, 
    ListingFormTickDiv, 
    ListingFormTickLabel, 
    // UploadImageText, 
    ListingFormWrapper, 
    ListingFormDiv, 
    ListingForm, 
    ListingFormLabel, 
    ListingFormInputTickDiv, 
    ListingFormSelect, 
    ListingFormInputTick, 
    ListingFormInput, 
    ListingFormButton,
    ListDivs,
    ListFormNameDiv
} from '../StyledComps';

const UpdateListing = (props) => {
    const [listing, setListing] = useState(props.location.state.listing)

    const [updatedListing, setUpdatedListing] = useState(
        {    
            accommodates: listing.accommodates,
            bathrooms: listing.bathrooms,
            bedType: {
                bed_type_id: listing.bedType.bed_type_id,
            },
            bedrooms: listing.bedrooms,
            cancellationPolicy: {
                cancellation_policy_id: listing.cancellationPolicy.cancellation_policy_id,
            },
            cleaning_fee: listing.cleaning_fee,
            extra_people: listing.extra_people,
            guests_included: listing.guests_included,
            latitude: listing.latitude,
            longitude: listing.longitude,
            name: listing.name,
            neighbourHood: {
                neighbourhood_id: listing.neighbourHood.neighbourhood_id
            },
            roomType: {
                room_type_id: listing.roomType.room_type_id
            },
            security_deposit: listing.security_deposit
        }
    )

    const [selectedGroup, setSelectedGroup] = useState('')
    const [selectedHood, setSelectedHood] = useState('')
    const [amenitiesCount, setAmenitiesCount] = useState(0)
    const [chosenAmenities, setChosenAmenities] = useState([])

    const amenities = ['Wifi',  'Kitchen', 'Heating', 'Essentials', 'Washer', 'Hair dryer', 'Laptop friendly workspace', 'Hangers',
    'Iron', 'Shampoo', 'TV', 'Hot water', 'Family/kid friendly', 'Internet', 'Host greets you', 'Smoke detector',
    'Buzzer/wireless intercom', 'Lock on bedroom door', 'Refrigerator', 'Free street parking', 'Dishes and silverware',
    'Elevator', 'Bed linens', 'Cooking basics', 'Stove', 'Smoking allowed', 'Oven', 'First aid kit', 'Cable TV',
    'Coffee maker', 'Dryer', 'Dishwasher', 'Long term stays allowed', 'Pets allowed', 'Fire extinguisher',
    'Luggage dropoff allowed', 'Private entrance', 'Extra pillows and blankets']

    const handleSubmit = (e) => {
        e.preventDefault();
        props.updateListing(updatedListing, listing.listing_id, props.history)
        props.history.push('/your-listings')
    }

    const handleNeighborhoodChange = e => {
        setListing({ ...listing, neighbourHood: {neighbourhood_id: parseInt(e.target.value)}});
    }

    const handleRoomTypeChange = event => {
        setListing({...listing, roomType: {room_type_id: parseInt(event.target.value)}})
    }

    const handleBedTypeChange = event => {
        setListing({...listing, bedType: {bed_type_id: parseInt(event.target.value)}})
    }

    const handlePropertyTypeChange = event => {
        setListing({...listing, propertyType: {property_type_id: parseInt(event.target.value)}})
    }

    const handleCancellationChange = event => {
        setListing({...listing, cancellationPolicy: {cancellation_policy_id: parseInt(event.target.value)}})
    }

    const handleNeighborhoodGroupChange = e => {
        setSelectedGroup(e.target.value)
        props.neighborhoodGroup.map(selected => {
            if(selected.name === e.target.value){
                setSelectedHood(selected.neighbourHoods)
            }
        })
    };

    const handleChange = event => {
        if(event.target.min || event.target.max){
            if(event.target.value === '') {
                event.target.value =event.target.min
            }
            if(parseFloat(event.target.value) < parseFloat(event.target.min)) {
                event.target.value = event.target.min
            }
            if(parseFloat(event.target.value) > parseFloat(event.target.max)) {
                event.target.value = event.target.max;
            }
        }
        setUpdatedListing({ ...updatedListing, [event.target.name]: event.target.value });
    };

    const handleAmenitiesChange = event => {
        if(event.target.checked) {
            let tempArray = chosenAmenities
            tempArray.push(event.target.name)
            setAmenitiesCount(amenitiesCount + 1)
            setChosenAmenities(tempArray)
            setListing({ ...listing, 'amenities': amenitiesCount + 1});
        }
        else {
            setAmenitiesCount(amenitiesCount - 1)
            setListing({ ...listing, 'amenities': amenitiesCount - 1});
        }
    };
    
    useEffect(() => {
        props.getNeighborhoods();
        props.getNeighborhoodGroups();
        props.getBedTypes();
        props.getRoomTypes();
        props.getCancellationTypes();
        props.getPropertyTypes();
    },[])


    const latLongHandleChange = e =>{
        getLatLong(e.target.value, setListing, listing)
    }

    return (
        <AddListingDiv>
            <AddListingHeader>Update Listing</AddListingHeader>
                <AddListingWrapper>
                    <ListingFormWrapper>
                        <ListingFormDiv>
                        <ListingForm>
                        <ListFormNameDiv>
                        <ListingFormLabel>
                            Name of Listing:
                            <br />
                            <ListingFormInput
                            name='name' 
                            onChange={handleChange}
                            type='text'
                            defaultValue={listing.name}
                            />
                        </ListingFormLabel>
                        <ListingFormLabel>
                            Property Type:
                            <br />
                            <ListingFormSelect
                            name='property_type'
                            onChange={handlePropertyTypeChange}
                            defaultValue={listing.propertyType.name}
                            >
                                <option disabled>Select Property Type</option>
                                {
                                    props.propertyTypes.map(propertyType => {
                                        return (
                                            <option value={propertyType.property_type_id} key={propertyType.property_type_id}>{propertyType.name}</option>
                                        )
                                    })
                                }
                            </ListingFormSelect>
                        </ListingFormLabel>
                        </ListFormNameDiv>
                        <ListDivs>
                        <ListingFormLabel>
                            NEIGHBORHOOD GROUP:
                            <br />
                            <ListingFormSelect
                                required
                                name={selectedGroup}
                                onChange={handleNeighborhoodGroupChange}
                                defaultValue={listing.neighbourHood.neighbourHoodGroup.name}
                            >
                                <option disabled>CHOOSE YOUR NEIGHBORHOOD GROUP</option>
                                {props.neighborhoodGroup.map(group => {
                                    return (
                                            <option
                                                value={group.name} 
                                                key={group.neighbourhood_group_id}
                                            >
                                                {group.name}
                                            </option>
                                    )
                                })}
                            </ListingFormSelect>
                        </ListingFormLabel>
                        <ListingFormLabel>
                            NEIGHBORHOOD:
                            <br />
                            <ListingFormSelect
                                required
                                name='selectedHood'
                                onChange={handleNeighborhoodChange}
                                defaultValue={listing.neighbourHood.name}
                            >
                                <option disabled>CHOOSE YOUR NEIGHBORHOOD</option>

                                {!selectedHood ? null : selectedHood.map(each => <option value={each.neighbourhood_id} key={each.name}>{each.name}</option>)}
                                
                            </ListingFormSelect>
                        </ListingFormLabel>
                        <ListingFormLabel>
                            Address:
                            <br />
                            <ListingFormInput
                            name='address' 
                            placeholder=''
                            onChange={latLongHandleChange}
                            />
                        </ListingFormLabel>
                        <ListingFormLabel>
                            Current # of Listings:
                            <br />
                            <ListingFormInput
                            name='calculated_host_listing_count' 
                            defaultValue={listing.calculated_host_listing_count}
                            type='number'
                            min={0}
                            />
                        </ListingFormLabel>
                        </ListDivs>
                        <ListDivs>
                        <ListingFormLabel>
                            Cleaning Fee:
                            <br />
                            <ListingFormInput
                            name='cleaning_fee' 
                            onChange={handleChange}
                            defaultValue={listing.cleaning_fee}
                            type='number'
                            min={0}
                            />
                        </ListingFormLabel>
                        <ListingFormLabel>
                            Security Deposit:
                            <br />
                            <ListingFormInput
                            name='security_deposit' 
                            placeholder='$'
                            onChange={handleChange}
                            defaultValue={listing.security_deposit}
                            type='number'
                            min={0}
                            />
                        </ListingFormLabel>
                        <ListingFormLabel>
                            Extra People:
                            <br />
                            <ListingFormInput
                            name='extra_people' 
                            placeholder='Fee Per Person'
                            onChange={handleChange}
                            defaultValue={listing.extra_people}
                            type='number'
                            min={0}
                            />
                        </ListingFormLabel>
                        <ListingFormLabel>
                            Accommodates (1-20):
                            <br />
                            <ListingFormInput
                            name='accommodates'
                            onChange={handleChange}
                            defaultValue={listing.accommodates}
                            type='number'
                            min={1}
                            max={20}
                            >
                            </ListingFormInput>
                        </ListingFormLabel>
                        </ListDivs>
                        <ListDivs>
                        <ListingFormLabel>
                            Guests Included (1-16):
                            <br />
                            <ListingFormInput
                            name='guests_included'
                            onChange={handleChange}
                            defaultValue={listing.guests_included}
                            type='number'
                            min={1}
                            max={16}
                            >
                            </ListingFormInput>
                        </ListingFormLabel>
                        <ListingFormLabel>
                            Availability 365:
                            <br />
                            <ListingFormInput
                            name='availability_365' 
                            onChange={handleChange}
                            // defaultValue={1}
                            type='number'
                            min={1}
                            max={365}
                            />
                        </ListingFormLabel>
                        <ListingFormLabel>
                            Room Type:
                            <br />
                            <ListingFormSelect
                            name='room_type'
                            onChange={handleRoomTypeChange}
                            defaultValue={listing.roomType.name}
                            >
                                <option disabled>Select Room Type</option>
                                {
                                    props.roomTypes.map(roomType => {
                                        return (
                                            <option value={roomType.room_type_id} key={roomType.room_type_id}>{roomType.name}</option>
                                        )
                                    })
                                }
                            </ListingFormSelect>
                        </ListingFormLabel>
                        <ListingFormLabel>
                            # of Bedrooms (1-12):
                            <br />
                            <ListingFormInput
                            name='bedrooms'
                            onChange={handleChange}
                            defaultValue={listing.bedrooms}
                            type='number'
                            min={1}
                            max={12}
                            >
                            </ListingFormInput>
                        </ListingFormLabel>
                        </ListDivs>
                        <ListDivs>
                        <ListingFormLabel>
                            # of Beds (1-30):
                            <br />
                            <ListingFormInput
                            name='beds'
                            onChange={handleChange}
                            defaultValue={1}
                            type='number'
                            min={1}
                            max={30}
                            >
                            </ListingFormInput>
                        </ListingFormLabel>
                        <ListingFormLabel>
                            Bed Types:
                            <br />
                            <ListingFormSelect
                            name='bed_type'
                            onChange={handleBedTypeChange}
                            defaultValue={listing.bedType.name}
                            >
                                <option disabled>Select Bed Type</option>
                                {
                                    props.bedTypes.map(bedType => {
                                        return (
                                            <option value={bedType.bed_type_id} key={bedType.bed_type_id}>{bedType.name}</option>
                                        )
                                    })
                                }
                            </ListingFormSelect>
                        </ListingFormLabel>
                        <ListingFormLabel>
                            # of Bathrooms (1-10):
                            <br />
                            <ListingFormInput
                            name='bathrooms'
                            onChange={handleChange}
                            defaultValue={listing.bathrooms}
                            type='number'
                            min={1}
                            max={10}
                            >
                            </ListingFormInput>
                        </ListingFormLabel>
                        <ListingFormLabel>
                            Cancellation Policy:
                            <br />
                            <ListingFormSelect
                            name='cancellation_policy'
                            onChange={handleCancellationChange}
                            defaultValue={listing.cancellationPolicy.name}
                            >
                                <option disabled>Select Cancellation Policy</option>
                                {
                                    props.cancellationTypes.map(cancellationType => {
                                        const tempName = cancellationType.name.split('_').join(' ')
                                        return (
                                            <option value={cancellationType.cancellation_policy_id} key={cancellationType.cancellation_policy_id}>{tempName}</option>
                                        )
                                    })
                                }
                            </ListingFormSelect>
                        </ListingFormLabel>
                        </ListDivs>
                        <ListingFormLabel>
                            Amenities:
                            <br />
                            <ListingFormTickDiv>
                            {
                                amenities.map((amenitiy, index) => {
                                    return (
                                        <ListingFormInputTickDiv key={index}>
                                            <ListingFormInputTick type='checkbox' name={amenitiy} onChange={handleAmenitiesChange}/>
                                            <ListingFormTickLabel>{amenitiy}</ListingFormTickLabel>
                                        </ListingFormInputTickDiv>
                                    )
                                })
                            }
                            </ListingFormTickDiv>
                        </ListingFormLabel>
                        <ListingFormButton type='submit' onClick={handleSubmit}>UPDATE LISTING</ListingFormButton>
                    </ListingForm>
                    </ListingFormDiv>
                </ListingFormWrapper>
            </AddListingWrapper>
        </AddListingDiv>
    )
}

const mapStateToProps = (state) => {
    return{
        neighborhoodGroup: state.neighborhoodGroup,
        bedTypes: state.bedTypes,
        roomTypes: state.roomTypes,
        cancellationTypes: state.cancellationTypes,
        propertyTypes: state.propertyTypes
    }
}
export default connect(mapStateToProps, { getPropertyTypes, updateListing, getRoomTypes, getBedTypes, getNeighborhoods, getNeighborhoodGroups, getCancellationTypes })(UpdateListing)



//@@@@@@@@@@@@ IMAGE UPLOAD DIV JSX @@@@@@@@@@@@@//
/* <UploadImageDiv>
    <UploadImageText>
        <p className='plus-sign'>+</p>
        <p>UPLOAD IMAGE</p>
    </UploadImageText>
</UploadImageDiv> */