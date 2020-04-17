import React, { Component } from 'react';
import './App.css';

const API_KEY = 'b2ca3bae';
const API_URL = 'http://www.omdbapi.com/'

function fetchMovies(search = 'troy'){
  return fetch(API_URL + '?apikey=' + API_KEY + '&s=' + search).then( res => res.json());
}

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      totalCount: 0
    }
  }

  componentDidMount(){
    fetchMovies().then(res =>{
      this.setState({
        movies: res.Search
      })
    });
  }

  render(){
    return (
      <div className="App">
        <h1>My favorite films</h1>
        <ul>
        {
          this.state.movies.map(movie => <li key={movie.imbdID}>{movie.Title}</li> )
        }
        </ul>
      </div>
    );
  }

}

export default App;
