import React, { Component } from 'react';
//import Rater from 'react-rater'
//import 'react-rater/lib/react-rater.css'
//import Contacts from './components/contacts'
//import StarRatings from './react-star-ratings';
import './App.css';
import News from './News/News';
    class App extends Component {
      
    
      render() {
        return (
          <div>
          <h1>Welcome To Saadman's News Portal!</h1>
          <News/>
          
          
          
        </div>
        );
      }
    }

    export default App;