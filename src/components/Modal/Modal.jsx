import { useEffect, useCallback } from 'react';
// import PropTypes from 'prop-types';
// import { createPortal } from 'react-dom';
import { BackdropDiv, ContentDiv } from './Modal.styled';

// const modalRoot = document.querySelector('#modal-root');

const Modal = ({ onClose, children }) => {
 const handleKeyDown = useCallback(
   e => {
     if (e.code === 'Escape') {
       onClose();
     }
   },
   [onClose]
 );

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);
  

  return (
    <BackdropDiv onClick={handleBackdropClick}>
      <ContentDiv>{children}</ContentDiv>
    </BackdropDiv>
  );
};

// Modal.propTypes = {
//   onClose: PropTypes.func.isRequired,
//   children: PropTypes.node.isRequired,
// };

export default Modal;