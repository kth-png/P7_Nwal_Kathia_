import React, { Component } from "react";

export class Toggle extends Component {
  state = {
    signIn: true,
    signUp: false,
  };

  modalStateChanger = (e) => {
    if (e.target.id === "register") {
      this.setState({ signUp: true, signIn: false });
    } else if (e.target.id === "login") {
      this.setState({ signIn: true, signUp: false });
    }
  };

  render() {
    const { newState } = this.props;
    return (
      <div className="form-container">
        {newState({
          signIn: this.state.signIn,
          signUp: this.state.signUp,
          modalStateChanger: this.modalStateChanger,
        })}
      </div>
    );
  }
}

export default Toggle;
