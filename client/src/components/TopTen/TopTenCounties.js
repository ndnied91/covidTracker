import React from 'react'
import TopTenCases from './TopTenCases'
import TopTenDeaths from './TopTenDeaths'

class TopTenCounties extends React.Component{



  render(){




    return(
      <div className="right floated four wide column">
          <div className="ui title" >
              <div  className="ui grid stackable " style={{paddingTop : '5px'}}>
                  <div style={{paddingBottom: '10px'}}>
                  <h2> Top 10 counties By cases</h2>
                    <TopTenCases/>
                    </div >

                    <div>
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
