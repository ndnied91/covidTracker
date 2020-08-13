import React from 'react'

import MapContainer from './MapContainer'
import Menu from './Menu'
import TrackingValues from './TrackingValues'


import '../srcStyles.css'

class App extends React.Component{



  render(){

    return(

<div className="outline">
      <div className="ui title" >
              <div className="ui huge center aligned header stackable" style={{fontSize:'65px', paddingTop: '10px', marginBottom: '-10px', paddingLeft: '30%'}}  > COVID-19 Tracker </div>

                <div className="ui grid stackable" style={{width: '100%' }}>

                <div className="right floated four wide column" style={{marginTop: '-5%'}}>
                     <TrackingValues/>
               </div>

                       <div className="left floated twelve wide column" style={{paddingTop: '20px'}}>
                           <div> <Menu/> </div>



                            <div className="ui center aligned segment" style={{height: '675px', padding: 0 , backgroundColor : "#C0E5F6" }}>
                            <MapContainer/>
                            </div>

                      </div>



              </div>


      </div>

</div>
    )
  }
}

export default App


// <div className="ui center aligned segment" style={{height: '655px', padding: 0 , backgroundColor : "#C0E5F6" }}>
