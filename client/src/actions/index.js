import notesAPI from '../apis/notes';
import { FETCH_NOTES, CREATE_NOTE, FETCH_SINGLE_NOTE, DELETE_NOTE, EDIT_NOTE } from './types';

export const fetchNotes = () => async (dispatch) => {
  const response = await notesAPI.get('/notes');
  dispatch({ type: FETCH_NOTES, payload: response.data.data })
};

export const createNote = (data) => async dispatch => {
  const response = await notesAPI.post(`/notes`, data);
  dispatch({ type: CREATE_NOTE, payload: response.data });
};

export const fetchSingleNote = (id) => async (dispatch) => {
  const response = await notesAPI.get(`/notes/${id}`);
  dispatch({ type: FETCH_SINGLE_NOTE, payload: response.data.data })
};

export const deleteNote = (id) => async (dispatch) => {
  const response = await notesAPI.delete(`/notes/${id}`)
  dispatch(fetchNotes());
  dispatch({ type: DELETE_NOTE, payload: response.data })
};

export const editNote = (id, data) => async dispatch => {
  const response = await notesAPI.put(`/notes/${id}`, data);
  dispatch(fetchNotes());
  dispatch({ type: EDIT_NOTE, payload: response.data });
};