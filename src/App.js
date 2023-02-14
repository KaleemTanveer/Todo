import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddTodo from "./AddTodo";
import "./index";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import { Box, Button } from "@mui/material";

let editId;
const App = () => {
  const [inputList, setInputList] = useState("");
  const dispatch = useDispatch();
  const list = useSelector((state) => state.list);
  const isEditing = useSelector((state) => state.isEditing);

  const listOfItem = (e) => {
    if (isEditing === false) {
      e.preventDefault();
      console.log(editId);
      dispatch({
        type: "LIST_OF_ITEM",
        payload: {
          id: editId,
          data: inputList,
        },
      });
      setInputList("");
      // editId=null
    } else {
      e.preventDefault();
      dispatch({
        type: "LIST_OF_ITEM",
        payload: { id: new Date().getTime().toString(), data: inputList },
      });
      setInputList("");
    }
  };

  // const listOfItem = () => {
  //   if (inputList === "") {
  //     return alert("Input Felid is empty");
  //   } else if (inputList && !isEditing) {
  //     setItems(
  //       items.map((elem) => {
  //         if (elem.id == isEditItem) return { ...elem, name: inputList };
  //         return elem;
  //       })
  //     );
  //     setIsEditing(true);
  //     setInputList("");
  //     setIsEditItem(null);
  //   } else
  //     setItems((oldValue) => {
  //       const allInputData = {
  //         id: new Date().getTime().toString(),
  //         name: inputList,
  //       };
  //       return [...oldValue, allInputData];
  //     });
  //   setInputList("");
  // };
  const deleteItem = (id) => {
    dispatch({
      type: "DELETE_ITEM",
      id: id,
    });
  };
  const editTodo = (id, data) => {
    editId = id;
    setInputList(data);
    dispatch({
      type: "Edit_ITEM",
      payload: {
        id: id,
        data: data,
      },
    });

    // let newEditItem = items.find((elem) => {
    //   return elem.id == id;
    // });
    // setIsEditing(false);
    // setInputList(newEditItem.name);
    // setIsEditItem(id);
  };

  // const deleteItem = (id) => {
  //   setItems((oldValue) => {
  //     return oldValue.filter((arrElement) => {
  //       return arrElement.id != id;
  //     });
  //   });
  // };
  // const editTodo = (id) => {
  //   let newEditItem = items.find((elem) => {
  //     return elem.id == id;
  //   });
  //   setIsEditing(false);
  //   setInputList(newEditItem.name);
  //   setIsEditItem(id);
  // };

  return (
    <Box className="main_div">
      <Box className="center_div">
        <br />
        <h1>ToDo List</h1>
        <br />
        <form onSubmit={listOfItem}>
          <input
            type="text"
            placeholder="Enter text here"
            // itemEvent

            value={inputList}
            onChange={(e) => setInputList(e.target.value)}
          />

          {isEditing ? (
            <Button
              style={{
                maxWidth: "300px",
                maxHeight: "30px",
                minWidth: "30px",
                minHeight: "30px",
              }}
              type="submit"
              variant="contained"
             
            >
            <AddIcon />
            </Button>
          ) : (
            <Button
              style={{
                maxWidth: "300px",
                maxHeight: "30px",
                minWidth: "30px",
                minHeight: "30px",
              }}
              type="submit"
              variant="contained"
              
            >
              <EditIcon />
            </Button>
          )}
        </form>

        <ol>
          {list.map((itemVal, index) => {
            return (
              <AddTodo
                items={itemVal}
                onDel={deleteItem}
                key={index}
                editTodo={editTodo}
                editing={isEditing}
              />
            );
          })}
        </ol>
      </Box>
    </Box>
  );
};

export default App;
