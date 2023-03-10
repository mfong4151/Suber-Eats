import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Review from './Review';
import { getMenuReviews } from '../../store/menu';
import { useState } from 'react';

const Reviews = ({sessionUserId}) => {
    const dispatch = useDispatch()
    const reviews = useSelector(getMenuReviews);
    const [ctr, setCtr] = useState(0)

  
    return (
      <div className="listings-main review-section" >
          <div className='review-header univ-padding'>
            <h1 className='reviews-header-text'>See Restaurant Reviews</h1>
            <p className='reviews-subtext'>Hear from people who love this spot</p>
          </div>
          <ul className='reviews'>
            {reviews.map((review, idx)=>
              (<Review review={review} key={idx} ctr={ctr} setCtr={setCtr} sessionUserId={sessionUserId}/> )
            )}
          </ul>   

      </div>  


    )
}

export default Reviews
