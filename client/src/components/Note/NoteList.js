import React from 'react';
import { connect } from 'react-redux';
import { fetchNotes } from '../../actions';

class NoteList extends React.Component {
  componentDidMount() {
    this.props.fetchNotes();
  }

  renderList() {
    return this.props.notes.map( note => {
      return (
        <div key={note.title}>
          { note.id }
          <div>{ note.title }</div>
          <div>{ note.text }</div>
          <div>{ note.date }</div>
        </div>
      );
    });
  }

  render() {
    return <div>{ this.renderList() }</div>;
  }
}

const mapStateToProps = state => {
  return { notes: state.notes };
}

export default connect(mapStateToProps, { fetchNotes })(NoteList);