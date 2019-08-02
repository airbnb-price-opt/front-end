import axios from 'axios'

function getDistanceFromLatLonInKm(lat2,lon2) {
    const lat1 = 52.5027778
    const lon1 = 13.404166666666667
    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(lat2-lat1);  // deg2rad below
    var dLon = deg2rad(lon2-lon1); 
    var a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
      Math.sin(dLon/2) * Math.sin(dLon/2)
        ; 
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    var d = R * c; // Distance in km
    return d;
}

function deg2rad(deg) {
    return deg * (Math.PI/180)
}   

export const getLatLong = (address, cb, listing) =>
{
    // const apiKey = process.env.REACT_APP_MAPQUEST_API_KEY;
    const apiKey = "7AIcxouhK2CsiKS2pDmQ4sWmchgbocYJ";
    axios.get(`https://www.mapquestapi.com/geocoding/v1/address?key=${apiKey}&location=${address}`)
    .then(response =>
    {
        let lat = response.data.results[0].locations[0].latLng.lat;
        let lng = response.data.results[0].locations[0].latLng.lng;

        cb({ ...listing, "latitude": lat,
        "longitude": lng, "Distance": getDistanceFromLatLonInKm(lat, lng)})
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
