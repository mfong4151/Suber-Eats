import React from 'react'

const Review = ({review}) => {

//for reviews i need a review author, review text, time of creation


    return(
        <div className='review-body'>
            <div className='review-upper'>
                <div className='user-icon'>
                    {/* {randomPicture} */}
                    {review.name}
                    {/* this works but i would rather format it to look nicer */}
                    {/* {review.createdAt} */}
                </div>
                <button className='report'>Report</button>
            </div>
            <p className='review-text'>{review.body}</p>
            <hr className="divider-thin"/>
        </div>
         )

}

export default Review