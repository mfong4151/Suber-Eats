import React from 'react'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import EditReviewModal from './modals/EditReviewModal'
import DeleteReviewModal from './modals/DeleteReviewModal'



const Review = ({review,ctr, setCtr}) => {
    const sessionUserId = useSelector(state => state.session.user.id)
    const [editModal, setEditModal] = useState(false)
    const [deleteModal, setDeleteModal] = useState(false)
    const [reviewBody, setReviewBody] = useState(review.body)
    //for reviews i need a review author, review text, time of creation
    let editButton, deleteButton

    const handleReviewEdit = () => {

        setEditModal(!editModal)
    }
    const handleReviewDelete = () => {
        setDeleteModal(!deleteModal)

    }




    if(review.userId === sessionUserId){
         editButton =   <button className="review-buttons" onClick={handleReviewEdit}>Edit</button>
         deleteButton = <button className="review-buttons" onClick={handleReviewDelete}>Delete</button>
    }

    return(
        <div className='review-body'>
            <div className='review-upper'>
                <div className='user-icon'>
                    {/* {randomPicture} */}
                    {review.name}
                    {/* this works but i would rather format it to look nicer */}
                    {/* {review.createdAt} */}
                </div>
                {editModal && <EditReviewModal editModal={editModal} setEditModal={setEditModal} 
                                            reviewBody={reviewBody} setReviewBody={setReviewBody}
                                            userId={review.userId} restaurantId={review.restaurantId} reviewId={review.id} 
                                            ctr={ctr} setCtr={setCtr}/>}
                {deleteModal && <DeleteReviewModal 
                                reviewId={review.id} deleteModal={deleteModal} setDeleteModal={setDeleteModal} ctr={ctr} setCtr={setCtr}/>}

                <div>
                    {editButton}
                    {deleteButton}
                    <button className='review-buttons'>Report</button>
                </div>
            </div>
            <p className='review-text'>{reviewBody}</p>
            <hr className="divider-thin"/>
        </div>
         )

}

export default Review