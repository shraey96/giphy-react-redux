import React, { Component } from 'react';

// import './App.css';
import {connect} from 'react-redux';
import {alterOptions} from '../actions/optionAction';
// import PropTypes from 'prop-types';

class searchOptions extends Component {

constructor(){
super()

  this.state = {
    value : '',
    selectDropDownValue: '1'
  }

  this.handleSubmit = this.handleSubmit.bind(this);
  this.handleChange = this.handleChange.bind(this);
  this.handleSelectChange = this.handleSelectChange.bind(this);
}

handleSubmit(e){
  e.preventDefault();
  this.props.alterOptions(this.state.value);
  this.setState({selectDropDownValue: '1'})
}

handleChange(e){
  this.setState({value : e.target.value});
}

handleSelectChange(e){

  if(e.target.value === '1'){
      this.props.alterOptions('mood');
  }else {
    this.setState({value : e.target.value, selectDropDownValue: e.target.value}, ()=>{
      this.props.alterOptions((this.state.value).toLowerCase());
    });
  }

}

  render() {

    return (

  <div className="App">


    <form onSubmit={this.handleSubmit}>
    <div className="form-group">
    <div className="input-group mb-3">
    <input type="text" className="form-control" value={this.state.value} onChange = {this.handleChange} placeholder="Search for a gif" name="gifSearch" aria-describedby="basic-addon1" />
    </div>
    </div>
    </form>

    <i> Select a mood!</i>
  <select className="custom-select" onChange={this.handleSelectChange} value={this.state.selectDropDownValue}>
      <option value="1">---</option>
      <option value="Amused">Amused</option>
      <option value="Angry">Angry</option>
      <option value="Bored">Bored</option>
      <option value="Excited">Excited</option>
      <option value="Confused">Confused</option>
      <option value="Sad">Sad</option>
      <option value="Happy">Happy</option>
      <option value="Drunk">Drunk</option>
      <option value="Proud">Proud</option>
  </select>



<br/>
<br/>
<div className="bottom-icons">
<i class="material-icons">gif</i><a href="https://giphy.com/"> Giphy </a>
<br></br>
<i class="material-icons">code</i><a href="">Github</a>
</div>

  </div>





    );
  }
}



export default connect(null, {alterOptions})(searchOptions);
