import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { getLatLong } from '../getLatLong';

import { 
    getNeighborhoods, 
    getNeighborhoodGroups, 
    addListing, 
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

const AddListing = (props) => {

    const [listing, setListing] = useState(
        {
            amenities: 0,
            accommodates: 0,
            bathrooms: 0,
            bedType: {
                bed_type_id: 0,
            },
            bedrooms: 0,
            cancellationPolicy: {
                cancellation_policy_id: 0,
            },
            cleaning_fee: 0,
            extra_people: 0,
            guests_included: 0,
            latitude: 0,
            longitude: 0,
            name: '',
            neighbourHood: {
                neighbourhood_id: 0
            },
            roomType: {
                room_type_id: 0
            },
            propertyType: {
                property_type_id: 0
            },
            security_deposit: 0
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
        props.addListing(listing, props.history)
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

    const handleNeighborhoodChange = e => {
        setListing({ ...listing, neighbourHood: {neighbourhood_id: parseInt(e.target.value)}});
    }

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
            if(event.target.name === 'name'){
                setListing({ ...listing, [event.target.name]: event.target.value });
            }
            else if(event.target.name === 'bathrooms'){
                setListing({ ...listing, [event.target.name]: parseInt(event.target.value) });
            }
            else {
                setListing({ ...listing, [event.target.name]: parseInt(event.target.value) });
            }
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
            <AddListingHeader>Add Listing</AddListingHeader>
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
                            />
                        </ListingFormLabel>
                        <ListingFormLabel>
                            Property Type:
                            <br />
                            <ListingFormSelect
                            name='property_type'
                            onChange={handlePropertyTypeChange}
                            defaultValue='Select Property Type'
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
                                defaultValue="CHOOSE YOUR NEIGHBORHOOD GROUP"
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
                                defaultValue="CHOOSE YOUR NEIGHBORHOOD"
                            >
                                <option disabled>CHOOSE YOUR NEIGHBORHOOD</option>

                                {!selectedHood ? null : selectedHood.map(each => <option value={each.neighbourhood_id} key={each.name}>{each.name}</option>)}
                                
                            </ListingFormSelect>
                        </ListingFormLabel>
                        <ListingFormLabel>
                            Address:
                            <br />
                            <ListingFormInput
                            name='name' 
                            onChange={latLongHandleChange}
                            type='text'
                            />
                        </ListingFormLabel>
                        <ListingFormLabel>
                            Current # of Listings:
                            <br />
                            <ListingFormInput
                            name='calculated_host_listing_count' 
                            defaultValue={0}
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
                            // placeholder='$'
                            onChange={handleChange}
                            defaultValue={0}
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
                            defaultValue={0}
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
                            defaultValue={0}
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
                            defaultValue={1}
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
                            defaultValue={1}
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
                            defaultValue={1}
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
                            defaultValue='Select Room Type'
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
                            defaultValue={1}
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
                            defaultValue='Select Bed Type'
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
                            defaultValue={1}
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
                            defaultValue='Select Cancellation Policy'
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
                        <ListingFormButton type='submit' onClick={handleSubmit}>ADD LISTING</ListingFormButton>
                    </ListingForm>
                </ListingFormDiv>
                </ListingFormWrapper>
                {/* <UploadImageDiv>
                    <UploadImageText>
                        <p className='plus-sign'>+</p>
                        <p>UPLOAD IMAGE</p>
                    </UploadImageText>
                </UploadImageDiv> */}
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

export default connect(mapStateToProps, 
    { 
        getNeighborhoods, 
        getNeighborhoodGroups,
        addListing, 
        getCancellationTypes, 
        getRoomTypes, 
        getBedTypes,
        getPropertyTypes 
    }
)(AddListing);

//POST LISTING OBJECT DATA STRUCTURE
//         {
//             accommodates: 0,
//             bathrooms: 0,
//             bedType: {
//               bed_type_id: 0,
//               listings: [null],
//               name: ''
//             },
//             bedrooms: 0,
//             cancellationPolicy: {
//               cancellation_policy_id: 0,
//               listings: [null],
//               name: '',
//             },
//             cleaning_fee: 0,
//             extra_people: 0,
//             guests_included: 0,
//             has_availability: true,
//             latitude: 0,
//             listing_id: 0,
//             longitude: 0,
//             maximum_nights: 0,
//             minimum_nights: 0,
//             name: '',
//             neighbourHood: {
//               listings: [null],
//               name: '',
//               neighbourHoodGroup: {
//                 name: '',
//                 neighbourHoods: [null],
//                 neighbourhood_group_id: 0
//               },
//               neighbourhood_id: 0
//             },
//             number_of_reviews: 0,
//             price: 0,
//             propertyType: {
//               listings: [null],
//               name: '',
//               property_type_id: 0
//             },
//             review_scores_cleanliness: 0,
//             review_scores_communication: 0,
//             review_scores_location: 0,
//             review_scores_rating: 0,
//             reviews_per_month: 0,
//             roomType: {
//               listings: [null],
//               name: '',
//               room_type_id: 0
//             },
//             security_deposit: 0
//         }
//     )