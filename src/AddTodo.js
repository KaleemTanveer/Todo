import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { width } from "@mui/system";
import { Box, Button } from "@mui/material";

const AddTodo = (props) => {

  return (
    <Box>
      <Button
      variant="outlined"
        sx={{
          maxWidth: "30px",
          maxHeight: "30px",
          minWidth: "30px",
          minHeight: "30px",
        }}
        onClick={() => {
          props.onDel(props.items.id);
        }}
      >
        <DeleteIcon />
      </Button>
      <Button
      variant="outlined"
        sx
        ={{
          maxWidth: "30px",
          maxHeight: "30px",
          minWidth: "30px",
          minHeight: "30px",
        }}
        onClick={() => {
          props.editTodo(props.items.id, props?.items?.data);
        }}
      >
         <EditIcon />
      </Button>
      {props.items.data}
    </Box>
  );
};

export default AddTodo;
