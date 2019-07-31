import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { AddListingDiv, AddListingWrapper, AddListingHeader, UploadImageDiv, UploadImageText, ListingFormWrapper, ListingFormDiv, ListingForm, ListingFormLabel, ListingFormSelect, ListingFormButton } from '../StyledComps'
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
    
    
    console.log('Redux Group Data', props.neighborhoodGroup)
    const handleChange = e => {
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
                                onChange={handleChange}
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
                            ADDRESS:
                            <br />
                            <ListingFormSelect
                                required
                                name='address' 
                                onChange={handleChange}
                            />
                                
                        </ListingFormLabel>
                        <ListingFormLabel>
                            GUESTS:
                            <br />
                            <ListingFormSelect
                                required
                                name='guests' 
                                onChange={handleChange}
                                type='number'
                            >
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7+</option>
                            </ListingFormSelect>
                        </ListingFormLabel>
                        <ListingFormLabel>
                            MINIMUM NIGHTS:
                            <br />
                            <ListingFormSelect
                                required
                                name='nights' 
                                onChange={handleChange}
                                type='number'
                            >
                                <option>1+</option>
                                <option>2+</option>
                                <option>3+</option>
                                <option>4+</option>
                                <option>5+</option>
                                <option>6+</option>
                                <option>7+</option>
                            </ListingFormSelect>
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