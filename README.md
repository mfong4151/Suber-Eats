# Suber Eats

Live Link: https://suber-eats.onrender.com

Suber Eats is a Uber Eats clone. Seed data is generated from restaurants in the Bay Area, with location data scraped from Google Maps API, and menu data scraped from Yelp. The live version contains 1,500 restaurants with a total of 87,000 menu items, , but a CSV is attached for insert all the restaurants into the backend.

![Screen Shot 2023-01-13 at 8 44 48 AM](https://user-images.githubusercontent.com/24309253/212373582-a27e6fc5-a431-4e69-b95d-ab17c642e630.png)


# Table of Contents

[Features](#features)
* [Radial Search](#radial-search---find-restaurants-near-you)
* [Restaurants Show](#restaurants-show)
* [Dynamic Carting](#cart-and-checkout)


# Features

## Radial Search - Find Restaurants Near You

Users can query all the restaurants within a 1.5 - 2 mile proximity by using the location modal at the top of the navbar. Users location will be updated in the backend, and so will restaurants data.

I accomplished this by using a custom SQL query to gather all of the restaurants within a 1.5 mile radius (expressed in longitude latitude). 

```ruby
class Restaurant < ApplicationRecord
    ### Other Restaurant methods

    def self.restaurants_in_proximity(user_id)
        radius_miles = 0.0216 #1.5 miles expressed in longitude/latitude
        user = User.find_by_id(user_id)
        Restaurant.select("*")
        .where("SQRT(POW((restaurants.latitude - ?),2) + POW((restaurants.longitude - ?),2)) <= #{radius_miles.to_s}", 
        *[user.latitude, user.longitude] )
        .limit(30)
    end
    
```

This roughly translates to the following SQL query:

```sql

SELECT id, name, latitude, longitude
FROM restaurants
WHERE
    SQRT(POW((restaurants.latitude - user_latitude), 2) + POW((restaurants.longitude - user_longitude), 2)) <= radius_miles
LIMIT 30;

```

This query uses the distance formula to get relative distance from the user’s location, placing the user at the radius of the circumscribed area. To enable this query, several other sub-features needed to be added.

First, during the seeding process, I ran my restaurants' .CSV file through Google Map's API to gather the longitude and latitude for all restaurants. I originally collected these restaurants by leveraging a web scraper written in Python. The advantage to storing the data is to create consistency in the user experience, rather than wait on a return from the API provider, implement fetch call error handling, etc. Latitude and longitude float values live natively on the restaurant table. To seed the restaurants, I wrote a library with Marcos Henrich, Easy Seeds that has since taken a life of its own as a nascent open-source project. In short, this library allows users to import seeds from a .CSV file, hence explaining the 100k rows of data.

Second, I created a separate table to store user's longitude and latitude, namely the locations table. The reason for creating an extra table is to mainly avoid rewriting the user entry through a PATCH request, which is how user auth is implemented in my project. Because the password received in the session request is hashed every time during the request-response cycle, rewriting an unknown password is effectively tantamount to locking the user out of their account. Creating an extra table with a unique foreign key constraint provided the path of least resistance; users have exactly one location at any time. As mentioned before, this information was given by the frontend to send a PATCH request every time the user clicks on the map, a UI feature that many have found visually satisfying.


```jsx
//Excerpted version of the production version for followability.
const Map = ({restaurants}) => {
  
  const dispatch = useDispatch()
  const sessionUserId = useSelector(getSessionUserId);
  const userLocObj = useSelector(checkUserLoc(sessionUserId))
  const {mapCenter, setMapCenter} = mapState;


  // UI for creating the PATCH call to the backend
    
  const handleOnClick = e =>{
    const lat = e.latLng.lat();
    const lng = e.latLng.lng();

    if(userLocObj){
      dispatch(updateLocation(
          {location:{
            latitude: lat,
            longitude: lng,
           }}, userLocObj.id
          ))
      .then(()=> dispatch(fetchRestaurants()))
    }

    setMapCenter({lat, lng})
  }
  


  return (
    <GoogleMap 
      zoom={13} 
      center={mapCenter} 
      mapContainerClassName="map-container"
      options={options}
      onClick={handleOnClick}
    >
        {Object.values(restaurants).map((restaurant ,idx) =>
            <RestaurantMarker restaurant={restaurant} key={idx}/>
        )}

    </GoogleMap>
  )
}

export default Map;


```

This created a third necessity, or rather an error that needed remediation. For new users, a POST request creates a new account, but there initially was no location attached to the user. The backend server had no knowledge of any creation of a "location" object, because no POST request for a location entry had ever been posted. Because the call to retrieve restaurants in the backend requires a user's longitude and latitude coordinates to create the query, it introduces an issue when there is no location to speak of. Originally, this would cause crashes on the frontend due to how Redux dispatch fires during initial renders. The solution was to introduce an Application Record callback namely after_commit. Callbacks in Ruby on Rails are methods that are inherited from the Application Record class in every class instance of Ruby on Rails model. Callbacks allow backend operations to attach certain methods to specific lifecycle events of an object or a model. In particular, after_commit takes place after a POST operation, in this case the creation of a new user, and can be differentiated from after_save due to fact that it only takes place after successful commission to a database. Similar effects can be achieved with Middleware in Express and Rocket, and Interceptors in Spring Boot. 
 
 
```ruby

class User < ApplicationRecord
    # User auth callbacks 
    before_validation :set_default_coordinates, on: :create

    # has-many relations
      
    def set_default_coordinates
      #Defaults to San Francisco's Financial District
      sf_lat, sf_long = 37.789739,  -122.408607
      self.latitude ||= sf_lat
      self.longitude ||= sf_long
    end

    
    #User auth implementation 
end

```

Wouldn't it provide a more intuitive UI to ask for permission to get the user's location through the window, and initialize the location that way? Unlike Uber Eats, my project does not feature a portal for creating a new restaurant, and a potential edge case arises when a user visits a location that does not contain restaurants. This does show the extent of a proof-of-concept project, but as a proof-of-concept project I am largely looking to fast track delivery of features such as these.



## Restaurants Show

On click users will be redirected to a page for the restaurant. Each of these menus contains native restaurant data.
![Screen Shot 2023-01-13 at 8 45 55 AM](https://user-images.githubusercontent.com/24309253/212373797-95e7ab2a-8246-4d33-8885-bbfa37707938.png)

```javascript
const MenuListings = ({sessionUserId}) => {
    const usersCart = useSelector(getCart)
    const [menuItemModal, setMenuItemModal] = useState(false);  
    const [menuItem, setMenuItem] = useState('')
    const preSortedItems = useSelector(getMenuItems);
    const menuItems = sortMenus(preSortedItems)
    const toggleItemModal = () =>{
      setMenuItemModal(!menuItemModal)
      }

  
    return (
    <div className='listings-main'>
        
        <div className='table-of-contents'>
            {Object.keys(menuItems).map((header, idx)=>(
                    <div className='toc-index'>
                        <span className='' key={idx}>{header}</span>
                    </div>
            ))}
        </div>

        <div className='univ-padding'>
            {Object.keys(menuItems).map((header, idx)=>(
                <ListingsBlock 
                    header={header} 
                    listings={menuItems[header]} 
                    key={idx}
                    setMenuItem = {setMenuItem}
                    menuItemModal={menuItemModal} 
                    toggleItemModal={toggleItemModal}
                    usersCart={usersCart}
                    sessionUserId={sessionUserId}
                    /> 
            ))}
            {menuItemModal && <MenuItemModal menuItem={menuItem} setMenuItem={setMenuItem} menuItemModal={menuItemModal} toggleItemModal={toggleItemModal}/>}

        </div>
  </div>  
  )
}
```

## Cart and Checkout

Users can add menu items to their carts, and then checkout through the cart modal.


## Technologies

Frontend: React and Redux

React handles rendering of site elements, modals, main user experience.

Redux mainly handles management of CRUD features dealing with backend data, but also managing and communicating user data to theb ackend.

Backend: Ruby on Rails with PostgreSQL database

Supports back-end server access, database management, and user authentication.

Other: Google Maps React Library, Google Maps Javascript API, Amazon AWS S3

Google Maps React library was implemented to handle 
Amazon AWS S3 handles the image hosting to allow for a more lightweight implementation of the app.

Hosting: 

Suber Eats is hosted on Render.


## Future Plans

Fine tweeking of UI, transitions, CSS.
Implement trie prefix to allow for searching restaurants in an area.


## Credits

All images are sourced from Uber Eats and their respective restaurants, and Yelp for the menu details, and Google Maps for their restaurant data.
