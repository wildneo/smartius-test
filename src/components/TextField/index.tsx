import React from 'react';

import { StyledInput, StyledLabel, StyledSpan } from './styles';

export interface TextFieldProps extends React.ComponentPropsWithRef<'input'> {
  lable?: React.ReactNode;
}

const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
  ({ lable, ...inputProps }, ref) => (
    <StyledLabel>
      <StyledSpan>{lable}</StyledSpan>
      <StyledInput ref={ref} {...inputProps} />
    </StyledLabel>
  ),
);

export default TextField;
