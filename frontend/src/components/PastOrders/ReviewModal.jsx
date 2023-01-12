import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { updateTransaction } from '../../store/transaction';
import { createReview } from '../../store/review';
import { fetchMenu } from '../../store/menu';
import './PastOrders.css';

const ReviewModal = ({showReviewModal, setShowReviewModal, goToRest, pastTransaction}) => {
    const [reviewBody, setReviewBody] = useState('')
    const dispatch = useDispatch()
    const sessionUserId = useSelector(state => state.session.user.id)
    const history = useHistory()

    if (showReviewModal) document.body.classList.add('active-modal')
    else document.body.classList.remove('active-modal')
    const handleForm = e =>{
        e.preventDefault();
        e.stopPropagation();
    }

    const updatedTransaction = () => (
      {transaction:{
        userId: sessionUserId,
        restaurantId: pastTransaction.restaurantId,
        transactionSum: pastTransaction.transactionSum,
        reviewLeft: true,
      }, }
    )


    const createdReview = () => (
      {review:{
          body: reviewBody,
          user_id:sessionUserId,
          restaurantId: pastTransaction.restaurantId
        }
      }
    )
      


    const handleSubmitReview = e =>{
        e.preventDefault();
        e.stopPropagation();
        if (reviewBody){
          dispatch(updateTransaction(updatedTransaction(), pastTransaction.id))
          dispatch(createReview(createdReview())).then(

            goToRest()
          )

        }
        
    }

 
  return (
    <div className="modal">
        <div className='modal-overlay review-modal-overlay' onClick={()=> setShowReviewModal(!showReviewModal)}>
          <div id="review-modal-content">
            <form className='review-form'>
                <input className='review-input' type="text" onChange={e => setReviewBody(e.target.value)} onClick={handleForm}/>
             
            </form>
            <div id="btn-holder">
                <button className="review-btns btn-square black-button udc review-submit" onClick={handleSubmitReview}><span className="review-btn-text">Submit a review</span></button>
                <button className="review-btns btn-square grey-button udc"><span className="review-btn-text">Go Back</span></button>
            </div>
          </div>

        </div>
    </div>
  )
}

export default ReviewModal