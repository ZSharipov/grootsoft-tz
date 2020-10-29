const reducer = (state, action) => {
  switch (action.type) {
    case "back":
      return{
        ...state,
        activeYear: state.activeYear--
      }     
    case "forward":
      return{
        ...state,
        activeYear: state.activeYear++
      }     
    case "setActiveYear":
      return{
        ...state,
        activeYear: action.payload
      }    
    default:
      return state;
  }
};

export default reducer;
