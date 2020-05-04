import React from 'react';
import { connect } from 'react-redux';
import { fetchNotes, deleteNote } from '../../actions';
import { Link } from 'react-router-dom';

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
        <div key={note.title}>
          {note.id}
          <div>{note.title}</div>
          <div>{note.text}</div>
          <div>{note.date}</div>
          <div>
            <Link to={`/${note.id}`}>View</Link>
          </div>
          <div>
            <Link to={`/edit/${note.id}`}>Edit</Link>
          </div>
          <div>
            <Link to="/" onClick={(e) => this.noteDelete(e, note.id)}>Delete</Link>
          </div>
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
}

export default connect(mapStateToProps, { fetchNotes, deleteNote })(NoteList);