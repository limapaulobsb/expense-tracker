import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import '../styles/Modal.css';

export default function Modal({ children, state: { showModal, setShowModal } }) {
  return (
    <>
      <div className={cx('modal', { 'modal--visible': showModal })}>
        {showModal && children}
      </div>
      <div
        className={cx('backdrop', { 'backdrop--visible': showModal })}
        onClick={() => setShowModal(false)}
      />
    </>
  );
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  state: PropTypes.object.isRequired,
};
