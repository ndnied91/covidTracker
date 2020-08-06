import React from 'react'
import {connect} from 'react-redux'

class Stats extends React.Component{

  render(){



        const newyork = [ '36047', '36061', '36081', '36005' ,  '36085' ]


const getnyccovidData = (id) =>{
      if (newyork.includes(id)) {
           return this.props.covidData.map((county)=>{
              if(county.county === 'New York City' ){
                  return(
                      <div key={county.fips}>

                        <h3> {county.county} , {county.state} </h3>
                        <div> Current Cases {county.cases} </div>
                        <div> Current Probable Cases {county.probable_cases} </div>
                        <div> Current Confirmed Deaths {Number(county.confirmed_deaths) } </div>
                        <div> Current Probable Deaths {Number(county.probable_deaths) } </div>
                        <div> Fatality Rate {(county.confirmed_deaths / county.cases) }   </div>
                   </div>
                  )
              }
              return null
           })

   }
   else return null
}




    const getCountyData = (id)=>{
              return this.props.covidData.map((county)=>{
                 if(county.fips === id ){
                   console.log(county)
                      return(
                          <div key={county.fips}>

                            <h3> {county.county} , {county.state} </h3>
                            <div> Current Cases {county.cases} </div>
                            <div> Current Probable Cases {county.probable_cases} </div>
                            <div> Current Confirmed Deaths {Number(county.confirmed_deaths) } </div>
                            <div> Current Probable Deaths {Number(county.probable_deaths) } </div>
                            <div> Fatality Rate {(county.confirmed_deaths / county.cases) }   </div>
                       </div>
                      )
                  }
                })
               return ''
    }

    const renderContent=()=>{

          if(this.props.selected){
            console.log(this.props.selected.id)
            return(
              <div className="renderContent">
                {getCountyData(this.props.selected.id)}
                {getnyccovidData(this.props.selected.id)}
              </div>
            )
          }
    }








    return(
      <div className="ui raised segment" style={{height: '210px'}}>

              <div >
                    <h3> Stats </h3>
                    <div className="ui left floated">  {renderContent()}

                    </div>
              </div>



       </div>
    )
  }
}



const mapStateToProps = (state)=>{
  // console.log(st/ate.selected_County.selected_county)
  return { selected : state.selected_County.selected_county,
       covidData : state.covidData}
}

export default connect(mapStateToProps )(Stats)
