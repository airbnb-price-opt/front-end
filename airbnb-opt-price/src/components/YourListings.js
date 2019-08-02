import React, { useState, useEffect, Suspense } from 'react';
import { connect } from 'react-redux';

import LoadingScreen from './LoadingScreen'
import { getListings, deleteListing } from '../store/actions';
import { StyledYourListings } from '../StyledComps';

// import YourListingsCard from './YourListingsCard'
const YourListingsCard = React.lazy(() => {
    return Promise.all([
        import('./YourListingsCard'),
        new Promise(res => setTimeout(res, 1000))
    ])
    .then(([moduleExports]) => moduleExports)
})

const YourListings = (props) => {
    const [userListing, setUserListing] = useState([])

    useEffect(() => {
        setUserListing(props.listings)
    },[props.listings])

    useEffect(() => {
        props.getListings();
    }, [])

    const handleDelete = (e, listing, id) => {
        e.preventDefault();
        props.deleteListing(listing, id, props.history)
    }
    
    if(!userListing) return <p>Loading...</p>
    return (
        <StyledYourListings>
            <h1>YOUR LISTINGS</h1>
            <hr></hr>
            <Suspense fallback={<LoadingScreen/>}>
                <YourListingsCard handleDelete={handleDelete} data={userListing}/>
            </Suspense>
        </StyledYourListings>
    )
}

const mapStateToProps = (state) => {
    return{
        listings: state.listings
    }
}

export default connect(mapStateToProps, { deleteListing, getListings })(YourListings)
