import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

// class Movie extends Component{

//     static propTypes = {
//         title: PropTypes.string.isRequired,
//         poster: PropTypes.string.isRequired
//     }
//     render(){
//         return(
//             <div>
//                 <MoviePoster poster={this.props.poster} />
//                 <div className="poster-title">{this.props.title}</div>
//             </div>
//         )
//     }
// }

// class MoviePoster extends Component{
//     render(){
//         return(
//             <img className="lv-boots-img" src={this.props.poster} />
//         )
//     }
// }

// Smart & Dumb Components
function Movie({title, poster}){
    return(
        <div>
            <MoviePoster poster={poster} />
            <h1>{title}</h1>
        </div>
    )
}
function MoviePoster({poster}){
    return(
        <img src={poster} />
    )
}

Movie.prototype = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
}

MoviePoster.prototype = {
    poster: PropTypes.string.isRequired
}

export default Movie;