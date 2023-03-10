import React from 'react'
import { Marker} from "@react-google-maps/api";
import {useHistory } from 'react-router-dom'

// https://react-google-maps-api-docs.netlify.app/#marker
const RestaurantMarker = ({restaurant}) => {
    const history = useHistory()
    const textDisplay = `${restaurant.name}\n${restaurant.address}\nRating: ${restaurant.rating}`
    
    return (
        <Marker position = {{lat: restaurant.latitude, lng: restaurant.longitude }}
        animation={2}
        title={textDisplay}
        onClick={()=> history.push(`/restaurantListing/${restaurant.id}`)}
        />
    )
}

export default RestaurantMarker
