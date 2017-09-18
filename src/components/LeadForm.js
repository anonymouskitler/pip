import React from 'react';
import { Header, Form, Button } from 'semantic-ui-react';
import { Field, reduxForm, reset } from 'redux-form';
import { connect } from 'react-redux';
import { submitLeadForm } from '../wit/actionCreators/actionCreators';

const renderTextField = ({ input, label, meta: { touched, error }, ...custom }) => (
  <Form.Input placeholder={label} name={label} {...input} />
);

class LeadForm extends React.Component {
  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;
    return (
      <div>
        <Header>Leads form</Header>
        <Form onSubmit={handleSubmit}>
          <div>
            <label>Name</label>
            <div>
              <Field name="name" component={renderTextField} type="text" placeholder="Name" />
            </div>
          </div>
          <div>
            <label>Phone number</label>
            <div>
              <Field name="phone" component={renderTextField} type="text" placeholder="Phone" />
            </div>
          </div>
          <div>
            <label>Email</label>
            <div>
              <Field name="email" component={renderTextField} type="email" placeholder="Email" />
            </div>
          </div>
          <div>
            <Button type="submit" disabled={pristine || submitting}>
              Submit
            </Button>
            <Button type="button" disabled={pristine || submitting} onClick={reset}>
              Clear Values
            </Button>
          </div>
        </Form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    submitLeadForm: () => dispatch(submitLeadForm())
  };
};

const mapStateToProps = state => {
  return {
    leads: state.data.leads
  };
};

LeadForm = connect(mapStateToProps, mapDispatchToProps)(LeadForm);

export default reduxForm({ form: 'lead' })(LeadForm);
