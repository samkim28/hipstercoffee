import React from 'react';
import AddStoreButton from './addStoreButton';
import { Link } from 'react-router';


const Result = (props) => {
	console.log('props inside yelp results: ', props);
	return (
		<div>
      <h3><Link to={`/shoppage/${props.result.id}/${props.result.name}`}>{props.result.name}</Link></h3>
      <div>
        Rating: <img src={props.result.rating_img_url} />
      </div>
      <div>
        Reviews: {props.result.review_count}
      </div>
      <div>
        Snippet: {props.result.snippet_text}
      </div>
			<AddStoreButton store={props.result} />
		</div>
	);

}

export default Result;
