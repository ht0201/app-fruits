import React, { Component } from 'react';

import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class MessageContainer extends Component {

  render() {
    return (
      <ToastContainer autoClose={2000} />
    );
  }
}

export default MessageContainer;

