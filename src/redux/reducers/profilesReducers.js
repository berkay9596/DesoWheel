const profileReducer = (state = [], action) => {
    switch (action.type) {
      case "GET_PROFILES":
        return { ...state, profiles: action.payload};
      case "GET_PROFILES_REPOST":
        return{...state, profiles : action.payload};
      case "GET_PROFILES_DIAMONDS":
        return{...state , profiles : action.payload};  
        case "GET_PROFILES_FILTERED":
        return{...state , profiles : action.payload};  
      default:
        return state;
    }
  };
  
  
  export default profileReducer;