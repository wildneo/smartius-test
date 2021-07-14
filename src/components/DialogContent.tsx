import styled from 'styled-components';

const DialogContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 65px;
  font-family: ${({ theme }) => theme.typography.fontFamily};
`;

export default DialogContent;
