import React from 'react';

import styles from './styles';

const Button = ({ children, ...props }) => {
  const className = `
    button
    ${props.primary && 'primary'}
    ${props.link && 'link'}
    ${props.danger && 'danger'}
  `;
  return (
    <button className={className}>
      <span>
        { children }
      </span>
    </button>
  );
};

export default Button;
