const silderReducer = (state = false, actions) => {
  switch (actions.type) {
    case "SLIDE":
      return !state;
    default:
      return state;
  }
};

export default silderReducer;
