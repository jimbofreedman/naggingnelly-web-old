/*
 *
 * AddAction
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { Navbar, Form, FormGroup, InputGroup, FormControl, Button, Glyphicon } from 'react-bootstrap';
import { Field,reduxForm, formValueSelector } from 'redux-form';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import makeSelectAddAction from './selectors';
import messages from './messages';
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
        <Helmet
          title="AddAction"
          meta={[
            { name: 'description', content: 'Description of AddAction' },
          ]}
        />
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
