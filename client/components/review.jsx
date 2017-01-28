import React from 'react';
import { Link } from 'react-router';


const Review = (props) => {
  console.log('props inside review component:', props);
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
