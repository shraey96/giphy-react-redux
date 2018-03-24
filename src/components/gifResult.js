import React, { Component } from 'react';

import {connect} from 'react-redux';
import {fetchGIFS} from '../actions/gifAction';
// import PropTypes from 'prop-types';
import '../App.css';

class gifResult extends Component {


  componentWillMount(){
    // console.log("Mounting");
    this.props.fetchGIFS('minions');
  }

  componentWillReceiveProps(nextProps){
      // this.props.fetchGIFS(nextProps.options);
      if(nextProps.options !== this.props.options){
        // console.log("AAA");
        this.props.fetchGIFS(nextProps.options.searchTerm);
      }
  }


  render() {


let gifsToShow;
if(this.props.gifs){

  gifsToShow = this.props.gifs.map((gif)=>{
    return(
      <div key={gif.id}>
      <img className="loading" src={gif.images.original.url} height="200px" width="350px"/>
      </div>
    )

  })

}else {
  gifsToShow = "";
}

    return (



      <div className="App">
    {gifsToShow}
      </div>


    );
  }
}

const mapStateToProps = function(state){
  return {
    gifs: state.gifs.gifResults,
    options: state.options
          }
}


export default connect(mapStateToProps, {fetchGIFS})(gifResult);
