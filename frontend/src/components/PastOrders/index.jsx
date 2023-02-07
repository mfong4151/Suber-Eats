import React, { useEffect, useState } from 'react'
import BundleModals from '../universalModals/BundleModals'
import UXHeader from '../UXHeader'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTransactions, getTransactions } from '../../store/transaction'
import Transaction from './Transaction'
import './PastOrders.css'
import { getSessionUserId } from '../../store/session'
import Footer from '../generalDesignComponents/Footer'
import { Redirect } from 'react-router'
const PastOrders = () => {
  const [menuModal, setMenuModal ] = useState(false);
  const [locationModal, setLocationModal] = useState(false);
  const [cartModal, setCartModal] = useState(false);
  const [restCartModal, setRestCartModal] = useState(false); 
  const modalStates = {menuModal, setMenuModal, locationModal, setLocationModal, cartModal, setCartModal, restCartModal, setRestCartModal}
  
  const dispatch = useDispatch()
  const transactions = useSelector(getTransactions)
  const sessionUser = useSelector(state => state.session.user)

  useEffect(() => {
    dispatch(fetchTransactions())
  }, [])
  if(!sessionUser) return <Redirect to='/login'/>

  return (
    <>
      <UXHeader modalStates={modalStates}/>
      <div className="udc-left past-orders-holder">
        <h1 className='univ-padding orders-header'>Past Orders</h1>
      </div>
       {Object.values(transactions).reverse().map((transaction,idx) => (
        <Transaction 
          transaction={transaction} sessionUserId={sessionUser.id} key={idx}
          />))}
      <Footer/>
      <BundleModals modalStates={modalStates}/>
    </>
  )
}

export default PastOrders