import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

class App extends Component {
  // Render: componentWillMount() -> render() -> componentDidMount()
  // Update componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> componentDidUpdate()
  
  state ={ }

  componentDidMount(){
    console.log(fetch('https://yts.am/api/v2/list_movies.json?sort_by=rating'))
    // setTimeout(() => {
    //   this.setState({
    //     movies: [
    //       {
    //         title: "Matrix",
    //         poster: "https://static.independent.co.uk/s3fs-public/styles/article_small/public/thumbnails/image/2017/03/15/08/the-matrix-reboot-0.jpg",
    //       },
    //       {
    //         title: "Full Metal Jacket",
    //         poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFjEu58aCQZhk6XQnSXWnHtu5irZAU5pyIkUupwqhv0mFZZ4H1YQ",
    //       },
    //       {
    //         title: "Oldboy",
    //         poster: "https://upload.wikimedia.org/wikipedia/en/thumb/6/67/Oldboykoreanposter.jpg/220px-Oldboykoreanposter.jpg",
    //       },
    //       {
    //         title: "Star Wars",
    //         poster: "http://fr.web.img6.acsta.net/pictures/17/10/10/04/58/2061488.jpg",
    //       }
    //     ]
    //   })
    // } , 1000)
  }

  _runderMovies = () => {
    const movies = this.state.movies.map((movie, index) => {
      return <Movie title={movie.title} poster={movie.poster} key={index} />
    })
    return movies
  }

  render() {
    return (
      <div className="App">
        {this.state.movies ? this._runderMovies() : 'Loading'}
      </div>
    );
  }
}

export default App;