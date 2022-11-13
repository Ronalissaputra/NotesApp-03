import React from "react";
import PropTypes from "prop-types";
import SubmitButton from "../Event/SubmitButton";

class NoteForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      maxKarakter: 30,
      "Sisa-karakter": 30,
    };

    this.ontitleChangeEventHandler = this.ontitleChangeEventHandler.bind(this);
    this.onbodyChangeEventHandler = this.onbodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  ontitleChangeEventHandler(event) {
    const totalCharacterOnInput = parseInt(event.target.value.length);
    if (totalCharacterOnInput <= this.state.maxKarakter) {
      this.setState(() => {
        return {
          title: event.target.value,
          "Sisa-karakter": this.state.maxKarakter - totalCharacterOnInput,
        };
      });
    }
  }

  onbodyChangeEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNotes(this.state);
  }

  render() {
    return (
      <div className="input">
        <form onSubmit={this.onSubmitEventHandler} className="grid grid-cols-1">
          <input
            type="text"
            className="border-2 border-slate-500 w-full h-10 rounded-md mb-2 px-2 font-bold text-md text-slate-700"
            placeholder="Title"
            value={this.state.title}
            onChange={this.ontitleChangeEventHandler}
          />
          <textarea
            className="border-2 border-slate-500 rounded-md h-32 px-2 font-bold text-md text-slate-700 mb-2"
            placeholder="Create your Note.."
            value={this.state.body}
            onChange={this.onbodyChangeEventHandler}
          ></textarea>
          <SubmitButton />
        </form>
      </div>
    );
  }
}

NoteForm.propTypes = {
  addNotes: PropTypes.func.isRequired,
};

export default NoteForm;
