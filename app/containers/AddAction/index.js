/*
 *
 * AddAction
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Form, FormGroup, InputGroup, Button, Glyphicon } from 'react-bootstrap';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import rest from '../../rest';

export class AddAction extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { dispatch, data, pristine, submitting, valid } = this.props;

    const handleSubmit = (evt) => {
      evt.preventDefault();
      dispatch(rest.actions.actions.post({},
        { body: JSON.stringify(data) },
        (err) => {
          if (err === null) {
            this.props.reset();
          }
        }));
    };

    return (
      <div>
        <Form className="form-inline" onSubmit={handleSubmit}>
          <FormGroup>
            <InputGroup>
              <Field name="short_description" component="input" className="form-control" type="text" placeholder="Add to collectbox..." />
              <Button
                onClick={handleSubmit}
                disabled={!valid || pristine || submitting}
              ><Glyphicon glyph="plus" /></Button>
            </InputGroup>
          </FormGroup>
        </Form>
      </div>
    );
  }
}

AddAction.propTypes = {
  dispatch: PropTypes.func.isRequired,
  data: React.PropTypes.object,
  pristine: React.PropTypes.bool,
  submitting: React.PropTypes.bool,
  valid: React.PropTypes.bool,
  reset: React.PropTypes.func,
};

// const mapStateToProps = createStructuredSelector({
//   AddAction: makeSelectAddAction(),
// });

const formName = 'addAction';

const mapStateToProps = (state) => {
  const selector = formValueSelector(formName);
  return {
    data: {
      short_description: selector(state, 'short_description'),
    },
  };
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default reduxForm({ form: formName })(connect(mapStateToProps, mapDispatchToProps)(AddAction));
