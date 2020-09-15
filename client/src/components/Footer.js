import React from 'react'


import '../srcStyles.css'

const Footer = () =>{

  return(
     <div className="ui vertical footer segment" style={{marginTop: '20%', backgroundColor: '#D0D0D0'}}>
         <div className="ui center aligned container">

              <div className="ui stackable inverted divided grid">


                      <div className="eight wide column">
                        <h4 className="ui header">Covid Data Sources</h4>
                        <div >
                        <div className="ui link list" style={{margin: 'auto'}}>
                            <p className="sources">County Data : <a href="https://github.com/nytimes/covid-19-data" className="item">New York Times Covid-19 Data</a> </p>
                            <br/>
                        <p className="sources">State Data : <a href="https://github.com/CSSEGISandData/COVID-19" className="item">Center for Systems Science and Engineering (CSSE) </a> </p>

                          </div>

                        </div>
                      </div>

                      <div className="eight wide column">
                        <h4 className="ui header">Sources</h4>
                        <div className="ui link list">

                        <div className="sourceLayout" >
                            <p className="sources"style={{marginBottom: '-15px', marginRight: '10px'}}> <a href="https://data.ers.usda.gov/reports.aspx?ID=17828" target="_blank" className="item">County Median Income Data </a> </p>
                            <p className="sources"style={{marginBottom: '-15px'}}> <a href="https://dqydj.com/average-income-by-state-median-top-percentiles/" target="_blank" className="item"> State Median Income Data </a> </p>
                              <br/>
                        </div>

                      <div className="sourceLayout">
                          <p className="sources"style={{marginBottom: '-15px',  marginRight: '10px'}}>  <a href="https://www.census.gov/data/datasets/time-series/demo/popest/2010s-counties-total.html" target="_blank" className="item">County Population Data </a> </p>
                            <br/>
                          <p className="sources" style={{marginBottom: '-35px'}}> <a href="https://www.census.gov/data/tables/time-series/demo/popest/2010s-state-total.html" target="_blank" className="item">State Population Data</a> </p>
                            <br/>
                        </div>
                      </div>


                      </div>

                    </div>
                      <div className="ui inverted section divider" style={{marginTop: '10px', marginBottom: '15px'}}></div>

                       <div className="ui horizontal small divided link list">
                       <h4 className="ui header" style={{fontSize: '20px', marginTop: '-20px'}}>Designed and Implemented by Daniel Niedzwiedzki </h4>
                        <a className="ui item" href="https://github.com/ndnied91" target="_blank"> <i className="github large icon"></i>  </a>
                        <a className="item" href="https://www.linkedin.com/in/daniel-niedzwiedzki/" target="_blank"> <i className="linkedin large icon "></i> </a>
                        <a href= "mailto: danielniedzwiedzki.1@gmail.com" className="item" > <i className="envelope large icon "></i> </a>
                       </div>



         </div>
     </div>
   )
}

export default Footer
