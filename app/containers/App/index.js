/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import styled from 'styled-components';

import AddAction from 'components/AddAction';
import Header from 'components/Header';
import Footer from 'components/Footer';
import withProgressBar from 'components/ProgressBar';

const AppWrapper = styled.div`
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

export function App(props) {
  return (
    <AppWrapper>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css" />
      <Header />
      <AddAction />
      {React.Children.toArray(props.children)}
      <Footer />
    </AppWrapper>
  );
}

App.propTypes = {
  children: React.PropTypes.node,
};

export default withProgressBar(App);
