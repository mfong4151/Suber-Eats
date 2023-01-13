import React from 'react'
import BundleModals from '../universalModals/BundleModals'
import UXHeader from '../UXHeader'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTransactions, getTransactions } from '../../store/transaction'
import { useEffect } from 'react'
import Transaction from './Transaction'
import { useState } from 'react'
import './PastOrders.css'

const PastOrders = () => {
  const dispatch = useDispatch()
  const transactions = useSelector(getTransactions)
  const sessionUserId = useSelector(state=> state.session.user.id)

  useEffect(() => {
    dispatch(fetchTransactions(sessionUserId))

  }, [])

  return (
    <>
      <UXHeader/>
      <div className="udc-left past-orders-holder">
        <h1 className='univ-padding orders-header'>Past Orders</h1>
      </div>
       {Object.values(transactions).map((transaction,idx) => (
      <Transaction transaction={transaction} sessionUserId={sessionUserId} key={idx}
        />))}
      
      <BundleModals/>
    </>
  )
}

export default PastOrders