import React, { Component } from 'react';
import _ from 'lodash';
import y18 from '../assets/img/y18.gif';

class NewsHeader extends Component {
  constructor(props){
    super(props);
  }
  getLogo(){
    return (
      <div className="newsHeader-logo">
        <a href="https://www.ycombinator">
          <img src={y18}/>
        </a>
      </div>
    );
  }

  getTitle(){
    return(
      <div className="newsHeader-title">
        <a className="newsHeader-textLink" href="https://news.ycombinator.com">Hacker News</a>
      </div>
    );
  }

  render() {
    return (
      <div className="newsHeader">
        {this.getLogo()}
        {this.getTitle()}
      </div>
    )
  }
}

export default NewsHeader;