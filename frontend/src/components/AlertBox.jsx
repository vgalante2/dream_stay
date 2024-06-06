import React from 'react';

function AlertBox({ message, onClose }) {
  return (
    <div className="custom-alert">
      <div className="custom-alert-content">
        <p>{message}</p>
        <button onClick={onClose}>OK</button>
      </div>
    </div>
  );
}

export default AlertBox;







