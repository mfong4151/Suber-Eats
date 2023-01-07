import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Review from './Review';

const Reviews = () => {
    // const reviews = useSelector(getReviews)
    const dispatch = useDispatch();

    // useEffect(()=>{
    //     dispatch(fetchReviews())
    // }, [dispatch]       
    // )


    return (
      <div className="listings-main">
          <div className='review-header univ-padding'>
            <h1 className='reviews-header-text'>See Restaurant Reviews</h1>
            <p className='reviews-subtext'>Hear from people who love this spot</p>
          </div>
          <ul className='reviews'>
              <Review/>
          </ul>   

      </div>  


    )
}

export default Reviews
