import React from 'react'
import { Marker} from "@react-google-maps/api";

// https://react-google-maps-api-docs.netlify.app/#marker
const RestaurantMarker = ({coords}) => {
    return (
        <Marker position = {coords}
        animation={2}
        // title={textDisplay}
        />
    )
}

export default RestaurantMarker
