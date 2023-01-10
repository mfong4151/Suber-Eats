import React from 'react'
import BundleModals from '../universalModals/BundleModals'
import UXHeader from '../UXHeader'
import './PastOrders.css'
import { useSelector } from 'react-redux'
const PastOrders = () => {

  // const transactions = useSelector(getPastTransactions)
  let transactions

  return (
    <>
      <UXHeader/>
      <h1 className='univ-padding orders-header'>Past Orders</h1>
      {transactions.map((transaction,idx) => (
      <Transaction transaction={transaction} key={idx}/>)

        )}
      <BundleModals/>
    </>
  )
}

export default PastOrders