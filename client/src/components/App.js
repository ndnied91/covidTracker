import React from 'react'

import MapContainer from './MapContainer'
import Menu from './Menu'
import TrackingValues from './TrackingValues'

class App extends React.Component{



  render(){

    return(

      <div className="ui title " style={{margin: '20px 20px 40px 40px'}}>
              <div className="ui huge center aligned header" style={{fontSize:'50px', paddingTop: '20px'}}  > COVID-19 Tracker </div>

                <div className="ui grid" style={{width: '100%'}}>

                       <div className="left floated twelve wide column" style={{paddingTop: '60px'}}>
                           <div> <Menu/> </div>

                            <div className="ui center aligned segment" style={{height: '655px', padding: 0 , backgroundColor : "#C0E5F6" }}>

                            <MapContainer/>

                            </div>

                      </div>


                      <div className="right floated four wide column" style={{paddingTop: '50px'}}>
                           <TrackingValues/>
                     </div>
              </div>


      </div>
    )
  }
}

export default App
