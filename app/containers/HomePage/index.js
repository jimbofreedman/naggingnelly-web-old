/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
// import { connect } from 'react-redux';
// import { createStructuredSelector } from 'reselect';

import ActionList from 'containers/ActionList';
import Section from './Section';

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  /**
   * when initial state username is not null, submit the form to load repos
   */
  componentDidMount() {
  }

  render() {
    return (
      <article>
        <div>
          <Section>
            <ActionList />
          </Section>
        </div>
      </article>
    );
  }
}

HomePage.propTypes = {
};

/*
export function mapDispatchToProps(dispatch) {
  return {
  };
}

const mapStateToProps = createStructuredSelector({
});
*/

// Wrap the component to inject dispatch and state into it
// export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
export default HomePage;
