# Suber Eats

Live Link: https://suber-eats.onrender.com

Suber Eats is a Uber Eats clone. Seed data is generated from restaurants in the Bay Area, with location data scraped from Google Maps API, and menu data scraped from Yelp. The live version contains only 44 restaurants, but a CSV is attached for insert all the restaurants into the backend.


## Features


Restaurants Index, Main UX Page
Users can all the restaurants within a 1.5 - 2 mile proximity by using the location modal at the top of the navbar. Users location will be updated in the backend, and so will restaurants data.


## Restaurants Show

On click users will be redirected to a page for the restaurant. Each of these menus contains native restaurant data.

## Cart and Checkout

Users can add menu items to their carts, and then checkout through the cart modal.


## Technologies

Frontend: React and Redux

React handles rendering of site elements, modals, main user experience.

Redux mainly handles management of CRUD features dealing with backend data, but also managing and communicating user data to theb ackend.

Backend: Ruby on Rails with  PostgreSQL database

Supports back-end server access, database management, and user authentication.

Other: Google Maps React Library, Google Maps Javascript API, Amazon AWS S3

Google Maps React library was implemented to handle 
Amazon AWS S3 handles the image hosting to allow for a more lightweight implementation of the app.

Tiny-Carousel was utilize to imitate the animation of a image coursel.

Hosting: 

Suber Eats is hosted on Render.


## Future Plans

Fine tweeking of UI, transitions, CSS.
Implement heap to manage availible restaurants on the show page, allow for search and sort.
Implement trie prefix to allow for searching restaurants in an area.


## Credits

All images are sourced from Uber Eats and their respective restaurants, and Yelp for the menu details, and Google Maps for their restaurant data.
