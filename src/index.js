import React from 'react';
import ReactDOM from 'react-dom';

import LatestMovieReviewsContainer from './components/LatestMovieReviewsContainer';
import SearchableMovieReviewsContainer from './components/SearchableMovieReviewsContainer';

ReactDOM.render(
  <div className="app">
    <SearchableMovieReviewsContainer />
    <LatestMovieReviewsContainer />
  </div>,
  document.getElementById('root')
);

// key https://api.nytimes.com/svc/movies/v2/reviews/all.json?api-key=Frg1nmNUl3CbPc637Gga6MEPstTehvCw