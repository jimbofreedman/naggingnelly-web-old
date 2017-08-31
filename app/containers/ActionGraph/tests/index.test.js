import React from 'react';
import { shallow } from 'enzyme';

// import { ActionGraph } from '../index';
import Node from '../Node';

describe('<ActionGraph />', () => {
  it('Expect to have unit tests specified', () => {
    expect(true).toEqual(true);
  });

  it('Render a node', () => {
    const json = {
      _gvid: 49,
      name: '295',
      _draw_: [
        {
          op: 'c',
          grad: 'none',
          color: '#000000',
        },
        {
          op: 'e',
          rect: [671.65, 985, 67.18, 18],
        },
      ],
      _ldraw_: [
        {
          op: 'F',
          size: 14,
          face: 'Times-Roman',
        },
        {
          op: 'c',
          grad: 'none',
          color: '#000000',
        },
        {
          op: 'T',
          pt: [671.65, 980.8],
          align: 'c',
          width: 90.21,
          text: 'put_up_curtains',
        },
      ],
      height: '0.5',
      label: 'put_up_curtains',
      pos: '671.65,985',
      width: '1.8636',
    };

    // const svg = (
    //   <g id="node295" className="node">
    //     <title>295</title>
    //
    //     <text textAnchor="middle" x="671.65" y="-980.8" fontFamily="Times-Roman" fontSize="14" fill="#000000">put_up_curtains</text>
    //   </g>);

    const renderedComponent = shallow(
      <Node node={json} />
    );

    expect(renderedComponent.contains(<title>295</title>)).toBe(true);
    // expect(renderedComponent.contains(<text textAnchor="middle" x="671.65" y="-980.8" fontFamily="Times-Roman" fontSize="14" fill="#000000">put_up_curtains</text>)).toBe(true);
    // expect(renderedComponent.contains(<ellipse fill="none" stroke="#000000" cx="671.65" cy="-985" rx="67.18" ry="18" />)).toBe(true);
  });
});
