import React from 'react';

import { useHistory, useLocation } from 'react-router-dom';

import { Close as CloseIcon } from '@styled-icons/material';

import Dialog from '../../components/Dialog';
import DialogContent from '../../components/DialogContent';
import DialogTitle from '../../components/DialogTitle';
import NoteForm, { NoteFormValues } from '../NoteForm';
import CloseDialogButton from './styles';

export interface AddNotePopupProps {
  onSubmit: (data: NoteFormValues) => void;
}

const AddNotePopup: React.FC<AddNotePopupProps> = ({ onSubmit }) => {
  const { search } = useLocation();
  const history = useHistory();
  const query = new URLSearchParams(search);
  const popup = query.get('popup');

  const handleSubmit = (data: NoteFormValues) => {
    onSubmit(data);
    history.goBack();
  };

  return (
    <Dialog open={popup === 'addNote'} onClose={history.goBack}>
      <CloseDialogButton onClick={history.goBack}>
        <CloseIcon size={24} />
      </CloseDialogButton>
      <DialogContent>
        <DialogTitle>Добавить заметку</DialogTitle>
        <NoteForm buttonTitle="Добавить" onSubmit={handleSubmit} />
      </DialogContent>
    </Dialog>
  );
};

export default React.memo(AddNotePopup);
