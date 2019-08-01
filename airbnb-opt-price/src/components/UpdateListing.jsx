import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';

import { AddListingDiv, StyledOption, AddListingWrapper, AddListingHeader, UploadImageDiv, ListingFormTickDiv, ListingFormTickLabel, UploadImageText, ListingFormWrapper, ListingFormDiv, ListingForm, ListingFormLabel, ListingFormInputTickDiv, ListingFormSelect, ListingFormInputTick, ListingFormInput, ListingFormButton } from '../StyledComps'
import { updateListing, getNeighborhoods, getNeighborhoodGroups, getBedTypes, getRoomTypes, getCancellationTypes } from '../store/actions';

const UpdateListing = (props) => {
    const [listing, setListing] = useState(
        {address: '',cleaning_fee: 0,security_deposit: 0,extra_people: 0, accommodates: 0, guests_included: 0,
        availability_365: 0, room_type: '', bedrooms: 0, beds: 0, bed_type: '', bathrooms: 0,cancellation_policy: '',
        calculated_host_listing_count: 0, amenities: 0
        })
    const [amenitiesCount, setAmenitiesCount] = useState(0);
    const [chosenAmenities, setChosenAmenities] = useState([]);

    const amenities = ['Wifi',  'Kitchen', 'Heating', 'Essentials', 'Washer', 'Hair dryer', 'Laptop friendly workspace', 'Hangers',
    'Iron', 'Shampoo', 'TV', 'Hot water', 'Family/kid friendly', 'Internet', 'Host greets you', 'Smoke detector',
    'Buzzer/wireless intercom', 'Lock on bedroom door', 'Refrigerator', 'Free street parking', 'Dishes and silverware',
    'Elevator', 'Bed linens', 'Cooking basics', 'Stove', 'Smoking allowed', 'Oven', 'First aid kit', 'Cable TV',
    'Coffee maker', 'Dryer', 'Dishwasher', 'Long term stays allowed', 'Pets allowed', 'Fire extinguisher',
    'Luggage dropoff allowed', 'Private entrance', 'Extra pillows and blankets']

    const guestsRange = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
    const accommodatesRange = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
    const bedroomRange = [1,2,3,4,5,6,7,8,9,10,11,12]
    const bedRange = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]
    const bathroomRange = [1,1.5,2,2.5,3,3.5,4,4.5,5,5.5,6,6.5,7,7.5,8,8.5,9,9.5,10]

    const [selectedGroup, setSelectedGroup] = useState('')
    const [selectedHood, setSelectedHood] = useState('')

    const handleChange = event => {
        if(event.target.min && event.target.max){
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

    const handleNeighborhoodChange = e => {

        // setListing({ ...listing, [event.target.name]: event.target.value });
        setSelectedGroup(e.target.value)
        
        props.neighborhoodGroup.map(selected => {
            if(selected.name === e.target.value){
                setSelectedHood(selected.neighbourHood)
            }
        })

    };

    const handleSubmit = e => {
        e.preventDefault()
        props.updateListing(listing, listing.listing_id, props.history);
        console.log("Updated Listing", listing)
        console.log(chosenAmenities)
    }

    useEffect(() => {
        props.getNeighborhoods();
        props.getNeighborhoodGroups();
        props.getBedTypes();
        props.getRoomTypes();
        props.getCancellationTypes();
    }, [])

    return (
        <AddListingDiv>
            <AddListingHeader>Update Listing</AddListingHeader>
                <AddListingWrapper>
                    <ListingFormWrapper>
                        <ListingFormDiv>
                            <ListingForm>
                                <div>
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
                                        onChange={handleChange}
                                        />
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
                                </div>
                                <div>
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
                                </div>
                                <div>
                                    <ListingFormLabel>
                                        Guests Included:
                                        <br />
                                        <ListingFormSelect
                                        name='guests_included'
                                        onChange={handleChange}
                                        defaultValue='1'
                                        >
                                            {
                                                guestsRange.map(number => {
                                                    return (
                                                        <StyledOption key={number} value={number}>{number}</StyledOption>
                                                    )
                                                })
                                            }
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
                                            {
                                                bedroomRange.map(number => {
                                                    return (
                                                        <StyledOption key={number} value={number}>{number}</StyledOption>
                                                    )
                                                })
                                            }
                                        </ListingFormSelect>
                                    </ListingFormLabel>
                                </div>
                                <div>
                                    <ListingFormLabel>
                                        # of Beds:
                                        <br />
                                        <ListingFormSelect
                                        name='beds'
                                        onChange={handleChange}
                                        defaultValue='1'
                                        >
                                            {
                                                bedRange.map(number => {
                                                    return (
                                                        <StyledOption key={number} value={number}>{number}</StyledOption>
                                                    )
                                                })
                                            }
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
                                            <option value='real_bed'>Real Bed</option>
                                            <option value='pull_out_sofa'>Pull-out Sofa</option>
                                            <option value='couch'>Couch</option>
                                            <option value='futon'>Futon</option>
                                            <option value='airbed'>Airbed</option>
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
                                            {
                                                bathroomRange.map(number => {
                                                    return (
                                                        <StyledOption key={number} value={number}>{number}</StyledOption>
                                                    )
                                                })
                                            }
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
                                </div>
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
        cancellationTypes: state.cancellationTypes
    }
}
export default connect(mapStateToProps, { updateListing, getRoomTypes, getBedTypes, getNeighborhoods, getNeighborhoodGroups, getCancellationTypes })(UpdateListing)



//@@@@@@@@@@@@ IMAGE UPLOAD DIV JSX @@@@@@@@@@@@@//
{/* <UploadImageDiv>
    <UploadImageText>
        <p className='plus-sign'>+</p>
        <p>UPLOAD IMAGE</p>
    </UploadImageText>
</UploadImageDiv> */}