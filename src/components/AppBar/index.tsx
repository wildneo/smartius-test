import React from 'react';

import StyledHeader, { BaseAppBarProps } from './styles';

export type AppBarProps = BaseAppBarProps &
  React.ComponentPropsWithRef<'header'>;

const Paper = React.forwardRef<HTMLElement, AppBarProps>((props, ref) => (
  <StyledHeader ref={ref} {...props} />
));

export default Paper;
