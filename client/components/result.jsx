import React from 'react';

const Result = (props) => {
	return (
		<div>
      <h3><a href={props.result.url}>{props.result.name}</a></h3>
      <div>
        Rating: <img src={props.result.rating_img_url} />
      </div>
      <div>
        Reviews: {props.result.review_count}
      </div>
      <div>
        Snippet: {props.result.snippet_text}
      </div>
		</div>
	);

}

export default Result;
