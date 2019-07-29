import React from 'react'

const YourListingsCard = ( { data } ) => {
    return (
        <div>
            {data.map(listing => (
                <div>
                    <img src={listing.img_url}></img>
                    <div>
                        <p>NEIGHBORHOOD: {listing.neighborhood}</p>
                        <p>GUESTS: {listing.guests}</p>
                        <p>MINIMUM NIGHTS: {listing.min_nights}</p>
                        <p>ACTUAL PRICE: {listing.act_price}</p>
                        <p>OPTIMAL PRICE: {listing.opt_price}</p>
                    </div>
                    <button>UPDATE LISTING</button>
                    <button>TRASH</button>
                </div>
            ))}
            
            <div>
                <p>ICON</p>
                <p>ADD LISTING</p>
            </div>
        </div>
    )
}

export default YourListingsCard