import React from 'react';
import { connect } from 'react-redux';
import { fetchNotes } from '../../actions';
import { Link } from 'react-router-dom';

class NoteList extends React.Component {
  componentDidMount() {
    this.props.fetchNotes();
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
            <Link to={`/${note.id}`} className="item">View</Link>
          </div>
          <div>
            <Link to={`/edit/${note.id}`} className="item">Edit</Link>
          </div>
          <div>
            <Link to={`/delete/${note.id}`} className="item">Delete</Link>
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

export default connect(mapStateToProps, { fetchNotes })(NoteList);