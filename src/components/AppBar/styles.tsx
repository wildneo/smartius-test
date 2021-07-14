import styled from 'styled-components';

export interface BaseAppBarProps {
  elevation?: 0 | 1 | 2 | 3 | 4;
}

const AppBar = styled.header<BaseAppBarProps>`
  box-shadow: ${({ elevation = 0, theme }) => theme.shadows[elevation]};
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  position: fixed;
  top: 0;
  right: 0;
  left: auto;
  width: 100%;
  z-index: 1100;
`;

export default AppBar;
