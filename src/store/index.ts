import { combineReducers, configureStore } from '@reduxjs/toolkit';

import noteReducer from './noteSlice';
import notesReducer from './notesSlice';

export default configureStore({
  reducer: combineReducers({
    noteState: noteReducer,
    notesState: notesReducer,
  }),
});
