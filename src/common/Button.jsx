import React from 'react';
import { StyledButton } from '../styles/styles';

const Button = ({ onClick, children, $buttonWidth, $buttonHeight }) => {
  return (
    <StyledButton
      type="button"
      onClick={onClick}
      $buttonWidth={$buttonWidth}
      $buttonHeight={$buttonHeight}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
