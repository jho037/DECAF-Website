import React, { Component } from 'react';
import Navigation from './Navigation';
import DecafSum from './DecafSum';

class Live extends Component {
  state = {

  }
  render(){
    return(
        <div>
            <Navigation></Navigation>,
            <DecafSum></DecafSum>
        </div>
    );
  }
}

export default Live;
