import React from 'react';
import { mount, shallow } from 'enzyme';

import { ActionList, mapDispatchToProps } from '../index';
import rest from '../../../rest';

describe('<ActionList />', () => {
  it('should render a blank object', () => {
    const renderedComponent = shallow(
      <ActionList />
    );
    expect(renderedComponent.contains(<div></div>)).toEqual(true);
  });

  describe('componentDidMount', () => {
    it('should call loadActions', () => {
      const mocky = jest.fn();
      mount(<ActionList loadActions={mocky} />);
      expect(mocky).toHaveBeenCalled();
    });
  });

  describe('mapDispatchToProps', () => {
    describe('loadActions', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.loadActions).toBeDefined();
      });

      it('should dispatch action sync when called', () => {
        const dispatch = jest.fn();
        rest.actions.actions.sync = jest.fn();
        const result = mapDispatchToProps(dispatch);
        result.loadActions();
        expect(dispatch).toHaveBeenCalledWith(rest.actions.actions.sync());
      });
    });
  });
});
