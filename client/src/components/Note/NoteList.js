import React from 'react';
import { connect } from 'react-redux';
import { fetchNotes, deleteNote } from '../../actions';
import { Link } from 'react-router-dom';
import './NoteList.scss';

class NoteList extends React.Component {
  componentDidMount() {
    this.props.fetchNotes();
  }

  noteDelete = (e, id) => {
    e.preventDefault();
    if (window.confirm('Delete note?')) {
      this.props.deleteNote(id);
    }
  }

  renderList() {
    return this.props.notes.map(note => {
      return (
        <div className="note-list__item" key={note.id}>
          <div className="note-list__item-header">
            <div className="note-list__controls">
              <div className="note-list__controls-item">
                <Link className="note-list__controls-item-link" to={`/${note.id}`}>View</Link>
              </div>
              <div className="note-list__controls-item">
                <Link className="note-list__controls-item-link" to={`/edit/${note.id}`}>Edit</Link>
              </div>
              <div className="note-list__controls-item">
                <Link
                  className="note-list__controls-item-link"
                  to="/"
                  onClick={(e) => this.noteDelete(e, note.id)}>Delete</Link>
              </div>
            </div>
            <div>{note.date}</div>
          </div>
          <div className="note-list__title">{note.title}</div>
          <div className="note-list__item-text">{note.text}</div>
        </div>
      );
    });
  }

  render() {
    return <div>{this.renderList()}</div>;
  }
}

const mapStateToProps = state => {
  return { notes: state.notes };
};

export default connect(mapStateToProps, { fetchNotes, deleteNote })(NoteList);