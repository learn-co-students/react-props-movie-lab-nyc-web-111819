import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    let key = 0;
    return movieData.map(item => {
      // console.log(item.title)
      // MovieCard.defaultProps = { 
      //   title: "Unknown", 
      //   genres: ["No Genre(s) Found"],
      //   IMBDRating: null, 
      //   poster: "default"
      // }
      key++
      return <MovieCard key={key} title={item.title} genres={item.genres} IMDBRating={item.IMDBRating} poster={item.poster} />
    })
  }

  render() {
    console.log("render MovieShowcase")
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
