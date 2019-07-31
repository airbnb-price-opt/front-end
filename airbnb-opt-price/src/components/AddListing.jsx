import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { AddListingDiv, StyledOption, AddListingWrapper, AddListingHeader, UploadImageDiv, ListingFormTickDiv, ListingFormTickLabel, UploadImageText, ListingFormWrapper, ListingFormDiv, ListingForm, ListingFormLabel, ListingFormInputTickDiv, ListingFormSelect, ListingFormInputTick, ListingFormInput, ListingFormButton } from '../StyledComps'
// import { addNeighborhoodGroup } from '../store/actions';

const AddListing = (props) => {
    const [listing, setListing] = useState({address: '', guests: 0, nights: 0})
    const [selectedGroup, setSelectedGroup] = useState('')
    const [selectedHood, setSelectedHood] = useState('')
    console.log('GLOBAL SELECTED GROUP', selectedGroup)
    console.log('Chosen HoodS:', selectedHood)
    
    
    const handleSubmit = () => {
        props.neighborhoodGroup.map(selected => {
            console.log('MAP SELECTED GROUP', selectedGroup)
            if(selected.name === selectedGroup){
                console.log('fdfsfsd')
                setSelectedHood(selected.neighbourHood)
            }
        })
    }

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
    
    
    console.log('Redux Group Data', props.neighborhoodGroup)
    const handleNeighborhoodChange = e => {
        // setListing({ ...listing, [event.target.name]: event.target.value });
        setSelectedGroup(e.target.value)
        
        props.neighborhoodGroup.map(selected => {
            console.log('MAP SELECTED GROUP', selectedGroup)
            if(selected.name === e.target.value){
                console.log('fdfsfsd')
                setSelectedHood(selected.neighbourHood)
            }
        })
    };



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
                            onChange={handleChange}
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
        neighborhoodGroup: state.neighborhoodGroup
    }
}

export default connect(mapStateToProps, {})(AddListing);

                                    // // if(selected.name === selectedGroup){
                                    //     console.log(selected.neighbourHood)                                         
                                    //     selected.neighbourHood.map(hood => {
                                    //         console.log(hood.name)
                                    //         return(
                                    //             <div>
                                    //                 <h1 key={hood.neighbourhood_id}>{hood.name}</h1>
                                    //                 <p>Sample P tag</p>
                                    //             </div>
                                    //         )
                                    //     })
                                    // // }else{
                                    // //     return(
                                    // //         <option value="No Matching Neighborhoods. Please Select Another">
                                    // //         </option>
                                    // //     )
                                    // // }