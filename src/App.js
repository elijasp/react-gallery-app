import React, { Component } from 'react';
import axios from 'axios';
import classes from './App.module.css';
import SearchForm from './components/SearchForm/SearchForm';
import PhotoList from './components/PhotoList/PhotoList';

class App extends Component {
  state = {
    searchText: '',
    photos: []
  }
  
  // search form submit handler
  searchSubmitHandler = e =>{
    e.preventDefault();
    // call api and get photo data
    const API_KEY = process.env.REACT_APP_FLICKR_API_KEY;
    const url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${API_KEY}&text=${this.state.searchText}&sort=relevance&per_page=24&format=json&nojsoncallback=1`;
    axios.get(url)
      .then(res => {
        // store photo data in state
        this.setState({photos: res.data.photos.photo});
      })
      .catch(err => console.log('Error fetching and parsing data', err));
  }

  // input change handler, sets searchText
  onInputChangeHandler = e => {
    this.setState({ searchText: e.target.value});
  }

  render(){
    return (
      <div className={classes.App}>
        <SearchForm onSearch={this.searchSubmitHandler} onChangeHandler={this.onInputChangeHandler}/>
        <PhotoList photos={this.state.photos} />    
      </div>
    );
  }
}

export default App;
