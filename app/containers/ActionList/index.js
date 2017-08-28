/*
 *
 * ActionList
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import makeSelectActionList from './selectors';
import rest from '../../rest';

export class ActionList extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.loadActions();
  }

  render() {
    return (
      <div>
      </div>
    );
  }
}

ActionList.propTypes = {
  loadActions: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  ActionList: makeSelectActionList(),
});

export function mapDispatchToProps(dispatch) {
  return {
    loadActions: () => {
      dispatch(rest.actions.actions.sync());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ActionList);
