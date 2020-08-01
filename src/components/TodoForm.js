import React, { Component } from "react";
import PropTypes from "prop-types";
import "./TodoForm.css";

class TodoForm extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);

    this.textInputRef = React.createRef();
  }

  onSubmit(event) {
    event.preventDefault();
    this.props.onAdd(this.textInputRef.current.value);
    this.textInputRef.current.value = "";
  }

  render() {
    return (
      <form onSubmit={this.onSubmit} className="form-container">
        <input ref={this.textInputRef} placeholder="input a new todo here..." />
        <input className='submit' type="submit" value="add"/>
      </form>
    );
  }
}

TodoForm.propTypes = {
  onAdd: PropTypes.func,
};

export default TodoForm;