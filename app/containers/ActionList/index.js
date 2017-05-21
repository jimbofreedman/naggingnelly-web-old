/*
 *
 * ActionList
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import makeSelectActionList from './selectors';
import messages from './messages';
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
            Object.keys(actions.data).map((id) => {
              const action = actions.data[id];
              return action.status === 0 ? (
                <div key={action.id}>
                  <Action action={action}/>
                </div>
              ) : null;
            })
          }
          </div>
        </div>
      )
  }
}

ActionList.propTypes = {
  dispatch: PropTypes.func.isRequired,
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
