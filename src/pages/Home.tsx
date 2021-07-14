import React from 'react';

import { useDispatch } from 'react-redux';
import { useHistory, useRouteMatch } from 'react-router-dom';

import { Add as AddIcon } from '@styled-icons/material';

import Button from '../components/Button';
import PageToolbar from '../components/PageToolbar';
import Paper from '../components/Paper';
import AddNotePopup from '../entities/AddNotePopup';
import { NoteFormValues } from '../entities/NoteForm';
import NotesContainer from '../entities/NotesContainer';
import { addNote } from '../store/notesSlice';
import { Note } from '../typings';

const HomePage = () => {
  const dispatch = useDispatch();
  const { url } = useRouteMatch();
  const history = useHistory<Note>();

  const handleAddNoteButtonClick = React.useCallback(() => {
    const params = new URLSearchParams();
    params.set('popup', 'addNote');

    history.push({
      pathname: url,
      search: params.toString(),
    });
  }, [history, url]);

  const handleNoteClick = React.useCallback(
    (_, note) => {
      history.push({
        pathname: `/notes/${note.id}`,
        state: note,
      });
    },
    [history],
  );

  const handleSubmit = React.useCallback(
    (data: NoteFormValues) => {
      dispatch(addNote(data));
    },
    [dispatch],
  );

  return (
    <Paper style={{ flexGrow: 1 }}>
      <PageToolbar title="Заметки">
        <Button
          onClick={handleAddNoteButtonClick}
          startIcon={<AddIcon size={24} />}
        >
          Добавить заметку
        </Button>
      </PageToolbar>
      <NotesContainer onItemClick={handleNoteClick} />
      <AddNotePopup onSubmit={handleSubmit} />
    </Paper>
  );
};

export default HomePage;
