import React from "react";
import PropTypes from "prop-types";

class SearchInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      keyword: "",
    };

    this.onInputChangeHandler = this.onInputChangeHandler.bind(this);
  }

  onInputChangeHandler(event) {
    this.setState(
      {
        keyword: event.target.value,
      },
      () => {
        event.preventDefault();
        this.props.searchNotes(this.state.keyword.toLowerCase());
      }
    );
  }

  render() {
    return (
      <input
        type="text"
        className="border-2 lg:w-2/4 lg:h-10 rounded-md text-black text-md px-2 border-indigo-500"
        placeholder="Search.."
        value={this.state.keyword}
        onChange={this.onInputChangeHandler}
      />
    );
  }
}

SearchInput.propTypes = {
  searchNotes: PropTypes.func.isRequired,
};

export default SearchInput;
