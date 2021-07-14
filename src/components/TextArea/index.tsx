import React from 'react';

import { StyledLabel, StyledSpan } from '../TextField/styles';
import StyledTextArea from './styles';

export interface TextAreaProps extends React.ComponentPropsWithRef<'textarea'> {
  lable?: React.ReactNode;
}

const TextField = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ lable, ...inputProps }, ref) => (
    <StyledLabel>
      <StyledSpan>{lable}</StyledSpan>
      <StyledTextArea ref={ref} {...inputProps} />
    </StyledLabel>
  ),
);

export default TextField;
