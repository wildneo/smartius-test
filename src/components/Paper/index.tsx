import React from 'react';

import StyledPaper, { BasePaperProps } from './styles';

export type PaperProps = BasePaperProps & React.ComponentPropsWithRef<'div'>;

const Paper = React.forwardRef<HTMLDivElement, PaperProps>((props, ref) => (
  <StyledPaper ref={ref} {...props} />
));

export default Paper;
