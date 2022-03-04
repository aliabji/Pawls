import {GOOGLE_PLACES_API_KEY} from '@env';

export const googleMapsLinkWithPlaceId = (placeId: string) => `https://www.google.com/maps/search/?api=1&query=Google&query_place_id=${placeId}`;

export const listParksApiUrl = (lat: number, long: number, radius: number = 1500) => {
    return `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat}%2C${long}&radius=${radius}&type=park&key=${GOOGLE_PLACES_API_KEY}`
}
