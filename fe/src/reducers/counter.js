const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case "UP":
      return state + 1;
    case "DOWN":
      return state - 1;
    case "RESET":
      return 0;
    default:
      return state;
  }
};

export default counterReducer;
