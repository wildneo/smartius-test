import React from 'react';

import { ArrowBack as ArrowBackIcon } from '@styled-icons/material';

import IconButton from '../IconButton';
import PageTitle from '../PageTitle';
import StyledToolbar from './styles';

export interface PageToolbarProps {
  title: React.ReactNode;
  onGoBack?: React.MouseEventHandler<HTMLButtonElement>;
}

const PageToolbar: React.FC<React.PropsWithChildren<PageToolbarProps>> = ({
  title,
  children,
  onGoBack,
}) => (
  <StyledToolbar>
    <PageTitle style={{ flexGrow: 1 }}>{title}</PageTitle>
    {children}
    {onGoBack && (
      <IconButton className="pageToolbar-backButton" onClick={onGoBack}>
        <ArrowBackIcon size={24} />
      </IconButton>
    )}
  </StyledToolbar>
);

export default PageToolbar;
