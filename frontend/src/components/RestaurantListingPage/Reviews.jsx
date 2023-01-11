import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Review from './Review';

const Reviews = ({reviews}) => {

  const dispatch = useDispatch();


    return (
      <div className="listings-main review-section">
          <div className='review-header univ-padding'>
            <h1 className='reviews-header-text'>See Restaurant Reviews</h1>
            <p className='reviews-subtext'>Hear from people who love this spot</p>
          </div>
          <ul className='reviews'>
            {reviews.map((review, idx)=>
              (<Review review={review} key={idx}/> )
            )}
          </ul>   

      </div>  


    )
}

export default Reviews
