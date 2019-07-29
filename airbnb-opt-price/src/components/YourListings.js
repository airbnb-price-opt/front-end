import React, { useState } from 'react'

import YourListingsCard from './YourListingsCard'

const YourListings = () => {

    const [userListing, setUserListing] = useState([
        {
            img_url: 'https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80',
            neighborhood: 'Albany, NY',
            guests: '2',
            min_nights: '5',
            act_price: '$109',
            opt_price: '$199',
        },
        {
            img_url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
            neighborhood: 'Los Angeles, CA',
            guests: '2',
            min_nights: '2',
            act_price: '$150',
            opt_price: '$299',
        },
    ])

    return (
        <div>
            <h1>Your Listings</h1>
            {console.log(userListing)}
            <YourListingsCard data={userListing}/>
        </div>
    )
}

export default YourListings