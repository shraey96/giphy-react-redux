import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {connect} from 'react-redux';
import {fetchGIFS} from './actions/gifAction';
import PropTypes from 'prop-types';

import GifResult from './components/gifResult';
import SearchOptions from './components/searchOptions';



class App extends Component {


  render() {




    return (
      <div className="App">



<div className="container">

<center>
<h3>
  <img src="https://media.giphy.com/media/cZDRRGVuNMLOo/giphy.gif" height="60px" width="100px"></img>
<u> Giphy React Redux App </u>
</h3>
</center>

<hr/>


<div className="row">

<div className="col-md-6">
<GifResult></GifResult>
</div>


<div className="col-md-6">
<SearchOptions></SearchOptions>
</div>


</div>


</div>





      </div>
    );
  }
}



export default connect(null, {fetchGIFS})(App);
