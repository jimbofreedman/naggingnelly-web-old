/*
 *
 * Action
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Panel, Grid, Row, Col, ButtonGroup, Button, Glyphicon } from 'react-bootstrap';
import { createStructuredSelector } from 'reselect';
import makeSelectAction from './selectors';
import rest from '../../rest';

export class Action extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { dispatch, action } = this.props;

    const handleStatusChange = ((action, status) => {
      //this.setState({open: false});
      //this.setState({removing: true});
      dispatch(rest.actions.actions.complete(action.id));
      this.forceUpdate();
    }).bind(this);


    const disabled = false;
    const color = undefined;
    const open = false;

    const header = (<div>
      <Grid style={{paddingLeft: '0px'}}>
        <Row>
          <Col xs={11} sm={8} md={8} lg={8} /*onClick={(e) => setOpen(!open)}*/>
            <div style={{textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap'}}>{action.short_description}</div>
          </Col>
          <Col xs={1} sm={4} md={4} lg={4} style={{padding: '0px', marginTop: '-5px', marginBottom: '-5px'}}>
              <span>
                <ButtonGroup>
                  <Button bsSize="small" disabled={disabled} bsStyle="success" onClick={(e) => {handleStatusChange(action, 1)}}><Glyphicon glyph="ok" /></Button>
                </ButtonGroup>
              </span>
          </Col>
        </Row>
      </Grid>
    </div>)
    return (
      <div>
        <Panel collapsible expanded={open} bsStyle={color} disabled={disabled} header={header} style={{textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap'}} />
      </div>

      );
  }
}

Action.propTypes = {
  dispatch: PropTypes.func.isRequired,
  action: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  Action: makeSelectAction(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Action);
