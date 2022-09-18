import React, { Component } from "react";
const MyContext = React.createContext();

class MyProvider extends Component {
  state = {
    step: 1,
    players: [],
  };
  AddPlayers = (player) => {
    this.setState((prevState) => ({
      players: [...prevState.players, player],
    }));
  };

  DeletePlayer = (index) => {
    const Array = [...this.state.players];
    Array.splice(index, 1);
    this.setState({ players: Array });
  };
  nextStep = () => {
    this.setState({ step: 2 });
  };

  render() {
    return (
      <MyContext.Provider
        value={{
          state: this.state,
          AddPlayers: this.AddPlayers,
          DeletePlayer: this.DeletePlayer,
          nextStep: this.nextStep,
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

export { MyContext, MyProvider };
