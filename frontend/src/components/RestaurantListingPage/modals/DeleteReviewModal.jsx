import React from 'react'
import { useDispatch } from 'react-redux';
import { fetchMenu } from '../../../store/menu';

import { deleteReview, } from '../../../store/review';

const DeleteReviewModal = ({deleteModal, setDeleteModal, reviewId, ctr, setCtr}) => {
    const dispatch = useDispatch();


    if (deleteModal) document.body.classList.add('active-modal')
    else document.body.classList.remove('active-modal')


    const handleGoBack = e => {
        e.preventDefault();
        e.stopPropagation();
        setDeleteModal(!deleteModal)
    }

    const handleSubmitReview = e =>{
      e.preventDefault();
      e.stopPropagation();        
        dispatch(deleteReview(reviewId))
        ctr ++
        setCtr(ctr)
        setDeleteModal(!deleteModal)
      }
  

 
  return (
    <div className="modal">
        <div className='modal-overlay review-modal-overlay udc' onClick={()=> setDeleteModal(!deleteModal)}>
          <div className="review-modal-content udc">
              <h1 className="delete-text">Are you sure you want to delete your review?</h1>
            <div className="btn-holder">
                <button className="review-btns btn-square black-button udc review-submit"  onClick={handleSubmitReview}><span className="review-btn-text">Delete this review</span></button>
                <button className="review-btns btn-square grey-button udc go-back" onClick={handleGoBack}><span className="review-btn-text">Go Back</span></button>
            </div>
          </div>

        </div>
    </div>
  )
}

export default DeleteReviewModal
