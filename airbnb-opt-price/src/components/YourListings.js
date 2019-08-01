import React, { useState, useEffect, Suspense } from 'react';
import { connect } from 'react-redux';
// import axios from 'axios'

import LoadingScreen from './LoadingScreen'
import { getListings } from '../store/actions';
// import { DummyData } from './DummyData'
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
    const [userListing, setUserListing] = useState([''])
    const [listingEdit, setListingEdit] = useState(null)
    // const [houseImgs, setHouseImgs] = useState([])
    // const PIXABAY_API_KEY = '13198877-6bfc2f5aa8cd5bbd707982513'

    // useEffect(() => {
    //     if (userListing !== ['']) {
    //         axios.get(`https://pixabay.com/api/?key=${PIXABAY_API_KEY}&q=house&image_type=photo&per_page=10`)
    //         .then(res => {
    //             console.log(res.data.hits)
    //             setHouseImgs(res.data.hits)
    //         })
    //         .catch(err => {
    //             console.log('API Error: ', err)
    //         })
    //     }
    //     console.log('Checking', houseImgs)
    // },[userListing])

    useEffect(() => {
        setUserListing(props.listings)
    },[props.listings])

    useEffect(() => {
        props.getListings();
    }, [])

    console.log('SET LISTINGS TO MAP INTO CARDS:', props.listings)
    function DeleteListing(item) {
        userListing.map((listing, index) => {
            if (listing === item) {
                let newUserListing = [...userListing]
                newUserListing.splice(index, 1)
                setUserListing(newUserListing)
            }
        })
    }

    // function InsertHouse() {
    //     userListing.map((listing, index) => {
    //         let newUserListing = [...userListing]
    //         newUserListing[index] = {...listing, img_url:houseImgs.webformatURL}
    //         console.log(newUserListing)
    //         console.log(houseImgs[index])
    //         setUserListing(newUserListing)
    //     })
    // }
    
    return (
        <StyledYourListings>
            <h1>YOUR LISTINGS</h1>
            <hr></hr>
            <Suspense fallback={<LoadingScreen/>}>
                <YourListingsCard data={userListing} DeleteListing={DeleteListing} listingEdit={listingEdit} setListingEdit={setListingEdit}/>
            </Suspense>
        </StyledYourListings>
    )
}

const mapStateToProps = (state) => {
    return{
        listings: state.listings
    }
}

export default connect(mapStateToProps, { getListings })(YourListings)