import React from 'react';

import { useDispatch } from 'react-redux';
import {
  Redirect,
  useHistory,
  useLocation,
  useRouteMatch,
} from 'react-router-dom';

import Paper from '../components/Paper';
import EditNotePopup from '../entities/EditNotePopup';
import NoteDetails, { NoteDetailsProps } from '../entities/NoteDetails';
import { editNote, removeNote, setNote } from '../store/noteSlice';
import { Note } from '../typings';

const NotePage = () => {
  const dispatch = useDispatch();
  const { state } = useLocation<Note>();
  const { url } = useRouteMatch();
  const history = useHistory();

  React.useEffect(() => {
    if (state) dispatch(setNote(state));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleEditNoteButtonClick: NoteDetailsProps['onEditNoteButtonClick'] =
    React.useCallback(
      (_, note) => {
        const params = new URLSearchParams();
        params.set('popup', 'editNote');

        history.push({
          pathname: url,
          search: params.toString(),
          state: note,
        });
      },
      [history, url],
    );

  const handleRemoveNoteButtonClick: NoteDetailsProps['onRemoveNoteButtonClick'] =
    React.useCallback(
      (_, note) => {
        dispatch(removeNote(note));
        history.push('/');
      },
      [dispatch, history],
    );

  const handleSubmit = React.useCallback(
    (data: Note) => {
      dispatch(editNote(data));
      setNote(data);
    },
    [dispatch],
  );

  if (!state) return <Redirect to="/" />;

  return (
    <Paper style={{ flexGrow: 1 }}>
      <NoteDetails
        onBackButtonClick={history.goBack}
        onEditNoteButtonClick={handleEditNoteButtonClick}
        onRemoveNoteButtonClick={handleRemoveNoteButtonClick}
      />
      <EditNotePopup onSubmit={handleSubmit} />
    </Paper>
  );
};

export default React.memo(NotePage);
