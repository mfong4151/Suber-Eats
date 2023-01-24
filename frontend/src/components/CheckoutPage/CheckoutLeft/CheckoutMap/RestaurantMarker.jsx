import React from 'react'
import { Marker} from "@react-google-maps/api";
import {useHistory } from 'react-router-dom'

// https://react-google-maps-api-docs.netlify.app/#marker
const RestaurantMarker = ({checkoutCoords}) => {
    return (
        <Marker position = {checkoutCoords}
        animation={2}
        // title={textDisplay}
        />
    )
}

export default RestaurantMarker
