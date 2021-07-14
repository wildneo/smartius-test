import styled from 'styled-components';

export default styled.textarea`
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
  resize: none;
  ::placeholder {
    color: #a1a4b5;
  }
  &:focus {
    outline: 0;
  }
`;
