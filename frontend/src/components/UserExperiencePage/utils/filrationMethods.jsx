//The following is a series of tentative code for dealing with actual restaurant items on the webpage


//First, we want to create an object from the given state, extracting the menu, 

//We initally want to show all the relavent restaurants in a two mile radius
//We cache all the restaurants in a seven mile radius
//If we change location by more than eight miles, then we recalculate both two mile radius and ten mile radius


// export const createRestaurantObjects = (state, userCoords) =>{
//     const restaurants = Object.values(state.restaurants);
//     const twoMileRadius = [ ];          
//     const tenMileRadius =[];
//     //filter out restauraunts that we are not going to show to our user
//     let distance;
//     for (const restaurant of restaurants){
//         distance = haversineConversion(restaurant.longitude, restaurant.latitude, userCoords.long, userCoords.lat)
//         if(distance <= 2 ){
//             restaurant[distance] = distance;
//             twoMileRadius.push(restaurant);
//             tenMileRadius.push(restaurant);

//         }else if(haversineConversion <= 10){
//             restaurant[distance]
//             tenMileRadius.push(restaurant)
//         }
        
//     }
    
//     return twoMileRadius, tenMileRadius;
// }

// 37.747480598854814, -122.45956234405062
// 37.72993241704133, -122.45908630172238
//Convert from latitude and longitude into miles https://www.geeksforgeeks.org/program-distance-two-points-earth/
//export const haversineConversion = () => (

//     3963.0 * arccos[(sin(lat1) * sin(lat2)) + cos(lat1) * cos(lat2) * cos(long2 – long1)]
// )
