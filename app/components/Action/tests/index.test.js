import React from 'react';
import { shallow } from 'enzyme';
// import { Panel } from 'react-bootstrap';

import Action from '../index';

describe('<Action />', () => {
  it('should render a Panel', () => {
    const action = {
      short_description: 'cats',
      due_at: 'this is a due date',
    };
    const dispatch = jest.fn();

    const renderedComponent = shallow(
      <Action action={action} dispatch={dispatch} />
    );

    expect(renderedComponent.find('Panel').length).toBe(1);
  });
});
