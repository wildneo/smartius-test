import React from 'react';

import StyledButton from './styles';

export interface ButtonProps extends React.ComponentPropsWithRef<'button'> {
  startIcon?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, startIcon, ...buttonProps }, ref) => (
    <StyledButton type="button" ref={ref} tabIndex={0} {...buttonProps}>
      {startIcon && <span className="button-startIcon">{startIcon}</span>}
      {children}
    </StyledButton>
  ),
);

export default Button;
