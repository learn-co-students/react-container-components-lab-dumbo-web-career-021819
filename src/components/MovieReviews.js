import React, { Component }  from 'react';
// Code MovieReviews Here
const MovieReviews = (props) => {
  // console.log(props.movie)
  return(
    <div className='review'>
      <div>{props.movie.display_title}</div>
      {/* <div>{props.movie.byline}</div>
      <div>{props.movie.critics_pick}</div>
      <div>{props.movie.headline}</div>
      <div>{props.movie.mpaa_rating}</div>
      <div>{props.movie.summary_short}</div> */}
      <a href={props.movie.link.url}>{props.movie.link.suggested_link_text}</a>
    </div>
  )
}

export default MovieReviews