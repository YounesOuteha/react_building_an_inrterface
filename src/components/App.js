import React, { Component } from 'react';
import AddAppointment from './AddAppointments';
import ListApointment from './ListApointment';
import SearchApointment from './SearchAppointment';
import '../css/App.css'

class App extends Component {

  constructor() {
    super();
    this.state = {
      myName: 'Younes',
      myAppointments:[],
      lastIndex: 0 
    }
  }

  componentDidMount() {
    fetch('./data.json')
    .then(response => response.json())
    .then(result =>{
      const apts = result.map(item =>{
        item.aptId = this.state.lastIndex;
        this.setState({lastIndex: this.state.lastIndex + 1}) 
        return item
      })
      this.setState({
        myAppointments:apts
      });
    })
  }
  
render() {
  
  return (
    <main className="page bg-white" id="petratings">
    <div className="container">
      <div className="row">
        <div className="col-md-12 bg-white">
          <div className="container">
            <AddAppointment />
            <SearchApointment/>
            <ListApointment appointments={this.state.myAppointments}/>
          </div>
        </div>
      </div>
    </div>
  </main>
  );
}
  
}

export default App;
