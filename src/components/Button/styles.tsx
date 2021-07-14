import styled from 'styled-components';

export default styled.button`
  display: flex;
  position: relative;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  height: 50px;
  white-space: nowrap;
  text-decoration: none;
  box-sizing: border-box;
  color: #fff;
  background: ${({ theme }) => theme.palette.primary};
  border-radius: 25px;
  border: none;
  padding: 16px 32px;
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: left;
  &:hover,
  &:focus {
    outline: none;
  }
  &:disabled {
    background: ${({ theme }) => theme.palette.text.disabled};
  }
  .button-startIcon {
    display: flex;
    margin-left: -4px;
    margin-right: 13px;
  }
`;
