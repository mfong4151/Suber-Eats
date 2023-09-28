import React, { useEffect, useRef, useState } from 'react';
import UXHeader from '../UXHeader';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRestaurant, getRestaurant, getRestaurantCoords } from '../../store/restaurant';
import { fetchMenu } from '../../store/menu';
import { fetchCartItems } from '../../store/cartItems'
import MenuListings from './MenuListings';
import Reviews from './Reviews';
import './RestaurantListingPage.css';
import BundleModals from '../Modals/BundleModals';
import { fetchCart, getCartsRestIdKeys } from '../../store/cart';
import { createCart } from '../../store/cart';
import RestaurantInfo from './RestaurantInfo';
import GeneralMap from '../GeneralMap';
import Footer from '../Footer';
import { Redirect, useLocation } from 'react-router-dom';

const RestaurantListing = () => {

  const [menuModal, setMenuModal] = useState(false);
  const [locationModal, setLocationModal] = useState(false);
  const [cartModal, setCartModal] = useState(false);
  const [restCartModal, setRestCartModal] = useState(false);
  const modalStates = { menuModal, setMenuModal, locationModal, setLocationModal, cartModal, setCartModal, restCartModal, setRestCartModal }
  const [firstReviews, setFirstReviews] = useState(true)
  const sessionUser = useSelector(state => state.session.user)
  const dispatch = useDispatch();
  const { restaurantId } = useParams();
  const restaurant = useSelector(getRestaurant(restaurantId));
  const coords = useSelector(getRestaurantCoords(restaurantId))
  const usersCarts = useSelector(getCartsRestIdKeys)
  const { state } = useLocation()
  const reviewSection = useRef();


  const cartFact = () => (
    {
      userId: sessionUser.id,
      restaurantId: restaurantId
    }
  )
  const toReviewSection = () => {
    if (state && state.from && reviewSection.current && firstReviews) {
      setFirstReviews(false)
      reviewSection.current.scrollIntoView({ behavior: 'smooth' })
    }
  }

  useEffect(() => {
    dispatch(fetchRestaurant(restaurantId))
    dispatch(fetchMenu(restaurantId))
  }, [])

  useEffect(() => {
    dispatch(createCart(cartFact()))
      .then(dispatch(fetchCart(sessionUser.id)))
      .then(dispatch(fetchCartItems(usersCarts[restaurantId])))

  }, [dispatch])


  setTimeout(toReviewSection, 1000)

  if (!sessionUser.id) return <Redirect to='/login' />

  return (
    <>

      <UXHeader modalStates={modalStates} />
      <GeneralMap coords={coords} mapStyle={'checkout-container'} />
      <RestaurantInfo restaurant={restaurant} reviewRef={reviewSection} />
      <MenuListings reviewSection={reviewSection} />
      <div id="review-section" ref={reviewSection}>
        <Reviews sessionUserId={sessionUser.id} />
      </div>
      <Footer />
      <BundleModals modalStates={modalStates} />

    </>
  )
}

export default RestaurantListing



