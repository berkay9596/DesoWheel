const userInfoReducer = (state = [], action) => {
    switch (action.type) {
      case "GET_INFO":
        return { ...state, info: action.payload };
      default:
        return state;
    }
  };
  
  
  export default userInfoReducer;