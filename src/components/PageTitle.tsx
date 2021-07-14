import styled from 'styled-components';

const PageTitle = styled.h1`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: 40px;
  font-style: normal;
  font-weight: 400;
  line-height: 56px;
  text-align: left;
`;

export default PageTitle;
