import React, { Component } from 'react';
// require('es6-promise').polyfill();
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'Frg1nmNUl3CbPc637Gga6MEPstTehvCw';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends React.Component {

  state = {
    reviews: [],
    searchTerm: ''
  }

  fetchity = () => {
    fetch(URL)
	.then(function(response) {
		if (response.status >= 400) {
			throw new Error("Bad response from server");
		}
		return response.json();
	})
	.then(function(stories) {
		console.log(stories);
	});
  } // https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=<search-term>

  handleSubmit = (event) => {
    event.preventDefault()
    const searchPhrase = event.target.input.value
    fetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${searchPhrase}&api-key=${NYT_API_KEY}`) // + `?query=${searchPhrase}`
    .then(r => r.json())
    .then(moviesArray => this.setState({reviews: moviesArray.results}))
    // console.log(this.state.reviews)
  }

  render(){
    // {this.fetchity()}
    return(
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
          <input type='text' name='input' />
          <input type="submit" />
        </form>
        <hr/>
        <div className='latest-movie-reviews'>
          <div className='review-list'>
            {this.state.reviews.map (movie => {
              return <MovieReviews movie={movie}/>
              })
            } 
          </div>
        </div>
        <hr/>
      </div>
    )
  }
}