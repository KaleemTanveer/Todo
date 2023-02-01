import React, { useEffect, useState } from "react";
import AddTodo from "./AddTodo";
import "./index";
import axios from "axios";

const App = () => {
  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);
  const [getArray, getItems] = useState([]);
  const [isEditing, setIsEditing] = useState(true);
  const [isEditItem, setIsEditItem] = useState(null);

  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    axios.get("http://localhost:3000/posts").then((post) => {
      getItems(post.data);
    });
  };

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
    } else {
      console.log("add form");
      const allInputData = {
        name: inputList,
      };
      setItems(allInputData);
    }
  };

  const del = () => {
    getItems(() => {
      return [];
    });
  };

  const deleteItem = (id) => {
    axios.delete(`http://localhost:3000/posts/${id}`).then(() => {
      getData();
    });
  };

  const editTodo = (id) => {
    let newEditItem = getArray.find((elem, i) => {
      return elem.id == id;
    });

    setIsEditing(false);
    setInputList(newEditItem.name);
    setIsEditItem(id);
  };

  function onFormSubmit(e) {
    if (inputList === "") {
      e.preventDefault();
      return alert("Input Felid is empty");
    } else if (inputList && !isEditing) {
      e.preventDefault();
      getItems(
        getArray.map((elem) => {
          if (elem.id == isEditItem) {
            const allInputData = {
              name: inputList,
            };
            axios
              .put(`http://localhost:3000/posts/${elem.id}`, allInputData)
              .then((res) => {});
            return { ...elem, name: inputList };
          }
          return elem;
        })
      );

      setInputList("");
      getData();
      setIsEditing(true);
      setInputList("");
      setIsEditItem(null);
      return;
    } else e.preventDefault();

    const allInputData = {
      name: inputList,
    };
    axios.post(`http://localhost:3000/posts`, allInputData).then((res) => {});
    setInputList("");
    getData();
    return;
  }

  return (
    <div className="main_div">
      <div className="center_div">
        <br />
        <h1>ToDo List</h1>
        <br />
        <form onSubmit={onFormSubmit}>
          <input
            type="text"
            placeholder="Enter text here"
            // itemEvent
            onChange={(e) => setInputList(e.target.value)}
            value={inputList}
          />

          {isEditing ? (
            <button type="submit">+</button>
          ) : (
            <button type="submit">Edit</button>
          )}
        </form>

        <ol>
          {getArray.map((itemVal, index) => {
            return (
              <AddTodo
                key={index}
                items={itemVal}
                onDel={deleteItem}
                id={index}
                editTodo={editTodo}
                editing={isEditing}
              />
            );
          })}
        </ol>
        {/* <button onClick={del}>Del All</button> */}
      </div>
    </div>
  );
};

export default App;
