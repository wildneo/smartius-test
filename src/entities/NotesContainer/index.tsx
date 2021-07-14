import React from 'react';

import { useSelector } from 'react-redux';

import { notesSelector } from '../../store/notesSlice';
import NoteCard, { NoteCardProps } from '../NoteCard';
import StyledNotesContainer from './styles';

export interface NotesContainerProps {
  onItemClick?: NoteCardProps['onClick'];
}

const NotesContainer: React.FC<NotesContainerProps> = ({ onItemClick }) => {
  const notes = useSelector(notesSelector);

  return (
    <StyledNotesContainer>
      {notes.map((note) => (
        <NoteCard key={note.id} note={note} onClick={onItemClick} />
      ))}
    </StyledNotesContainer>
  );
};

export default React.memo(NotesContainer);
