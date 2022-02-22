import {GOOGLE_PLACES_API_KEY} from '../secrets';

export const listParksApiUrl = (lat: number, long: number, radius: number = 1500) => {
    return `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat}%2C${long}&radius=${radius}&type=park&key=${GOOGLE_PLACES_API_KEY}`
}
