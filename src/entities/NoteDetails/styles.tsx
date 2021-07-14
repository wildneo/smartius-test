import styled from 'styled-components';

export default styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-wrap: nowrap;
  padding: 0 20px 40px;
  .noteDetails-comment,
  .noteDetails-date {
    font-family: ${({ theme }) => theme.typography.fontFamily};
    color: ${({ theme }) => theme.palette.text.secondary};
    font-weight: 400;
    font-style: normal;
    text-align: left;
  }
  .noteDetails-comment {
    font-size: 20px;
    line-height: 24px;
    margin: 0;
    margin-bottom: 32px;
    white-space: pre-wrap;
  }
  .noteDetails-date {
    font-size: 18px;
    line-height: 20px;
  }
  .noteDetails-removeButton {
    position: absolute;
    right: 0;
    bottom: 16px;
  }
`;
