import React, { Component, Fragment } from "react";
import "./App.css";
import NavBar from "./components/navbar/navbar";
import Container from "./components/to-do-container/container";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
library.add(faTrash);
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      newItem: {
        key: "",
        value: "",
      },
    };
  }
  onDeleteItem = (key) => {
    const list = this.state.list.filter((item) => item.key !== key);
    this.setState({ list });
  };
  onAddItem = (e) => {
    e.preventDefault();
    const { newItem } = this.state;
    if (newItem.value !== "") {
      const list = [...this.state.list, newItem];
      this.setState({ list, newItem: { key: "", value: "" } });
    }
  };
  onUpdateItem = (key, value) => {
    console.log(value, key);
    const { list } = this.state;
    list.forEach((item) => {
      if (item.key === key) {
        item.value = value;
      }
    });
    this.setState({ list });
  };
  handleInput = (e) => {
    const value = e.target.value;
    const key = Date.now();
    this.setState({ newItem: { value, key } });
  };
  render() {
    return (
      <Fragment>
        <NavBar totalItems={this.state.list.length}></NavBar>
        <Container
          list={this.state.list}
          newItem={this.state.newItem}
          onUpdateItem={this.onUpdateItem}
          onHandleInput={this.handleInput}
          onDeleteItem={this.onDeleteItem}
          onAddItem={this.onAddItem}
        ></Container>
      </Fragment>
    );
  }
}

export default App;
