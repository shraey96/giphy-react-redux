import React, { Component } from 'react';

import {connect} from 'react-redux';
import {fetchGIFS} from '../actions/gifAction';
// import PropTypes from 'prop-types';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { ToastContainer, toast } from 'react-toastify';
import '../App.css';

class gifResult extends Component {

constructor(){
  super();
  this.state = {
    copied: false
  };

  this.notify = this.notify.bind(this);
}

  componentWillMount(){
    this.props.fetchGIFS('minions');
  }

  componentWillReceiveProps(nextProps){
      // this.props.fetchGIFS(nextProps.options);
      if(nextProps.options !== this.props.options){
        // console.log("AAA");
        this.props.fetchGIFS(nextProps.options.searchTerm);
      }
  }


  notify(){
    toast.info("Copied!", {
          position: toast.POSITION.TOP_CENTER,
           autoClose: 3000
        });
  }


  render() {


let gifsToShow;
if(this.props.gifs){

  gifsToShow = this.props.gifs.map((gif)=>{
    return(
      <div key={gif.id} className="imgteaser">
        <CopyToClipboard text={gif.images.original.url}
           onCopy={() => this.setState({copied: true}, ()=>{console.log(this.state);})}>
            <a href="#">
        <img className="loading" src={gif.images.original.url} height="200px" width="350px" onClick={this.notify}/>
         <ToastContainer />
          <span class="desc">
            <h3>Click image to copy URL</h3>
        </span>
            </a>
         </CopyToClipboard>
      </div>

    )

  })

}else {
  gifsToShow = "";
}


if(this.state.copied === true){

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
