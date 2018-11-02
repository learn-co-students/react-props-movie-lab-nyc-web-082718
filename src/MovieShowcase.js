import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    // map over your movieData array and return the correct
    return  movieData.map((theData, idx) =>
    <MovieCard
      key={idx}
      title={theData.title}
      IMDBRating={theData.IMDBRating}
      genres={theData.genres}
      poster={theData.poster}
    />)
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
