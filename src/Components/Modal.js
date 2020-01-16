import React, {Component} from 'react';
import './Modal.css';

class Modal extends Component {
  render() {
    if(!this.props.show){
      return null;
    }
    return (
      <div className="modal" id="modal">
        <h2>Ingredients List</h2>
        <div className="content">
          {this.props.children}
        </div>
        <div className="actions">
          <button className="toggle-button" onClick={e => {this.props.setShow(false)}}>Close</button>
        </div>
      </div>
    );
  }
}

export default Modal;
