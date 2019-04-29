import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'wF0l20sGjxBGsFhnT50jWGAQCGeAHzHh';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
class LatestMovieReviewsContainer extends Component {

  state = {
      reviews: []
  }

  componentDidMount() {
    fetch(URL)
      .then(response => response.json())
      .then(moviesData => {
        this.setState({
          reviews: moviesData.results
        })
      })
  }

  render() {
    return (
      <div className="latest-movie-reviews">
      {this.state.reviews.map((movie) => {
        return <MovieReviews title={movie.display_title}/>
      })}
    </div>
  )
    }

}

export default LatestMovieReviewsContainer
