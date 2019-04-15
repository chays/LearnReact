import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';


class App extends Component {

  state ={    
    
  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({
        movies:[
          {
            title:"Matris",
            poster:"https://images-na.ssl-images-amazon.com/images/I/51EG732BV3L.jpg"
          },
          {
            title:"Full Metal Jacket",
            poster:"https://images-na.ssl-images-amazon.com/images/I/91sTE00%2Bm%2BL._SL1500_.jpg"
          },
          {
            title: "Oldboy",
            poster:"https://upload.wikimedia.org/wikipedia/en/6/67/Oldboykoreanposter.jpg"
          },
          {
            title: "Star Wars",
            poster:"https://images-na.ssl-images-amazon.com/images/I/81WjGytz7HL._SY445_.jpg"
          },
          {
            title:"transpostting",
            poster:"https://m.media-amazon.com/images/M/MV5BMzA5Zjc3ZTMtMmU5YS00YTMwLWI4MWUtYTU0YTVmNjVmODZhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY1000_SX675_AL_.jpg"
          }
        ]
      })
    },5000)
  }
  _renderMovies = () =>{
    const movies = this.state.movies.map((movie, index) =>{
      return <Movie title={movie.title} poster={movie.poster} key={index} />
    })
    return movies
  }
  render() {
    return (
      <div className="App">        
        {this.state.movies ? this._renderMovies() :'Loading...'}
      </div>
    )
  }
}

export default App;
