import React from 'react'
import {connect} from 'react-redux'

class Stats extends React.Component{

  render(){

    // const convertNY =(id)=>{
        const newyork = [ '36047', '36061', '36081', '36005' ,  '36085' ]

    //     if (newyork.includes(id)) {
    //        return 'New York City'
    //        }
    // }





    const getCountyData = (id)=>{
      console.log(id)

              return this.props.covidData.map((county)=>{

                    // if (county.county === 'New York City'){
                    //       return(
                    //           <div key={county.fips}>
                    //             <h3> {county.county} , {county.state} </h3>
                    //             <div> Current Cases {county.cases + county.probable_cases} </div>
                    //             <div> Current Deaths {Number(county.confirmed_deaths) + Number(county.probable_deaths) } </div>
                    //             <div> Fatality Rate {(county.confirmed_deaths / county.cases) }   </div>
                    //        </div>
                    //   )
                    // }


                           if(county.fips === id){
                             console.log(county)
                                          return(
                                              <div key={county.fips}>
                                                <h3> {county.county} , {county.state} </h3>
                                                <div> Current Cases {county.cases + county.probable_cases} </div>
                                                <div> Current Deaths {Number(county.confirmed_deaths) + Number(county.probable_deaths) } </div>
                                                <div> Fatality Rate {(county.confirmed_deaths / county.cases) }   </div>
                                           </div>
                                          )
                            }

                })
    }

    const renderContent=()=>{

          if(this.props.selected){
            return(
              <div>
                {getCountyData(this.props.selected.id)}
              </div>
            )
          }
    }


    return(
      <div className="ui raised segment" style={{height: '210px'}}>

      <div className="ui equal width center aligned padded grid">
            <h2 className="ui header "> Stats </h2>
            <div className="ui right floated"> {renderContent()} </div>
      </div>


      <div className="covidStats">
          <div> {this.props.stats} </div>
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
