import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

import { updateReview } from '../../../store/review';

const EditReviewModal = ({editModal, setEditModal, reviewBody, setReviewBody, userId, restaurantId, reviewId, ctr, setCtr}) => {
    const dispatch = useDispatch();
    const [origReview, setOrigReview] = useState(reviewBody);
    const sessionUserId = useSelector(state => state.session.user.id);


    if (editModal) document.body.classList.add('active-modal')
    else document.body.classList.remove('active-modal')

    const handleForm = e =>{
        e.preventDefault();
        e.stopPropagation();
    }
    
    const handleGoBack = e => {
        e.preventDefault();
        e.stopPropagation();
        setReviewBody(origReview)
        setEditModal(!editModal)
    }

    const handleSubmitReview = e =>{
      e.preventDefault();
      e.stopPropagation();
      if (reviewBody !== origReview){
        
        dispatch(updateReview({review:{
          body: reviewBody,
          user_id:userId,
          restaurantId
        }}, reviewId))
        setCtr(ctr + 1)
        setEditModal(!editModal)
      }
      
  }

 
  return (
    <div className="modal">
        <div className='modal-overlay review-modal-overlay udc' onClick={()=> setEditModal(!editModal)}>
          <div className="review-modal-content">
            <form className='review-form'>
                <input className='review-input' type="text" placeholder={reviewBody} onChange={e => setReviewBody(e.target.value)} onClick={handleForm}/>
             
            </form>
            <div className="btn-holder">
                <button className="review-btns btn-square black-button udc review-submit"  onClick={handleSubmitReview}><span className="review-btn-text">Edit your review</span></button>
                <button className="review-btns btn-square grey-button udc go-back" onClick={handleGoBack}><span className="review-btn-text">Go Back</span></button>
            </div>
          </div>

        </div>
    </div>
  )
}

export default EditReviewModal
