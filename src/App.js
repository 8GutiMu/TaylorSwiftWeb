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
        var songss = (objetoJSON.results.map(function(songs){
    return	songs.json()
        }))
    Promise.all(songss)
    }).then((objetoNuevo)=>{
        console.log(objetoNuevo)
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
