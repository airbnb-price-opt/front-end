import React, { useState } from 'react'

import YourListingsCard from './YourListingsCard'

import { StyledYourListings } from '../StyledComps'

const YourListings = () => {

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
            neighborhood: 'Fanshawe Pioneer Village, London, Canada',
            guests: '2',
            min_nights: '5',
            act_price: '$109',
            opt_price: '$199',
        },
        {
            img_url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
            neighborhood: 'Mediterranean Homes, Torrevieja, Spain',
            guests: '2',
            min_nights: '2',
            act_price: '$150',
            opt_price: '$299',
        },
        {
            img_url: 'https://images.unsplash.com/photo-1524431144429-03fdd30eee26?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1279&q=80',
            neighborhood: 'Key West, United States',
            guests: '6',
            min_nights: '3',
            act_price: '$200',
            opt_price: '$175',
        },
        {
            img_url: 'https://images.unsplash.com/photo-1464146072230-91cabc968266?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
            neighborhood: 'London, United Kingdom',
            guests: '6',
            min_nights: '3',
            act_price: '$200',
            opt_price: '$300',
        },
        {
            img_url: 'https://images.unsplash.com/photo-1504233529578-6d46baba6d34?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80',
            neighborhood: 'Eliassen Rorbuer, Hamnøy, Norway',
            guests: '2',
            min_nights: '2',
            act_price: '$300',
            opt_price: '$250',
        },
    ])

    return (
        <StyledYourListings>
            <h1>YOUR LISTINGS</h1>
            <hr></hr>
            <YourListingsCard data={userListing} DeleteListing={DeleteListing}/>
        </StyledYourListings>
    )
}

export default YourListings