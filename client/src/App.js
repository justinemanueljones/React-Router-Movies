import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';//added imports
import SavedList from './Movies/SavedList';
import Movie from './Movies/Movie'//
import MovieList from './Movies/MovieList'//

const App = () => {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies')   // (1)Study this endpoint with Postman
        .then(response => {
          // (2)Study this response with a breakpoint or log statements
          // and set the response data as the 'movieList' slice of state
          setMovieList(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);

  const addToSavedList = id => {
    // This is stretch. Prevent the same movie from being "saved" more than once
  };

  return (
    <div>

    <SavedList list={[ /* This is stretch */]} />


   
    {/* (3)added route path */} {/* <div>Replace this Div with your Routes</div> */}
    <Route exact path ="/"> 

      <Route path="/movies/:id" component={Movie}/> 

<MovieList movies={movieList}/>

      </Route> 
    </div> 
  );
};

export default App;
