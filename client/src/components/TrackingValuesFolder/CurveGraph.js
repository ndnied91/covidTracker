import React from 'react'
import {connect} from 'react-redux'
import {Line} from 'react-chartjs-2'

import {fetchHistoricCovidData} from '../../actions'
import '../../srcStyles.css'

class CurveGraph extends React.Component{

  componentDidMount(){
    this.props.fetchHistoricCovidData()
  }


  render(){

  let graphData =[]

  const newyork = [ 'Kings', 'Queens', 'Richmond', 'New York' , 'Bronx' ]
    const getDate = async ()=>{
          if(this.props.historiCovidData !== undefined && this.props.selected_County){
                 return this.props.historiCovidData.map((item, i) => {
                      if (newyork.includes(this.props.selected_County.county) && this.props.selected_County.state  ===  'New York' ){
                       if(item.county === 'New York City' && item.state === 'New York'){
                         graphData.push( {date:item.date , cases: item.cases}  )
                         graphData.sort((a,b) => (a.date > b.date) ? 1 : ((b.date > a.date) ? -1 : 0));
                       }
                     }


                     if(item.county === this.props.selected_County.county  && item.state === this.props.selected_County.state ){
                        graphData.push( {date:item.date , cases: item.cases}  )
                        graphData.sort((a,b) => (a.date > b.date) ? 1 : ((b.date > a.date) ? -1 : 0));
                      }

                });
            }
    }
       getDate()



          const renderContent=()=>{

            const labels = []
            const cases = []

              graphData.forEach((item, i) => {
                labels.push(item.date)
                cases.push(item.cases)
              });



            const data = {
                  labels: labels,
                  datasets: [
                    {
                      label: 'Covid Trend',
                      lineTension: 0.1,
                      backgroundColor: 'rgba(179,72,80,0.4)',
                      borderColor: 'rgba(179,72,80,1)',
                      borderCapStyle: 'butt',
                      borderDash: [],
                      borderDashOffset: 0.0,
                      borderJoinStyle: 'miter',
                      pointBorderColor: 'rgba(75,192,192,1)',
                      pointBackgroundColor: '#fff',
                      pointBorderWidth: 1,
                      pointHoverRadius: 5,
                      pointHoverBackgroundColor: '#B23850',
                      pointHoverBorderColor: '#B23850',
                      pointHoverBorderWidth: 2,
                      pointRadius: 1,
                      pointHitRadius: 10,
                      data: cases
                    }
                  ]
                };

                      return (
                           <div>
                             <Line data={data}
                                  height={250}
                                  options={{ maintainAspectRatio: false }}
                             />
                           </div>
                         );
          }


const showStatus = () =>{
  if(this.props.historiCovidData.length === 0 ){
    return (

        <div className="ui active inverted dimmer">
          <div className="ui big text loader">Loading Historical Data </div>
        </div>

    )
  }
    else if(this.props.historiCovidData.length>0 && this.props.selected_County === null){
      return(
         <div className="centeredContent" >
               Please select a county
          </div>
      )
    }
    else return renderContent()

}



    return(
      <div>
        <div className="ui raised segment" style={{height: '300px', backgroundColor: 'rgba(247, 249, 251)'}}>
            <h3 style={{textAlign: 'center'}}> Trending Graph </h3>
            {showStatus()}
        </div>


      </div>
    )
  }
}



const mapStateToProps= (state)=>{
  return { historiCovidData : state.historicCovidData ,
            selected_County : state.selected_County.selected_county
            }
}

export default connect( mapStateToProps ,  {fetchHistoricCovidData} )(CurveGraph)
