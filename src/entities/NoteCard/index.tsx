import React from 'react';

import { ArrowForward as ArrowForwardIcon } from '@styled-icons/material';

import { Note } from '../../typings';
import StyledNoteCard from './styles';

export interface NoteCardProps {
  note: Note;
  onClick?: (event: React.MouseEvent<HTMLDivElement>, note: Note) => void;
}

const NoteCard: React.FC<NoteCardProps> = ({ note, onClick }) => {
  const [hovered, setHovered] = React.useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const handleClick: React.MouseEventHandler<HTMLDivElement> = (event) => {
    if (onClick) onClick(event, note);
  };

  return (
    <StyledNoteCard
      role="button"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={hovered ? 'hovered' : undefined}
      tabIndex={-1}
      onClick={handleClick}
    >
      <h5 className="noteCard-title">{note.title}</h5>
      <span className="noteCard-subTitle">
        {new Date(note.date).toLocaleDateString()}
      </span>
      {hovered && <ArrowForwardIcon className="noteCard-icon" size={24} />}
    </StyledNoteCard>
  );
};

export default React.memo(NoteCard);
