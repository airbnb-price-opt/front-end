import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getLatLong } from '../getLatLong'
import { getBedTypes } from '../store/actions';

import { AddListingDiv, StyledOption, AddListingWrapper, AddListingHeader, UploadImageDiv, ListingFormTickDiv, ListingFormTickLabel, UploadImageText, ListingFormWrapper, ListingFormDiv, ListingForm, ListingFormLabel, ListingFormInputTickDiv, ListingFormSelect, ListingFormInputTick, ListingFormInput, ListingFormButton } from '../StyledComps'


const AddListing = (props) => {
    const [listing, setListing] = useState(
        {address: '',cleaning_fee: 0,security_deposit: 0,extra_people: 0, accommodates: 1, guests_included: 1,
        availability_365: 0, room_type: '', bedrooms: 1, beds: 1, bed_type: '', bathrooms: 1,cancellation_policy: '',
        calculated_host_listing_count: 0, amenities: 0
        })
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

    console.log('GLOBAL SELECTED GROUP', selectedGroup)
    console.log('Chosen HoodS:', selectedHood)
    
    
    const handleSubmit = event => {
        event.preventDefault()
        console.log("Updated Listing", listing)
    }

    const handleChange = event => {
        if(event.target.min && event.target.max){
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
        setListing({ ...listing, [event.target.name]: event.target.value });
        console.log(event.target.name, event.target.value)
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
        props.getBedTypes();
    },[])
    

    const handleNeighborhoodChange = e => {

        // setListing({ ...listing, [event.target.name]: event.target.value });
        setSelectedGroup(e.target.value)
        
        props.neighborhoodGroup.map(selected => {
            if(selected.name === e.target.value){
                setSelectedHood(selected.neighbourHood)
            }
        })

    };

    const latLongHandleChange = e =>{
        if (e.target.name === "address"){
            console.log("lat long:",getLatLong(e.target.value));
        }
    }

    console.log('USE TO POPULATE DROPDOWN', props.bedTypes)

    return (
        <AddListingDiv>
            <AddListingHeader>Add Listing</AddListingHeader>
            <AddListingWrapper>
                <ListingFormWrapper>
                <ListingFormDiv>
                    <ListingForm>
                        <ListingFormLabel>
                            NEIGHBORHOOD GROUP:
                            <br />
                            <ListingFormSelect
                                required
                                name='selectedGroup' 
                                onChange={handleNeighborhoodChange}
                            >
                                <option value="CHOOSE YOUR NEIGHBORHOOD GROUP..." disabled selected='selected'>
                                    CHOOSE YOUR NEIGHBORHOOD GROUP...
                                </option>
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
                            >
                                <option value="" disabled selected>
                                    CHOOSE YOUR NEIGHBORHOOD...
                                </option>

                                {!selectedHood ? null : selectedHood.map(each => <option key={each.name}>{each.name}</option>)}
                                
                            </ListingFormSelect>
                        </ListingFormLabel>
                        <ListingFormLabel>
                            Address:
                            <br />
                            <ListingFormInput
                            name='address' 
                            placeholder=''
                            // value={props.address}
                            onChange={latLongHandleChange}
                            />
                        </ListingFormLabel>
                        <ListingFormLabel>
                            Cleaning Fee:
                            <br />
                            <ListingFormInput
                            name='cleaning_fee' 
                            placeholder='$'
                            type='number'
                            onChange={handleChange}
                            />
                        </ListingFormLabel>
                        <ListingFormLabel>
                            Security Deposit:
                            <br />
                            <ListingFormInput
                            name='security_deposit' 
                            placeholder='$'
                            type='number'
                            onChange={handleChange}
                            />
                        </ListingFormLabel>
                        <ListingFormLabel>
                            Extra People:
                            <br />
                            <ListingFormInput
                            name='extra_people' 
                            placeholder='Fee Per Person'
                            type='number'
                            onChange={handleChange}
                            />
                        </ListingFormLabel>
                        <ListingFormLabel>
                            Accommodates:
                            <br />
                            <ListingFormInput
                            name='accommodates'
                            onChange={handleChange}
                            defaultValue={1}
                            type='number'
                            min={1}
                            max={20}
                            >
                                {/* {
                                    accommodatesRange.map(number => {
                                        return (
                                            <StyledOption key={number} value={number}>{number}</StyledOption>
                                        )
                                    })
                                } */}
                            </ListingFormInput>
                        </ListingFormLabel>
                        <ListingFormLabel>
                            Guests Included:
                            <br />
                            <ListingFormSelect
                            name='guests_included'
                            onChange={handleChange}
                            defaultValue='1'
                            >
                                {/* {
                                    guestsRange.map(number => {
                                        return (
                                            <StyledOption key={number} value={number}>{number}</StyledOption>
                                        )
                                    })
                                } */}
                            </ListingFormSelect>
                        </ListingFormLabel>
                        <ListingFormLabel>
                            Availability 365:
                            <br />
                            <ListingFormInput
                            name='availability_365' 
                            placeholder='Number of Days Available through year'
                            type='number'
                            onChange={handleChange}
                            />
                        </ListingFormLabel>
                        <ListingFormLabel>
                            Room Type:
                            <br />
                            <ListingFormSelect
                            name='room_type'
                            onChange={handleChange}
                            defaultValue='Select Room Type'
                            >
                                <option disabled>Select Room Type</option>
                                <option value='entire_home_apt'>Entire Home/Apt</option>
                                <option value='private_room'>Private Room</option>
                                <option value='shared_room'>Shared Room</option>
                            </ListingFormSelect>
                        </ListingFormLabel>
                        <ListingFormLabel>
                            # of Bedrooms:
                            <br />
                            <ListingFormSelect
                            name='bedrooms'
                            onChange={handleChange}
                            defaultValue='1'
                            >
                                {/* {
                                    bedroomRange.map(number => {
                                        return (
                                            <StyledOption key={number} value={number}>{number}</StyledOption>
                                        )
                                    })
                                } */}
                            </ListingFormSelect>
                        </ListingFormLabel>
                        <ListingFormLabel>
                            # of Beds:
                            <br />
                            <ListingFormSelect
                            name='beds'
                            onChange={handleChange}
                            defaultValue='1'
                            >
                                {/* {
                                    bedRange.map(number => {
                                        return (
                                            <StyledOption key={number} value={number}>{number}</StyledOption>
                                        )
                                    })
                                } */}
                            </ListingFormSelect>
                        </ListingFormLabel>
                        <ListingFormLabel>
                            Bed Types:
                            <br />
                            <ListingFormSelect
                            name='bed_type'
                            onChange={handleChange}
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
                            # of Bathrooms:
                            <br />
                            <ListingFormSelect
                            name='bathrooms'
                            onChange={handleChange}
                            defaultValue='1'
                            >
                                {/* {
                                    bathroomRange.map(number => {
                                        return (
                                            <StyledOption key={number} value={number}>{number}</StyledOption>
                                        )
                                    })
                                } */}
                            </ListingFormSelect>
                        </ListingFormLabel>
                        <ListingFormLabel>
                            Cancellation Policy:
                            <br />
                            <ListingFormSelect
                            name='cancellation_policy'
                            onChange={handleChange}
                            defaultValue='Select Cancellation Policy'
                            >
                                <option disabled>Select Cancellation Policy</option>
                                <option value='strict_14_with_grace_period'>Strict 14 w/ Grace Period</option>
                                <option value='flexible'>Flexible</option>
                                <option value='moderate'>Moderate</option>
                                <option value='super_strict_30'>Super Strict 30</option>
                                <option value='super_strict_60'>Super Strict 60</option>
                            </ListingFormSelect>
                        </ListingFormLabel>
                        <ListingFormLabel>
                            Current # of Listings:
                            <br />
                            <ListingFormInput
                            name='calculated_host_listing_count' 
                            placeholder=''
                            type='number'
                            onChange={handleChange}
                            />
                        </ListingFormLabel>
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
                <UploadImageDiv>
                    <UploadImageText>
                        <p className='plus-sign'>+</p>
                        <p>UPLOAD IMAGE</p>
                    </UploadImageText>
                </UploadImageDiv>
            </AddListingWrapper>
        </AddListingDiv>
    )
}

const mapStateToProps = (state) => {
    return{
        neighborhoodGroup: state.neighborhoodGroup,
        bedTypes: state.bedTypes
    }
}

export default connect(mapStateToProps, { getBedTypes })(AddListing);