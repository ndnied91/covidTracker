import React from 'react'

import TimeUpdated from './TimeUpdated'
import Controllers from './Controllers'

import '../srcStyles.css'

class Menu extends React.Component{


  render(){

    return(

      <div className="ui raised horizontal segments menuColor" style={{marginTop: '0px'}} >
                <div className="ui center aligned segment" style={{margin: 'auto' , height: '50%'}}><TimeUpdated/> </div>
                <div className="ui center aligned segment"><Controllers/> </div>
         </div>

    )
  }
}



export default Menu
