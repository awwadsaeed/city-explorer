import './App.css';
import React from 'react';
import FormInfo from './Form.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import InfoCard from './Card'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataInfo: '',
      show:false,
      display:false,
    }
  }

  setData =(data,showing) => {
   this.setState({
      dataInfo: data,
      show:true,
      display:showing
    })
  }

  render() {
    return (
      <>
        <FormInfo setData={this.setData} />
        {this.state.show &&
        <InfoCard data={this.state.dataInfo} display={this.state.display} />
        }
      </>
    )
  }
}

export default App;
