# Suber Eats

Live Link: https://suber-eats.onrender.com

Suber Eats is a Uber Eats clone. Seed data is generated from restaurants in the Bay Area, with location data scraped from Google Maps API, and menu data scraped from Yelp. The live version contains 1,500 restaurants with a total of 87,000 menu items. This clone simulates full CRUD ordering a viewing order history.

![Screen Shot 2023-01-13 at 8 44 48 AM](https://user-images.githubusercontent.com/24309253/212373582-a27e6fc5-a431-4e69-b95d-ab17c642e630.png)


# Table of Contents

[Features](#feature-highlights)
* [Seeding](#seeding---easy-seeds)
* [Radial Search](#radial-search---find-restaurants-near-you)
* [Restaurants Show](#restaurants-show)
* [Dynamic Carting](#cart-and-checkout)

# Feature Highlights

## Seeding - Easy Seeds

A natural question is, how did you seed so many restaurants during a two week project? Well I didn't do it by hand, instead I leveraged a web scraper to collect all the seed data. Once I had that set up, there was the issue of actually creating the seed file.

Error handling in Ruby...can use some improvement. If you missed a comma during one of your seed files, then it would break and tell you the "general ballpark" where the errors happened. So instead, I wrote a library to abstract away the seeding on a class-by-class, table-by-table basis. Bellow I've listed the main method that does the meat of the work:

```ruby

require_relative './csv_methods'

module EasySeeds
  class Seeder

    #Creates a single instance of seed data
    def self.single_seeder(table, class_name, table_string)            
      ApplicationRecord.connection.reset_pk_sequence!(table_string)                       # Makes primary keys start at 0
      puts "Creating #{table_string} seed data..."                             

      table.each_with_index do |row, i|
        puts "Finished Seeding the #{i.to_s}th #{table_string} item" if i % 100 == 0
        class_name&.create!(**row)                                                        # Creates a single row of data from a .csv item
      end

      puts "DONE WITH #{table_string.upcase}, #{table_string.upcase} SEEDING SUCCESSFUL"
    end

    #Creates easy seed data for all classes that are passed in
    def self.create_easy_seed_data(class_names)
      puts 'Creating easy seeds data'
      tables, table_strings = EasySeeds::CSVLoader.tables_from_csvs

      (0...tables.length).each do |i|
        EasySeeds::Seeder.single_seeder(tables[i], class_names[i], table_strings[i])      # Does it multiple times
      end
    end
  end
end
```
So grab a drink, make some instant noodles while you let all those 100k seeds populate. And you thought build times in Rust were bad. The upside is that it allowed me to simplify and clean up how my seed file looked: 

```ruby
require 'easy_seeds/easy_seeds'

class_names = [User, Restaurant, Menu, MenuItem, Review, Cart, CartItem, Transaction]
table_strings = ['users', 'restaurants', 'menus', 'menu_items', 'reviews', 'carts', 'cart_items', 'transactions']

EasySeeds::Destroy.destroy_tables(class_names, table_strings)
EasySeeds::Seeder.create_easy_seed_data(class_names)

class_image_names = [Restaurant]
EasySeeds::Images.attach_images(class_image_names)
```

(Easy seeds is now its own stand alone open source project)[https://github.com/mfong4151/easy-seeds]. Big shout out to (Marcos Henrich)[https://github.com/Marcoshenrich] who was a huge contributor to the project. Now, back to the main program. 

## 


## Radial Search - Find Restaurants Near You

[Radial Click](https://github.com/mfong4151/Suber-Eats/blob/main/gifs/map-click.gif)

Users can query all the restaurants within a 1.5-mile radius by using the location modal at the top of the navbar. Users location will be updated in the backend, and so will restaurants data.

The first step was to create a custom Rails ORM query to gather all of the restaurants within a 1.5-mile radius (expressed in latitude). This query uses the Pythagorean theorem, isolating for C, to get restaurants that have latitude and longitude coordinates within the 1.5-mile range. 

```ruby
class Restaurant < ApplicationRecord
    ### Other Restaurant methods

    def self.restaurants_in_proximity(user_id)
        radius_miles = 0.0216 #1.5 miles expressed in longitude/latitude
        user = User.find_by_id(user_id)
        Restaurant
          .select("*")
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

While collecting data for restaurants, I leveraged Google Maps’ API to gather longitude and latitude data for 1500 restaurants in the Bay Area, New York, Houston, and Chicago.  Latitude and longitude float values live natively on the restaurant table, creating consistency for the user experience that at-the-moment fetch calls could not provide; I have much less control over a third party API’s fault tolerance than I do my own. I wrote a library with Marcos Henrich, Easy Seeds that has since taken a life of its own as a nascent open-source project. In short, this library allows users to import seeds from a .CSV file, allowing me to seed 100k rows of data.

Every time the user clicks on the map, a request is sent to the backend to fetch every restaurant within a 1.5-mile radius of this click. 

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
           }}, sessionUserId
          ))
      .then(()=> dispatch(fetchRestaurants()))
    }

    setMapCenter({lat, lng}) //Change rendering of map center for visability
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
User latitude and longitude are generated from the onClick event, e in Google Maps React’s API, and respectively accessed as e.latLng.lat() and e.latLng.lng(). These values are sent in a PATCH request to the backend via Redux dispatch to edit columns that live on the Users table, a pain point that I describe below. This is largely the extent of the work done by the frontend.

In the real Uber Eats it makes sense to get location from the frontend, and render restaurants based on that information. However, users can access this proof-of-concept app from areas where no restaurant data exists. Therefore, it makes more sense to place the user where restaurants are guaranteed to be, and guide user behavior from there. At first, it seemed that the only way to accomplish this was to send longitude and latitude values over from the client during account creation. But in production environments, this can quickly result in a bad-practice slippery slope; data that doesn’t need to be sent over the request-response cycle simply shouldn’t be. Without this data, the frontend would white screen and crash due to how Redux fires on first render.
 
The solution was to introduce an Application Record callback into the data lifecycle namely before_validation. 

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

Callbacks in Ruby on Rails are methods that are inherited from the Application Record class in every instance of a Ruby on Rails model, and allow backend operations to inject methods into a specific object’s lifecycle event. As the name suggests, before_validation takes place before the object of a POST request is validated, which is the first step of entering an object into a database. Similar effects can be achieved with Middleware in Express and Rocket, and interceptors in Spring Boot. The function attached to before_validation sets coordinates for San Francisco’s financial district to the created object, but could also default to any other locale in my database. 

The result is a smooth, satisfying user interface built on top of Google Maps.

## Restaurants Show

On click users will be redirected to a page for the restaurant. Each of these menus contains native restaurant data.
![Screen Shot 2023-01-13 at 8 45 55 AM](https://user-images.githubusercontent.com/24309253/212373797-95e7ab2a-8246-4d33-8885-bbfa37707938.png)

I added a couple of fun features to this. The first is the table of contents sticks. I had to use a little bit of react, and a lot of position fixed for that.



The second is that the table of contents will actually scroll into view the section that is clicked. 

```javascript
const MenuListings = ({ reviewSection }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [menuItemModal, setMenuItemModal] = useState(false);
  const [seeYourCart, setSeeYourCart] = useState(-1)
  const menuItems = useSelector(getMenuItemsSorted);
  const tocRef = useRef(null)
  const innerTocRef = useRef(null)
  const tocTop = tocRef?.current?.offsetTop;
  const innerTocHeight = innerTocRef?.current?.offsetHeight
  const reviewSectionHeight = reviewSection?.current?.offsetTop
  const toggleItemModal = () => {
    setMenuItemModal(!menuItemModal)
  }

  const handleIndexClick = (e, idx) =>{
    e.preventDefault();
    document.getElementById(`block-${idx}`).scrollIntoView({behavior:'smooth'})
}


  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.pageYOffset);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <div className='listings-main fdc-mobile se'>
      <section className='toc-holder' ref={tocRef}>
        <div className={`table-of-contents ${scrollPosition > tocTop && scrollPosition + innerTocHeight + TOC_POS < reviewSectionHeight && 'toc-pos'}`} ref={innerTocRef}>
          <div className='toc-inner'>
            {Object.keys(menuItems).map((header, idx) => (
              <div id={`toc-label-${idx}`} className='toc-index' onClick={e => handleIndexClick(e, idx)}>
                <span key={idx}>{header}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id='menu-main' className='univ-padding univ-padding-mobile'>
        {Object.keys(menuItems).map((header, idx) => (
          <ListingsBlock
            header={header}
            menuItems={menuItems[header]}
            id={idx}
            menuItemModal={menuItemModal}
            toggleItemModal={toggleItemModal}
            seeYourCart={seeYourCart}
            setSeeYourCart={setSeeYourCart}
          />
        ))}
      </section>
    </div>
  )
}
```



## Technologies

Frontend: React and Redux

React handles rendering of site elements, modals, main user experience.

Redux mainly handles management of CRUD features dealing with backend data, but also managing and communicating user data to theb ackend.

Backend: Ruby on Rails with PostgreSQL database

Supports back-end server access, database management, and user authentication.

Other: Google Maps React Library, Google Maps Javascript API, Amazon AWS S3, Python BS4

Google Maps React library was implemented to handle 
Amazon AWS S3 handles the image hosting to allow for a more lightweight implementation of the app.

Hosting: 

Suber Eats is hosted on Render.



## Credits

All images are sourced from Uber Eats and their respective restaurants, and Yelp for the menu details, and Google Maps for their restaurant data.
