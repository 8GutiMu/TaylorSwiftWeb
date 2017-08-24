import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
          super();
    this.state = {apiResponse:""}
  }

  componentWillMount(){
    fetch("https://itunes.apple.com/search?term=taylor+swift")
    .then((response) => { return(response.json())})
    .then((objetoJSON) =>{
		console.log(objetoJSON)
        return(objetoJSON)
//      this.setState({apiResponse:objetoJSON})
    })
  
  }
    
    
    
    render() {
    return (
      <div className="App">
        
      </div>
    );
  }
}

export default App;
