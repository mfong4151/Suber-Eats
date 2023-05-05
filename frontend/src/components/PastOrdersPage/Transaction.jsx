import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import ReviewModal from './ReviewModal';

const Transaction = ({transaction}) => {
  const history = useHistory();
  const [showReviewModal, setShowReviewModal] = useState(false)

  const dateObj = new Date(transaction.createdAt)
  const goToRest = () =>{
    history.push({pathname:`/restaurantListing/${transaction.restaurantId}/`, 
                  state: {from:'reviews'}})
    }
  


  const handleReviewButton = () =>{
    if(transaction.reviewLeft) goToRest()
    
    else{
      setShowReviewModal(!showReviewModal)

    }
  }

  return (
    <div className='transaction-block sb fdc-mobile'>

        <div className="transaction-section univ-padding univ-padding-mobile ">
          <div className="rest-photo">
            <img className='options-image' src={transaction.imageUrl} />
          </div>

          <div className="transact-info">
            <h4 className="transac-rest-name">
              {transaction.restaurant}
            </h4>
            <div id="transc-period">
                <span>
                  ${transaction.transactionSum}
                  {' • '}
                  {dateObj.toLocaleDateString().concat(' ').concat(dateObj.toLocaleTimeString())}
                </span>
            </div>


          </div>

        </div>

        {showReviewModal && <ReviewModal 
          pastTransaction={transaction} 
          showReviewModal={showReviewModal} 
          setShowReviewModal={setShowReviewModal} 
          goToRest={goToRest} 
          />}


        <div className="transact-buttons udc-mobile">

            <button className="transact-page-btn udc black-button btn-rounded-corners" id='view-store' onClick={goToRest}>
                  <span className='transac-btn-text'>View store</span>
            </button>
            <button className="transact-page-btn udc grey-button btn-rounded-corners" id='leave review' onClick={handleReviewButton}>
                <span className='transac-btn-text'>{transaction.reviewLeft ? 'See your review' : 'Leave a Review'}</span>
            </button>

        </div>
      


    </div>
  )
}

export default Transaction