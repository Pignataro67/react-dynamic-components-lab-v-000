import React, { Component } from 'react';

export default class ColorBox extends Component {
  
  render() {
    return (
      <div className="color-box" style={{this.props.opacity}}>
        {this.props.opacity >= 0.2 ? <ColorBox />
      </div>
    )
  }
  
}
