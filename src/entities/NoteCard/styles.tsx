import styled from 'styled-components';

export default styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: calc(25% - 15px);
  height: 110px;
  padding: 20px;
  margin-right: 20px;
  margin-bottom: 20px;
  box-shadow: ${({ theme }) => theme.shadows[1]};
  &:nth-child(4n) {
    margin-right: 0;
  }
  &.hovered {
    box-shadow: ${({ theme }) => theme.shadows[3]};
  }
  .noteCard-title,
  .noteCard-subTitle {
    font-family: ${({ theme }) => theme.typography.fontFamily};
    font-style: normal;
    text-align: left;
    overflow: hidden;
  }
  .noteCard-title {
    font-size: 16px;
    line-height: 19px;
    font-weight: 500;
    color: ${({ theme }) => theme.palette.text.primary};
    max-height: 2.5em;
    margin: 0 0 16px;
  }
  .noteCard-subTitle {
    font-size: 13px;
    line-height: 14px;
    font-weight: 400;
    color: ${({ theme }) => theme.palette.text.secondary};
  }
  .noteCard-icon {
    position: absolute;
    right: 16px;
    bottom: 16px;
    color: ${({ theme }) => theme.palette.primary};
  }
`;
