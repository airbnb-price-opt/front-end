import React, { useState, useEffect, Suspense } from 'react';
import { connect } from 'react-redux';
import axios from 'axios'

import LoadingScreen from './LoadingScreen'
import { getNeighborhoods, getNeighborhoodGroups } from '../store/actions';
import { DummyData } from './DummyData'
import { StyledYourListings } from '../StyledComps';

// import YourListingsCard from './YourListingsCard'
const YourListingsCard = React.lazy(() => {
    return Promise.all([
        import('./YourListingsCard'),
        new Promise(res => setTimeout(res, 2000))
    ])
    .then(([moduleExports]) => moduleExports)
})

const YourListings = (props) => {
    const [userListing, setUserListing] = useState(DummyData)
    const [listingEdit, setListingEdit] = useState(null)
    // const [houseImgs, setHouseImgs] = useState([])
    // const PIXABAY_API_KEY = '13190409-dd10f24601d4fdeb9bacceb58'

    // useEffect(() => {
    //     axios.get(`https://pixabay.com/api/?key=${PIXABAY_API_KEY}&q=house&image_type=photo&per_page=${userListing.length}`)
    //     .then(res => {
    //         console.log(res.data.hits)
    //         setHouseImgs(res.data.hits)
    //     })
    //     .catch(err => {
    //         console.log('API Error: ', err)
    //     })
    // },[userListing.length])

    useEffect(() => {
        props.getNeighborhoods();
        props.getNeighborhoodGroups();
    }, [])

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

    // function HouseImages() {
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