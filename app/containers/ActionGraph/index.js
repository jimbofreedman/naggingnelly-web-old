/*
 *
 * ActionGraph
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import makeSelectActionGraph from './selectors';
import { selectGraph } from '../App/selectors';

export class ActionGraph extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { graph } = this.props;

    if (!graph.sync) {
      return (<div>Loading</div>);
    } else {
      const g = graph.data;
      // const drawc = g._draw_[0];
      // const drawC = g._draw_[1];
      const drawP = g._draw_[2];
      const points = drawP.points;
      const width = points[2][0];
      const height = points[2][1];
      const viewBox = '0.00 0.00 ' + width + ' ' + height;
      const transform='scale(1 1) rotate(0) translate(' + (points[0][0] + 4).toString + ' ' + (points[2][1] + 4).toString + ')';
      const polyPoints =
        (points[0][0] - 4).toString + ',' + (-points[0][1] + 4).toString + ' ' +
        (points[1][0] - 4).toString + ',' + (-points[1][1] - 4).toString + ' ' +
        (points[2][0] + 4).toString + ',' + (-points[2][1] - 4).toString + ' ' +
        (points[3][0] + 4).toString + ',' + (-points[3][1] + 4).toString + ' ' +
        (points[0][0] - 4).toString + ',' + (-points[0][1] + 4).toString;

      return (
        <div>
          <svg
            width={width} height={height}
            viewBox={viewBox} xmlns="http://www.w3.org/2000/svg"
          >
            <g id="graph0" className="graph" transform={transform}>
              <title>%3</title>
              <polygon fill="#ffffff" stroke="transparent" points={polyPoints}/>
              {g.objects.map((obj) => {
                const drawC = obj._draw_[0];
                const drawE = obj._draw_[1];
                const lDrawF = obj._ldraw_[0];
                const lDrawC = obj._ldraw_[1];
                const lDrawT = obj._ldraw_[2];

                return (<g id={'node' + obj.name} key={obj.name} className="node">
                  <title>{obj.name}</title>
                  <ellipse
                    fill="none" stroke={drawC.color} cx={drawE.rect[0]} cy={-drawE.rect[1]} rx={drawE.rect[2]}
                    ry={drawE.rect[3]}
                  />
                  <text
                    textAnchor="middle" x={lDrawT.pt[0]} y={-lDrawT.pt[1]} fontFamily={lDrawF.face}
                    fontSize={lDrawF.size} fill={lDrawC.color}
                  >{obj.label}</text>
                </g>);
              })}
            </g>
          </svg>
        </div>
      );
    }
  }
}

ActionGraph.propTypes = {
  // dispatch: PropTypes.func.isRequired,
  graph: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  ActionGraph: makeSelectActionGraph(),
  graph: selectGraph(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ActionGraph);
