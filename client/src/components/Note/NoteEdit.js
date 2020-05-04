import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { editNote, fetchSingleNote } from '../../actions';
import { connect } from 'react-redux';

class NoteEdit extends React.Component {
  id = this.props.match.params.id;

  componentDidMount() {
    if(this.id) {
      this.props.fetchSingleNote(this.id);
    }
    //TODO if id not exits return non found page/component
  }

  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div>
          <div>{error}</div>
        </div>
      );
    }
  }

  renderInput = ({ input, label, meta }) => {
    const className = `${meta.error && meta.touched ? 'error' : ''}`
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off"/>
        {this.renderError(meta)}
      </div>
    );
  }

  onSubmit = (formValues) => {
    this.props.editNote(this.id, formValues);
  }

  render() {
    return (
      <div>
        <h3>Edit Note:</h3>
        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <Field name="title" component={this.renderInput} label="Enter title" />
          <Field name="text" component={this.renderInput} label="Enter text" />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

const validate = (formValues) => {
  const errors = {};

  if (!formValues.title) {
    errors.title = 'You must enter a title';
  }

  if (!formValues.text) {
    errors.text = 'You must enter a text';
  }

  return errors;
};

const formWrapped = reduxForm({
  form: 'noteEdit',
  enableReinitialize: true,
  validate,
})(NoteEdit);

const mapStateToProps = (state) => {
  return { initialValues: state.note }
}

export default connect(mapStateToProps, { fetchSingleNote, editNote })(formWrapped);