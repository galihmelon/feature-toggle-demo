import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    featureToggles: {},
  };

  componentDidMount = async () => {
    const featureToggles = await this.fetchFeatureToggles()
    this.setState({ featureToggles})
  }

  fetchFeatureToggles = async () => {
    const response = await fetch('/featureToggles');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message)
    }
    return body;
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          { this.state.featureToggles.featureOne && (
            <div>This is Feature One</div>
          )}
          { this.state.featureToggles.featureTwo && (
            <div>This is Feature Two</div>
          )}
        </header>
      </div>
    );
  }
}

export default App;
