import React, { Component } from 'react';
import Blogpost from './Blogpost';

class Comment extends Conmponent {
  render() {
    return (
      <div className="comment">
      {this.props.comenttext}</div> 
    )
  }
  
  export default Comment;