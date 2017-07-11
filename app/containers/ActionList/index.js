/*
 *
 * ActionList
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import makeSelectActionList from './selectors';
import { selectActions } from '../App/selectors';
import Action from '../Action';


export class ActionList extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { actions } = this.props;
    return !actions.sync ?
      (<div>Loading</div>)
      :
      (
        <div>
          <div>
            {
            Object.keys(actions.data)
              .sort((a, b) =>
                actions.data[b].priority - actions.data[a].priority
              )
              .map((id) => {
                const action = actions.data[id];
                return action.status === 0 &&
                  (!action.start_at || action.start_at <= new Date()) &&
                  (!action.dependencies || !action.dependencies.length) ? (
                    <div key={action.id}>
                      <Action action={action} />
                    </div>
                ) : null;
              })
          }
          </div>
        </div>
      );
  }
}

ActionList.propTypes = {
  // dispatch: PropTypes.func.isRequired,
  actions: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  ActionList: makeSelectActionList(),
  actions: selectActions(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ActionList);
