/**
*
* Action
*
*/

import React from 'react';
import { Panel, ButtonGroup, Label } from 'react-bootstrap';
import rest from '../../rest';
// import styled from 'styled-components';
import ActionButton from '../../components/ActionButton';

export class Action extends React.PureComponent {
  render() {
    const { dispatch, action } = this.props;

    const handle = (helperFunc) => (() => {
      dispatch(helperFunc(action.id));
      this.forceUpdate();
    });

    const disabled = false;
    const color = undefined;
    const open = false;

    const header = (
      <div>
        <div className="pull-right">
          <ButtonGroup>
            <ActionButton glyph="remove" disabled={disabled} bsStyle="danger" onClick={handle(rest.actions.actions.complete)} />
            <ActionButton glyph="minus" disabled={disabled} bsStyle="warning" onClick={handle(rest.actions.actions.cancel)} />
            <ActionButton glyph="ok" disabled={disabled} bsStyle="success" onClick={handle(rest.actions.actions.fail)} />
          </ButtonGroup>
        </div>
        <div
          style={{
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
          }}
        >
          {action.short_description}
          <Label>{action.due_at}</Label>
        </div>
      </div>);

    return (<Panel key={action.id} collapsible expanded={open} bsStyle={color} disabled={disabled} header={header} />);
  }
}

Action.propTypes = {
  action: React.PropTypes.object,
  dispatch: React.PropTypes.func,
};

export default Action;
