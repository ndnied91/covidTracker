import React from 'react'
import TopTenCases from './TopTenCases'
import TopTenDeaths from './TopTenDeaths'

import '../../srcStyles.css'

class TopTenCounties extends React.Component{



  render(){




   return(
     <div className="right floated four wide column topTen">
         <div className="ui title" >
             <div  className="ui grid stackable " style={{paddingTop : '75px'}}>

                 <div style={{paddingBottom: '50px' , paddingLeft:" 15%"}}>
                 <h2> Top 10 counties By Cases</h2>
                   <TopTenCases/>
                   </div >

                   <div style={{paddingLeft:" 15%"}}>
                   <h2> Top 10 counties By Death</h2>
                     <TopTenDeaths/>
                     </div>
             </div>
             </div>
           </div>
   )
 }
}



export default TopTenCounties
