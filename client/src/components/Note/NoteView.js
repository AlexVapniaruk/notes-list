import React from 'react';
import { connect } from 'react-redux';
import { fetchSingleNote } from '../../actions';

class NoteView extends React.Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    if(id) {
      this.props.fetchSingleNote(id);
    }
  }

  render() {
    return (
      <div>
        <p>Title: { this.props.note.title }</p>
        <p>Text: { this.props.note.title }</p>
        <p>Date: { this.props.note.date }</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { note: state.note }
};

export default connect(mapStateToProps, { fetchSingleNote })(NoteView);