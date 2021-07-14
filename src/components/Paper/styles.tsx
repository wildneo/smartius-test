import styled from 'styled-components';

export interface BasePaperProps {
  elevation?: 0 | 1 | 2 | 3 | 4;
}

export default styled.div<BasePaperProps>`
  background: ${({ theme }) => theme.palette.background.paper};
  box-shadow: ${({ elevation = 0, theme }) => theme.shadows[elevation]};
  overflow: auto;
`;
