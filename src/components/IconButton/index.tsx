import React from 'react';

import StyledButton from './styles';

export type IconButtonProps = React.ComponentPropsWithRef<'button'>;

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ children, ...buttonProps }, ref) => (
    <StyledButton type="button" ref={ref} tabIndex={0} {...buttonProps}>
      <span>{children}</span>
    </StyledButton>
  ),
);

export default IconButton;
