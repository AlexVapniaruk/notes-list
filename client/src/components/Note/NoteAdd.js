import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { createNote } from '../../actions';
import { connect } from 'react-redux';

class NoteAdd extends React.Component {
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
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  }

  onSubmit = (formValues) => {
    this.props.createNote(formValues)
      .then(() => {
        this.props.history.push('/');
      });
  }

  render() {
    return (
      <div>
        <h3>Add new Note:</h3>
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
  form: 'noteAdd',
  validate,
})(NoteAdd);

export default connect(null, { createNote })(formWrapped);