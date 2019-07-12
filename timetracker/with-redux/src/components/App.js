import React, { Component } from "react";
import Header from "./Header/Header";
import TimesContainer from "../containers/TimesContainer";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="Timetracker" />
        <section className="App-content">
          <TimesContainer />
        </section>
      </div>
    );
  }
}

export default App;
