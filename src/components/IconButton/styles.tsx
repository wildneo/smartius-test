import styled from 'styled-components';

export default styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  align-content: center;
  margin: 8px;
  padding: 12px;
  background: none;
  border: none;
  color: ${({ theme }) => theme.palette.text.secondary};
  &:hover,
  &:focus {
    color: ${({ theme }) => theme.palette.primary};
  }
  &:hover,
  &:focus,
  &:active {
    outline: none;
  }
`;
