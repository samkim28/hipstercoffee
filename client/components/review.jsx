import React from 'react';
import { Link } from 'react-router';


const Review = (props) => {
	return (
		<div>
      <div>
      User: {props.review.username}
      </div>
      <div>
      Review: {props.review.review}
      </div>
		</div>
	);

}

export default Review;
