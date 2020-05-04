import notesAPI from '../apis/notes';
import { FETCH_NOTES, CREATE_NOTE } from './types';

export const fetchNotes = () => async (dispatch) => {
  const response = await notesAPI.get('/notes');
  dispatch({ type: FETCH_NOTES, payload: response.data.data })
};

export const createNote = (data) => async dispatch => {
  console.log(data);
  const response = await notesAPI.post(`/notes`, data);
  dispatch({ type: CREATE_NOTE, payload: response.data });
};