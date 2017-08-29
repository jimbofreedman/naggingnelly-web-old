import React from 'react';
import { mount, shallow } from 'enzyme';
import { fromJS } from 'immutable';

import { ActionList, mapDispatchToProps } from '../index';
// import { Action } from '../../../components/Action';
import rest from '../../../rest';

describe('<ActionList />', () => {
  rest.actions.actions.sync = jest.fn();

  it('should render a loading notification', () => {
    const renderedComponent = shallow(
      <ActionList />
    );
    expect(renderedComponent.contains(<div>Loading</div>)).toEqual(true);
  });

  it('should render a list of actions', () => {
    const renderedComponent = shallow(
      <ActionList
        actions={fromJS({
          sync: true,
          data: {
            1: { status: 0 },
            2: { status: 0 },
            3: { status: 1 },
          },
        })}
      />
    );
    expect(renderedComponent.children().length).toBe(2);
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
