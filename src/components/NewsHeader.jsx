import React, { Component } from 'react';
import _ from 'lodash';

class NewsHeader extends Component {
  constructor(props){
    super(props);
  }
  getLogo(){
    return (
      <div className="newsHeader-logo">
        <a href="https://www.ycombinator">
          <img src="../assets/img/y18.gif"/>
        </a>
      </div>
    );
  }

  getTitle(){

  }

  render() {
    return (
      <div className="newsHeader">
        {this.getLogo()}
        {this.getTitle()}
        {this.getNav()}
        {this.getLogin()}
      </div>
    )
  }
}