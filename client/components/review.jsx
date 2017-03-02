import React from 'react';
import { Link } from 'react-router';


const Review = (props) => {
	return (
		<div className='container'>
      <div className='row'>
				<div className='col-md-4'>
					{props.review.username}
		    </div>
		    <div className='col-md-8'>
		      {props.review.review}
	      </div>
				<br></br>
			</div>
		</div>
	);

}

export default Review;
