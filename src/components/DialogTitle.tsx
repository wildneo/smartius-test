import styled from 'styled-components';

const DialogTitle = styled.h2`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 29px;
  text-align: left;
`;

export default DialogTitle;
