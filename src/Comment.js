import React, { Component } from 'react';
import Blogpost from './Blogpost';

export default class Comment extends React.Conmponent {
  render() {
    return (
      <div className="comment">
      {this.props.comenttext}</div> 
    )
  }
}  
  