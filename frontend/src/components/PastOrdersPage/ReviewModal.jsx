import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { updateTransaction } from '../../store/transaction';
import { createReview } from '../../store/review';
import './PastOrders.css';

const ReviewModal = ({showReviewModal, setShowReviewModal, goToRest, pastTransaction}) => {
    const [reviewBody, setReviewBody] = useState('')
    const [errors, setErrors] = useState([])
    const dispatch = useDispatch()
    const sessionUserId = useSelector(state => state.session.user.id)
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
        if(!reviewBody){
          setErrors(['Review body cannot be blank!'])
        }else{
          dispatch(updateTransaction(updatedTransaction(), pastTransaction.id))
          .then(dispatch(createReview(createdReview())))
          .then(()=> goToRest()
          )

        }
        
    }


    useEffect(()=>{
      setErrors([])
    }, [reviewBody])
 
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
            <div>
              {errors.length > 0 && <p className='errors'>
                
                {errors}
              </p>
                }
            </div>
          </div>

        </div>
    </div>
  )
}

export default ReviewModal
