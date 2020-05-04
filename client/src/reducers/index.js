import { combineReducers } from 'redux';
import noteReducers from './notesReducer';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
  notes: noteReducers,
  form: formReducer,
});