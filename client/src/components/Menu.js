import React from 'react'

import TimeUpdated from './TimeUpdated'
import Controllers from './Controllers'

class Menu extends React.Component{


  render(){

    return(

      <div className="ui raised horizontal segments" style={{marginTop: '0px'}}>
                <div className="ui center aligned segment"><TimeUpdated/> </div>
                <div className="ui center aligned segment"><Controllers/> </div>

         </div>

    )
  }
}



export default Menu
