import styled from 'styled-components';

export const StyledInput = styled.input`
  width: inherit;
  border: none;
  border-radius: 25px;
  background: ${({ theme }) => theme.palette.background.textField};
  color: ${({ theme }) => theme.palette.text.primary};
  font-size: 15px;
  font-style: normal;
  font-weight: 300;
  line-height: 18px;
  padding: 16px;
  margin-top: 8px;
  ::placeholder {
    color: #a1a4b5;
  }
  &:focus {
    outline: 0;
  }
`;

export const StyledLabel = styled.label`
  display: block;
  font-family: ${({ theme }) => theme.typography.fontFamily};
  color: ${({ theme }) => theme.palette.text.secondary};
  margin: 8px 0 24px;
  text-align: left;
  width: 100%;
`;

export const StyledSpan = styled.span`
  color: #999999;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 15px;
  width: inherit;
`;
