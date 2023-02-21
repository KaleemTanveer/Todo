import { SHOW_LIST } from "../constant";

const initialState = {
  list: [],
  isEditing: true,
  setInput: [],
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "Api_data":
      return {
        list: [...action.payload.data],
        isEditing: true,
      };
      
    //   case "LIST_OF_ITEM":
    //     if (state.isEditing === false) {
    //       console.log("fafaf");

    //       console.log(action.payload.data);
    //       const newArr = [...state.list];
          
    //       const updateArr = newArr.map((arr) => {
    //         if (arr.id == action.payload.id) {
    //           return {
    //             ...arr,
    //             data: action.payload.data,
    //           };
    //         }
    //         return arr;
    //       });
    //       return { isEditing: true, list: updateArr };
    //     } else {
    //       console.log("aaaaaaaa");
    //       const { id, data } = action.payload.data;
    //       const allInputData = {
    //         id: id,
    //         data: data,
    //     };
    //     return {
    //       list: [...state.list, allInputData],
    //       isEditing: true,
    //     };
    //   }

    //   break;
    // case "DELETE_ITEM":
    //   const newList = state.list.filter((oldValue) => action.id != oldValue.id);
    //   return {
    //     list: newList,
    //     isEditing: true,
    //   };
    //   break;
    case "Edit_ITEM":
      return { list: state.list, isEditing: false };
      break;

    default:
      return state;
  }
};
