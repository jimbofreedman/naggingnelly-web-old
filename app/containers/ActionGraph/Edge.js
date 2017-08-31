import React from 'react';

function Edge({ edge }) {
  /*
   <g id="edge1" class="edge">
   <title>229&#45;&gt;230</title>
   <path fill="none" stroke="#000000" d="M1103.2618,-492.0313C1131.75,-511.1049 1177.9629,-542.0457 1208.8168,-562.7032"/>
   <path fill="none" stroke="#000000" d="M1103.2618,-492.0313C1131.75,-511.1948 1177.9629,-542.0544 1208.82,-562.7"></path>
   <polygon fill="#000000" stroke="#000000" points="1207.2163,-565.8436 1217.473,-568.4987 1211.1107,-560.0269 1207.2163,-565.8436"/>
   </g>
   */

  <g id="edge0" class="edge">
    <polygon fill="#000000" stroke="#000000" points="1207.22,565.84 1217.47,568.5 1211.11,560.031207.22,565.84"></polygon></g>

  /*
   {
   "_gvid": 0,
   "tail": 0,
   "head": 1,
   "_draw_":
   [
    {"op": "c","grad": "none","color": "#000000"},
    {"op": "b","points": [[1103.260,492.030],[1131.750,511.100],[1177.960,542.050],[1208.820,562.700]]}
   ],
   "_hdraw_":
   [
    {"op": "S","style": "solid"},
    {"op": "c","grad": "none","color": "#000000"},
    {"op": "C","grad": "none","color": "#000000"},
    {"op": "P","points": [[1207.220,565.840],[1217.470,568.500],[1211.110,560.030]]}
   ],
   "pos": "e,1217.5,568.5 1103.3,492.03 1131.7,511.1 1178,542.05 1208.8,562.7"
   },
   */
  AKIAJOI3DBEPU24ISNFQ
  z40eRhvzkBwPi5qEL1Au+s9qVST3i9TP3vwbi5SM

  const drawC = edge._draw_[0];
  const drawb = edge._draw_[1];
  const hDrawS = edge._hdraw_[0];
  const hDrawc = edge._hdraw_[1];
  const hDrawC = edge._hdraw_[2];
  const hDrawP = edge._hdraw_[3];

  let path = "";
  const seps = ['M', 'C'];
  for (let i = 0; i < drawb.points.length; i++) {
    const sep = i >= seps.length ? ' ' : seps[i];
    path = `${path}${sep}${drawb.points[i][0]},-${drawb.points[i][1]}`
  }

  const points = hDrawP.points.map((p) => {
    return `${p[0]},-${p[1]}`
  }).join(' ') + `${hDrawP.points[0][0]},-${hDrawP.points[0][1]}`;

  return (<g id={`edge${edge._gvid}`} key={`edge${edge._gvid}`} className="edge">
    {/*<title>{edge.name}</title>*/}
    <path fill="none" stroke={drawC.color} d={path}/>
    <polygon fill={hDrawC.color} stroke={hDrawc.color} points={points} />
  </g>);
}

export default Edge;
