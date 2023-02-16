import React from "react";
import axios from "axios";

export const getData = () => {
  return (dispatch) => {
    axios.get("http://localhost:3000/posts").then((post) => {
      dispatch({
        type: "SHOW_LIST",
        payload: {
          data: post.data,
        },
      });
    });
  };
};

export const delData = (id) => {
  return (dispatch) => {
    axios.delete(`http://localhost:3000/posts/${id}`).then((post) => {
      dispatch({
        type: "DELETE_ITEM",
        id: id,
      });
    });
  };
};

export const postData = (data) => {
  return (dispatch) => {
    const allInputData = {
      data: data,
    };
    axios.post(`http://localhost:3000/posts`, allInputData).then((res) => {});
  };
};

export const editData = (data, id) => {
  return (dispatch) => {
    const allInputData = {
      data: data,
    };
    axios.put(`http://localhost:3000/posts/${id}`, allInputData).then((res) => {
      // getData();
    });
  };
};
