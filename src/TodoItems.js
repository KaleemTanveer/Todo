import React from "react";
export default class TodoItem extends React.Component {
  state = {
    isEditing: false,
  };
  editTodoSubmitHandler = (event) => {
    event.preventDefault();
    this.props.editTodoFromState(this.props.index, this.newText.value);
    this.toggleEditing();
  };
  toggleEditing = () => {
    this.setState({
      isEditing: !this.state.isEditing,
    });
  };
  deleteTodo = () => {
    this.props.deleteTodoFromState(this.props.index);
  };
  clickHandler = () => {
    this.props.toggleComplete(this.props.index);
  };
  render() {
    const { todo } = this.props;
    if (this.state.isEditing) {
      return (
        <div>
          <form className="List" onSubmit={this.editTodoSubmitHandler}>
            <input
              id="EditInput"
              type="text"
              defaultValue={todo.text}
              ref={(node) => {
                this.newText = node;
              }}
            ></input>
            <span>
              <button type="submit">Save</button>
              <button onClick={this.toggleEditing}>Cancel</button>
            </span>
          </form>
        </div>
      );
    }
    return (
      <div
        className={todo.completed ? "completed" : ""}
      >
        <div className="List">
          <span onClick={this.clickHandler}>{todo.text} </span>
          <span>
            <button  onClick={this.toggleEditing}>
              Edit
            </button>
            <button  onClick={this.deleteTodo}>
              Delete
            </button>
          </span>
        </div>
      </div>
    );
  }
}
