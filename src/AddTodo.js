import React from "react";

const AddTodo = (props) => {
   
    return (
      <div >
      
        <button
          onClick={() => {
            props.onDel(props.items.id);
          }}
        >
          x
        </button>
        <button onClick={()=>{props.editTodo(props.items.id)}}>Edit</button>
        {props.items.name}
      </div>
    );
  }
  

export default AddTodo;
