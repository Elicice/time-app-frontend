import React from 'react';

import * as d3 from 'd3';


let BarChart = () => {

  return (

    <svg
        style={{
        height: 500,
        width: "100%",
        marginRight: "0px",
        marginLeft: "0px",
        backgroundColor: "orange"
        }}
    >
        <g className="plot-area" />
        <g className="x-axis" />
        <g className="y-axis" />
    </svg>

  );

}


export default BarChart;