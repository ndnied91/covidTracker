import React from 'react'


import '../srcStyles.css'

const Footer = () =>{

  return(
     <div className="ui vertical footer segment" style={{marginTop: '20%', backgroundColor: '#D0D0D0'}}>
         <div className="ui center aligned container">

              <div className="ui stackable inverted divided grid">


                      <div className="eight wide column">
                        <h4 className="ui header">Covid Data Sources</h4>
                        <div style={{marginTop: '20px'}}>
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

                          <p className="sources"style={{marginBottom: '-15px'}}> <a href="#" className="item">County Income Data </a> </p>
                            <br/>
                          <p className="sources"style={{marginBottom: '-15px'}}> <a href="#" className="item"> State Income Data </a> </p>
                            <br/>
                          <p className="sources"style={{marginBottom: '-15px'}}>  <a href="#" className="item">County Population Data </a> </p>
                            <br/>
                          <p className="sources" style={{marginBottom: '-35px'}}> <a href="#" className="item">State Population Data</a> </p>
                            <br/>

                        </div>
                      </div>

                    </div>
                      <div className="ui inverted section divider"></div>

                       <div className="ui horizontal small divided link list">
                       <h4 className="ui header" style={{fontSize: '20px', marginTop: '-20px'}}>Designed and Implemented by Daniel Niedzwiedzki </h4>
                        <a className="item" href="https://github.com/ndnied91" target="_blank"> <i class="github large icon"></i>  </a>
                        <a className="item" href="https://www.linkedin.com/in/daniel-niedzwiedzki/" target="_blank"> <i class="linkedin large icon "></i> </a>
                        <a href= "mailto: danielniedzwiedzki.1@gmail.com" className="item" > <i class="envelope large icon "></i> </a>
                       </div>



         </div>
     </div>
   )
}

export default Footer
