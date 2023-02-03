import React, { useContext } from "react";
import { allProps } from "./App";
import Test2 from "./Test2";

const AddTodo = () => {
  const { key, items, onDel, id, editTodo, editing} =
    useContext(allProps);
  // console.log(items.id);
  return (
    <div>
      <button
        onClick={() => {
          console.log(onDel);
          onDel.deleteItem(items.itemVal.id);
        }}
      >
        x
      </button>
      <button
        onClick={() => {
          editTodo.editTodo(items.itemVal.id);
        }}
      >
        Edit
      </button>
      {items.itemVal.name}
    </div>
  );
};

export default AddTodo;
