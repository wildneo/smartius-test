import React from 'react';

import { Redirect, useHistory, useLocation } from 'react-router-dom';

import { Close as CloseIcon } from '@styled-icons/material';

import Dialog from '../../components/Dialog';
import DialogContent from '../../components/DialogContent';
import DialogTitle from '../../components/DialogTitle';
import { Note } from '../../typings';
import NoteForm, { NoteFormValues } from '../NoteForm';
import CloseDialogButton from './styles';

export interface EditNotePopupProps {
  onSubmit: (data: Note) => void;
}

const EditNotePopup: React.FC<EditNotePopupProps> = ({ onSubmit }) => {
  const { state } = useLocation<Note>();
  const { search } = useLocation();
  const history = useHistory();
  const query = new URLSearchParams(search);
  const popup = query.get('popup');

  const defaultValues: NoteFormValues = {
    title: state?.title,
    comment: state?.comment,
  };

  const handleSubmit = (data: NoteFormValues) => {
    const modifiedNote = { ...state, ...data };
    onSubmit(modifiedNote);
    history.goBack();
  };

  if (!state) return <Redirect to="/" />;

  return (
    <Dialog open={popup === 'editNote'} onClose={history.goBack}>
      <CloseDialogButton onClick={history.goBack}>
        <CloseIcon size={24} />
      </CloseDialogButton>
      <DialogContent>
        <DialogTitle>Править заметку</DialogTitle>
        <NoteForm
          buttonTitle="Сохранить"
          defaultValues={defaultValues}
          onSubmit={handleSubmit}
        />
      </DialogContent>
    </Dialog>
  );
};

export default React.memo(EditNotePopup);
