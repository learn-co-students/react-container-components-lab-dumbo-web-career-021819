import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {
  state= {
    reviews: [],
    searchTerm: ""
  }

  handleChange = (event) => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const NYT_API_KEY = 'wF0l20sGjxBGsFhnT50jWGAQCGeAHzHh';
    const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?' + `query=${this.state.searchTerm}&`
                + `api-key=${NYT_API_KEY}`;
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
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
          <label>Search Movie Reviews</label>
          <input type="text" name="searchTerm" value={this.state.searchTerm} onChange={this.handleChange}/>
          <label>Search</label>
          <button type="Submit" />
        </form>
        {this.state.reviews.map((movie) => {
          return <MovieReviews title={movie.display_title}/>
        })}
      </div>
    )
  }
}

export default SearchableMovieReviewsContainer
