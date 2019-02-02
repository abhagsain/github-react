import React, { Component } from "react";
import Header from "./Header";
import "bootstrap/dist/css/bootstrap.css";
import MainContent from "./Main";
class App extends Component {
  render() {
    return (
      <div className="h-100">
        <Header />
        <MainContent />
      </div>
    );
  }
}

export default App;
