import React, { Component } from "react";
import Age from "./components/Age";
import Name from "./components/Name";
import Points from "./components/Points";
import Rank from "./components/Rank";
//import Table from "./components/Table";
import "./bootstrap.min.css";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sortBy: ""
    };

    this.handleClickAge = this.handleClickAge.bind(this);
    this.handleClickName = this.handleClickName.bind(this);
    this.handleClickPoints = this.handleClickPoints.bind(this);
    this.handleClickRank = this.handleClickRank.bind(this);
  }

  handleClickAge(event) {
    this.setState({
      sortBy: "AGE"
    });
    this.render();
  }

  handleClickName(event) {
    this.setState({
      sortBy: "NAME"
    });
    this.render();
  }

  handleClickPoints(event) {
    this.setState({
      sortBy: "POINTS"
    });
    this.render();
  }

  handleClickRank(event) {
    this.setState({
      sortBy: "RANK"
    });
    this.render();
  }

  render() {
    return (
      <div className="text-center buttons">
        <header className="text-center">
          <h1>Leaderboard</h1>
        </header>
        <div className="text-center buttons">
          <Age onClick={this.handleClickAge}></Age>
          <Name onClick={this.handleClickName}></Name>
          <Points onClick={this.handleClickPoints}></Points>
          <Rank onClick={this.handleClickRank}></Rank>
          {/* <Table sortBy={this.state.sortBy}></Table> */}
        </div>
      </div>
    );
  }
}
