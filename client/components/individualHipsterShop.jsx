import React from 'react';
import { Link } from 'react-router';


const HipsterResult = (props) => {
	return (
		<div>
      <h3><Link to={`/shoppage/${props.result.yelp_id}`}>{props.result.name}</Link></h3>
      <div>
        Rating: <img src={props.result.name} />
      </div>
      <div>
        Reviews: {props.result.reviews}
      </div>
      <div>
        Likes: {props.result.likes}
      </div>
		</div>
	);

}

export default HipsterResult;
