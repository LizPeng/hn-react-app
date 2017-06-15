import React,{ Component } from 'react';
import url from 'url';
import moment from 'moment';

class NewsItem extends Component {
  getDomain(){
    return url.parse(this.props.item.url).hostname;
  }

  commentLink(){
    let commentText = 'discuss';
    if(this.props.item.kids && this.props.item.kids.length){
      commentText = this.props.item.kids.length + ' comments';
    }

    return (
      <a href={'https://news.ycombinator.com/item?id=' + this.props.item.id}>
        {commentText}
      </a>
    )
  }
  getSubtext(){
    return (
      <div className="newsItem-subtext">
        {this.props.item.score} points by <a href={'https://news.ycombinator.com/user?id=' + this.props.item.by}> {this.props.item.by} </a> 
        {moment.utc(this.props.item.time * 100 ).fromNow()} | {this.getCommentLink() }
      </div>
    )
  }

  render(){
    return (
      <div className="newsItem">
        {this.getSubtext()}
      </div>
    )
  }
}

export default NewsItem;