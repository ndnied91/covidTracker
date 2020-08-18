import React from 'react'
import {connect} from 'react-redux'
import { fetchUnitedStatesCovidData } from '../actions'
import {Line} from 'react-chartjs-2'

class UnitedStatesCovid extends React.Component{
  constructor(props) {
    super(props);
    this.state = {  chart_selected: 'cases',  style_new: 'ui red button' , style_all: 'ui button'};
  }

componentDidMount(){
  this.props.fetchUnitedStatesCovidData()
}


  render(){

let graphData=[]



const getData = async () =>{
     await this.props.all_states.map((item, i) => {
        graphData.push( {date:item.date , cases: item.cases, deaths: item.deaths}  )
        return graphData.sort((a,b) => (a.date > b.date) ? 1 : ((b.date > a.date) ? -1 : 0));
      });
  }

getData()

// console.log(graphData)

const renderContent = ()=>{
          let labels = []
          let cases = []
          let deaths = []

          graphData.forEach((item, i) => {
            labels.push(item.date)
            // console.log(item.date)
            cases.push(item.cases)
            deaths.push(item.deaths)
          });
          // console.log(labels)

          const legend = { display: false };

          const casesChart = {
                labels: labels,
                datasets: [
                  {
                    label: 'Covid Cases',
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
                    data: cases
                  }
                ]
              };


              const deathChart = {
                    labels: labels,
                    datasets: [
                      {
                        label: 'Death Rate',
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
                        data: deaths
                      }
                    ]
                  };


                  const changeCases= ()=>{ this.setState({ chart_selected: 'cases' , style_new: 'ui red button ', style_all: 'ui button'}) }
                  const changeDeaths = ()=>{ this.setState({ chart_selected: 'death' , style_all: 'ui red button ', style_new: 'ui button'}) }

              return(
                <div>
                    <div>
                          <Line
                            legend={legend}
                            data={this.state.chart_selected === 'cases' ? casesChart : deathChart}
                             height={500}
                             width= {1300}
                             options={{ maintainAspectRatio: true }}
                          />
                    </div>

                    <div className="ui two column grid" >
                      <div className="row">
                            <div className="column">
                               <button className={ 'ui tiny fluid button'}  onClick={ changeCases }> Cases </button>
                            </div>

                          <div className="column">
                            <button className={'ui tiny fluid button'} onClick= {changeDeaths} >Deaths</button>
                          </div>
                      </div>
                    </div>



                </div>
              )


} //end of renderContent




    return(
      <div style={{paddingTop: '10px', float: 'left' , width: '75%'}}>
      <h1> United States Covid Data </h1>
          {renderContent()}
      </div>

// data={this.state.chart_selected === 'all' ? all_cases : all_deaths}
    )
  }
}

const mapStateToProps = (state)=>{
  return {all_states: state.usCovidData}
}

export default connect(mapStateToProps, {fetchUnitedStatesCovidData})(UnitedStatesCovid)
