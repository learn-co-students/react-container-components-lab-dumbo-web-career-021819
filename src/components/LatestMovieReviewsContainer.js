import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'Frg1nmNUl3CbPc637Gga6MEPstTehvCw';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
export default class LatestMovieReviewsContainer extends React.Component {

  state = {
    reviews: []
  }

  componentDidMount(){
    fetch(URL)
    .then(r => r.json())
    .then(r => this.setState({reviews: r.results}))
  }

  render(){
    return(
      <div className='latest-movie-reviews'>
        <h1>Latest Movie Reviews</h1>
        <div className='review-list'>
          {this.state.reviews.map (movie => {
            return <MovieReviews movie={movie}/>
            })
          } 
        </div>
      </div>
    )
  }
}