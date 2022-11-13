import React from "react";
import PropTypes from "prop-types";

class LoginInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };

    this.onEmailChangeHandler = this.onEmailChangeHandler.bind(this);
    this.onPasswordChangeHandler = this.onPasswordChangeHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onEmailChangeHandler(event) {
    this.setState(() => {
      return {
        email: event.target.value,
      };
    });
  }

  onPasswordChangeHandler(event) {
    this.setState(() => {
      return {
        password: event.target.value,
      };
    });
  }

  onSubmitHandler(event) {
    event.preventDefault();

    this.props.login({
      email: this.state.email,
      password: this.state.password,
    });
  }

  render() {
    return (
      <form onSubmit={this.onSubmitHandler}>
        <input
          type="email"
          placeholder="Email"
          value={this.state.email}
          onChange={this.onEmailChangeHandler}
          className="border-black border-2 rounded-md mb-2 w-full h-14 px-2 font-semibold text-xl text-black"
        />
        <input
          type="password"
          placeholder="Password"
          value={this.state.password}
          onChange={this.onPasswordChangeHandler}
          className="border-black border-2 rounded-md mb-2 w-full h-14 px-2 font-semibold text-xl text-black"
        />
        <button className="rounded-md h-10 bg-teal-600 text-white w-full hover:bg-teal-800">
          Masuk
        </button>
      </form>
    );
  }
}

LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
};

export default LoginInput;
