import React from 'react';
import { shallow } from 'enzyme';
import A from 'components/A';
import Footer from '../index';

describe('<Footer />', () => {
  it('should render the link to the API', () => {
    const renderedComponent = shallow(
      <Footer />
    );
    expect(renderedComponent.contains(
      <div>
        <A href="http://localhost:8000" >API</A>
      </div>
    )).toBe(true);
  });
});
