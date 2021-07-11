import React from 'react'
import {connect} from 'react-redux'
import {Line} from 'react-chartjs-2'

import {fetchHistoricCovidData , fetchStateHistoricData} from '../../actions'
import '../../srcStyles.css'

class HistoricGraph extends React.Component{
  constructor(props) {
    super(props);
    this.state = {  chart_selected: 'new',  style_new: 'ui red button' , style_all: 'ui button'};
  }

  componentDidMount(){
    this.props.fetchStateHistoricData()
  }


  render(){
    let graphData =[]

    const getDate = async ()=>{
        this.props.historicalStateData.forEach((item, i) => {
          if(item.state ===  this.props.selectedState){
            graphData.push( {date:item.date , cases: item.cases} )
            graphData.sort((a,b) => (a.date > b.date) ? 1 : ((b.date > a.date) ? -1 : 0));
          }
        });

    }


// console.log(graphData)


       getDate()



          const renderContent=()=>{

            const labels = []
            const cases = []
            const growthGraph = [] // just for new cases

              graphData.forEach((item, i) => {
                labels.push(item.date)
                // console.log(labels)
                cases.push(item.cases)
                // console.log(cases)
              });



              for (let i=0 ; i<cases.length; i++){
                  growthGraph.push(cases[i] - cases[i-1])
              }
                growthGraph[0] = 0





            const all_cases = {
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
                      pointBorderColor: 'rgba(179,72,80,0.4)',
                      pointBackgroundColor: '#fff',
                      pointBorderWidth: 1,
                      pointHoverRadius: 3,
                      pointHoverBackgroundColor: 'rgba(179,72,80,0.4)',
                      pointHoverBorderColor: 'rgba(179,72,80,1)',
                      pointHoverBorderWidth: 2,
                      pointRadius: 1,
                      pointHitRadius: 10,
                      data: cases,
                    }
                  ]
                };


                const new_cases = {
                      labels: labels,
                      datasets: [
                              {
                                label: 'New Cases',
                                lineTension: 0.1,
                                backgroundColor: 'rgba(179,72,80,0.4)',
                                borderColor: 'rgba(179,72,80,1)',
                                borderCapStyle: 'butt',
                                borderDash: [],
                                borderDashOffset: 0.0,
                                borderJoinStyle: 'miter',
                                pointBorderColor: 'rgba(179,72,80,0.4)',
                                pointBackgroundColor: '#fff',
                                pointBorderWidth: 1,
                                pointHoverRadius: 3,
                                pointHoverBackgroundColor: 'rgba(179,72,80,0.4)',
                                pointHoverBorderColor: 'rgba(179,72,80,1)',
                                pointHoverBorderWidth: 2,
                                pointRadius: 1,
                                pointHitRadius: 10,
                                data: growthGraph
                              }
                      ]
                    };

          const legend = { display: false };





const changeNew= ()=>{ this.setState({ chart_selected: 'new' , style_new: 'ui red button ', style_all: 'ui button'}) }
const changeAll = ()=>{ this.setState({ chart_selected: 'all' , style_all: 'ui red button ', style_new: 'ui button'}) }


                      return (
                        <div className="">
                                 <div  >
                                       <Line
                                         legend={legend}
                                          data={this.state.chart_selected === 'all' ? all_cases : new_cases}
                                          height={200}
                                          options={{ maintainAspectRatio: true }}
                                       />

                                 </div>

                                   <div className="ui two column grid" >
                                     <div className="row">
                                           <div className="column">
                                              <button className={this.state.style_new + ' ui tiny fluid button'}  onClick={ changeNew }> New Cases </button>
                                           </div>

                                         <div className="column">
                                           <button className={this.state.style_all + ' ui tiny fluid button'} onClick= {changeAll} >All Cases</button>
                                         </div>
                                     </div>
                                   </div>




                        </div>


                         );
          }


     //  This still needs to be fixed


const showStatus = () =>{
  if(this.props.historicalStateData.length === 0 ){
    return (

        <div className="ui active inverted dimmer">
          <div className="ui big text loader">Loading Historical Data </div>
        </div>

    )
  }
    else if(this.props.historicalStateData.length>0 && this.props.selectedState === null){
      return(
         <div className="centeredContent"  > Please select a state </div>
      )
    }
    else return renderContent()

}



    return(
      <div>
          {showStatus()}
      </div>
    )
  }
}



const mapStateToProps= (state)=>{
  // console.log(state)
  return { historicalStateData : state.historicalStateData,
            selectedState : state.selectedState.selected_state,
            // viewMode: state.viewMode.selection
            }
}

export default connect( mapStateToProps ,  {fetchHistoricCovidData , fetchStateHistoricData} )(HistoricGraph)
