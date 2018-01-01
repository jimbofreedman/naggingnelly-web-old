/*
 *
 * ActionList
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import makeSelectActionList, { selectActions } from './selectors';
import Action from '../../components/Action';
import rest from '../../rest';

export class ActionList extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.loadActions();
  }

  render() {
    const { actions, dispatch } = this.props;

    if (!actions || !actions.get('sync')) {
      return <div>Loading</div>;
    }

    const filteredAndSorted = actions.get('data')
      .filter((action) => action.get('status') === 0 &&
      (!action.get('start_at') || new Date(action.get('start_at')) <= new Date()) &&
      (!action.get('dependencies') ||
        !action.get('dependencies').filter((a) => actions.getIn(['data', a, 'status'])).length)
      )
      .sort((a, b) => b.get('priority') - a.get('priority'))
      .toList();

    return (
      <div>
        {
          filteredAndSorted.map((act) => {
            const action = act.toJS();
            return (<div key={action.id}>
              <Action action={action} dispatch={dispatch} />
            </div>);
          })
        }
      </div>
    );
  }
}

ActionList.propTypes = {
  loadActions: PropTypes.func,
  actions: PropTypes.object,
  dispatch: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  ActionList: makeSelectActionList(),
  actions: selectActions(),
  dispatch: React.PropTypes.func,
});

export function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    loadActions: () => {
      dispatch(rest.actions.gtdUsers.sync());
      dispatch(rest.actions.folders.sync());
      dispatch(rest.actions.contexts.sync());
      dispatch(rest.actions.actions.sync());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ActionList);
