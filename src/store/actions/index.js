export const slider = () => {
  return {
    type: "SLIDE"
  };
};

export const summaryData = data => {
  return {
    type: "SUMMARYDATA",
    payload: data
  };
};
