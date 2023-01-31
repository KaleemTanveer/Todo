import React, { useState } from "react";
import AddTodo from "./AddTodo";
import './index'

const App = () => {
  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);
  const [isEditing, setIsEditing] = useState(true);
  const [isEditItem, setIsEditItem] = useState(null);

  // const itemEvent = (event) => {
  //   if (event.target.value == "") {
  //     return;
  //   }
  //   setInputList(event.target.value);
  // };

  const listOfItem = () => {
    if (inputList === "") {
      return alert("Input Felid is empty");
    } else if (inputList && !isEditing) {
      setItems(
        items.map((elem) => {
          if (elem.id == isEditItem) return { ...elem, name: inputList };
          return elem;
        })
      );
      setIsEditing(true);
      setInputList("");
      setIsEditItem(null);
    } else
      setItems((oldValue) => {
        const allInputData = {
          id: new Date().getTime().toString(),
          name: inputList,
        };
        return [...oldValue, allInputData];
      });
    setInputList("");
  };

  const del = () => {
    setItems(() => {
      return [];
    });
  };

  const deleteItem = (id) => {
    setItems((oldValue) => {
      return oldValue.filter((arrElement) => {
        return arrElement.id != id;
      });
    });
  };
  const editTodo = (id) => {
    let newEditItem = items.find((elem) => {
      return elem.id == id;
    });
    setIsEditing(false);
    setInputList(newEditItem.name);
    setIsEditItem(id);
  };

  return (
    <div className="main_div">
      <div className="center_div">
        <br />
        <h1>ToDo List</h1>
        <br />
        <input
          type="text"
          placeholder="Enter text here"
          // itemEvent

          onChange={(e) => setInputList(e.target.value)}
          value={inputList}
        />
        {isEditing ? (
          <button onClick={listOfItem}>+</button>
        ) : (
          <button onClick={listOfItem}>Edit</button>
        )}

        
        <ol>
          {items.map((itemVal, index) => {
            return (
              <AddTodo
                items={itemVal}
                onDel={deleteItem}
                key={index}
                id={index}
                editTodo={editTodo}
                editing={isEditing}
              />
            );
          })}
        </ol>
        <button  onClick={del}>Del All</button>
      </div>
    </div>
  );
};

export default App;
