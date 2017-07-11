/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Helmet from 'react-helmet';
import AddAction from 'containers/AddAction';
import ActionGraph from 'containers/ActionGraph';
import Footer from 'components/Footer';
import rest from '../../rest';

const AppWrapper = styled.div`
  max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

class App extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  /**
   * when initial state username is not null, submit the form to load repos
   */
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(rest.actions.actions.sync());
    dispatch(rest.actions.graph.sync());
  }

  render() {
    const { children } = this.props;
    return (
      <AppWrapper>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css" />
        <Helmet
          title="NaggingNelly"
          meta={[
            { name: 'description', content: 'PA to the Paranoid' },
          ]}
        />
        <AddAction />
        {React.Children.toArray(children)}
        <Footer />
      </AppWrapper>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.node,
  dispatch: React.PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(App);
