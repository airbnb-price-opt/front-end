import axios from 'axios'
// import {apiKey} from './App'
const latLong = [];


export const getLatLong = (address) =>
{
    // const apiKey = process.env.REACT_APP_MAPQUEST_API_KEY;
    const apiKey = "7AIcxouhK2CsiKS2pDmQ4sWmchgbocYJ";
    axios.get(`http://www.mapquestapi.com/geocoding/v1/address?key=${apiKey}&location=${address}`)
    .then(response =>
        console.log("response from mapquest", response.data.results[0].locations[0].latLng)
    )
    .catch( err => console.log(err))

}
