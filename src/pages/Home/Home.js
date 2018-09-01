import React, { Component } from "react";
import "./Home.css";

import Header from "./Header/Header";
import DatesForm from "./DatesForm/DatesForm";

class Home extends Component {
  render() {
    return (
      <div className="home">
        <Header />
        <div className="home_body row center-xs middle-xs">
          <DatesForm />
        </div>
      </div>
    );
  }
}

export default Home;