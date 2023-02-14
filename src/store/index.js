import { createStore } from "redux";
const initialState = {
  list: [],
  isEditing: true,
  setInput: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LIST_OF_ITEM":
      if (state.isEditing === false) {
        const newArr = [...state.list];

        const updateArr = newArr.map((arr) => {
          if (arr.id == action.payload.id) {
            return {
              ...arr,

              data: action.payload.data,
            };
          }
          return arr;
        });
        return { isEditing: true, list: updateArr };
      } else {
        const { id, data } = action.payload;
        const allInputData = {
          id: id,
          data: data,
        };
        return {
          list: [...state.list, allInputData],
          isEditing: true,
        };
      }

      break;
    case "DELETE_ITEM":
      const newList = state.list.filter((oldValue) => action.id != oldValue.id);
      return {
        list: newList,
        isEditing: true,
      };
      break;
    case "Edit_ITEM":
      //   return {
      //     list: newArr.map((arr) => {
      //       if (arr.id === action.payload.id) {
      //         return (arr.data = action.payload.data);
      //       }

      //       return arr;
      //     }),
      //   };

      return { list: state.list, isEditing: false };
      break;

    default:
      return state;
  }
};
const store = createStore(todoReducer);

export default store;
