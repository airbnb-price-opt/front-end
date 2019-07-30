import React, { useState, useEffect, Suspense } from 'react';
import { connect } from 'react-redux';

import LoadingScreen from './LoadingScreen'
import { getNeighborhoods, getNeighborhoodGroups } from '../store/actions';
import { DummyData } from './DummyData'
import { StyledYourListings } from '../StyledComps';

const YourListingsCard = React.lazy(() => {
    return Promise.all([
        import('./YourListingsCard'),
        new Promise(res => setTimeout(res, 2000))
    ])
    .then(([moduleExports]) => moduleExports)
})

const YourListings = (props) => {
    const [listingEdit, setListingEdit] = useState(null)

    function EditListing(item) {
        userListing.map((listing, index) => {
            if (listing === item) {
                let newUserListing = [...userListing]
                newUserListing[index] = listingEdit
                setUserListing(newUserListing)
            }
        })
    }

    function DeleteListing(item) {
        userListing.map((listing, index) => {
            if (listing === item) {
                let newUserListing = [...userListing]
                newUserListing.splice(index, 1)
                setUserListing(newUserListing)
            }
        })
    }

    const [userListing, setUserListing] = useState(DummyData)

    useEffect(() => {
        props.getNeighborhoods();
        props.getNeighborhoodGroups();
    }, [])
    
    return (
        <StyledYourListings>
            <h1>YOUR LISTINGS</h1>
            <hr></hr>
            <Suspense fallback={<LoadingScreen/>}>
                <YourListingsCard data={userListing} EditListing={EditListing} DeleteListing={DeleteListing} listingEdit={listingEdit} setListingEdit={setListingEdit}/>
            </Suspense>
        </StyledYourListings>
    )
}

const mapStateToProps = (state) => {
    return{
        neighborhoods: state.neighborhoods,
        neighborhoodGroups: state.neighborhoodGroups
    }
}

export default connect(mapStateToProps, { getNeighborhoodGroups, getNeighborhoods })(YourListings)