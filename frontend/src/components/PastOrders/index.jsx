import React from 'react'
import BundleModals from '../universalModals/BundleModals'
import UXHeader from '../UXHeader'
import './PastOrders.css'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTransactions, getTransactions } from '../../store/transaction'
import { useEffect } from 'react'

const PastOrders = () => {
  const dispatch = useDispatch()
  const transactions = useSelector(getTransactions)
  const sessionUserId = useSelector(state=> state.sessionUserId)

  useEffect(() => {
    dispatch(fetchTransactions(sessionUserId))
  
  }, [])
  

  return (
    <>
      <UXHeader/>
      <h1 className='univ-padding orders-header'>Past Orders</h1>
      {/* {transactions.map((transaction,idx) => (
      <Transaction transaction={transaction} key={idx}/>)

        )} */}
      <BundleModals/>
    </>
  )
}

export default PastOrders