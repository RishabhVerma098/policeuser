const summaryData = (state = [], actions) => {
  switch (actions.type) {
    case "SUMMARYDATA":
      return [...state, actions.payload];
    default:
      return state;
  }
};

export default summaryData;
