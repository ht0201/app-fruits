import React, { Component } from 'react';


class Message extends Component {
  render() {
    return (
      <h4>
        <span className="badge blue-gradient ">
            {this.props.message}
        </span>
      </h4>
    );
  }
}


export default Message;
