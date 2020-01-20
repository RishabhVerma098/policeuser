const initialState = {
  active: [true, false, false, false]
};

const handleListPanelReducer = (state = initialState, actions) => {
  console.log(actions.payload);
  switch (actions.type) {
    case "PANEL_LIST":
      const active = state;
      if (active[actions.payload]) {
        return null;
      } else {
        active[actions.payload] = true;
        for (let i = 0; i <= 3; i++) {
          if (i === actions.payload) {
            continue;
          }
          active[i] = false;
        }
      }
      return [...state, active];
    default:
      return state;
  }
};

export default handleListPanelReducer;
