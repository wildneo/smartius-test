import React from 'react';

import { useSelector } from 'react-redux';

import {
  Edit as EditIcon,
  DeleteOutline as DeleteIcon,
} from '@styled-icons/material';

import Button from '../../components/Button';
import Divider from '../../components/Divider';
import IconButton from '../../components/IconButton';
import PageToolbar from '../../components/PageToolbar';
import { noteSelector } from '../../store/noteSlice';
import { Note } from '../../typings';
import StyledContaider from './styles';

export interface NoteDetailsProps {
  onBackButtonClick: React.MouseEventHandler<HTMLButtonElement>;
  onEditNoteButtonClick: (
    event: React.MouseEvent<HTMLButtonElement>,
    note: Note,
  ) => void;
  onRemoveNoteButtonClick: (
    event: React.MouseEvent<HTMLButtonElement>,
    note: Note,
  ) => void;
}

const NoteDetails: React.FC<NoteDetailsProps> = ({
  onBackButtonClick,
  onEditNoteButtonClick,
  onRemoveNoteButtonClick,
}) => {
  const note = useSelector(noteSelector);

  const handleEditNoteButtonClick: React.MouseEventHandler<HTMLButtonElement> =
    (event) => {
      if (note) onEditNoteButtonClick(event, note);
    };
  const handleRemoveNoteButtonClick: React.MouseEventHandler<HTMLButtonElement> =
    (event) => {
      if (note) onRemoveNoteButtonClick(event, note);
    };

  return (
    note && (
      <>
        <PageToolbar title={note.title} onGoBack={onBackButtonClick}>
          <Button
            onClick={handleEditNoteButtonClick}
            startIcon={<EditIcon size={20} />}
          >
            Править заметку
          </Button>
        </PageToolbar>
        <StyledContaider>
          <p className="noteDetails-comment">{note.comment}</p>
          <span className="noteDetails-date">
            {new Date(note.date).toLocaleDateString()}
          </span>
          <IconButton
            className="noteDetails-removeButton"
            onClick={handleRemoveNoteButtonClick}
          >
            <DeleteIcon size={24} />
          </IconButton>
        </StyledContaider>
        <Divider />
      </>
    )
  );
};

export default React.memo(NoteDetails);
