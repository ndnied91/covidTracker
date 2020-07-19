
import * as React from 'react';
// import d3 - run npm install --save d3 to add
// d3 to your node_modules
import * as d3 from 'd3';

class PopulationLegend extends React.Component {


  componentDidMount() {

    let colorLegend = ["#deebf7","#c4dfed", "#9ecae1", "#87bede",
                       "#6baed6", "#62a4d0", "#0a66c2", "#08519c" ];
    // get the svg that just mounted - this is componentDidMount()
    // so this function gets fired just after render()
    let svgLegend = d3.select('#legend');

    // now just inject standard D3 code
    svgLegend.append("g")
        .selectAll("rect")
        .data(colorLegend)
        .enter()
        .append("rect")
        .attr("fill", function(d, i){ return colorLegend[i]; })
        .attr("x", function(d, i){ return (i*30); })
        .attr("y", 30)
        .attr("width", 30)
        .attr("height", 20)
        .attr('z-index', 1)

    // add a title
    svgLegend.append("text")
        .attr("font-size", "12px")
        .attr("font-family", "HelveticaNeue-Bold, Helvetica, sans-serif")
        .attr("y", 20)
        .text("Population")

    // add numbers as labels
    let labelsLegend = ["0-1","1-3","3-5","5-7","7-10","10-12","12-15",">15"];

    svgLegend.append("g")
        .selectAll("text")
        .data(labelsLegend)
        .enter()
        .append("text")
        .attr("font-size", "10px")
        // .attr("height" , 20)
        .attr("font-family", "HelveticaNeue-Light, Helvetica, sans-serif")
        .attr("x", function(d, i){ return (i*30); })
        .attr("y", 60)
        .attr('z-index', 1)
        .text(function(d){ return d; })
  }

  render() {
    return(
          <div style={{height: '85px' ,width: '100%', padding: '0' ,marginTop: '-5px', backgroundColor: 'rgb(192, 229, 246)', }}>
             <svg id='legend'style={{float: "right"}} ></svg>
           </div>
    )
  }
}

export default PopulationLegend;
