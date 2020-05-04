import { combineReducers } from 'redux';
import noteReducers from './notesReducer';
import singleNoteReducer from './singleNoteReducer';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
  notes: noteReducers,
  note: singleNoteReducer,
  form: formReducer,
});