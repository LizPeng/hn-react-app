import React, { Component } from 'react';
import _ from 'lodash';
import y18 from '../assets/img/y18.gif';
import './css/NewsHeader.css';

class NewsHeader extends Component {
  
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

  getNav(){
    let navLinks =[
      {name: 'new', url: 'newest'},
      {name: 'show', url:'show'},
      {name: 'ask', url:'ask'},
      {name: 'jobs', url:'jobs'},
      {name: 'submit', url:'submit'}
    ];
    return (
      <div className="newsHeader-nav">
        {_(navLinks).map(function(navLink) {
          return (
            <a key={navLink.url} className="newsHeader-navLink newsHeader-textLink" href={'https://news.ycombinator.com/' + navLink.url}>
              {navLink.name}
            </a>
          )
        }).value()}
      </div>
    )
  }

  render() {
    return (
      <div className="newsHeader">
        {this.getLogo()}
        {this.getTitle()}
        {this.getNav()}
      </div>
    )
  }
}

export default NewsHeader;