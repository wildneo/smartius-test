import styled from 'styled-components';

export interface BaseDialogProps {
  open: boolean;
}

export default styled.div<BaseDialogProps>`
  display: ${({ open }) => (open ? 'block' : 'none')};
  position: fixed;
  z-index: 1300;
  inset: 0px;
  &.fade-in {
    opacity: 1;
    transition: opacity linear 0.2s;
  }
  &.fade-out {
    opacity: 0;
    transition: opacity linear 0.2s;
  }
  .dialog-backdrop {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    position: fixed;
    background: ${({ theme }) => theme.palette.background.backdrop};
  }
  .dialog-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    outline: 0;
  }
  .dialog-paper {
    display: flex;
    position: relative;
    width: 470px;
    max-height: calc(100% - 64px);
    margin: 32px;
  }
`;
