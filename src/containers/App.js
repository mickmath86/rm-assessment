import React, { Component } from 'react';
import axios from 'axios';
import logo from '../logo.svg';
import '../App.css';

//import components
import Section from "../components/Section";
// import Content from "./Content";

class App extends Component {

  state={
    data: [ ],

  };

  //parse data
  componentDidMount(){
    axios.get('https://mickmath86.github.io/data.json/data.json')
  .then(response => {
    this.setState({
      data: response.data.data
    })
  })
  .catch(error => {
    console.log('Error fetching and parsing data', error);
  });
  }



  //add sections to page
  addSection = () => {
    this.state.data.push({
      headerData: this.state.data[0].headerData,
      contentA: this.state.data[0].contentA,
      contentB: this.state.data[0].contentB,
    })
    this.setState(this.state)
  }
  removeSection = () => {
    this.state.data.pop({

    })
    this.setState(this.state)
  }


  render() {

    //Pass Data to section(s)
    let results = this.state.data;
    let sections = results.map((item, index)=>
      <main className="m-3 rounded" key = {index}>
        <Section
          toggleContent={this.toggleContent}
          headerData={item.headerData}
          contentA={item.contentA}
          contentB={item.contentB}
        />
      </main>
    );

    return (
          <div className="text-center">

             <img src={logo} className="App-logo" alt="logo" />

              <h1 className="App-title">Realty Mogul Interview Assessment</h1>
              <p>by Mike Mathias</p>


        <button className="btn m-1 btn-success" onClick={this.addSection}>Add Section</button>

        {sections}
      </div>





    );
  }
}

export default App;
