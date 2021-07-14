/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Note } from '../typings';

export interface NoteState {
  note: Note | null;
}

export const initialState: NoteState = {
  note: null,
};

export const noteSlice = createSlice({
  name: 'note',
  initialState,
  reducers: {
    setNote: (state, action: PayloadAction<Note>) => {
      state.note = action.payload;
    },
    editNote: (state, action: PayloadAction<Note>) => {
      state.note = action.payload;
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    removeNote: (state, action: PayloadAction<Note>) => {
      state.note = null;
    },
  },
});

export const { setNote, removeNote, editNote } = noteSlice.actions;

export const noteSelector = (state: { noteState: NoteState }) =>
  state.noteState.note;

export default noteSlice.reducer;
