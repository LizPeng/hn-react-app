import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import $ from 'jquery';

//引入三个子组件
import NewsHeader from './components/NewsHeader.jsx';
//import NewsItem from './components/NewsItem.jsx';
//import NewsList from './components/NewsList.jsx';


class App extends Component {
  render() {
    return (
      <div className="App">
        <NewsHeader />
      </div>
    );
  }
}

export default App;
