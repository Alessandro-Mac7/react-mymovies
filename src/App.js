import React, { Component } from 'react';
import VideoList from './component/movie_list.js'
import Navbar from './component/navbar.js'
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
        movies: res.Search,
        totalCount: res.totalResults
      })
    });
  }

  render(){
    return (
      <React.Fragment>
        <Navbar />
        <div className="container">
          <h1>My favorite films</h1>
            <VideoList movies={this.state.movies}/>
        </div>
      </React.Fragment>
    );
  }

}

export default App;
