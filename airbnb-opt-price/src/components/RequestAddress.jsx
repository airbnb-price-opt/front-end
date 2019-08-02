import React, { useState, useEffect } from 'react'
import axios from 'axios'

import { Header } from 'semantic-ui-react'

const RequestAddress = (props) => {
    const { listing } = props
    const [address, setAddress] = useState('')

    useEffect(() => {
        const apiKey = "7AIcxouhK2CsiKS2pDmQ4sWmchgbocYJ";
        axios.get(`https://www.mapquestapi.com/geocoding/v1/reverse?key=${apiKey}&location=${listing.latitude},${listing.longitude}`)
        .then(res => {
            let data = res.data.results[0].locations[0]
            let combine = ''
            let combineCheck = ''
            if (data.street !== '') combine = data.street
            if (data.adminArea5 !== '') combine = combine.concat(', ', data.adminArea5)
            if (data.adminArea3 !== '') combine = combine.concat(', ', data.adminArea3)
            if (data.adminArea1 !== '') combine = combine.concat(', ', data.adminArea1)
            if (data.postalCode !== '') combine = combine.concat(', ', data.postalCode)
            let commaCheck = combine.indexOf(', ')
            if (commaCheck === 0) combineCheck = combine.slice(2, combine.length)

            commaCheck === 0 ? setAddress(combineCheck) : setAddress(combine)
        })
        .catch(err => {
            console.log('API Failure: ', err)
        })
    }, [])
    
    return (
        <Header>
            {address !== '' ? address : 'Address Not Provided'}
            <Header.Subheader>HOST LISTING NUMBER: {listing.listing_id}</Header.Subheader>
        </Header>
    )
}

export default RequestAddress