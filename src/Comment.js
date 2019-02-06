import React, { Component } from 'react';
import BlogPost from './BlogPost';

export default class Comment extends React.Conmponent {
  render() {
    return (
      <div className="comment">
      {this.props.comenttext}</div> 
    )
  }
}  