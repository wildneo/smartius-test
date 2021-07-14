import React from 'react';

import ReactDom from 'react-dom';

import Paper from '../Paper';
import StyledDialog, { BaseDialogProps } from './styles';

export interface DialogProps extends BaseDialogProps {
  onClose: () => void;
}

const Dialog: React.FC<React.PropsWithChildren<DialogProps>> = (props) => {
  const { open, onClose, children } = props;
  const [fadeType, setFadeType] = React.useState<'in' | 'out'>('out');
  const paperRef = React.useRef<HTMLDivElement>(null);

  const handleClose = () => {
    setFadeType('out');
  };

  const handleBackdropClick = (event: React.MouseEvent<HTMLElement>) => {
    if (paperRef.current?.contains(event.target as Node)) return;

    handleClose();
  };

  const handleTransition = (event: React.TransitionEvent<HTMLDivElement>) => {
    if (event.propertyName !== 'opacity') return;

    if (fadeType === 'out') onClose();
  };

  React.useEffect(() => {
    return open ? setFadeType('in') : setFadeType('out');
  }, [open]);

  return ReactDom.createPortal(
    <StyledDialog
      open={open}
      role="dialog"
      className={`fade-${fadeType}`}
      onTransitionEnd={handleTransition}
    >
      <div className="dialog-backdrop" />
      {open && (
        <div
          role="none"
          tabIndex={-1}
          className="dialog-container"
          onMouseDown={handleBackdropClick}
        >
          <Paper ref={paperRef} className="dialog-paper" elevation={4}>
            {children}
          </Paper>
        </div>
      )}
    </StyledDialog>,
    document.body,
  );
};

export default Dialog;
