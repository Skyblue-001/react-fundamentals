import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

class Movie extends Component{

    static propTypes = {
        title: PropTypes.string.isRequired,
        poster: PropTypes.string.isRequired
    }
    render(){
        return(
            <div>
                <MoviePoster poster={this.props.poster} />
                <div className="poster-title">{this.props.title}</div>
            </div>
        )
    }
}

class MoviePoster extends Component{
    render(){
        return(
            <img className="lv-boots-img" src={this.props.poster} />
        )
    }
}
export default Movie;