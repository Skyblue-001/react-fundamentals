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
function Movie({title, poster, genres, synopsis}){
    return(
        <div classNmae="Movie">
            <div className="Movie__Columns">
            <MoviePoster poster={poster} alt={title}/>
            </div>
            <div className="Movie__Columns">
                <h1>{title}</h1>
                <div className="Moive__Genres">
                    {genres.map((genre,index) => <MovieGenre genre={genre} key={index} />)}
                </div>
                <div className="Moive__Synopsis">
                    <MovieSynopsis synopsis={synopsis}/>
                </div>
            </div>
        </div>
    )
}
function MoviePoster({poster,alt}){
    return(
        <img className="Movie__Poster" src={poster} title={alt} alt={alt} />
    )
}
function MovieGenre({genre}){
    return(
        <span className="Movie__Genre">{genre}</span>
    )
}

function MovieSynopsis({synopsis}){
    return(
        <span className="Movie__Synopsis">{synopsis}</span>
    )
}

Movie.prototype = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    synopsis: PropTypes.string.isRequired
}

MoviePoster.prototype = {
    poster: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}

MovieGenre.prototype = {
    genre: PropTypes.string.isRequired
}

MovieSynopsis.prototype = {
    synopsis: PropTypes.string.isRequired
}

export default Movie;