import React from 'react';
import { shallow } from 'enzyme';

import Header from '../index';

describe('<Header />', () => {
  it('should render a div', () => {
    const renderedComponent = shallow(
      <Header />
    );
    expect(renderedComponent.find('Nav').length).toBe(1);
  });
});
