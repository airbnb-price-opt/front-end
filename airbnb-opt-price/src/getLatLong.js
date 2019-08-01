import axios from 'axios'
// import {apiKey} from './App'
const latLong = [];


export const getLatLong = (address, cb, listing) =>
{
    // const apiKey = process.env.REACT_APP_MAPQUEST_API_KEY;
    const apiKey = "7AIcxouhK2CsiKS2pDmQ4sWmchgbocYJ";
    axios.get(`https://www.mapquestapi.com/geocoding/v1/address?key=${apiKey}&location=${address}`)
    .then(response =>
    {
        cb({ ...listing, "latitude": response.data.results[0].locations[0].latLng.lat,
        "longitude": response.data.results[0].locations[0].latLng.lng })
    })
    .catch( err => console.log(err))

}

export const getAddress = (location, cb, listing) =>
{
    const apiKey = "7AIcxouhK2CsiKS2pDmQ4sWmchgbocYJ";
    axios.get(`https://www.mapquestapi.com/geocoding/v1/reverse?key=${apiKey}&location=${location}`)
    .then(response =>
        cb({...listing, "address": response.data.results[0].locations[0].street})
    )
    .catch( err => console.log(err))
}