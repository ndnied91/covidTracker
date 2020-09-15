
import * as React from 'react';
// import d3 - run npm install --save d3 to add
// d3 to your node_modules
import * as d3 from 'd3';

class IncomeLegend extends React.Component {


  componentDidMount() {

let colorLegend = [  "#DEE8E0", "#BFD3C5", "#9EBFAD",
                        "#7DAB9A", "#5B998C","#388783", "#2F686E", "#1A2F3C"]

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
        .attr("x", function(d, i){ return (i*40); })
        .attr("y", 30)
        .attr("width", 40)
        .attr("height", 20)
        .attr('z-index', 1)

    // add a title
    svgLegend.append("text")
        .attr("font-size", "12px")
        .attr("font-family", "HelveticaNeue-Bold, Helvetica, sans-serif")
        .attr("y", 20)
        .text("Median Income Scale")

        svgLegend.append("text")
            .attr("font-size", "9px")
            .attr("font-family", "HelveticaNeue-Bold, Helvetica, sans-serif")
            .attr("y", 75)
            .text("Depicts approximate median income per state")

    // add numbers as labels
    let labelsLegend = ["30k","40k","50k","60k","70-80","80","90","100+"];

    svgLegend.append("g")
        .selectAll("text")
        .data(labelsLegend)
        .enter()
        .append("text")
        .attr("font-size", "10px")
        // .attr("height" , 20)
        .attr("font-family", "HelveticaNeue-Light, Helvetica, sans-serif")
        .attr("x", function(d, i){ return (i*40); })
        .attr("y", 60)
        .attr('z-index', 1)
        .text(function(d){ return d; })
  }

  render() {
    return(
          <div style={{height: '85px' ,width: '100%', padding: '0' ,marginTop: '-5px', paddingRight: '5px', backgroundColor: 'rgb(192, 229, 246)', }}>
             <svg id='legend'style={{float: "right"}} ></svg>
           </div>
    )
  }
}

export default IncomeLegend;
