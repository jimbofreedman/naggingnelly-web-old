import React from 'react';
import { shallow } from 'enzyme';

import { Button, Glyphicon } from 'react-bootstrap';
import ActionButton from '../index';

describe('<ActionButton />', () => {
  it('should render the button', () => {
    const glyph = 'plus';
    const disabled = false;
    const bsStyle = 'warning';
    const onClick = () => {};
    const renderedComponent = shallow(
      <ActionButton glyph={glyph} disabled={disabled} bsStyle={bsStyle} onClick={onClick} />
    );
    expect(renderedComponent.contains(
      <Button bsSize="small" disabled={disabled} bsStyle={bsStyle} onClick={onClick}>
        <Glyphicon glyph={glyph} />
      </Button>
    )).toBe(true);
  });
});
