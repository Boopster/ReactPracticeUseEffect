import React, {Component} from 'react';

class Modal extends Component {
  render() {
    if(!this.props.show){
      return null;
    }
    return (
      <div>
        <div>
          {this.props.children}
        </div>
        <div>
          <button onClick={e => {this.props.setShow(false)}}>Close</button>
        </div>
      </div>
    );
  }
}

export default Modal;
