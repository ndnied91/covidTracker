import React from 'react';
import {connect} from 'react-redux'

import {selectedCustomValues } from '../../actions'

class CustomValues extends React.Component {
  state = { term: '' , second: '' };

  onFormSubmit = event => {
    event.preventDefault();
    // console.log(this.state)
    this.props.selectedCustomValues(this.state)
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">

          <div className="field">
            <label>1st option</label>
            <input
            type="text"
             value={this.state.term}
             onChange={e => this.setState({ term: e.target.value })}
            />
          </div>

          <div className="field">
            <label>2nd option</label>
            <input
            type="text"
             value={this.state.second}
             onChange={e => this.setState({ second: e.target.value })}
            />
          </div>
            <button onSubmit={this.onFormSubmit} > Submit </button>
        </form>


      </div>
    );
  }
}

const mapStateToProps = (state)=>{
  // console.log(state)
  return {}
}

export default connect(mapStateToProps ,  {selectedCustomValues})(CustomValues);

//TODO HERE

/*
1. Clear fields when user submits
2. check to make sure first value is greater then the 2nd
3. Make it submit with clicking on the submit button
4. Make sure it works for all 
*/
