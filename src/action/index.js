

export const getData = () => {
  return (dispatch) => {
      dispatch({
        type: "SHOW_LIST",
      });
  };
};

export const delData = (id) => {
  return (dispatch) => {
      dispatch({
        type: "DELETE_ITEM",
        id: id,
      });
  };
};

export const postData = (data) => {
  return (dispatch) => {
    const allInputData = {
      data: data,
    };
    dispatch({
      type: "Post",
      data: allInputData,
    });
  };
};

export const editData = (data, id) => {
  return (dispatch) => {
    dispatch({
      type: "edit",
      id:id,
      data: data,
    });
  };
};
