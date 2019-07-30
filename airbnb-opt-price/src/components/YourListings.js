import React, { useState, useEffect, Suspense } from 'react';
import { connect } from 'react-redux';

import LoadingScreen from './LoadingScreen'
import { getNeighborhoods, getNeighborhoodGroups } from '../store/actions';
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

    const [userListing, setUserListing] = useState([
        {
            img_url: 'https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80',
            neighborhood_group: 'Canada',
            neighborhood: 'Fanshawe Pioneer Village',
            guests: '2',
            minimum_nights: '5',
            act_price: '$109',
            opt_price: '$199',
        },
        {
            img_url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
            neighborhood_group: 'Spain',
            neighborhood: 'Torrevieja',
            guests: '2',
            minimum_nights: '2',
            act_price: '$150',
            opt_price: '$299',
        },
        {
            img_url: 'https://images.unsplash.com/photo-1524431144429-03fdd30eee26?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1279&q=80',
            neighborhood_group: 'United States',
            neighborhood: 'Key West',
            guests: '6',
            minimum_nights: '3',
            act_price: '$200',
            opt_price: '$175',
        },
        {
            img_url: 'https://images.unsplash.com/photo-1464146072230-91cabc968266?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
            neighborhood_group: 'United Kingdom',
            neighborhood: 'London',
            guests: '6',
            minimum_nights: '3',
            act_price: '$200',
            opt_price: '$300',
        },
        {
            img_url: 'https://images.unsplash.com/photo-1504233529578-6d46baba6d34?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80',
            neighborhood_group: 'Norway',
            neighborhood: 'Eliassen Rorbuer, Hamnøy',
            guests: '2',
            minimum_nights: '2',
            act_price: '$300',
            opt_price: '$250',
        },
    ])

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