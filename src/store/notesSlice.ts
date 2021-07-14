/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { reject, uniqueId } from 'lodash';

import { Note } from '../typings';
import { editNote, removeNote } from './noteSlice';

export interface NotesState {
  notes: Note[];
}

export const initialState: NotesState = {
  notes: [
    {
      id: uniqueId(),
      title: 'Длинный заголовок заметки номер 4',
      comment: 'Комментарий пользователя к заметке.\r\nКомментарий к заметке.',
      date: new Date().toISOString(),
    },
  ],
};

export const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    addNote: (
      state,
      action: PayloadAction<Pick<Note, 'title' | 'comment'>>,
    ) => {
      const { title, comment } = action.payload;

      state.notes.push({
        id: uniqueId(),
        date: new Date().toISOString(),
        title,
        comment,
      });
    },
  },
  extraReducers: {
    [editNote.type]: (state, action: PayloadAction<Note>) => {
      const modifiedNote = action.payload;

      const index = state.notes.findIndex(({ id }) => id === modifiedNote.id);

      if (index >= 0) {
        state.notes[index] = modifiedNote;
      }
    },
    [removeNote.type]: (state, action: PayloadAction<Note>) => {
      const { id } = action.payload;
      state.notes = reject(state.notes, { id });
    },
  },
});

export const { addNote } = notesSlice.actions;

export const notesSelector = (state: { notesState: NotesState }) =>
  state.notesState.notes;

export default notesSlice.reducer;
