import { Component } from 'react';
import PropTypes from 'prop-types';

import { Overlay, StyledModal } from './Modal.styled';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.key === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    return (
      <Overlay onClick={this.handleBackdropClick}>
        <StyledModal>
          <img src={this.props.largeImage} alt="pic" />
        </StyledModal>
      </Overlay>
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func,
  largeImage: PropTypes.string,
};
