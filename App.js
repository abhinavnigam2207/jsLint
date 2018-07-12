import React from 'react';
import './styles.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.formatJSON = this.formatJSON.bind(this);
    this.clearJSON = this.clearJSON.bind(this);
    this.removeSpaces = this.removeSpaces.bind(this);
  }
  
  formatJSON() {
    const inputVal = document.getElementById('inputJSON').value;
    let parsedJSON;
    // try{
      parsedJSON = JSON.parse(inputVal);
      this.onSuccessHandler(parsedJSON);
    // }
    // catch (error){
    //   this.state.props.errorMsg = error.message;
    //   this.onSuccessHandler(error);
    // }
  }

  clearJSON() {
    document.getElementById('inputJSON').value = ``;
  }

  removeSpaces() {

  }

  onSuccessHandler(parsedJSON) {
    const outputVal = document.getElementById('outputJSON');
    outputVal.innerText = JSON.stringify(parsedJSON, null, 3);
    debugger;
  }

  onFailureHandler(error) {
    
  }

  render() {
    return (
      <div>
          <h1>Secure, Client-Side, Network-Free JSON Linting</h1>
          <h3>Input:</h3>
          <form>
            <div>
              <textarea id="inputJSON" className="textJSONinput"></textarea>
            </div>
            <div>
              <button className="btn btn-primary" onClick={this.formatJSON}>Format</button>
              <button className="btn btn-warning" onClick={this.clearJSON}>Clear</button>
              {/* <button className="btn btn-warning" onClick={this.removeSpaces}>Remove Spaces</button> */}
            </div>
          </form>
          <div>
            <div>
              <pre id="outputJSON"></pre>
            </div>
            <div className="hidden">
              Error: {this.errorMsg}
            </div>
          </div>
      </div>
    );
  }
}

export default App;