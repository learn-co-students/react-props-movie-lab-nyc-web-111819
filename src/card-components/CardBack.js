import React, { Component } from 'react';
import zero from '../assets/stars/0-stars.png'
import one from '../assets/stars/1-stars.png'
import two from '../assets/stars/2-stars.png'
import three from '../assets/stars/3-stars.png'
import four from '../assets/stars/4-stars.png'
import five from '../assets/stars/5-stars.png'

const imgMapper = {0: zero, 1: one, 2: two, 3: three, 4: four, 5: five}

export default class CardBack extends Component {

  generateRatingElement = (rating) => {
    if (!rating) {
      return (<h4>No Rating Found</h4>)
    } else {
      return (
        <img src={imgMapper[rating]} />
      )
    }
    
  }

  generateGenresString = (genresArray) => {
    // for (const ele of genresArray) {
    //   string = string + ele
    //   debugger
    //   if (ele + 1 != genresArray.length) {
    //     string = string + ", "
    //   }
    // }

    // const reducer = (acc, cur, idx, src) => {
    //   if (idx + 1 != src.length) {
    //     acc = acc + ", " + cur
    //   }
    // }

    return genresArray.reduce(function (acc, cur, idx, src) {
      // debugger
      if (idx !== src.length) {
        acc = acc + ", " + cur
      }
      return acc
    })
  }

  render() {
    return (
      <div className="card-back">
        <h3 className="title">
          {this.props.title}
        </h3>
        <span />
        { this.generateRatingElement(this.props.IMDBRating) }
        <span />
        <h5 className="genres">
          {this.generateGenresString(this.props.genres)}
        </h5>
      </div>
    )
  }
}
