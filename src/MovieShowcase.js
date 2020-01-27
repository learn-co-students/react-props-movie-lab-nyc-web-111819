import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    // map over your movieData array and return an array of the correct JSX
    return movieData.map((movieObj, index) => 
      <MovieCard 
        key={index}
        title={movieObj.title} 
        IMDBRating={movieObj.IMDBRating} 
        genres={movieObj.genres} 
        poster={movieObj.poster}
      />
    )
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
