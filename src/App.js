import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddTodo from "./AddTodo";
import "./index";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import { Box, Button, Card, List, TextField, Typography } from "@mui/material";
import axios from "axios";

let editId;
const App = () => {
  const [inputList, setInputList] = useState("");
  const dispatch = useDispatch();
  const list = useSelector((state) => state.list);
  const isEditing = useSelector((state) => state.isEditing);

  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    axios.get("http://localhost:3000/posts").then((post) => {
      dispatch({
        type: "SHOW_LIST",
        payload: {
          data: post.data,
        },
      });
    });
  };

  const listOfItem = (e) => {
    if (isEditing === false) {
      e.preventDefault();
      console.log(editId);
      const allInputData = {
        data: inputList,
      };
      axios
        .put(`http://localhost:3000/posts/${editId}`, allInputData)
        .then((res) => {
          getData();
        });
      setInputList("");

      return;
    } else {
      console.log("else");
      e.preventDefault();
      const allInputData = {
        data: inputList,
      };
      axios.post(`http://localhost:3000/posts`, allInputData).then((res) => {
        setInputList("");
      });
      getData();
    }
  };

  const deleteItem = (id) => {
    axios.delete(`http://localhost:3000/posts/${id}`).then(() => {
      getData();
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
  };

  return (
    <Box
      sx={{
        bgcolor: "#6983aa",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card
        sx={{
          bgcolor: "whitesmoke",
          color: "black",
          width: "25%",
          maxHeight: 400,
          overflowY: "auto",
          height: 400,
          borderRadius: 2,
        }}
      >
        <Typography sx={{ textAlign: "center", mt: 1 }} variant="h4">
          ToDo List
        </Typography>

        <form onSubmit={listOfItem}>
          <TextField
            label="Enter text here"
            onChange={(e) => setInputList(e.target.value)}
            value={inputList}
          />
          

          {isEditing ? (
            <Button
              sx={{
                p: "16px",
                ml: 1,
                
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

        <List>
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
        </List>
      </Card>
    </Box>
  );
};

export default App;
