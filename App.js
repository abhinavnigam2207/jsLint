import React from 'react';
import './styles.css';

class App extends React.Component {
    
    constructor(props) {
        super(props);
        this.formatJSON = this.formatJSON.bind(this);
    }

    formatJSON() {
        var parsedInput;
        const jsonInput = document.getElementById("inputJSON").value;
        try {
            parsedInput = JSON.parse(jsonInput);
            this.renderOutputSucessJSON(parsedInput);                
        } catch (error) {
            this.renderOutputError(error);
        }
    }

    removeWhiteSpace() {
        document.getElementById("inputJSON").value = document.getElementById("inputJSON").value.replace(/\s/g,'');
    }

    clear() {
        document.getElementById("inputJSON").value = '';
    }

    copy() {
        const str = document.getElementById("inputJSON").value;
        const el = document.createElement('textarea');
        el.value = str;
        el.setAttribute('readonly', '');
        el.style.position = 'absolute';
        el.style.left = '-9999px';
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
    }

    renderOutputSucessJSON(parsedInput) {
        document.getElementById("inputJSON").value = JSON.stringify( parsedInput, null, 3 );
    }
    renderOutputError(error) {
        document.getElementById("errorMsg").innerText = error.message;
    }

    render() {
        return (
            <div className="container">
                <h2>Secure, Client-Side, Network-Free JSON Linting</h2>
                <div className="btn-group">
                    <div className="btn btn-primary" onClick={this.formatJSON}>Format</div>
                    <div className="btn btn-warning" onClick={this.removeWhiteSpace}>Remove White Space</div>
                    <div className="btn btn-warning" onClick={this.clear}>Clear</div>
                    <div className="btn btn-warning" onClick={this.copy}>Copy</div>
                </div>
                <h4>Input:</h4>
                <form>
                    <div>
                        <textarea id="inputJSON" className="input-json-textarea"></textarea>
                    </div>
                    <div>
                        {/* <div className="alert alert-success fade in alert-dismissible">
                            <strong>Success!</strong> This alert box indicates a successful or positive action.
                        </div>
                        <div className="alert alert-info fade in alert-dismissible">
                            <strong>Info!</strong> This alert box indicates a neutral informative change or action.
                        </div>
                        <div className="alert alert-warning fade in alert-dismissible">
                            <strong>Warning!</strong> This alert box indicates a warning that might need attention.
                        </div> */}
                        <div className="alert alert-danger fade in alert-dismissible hidden">
                            <strong>Error:</strong>
                            <div id="errorMsg"></div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default App;