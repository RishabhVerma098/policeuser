const initialState = [
  {
    firImage: "",
    title: "random",
    timeStamp: "20 wed 2020 , 3:00PM",
    description:
      "Aute culpa culpa nisi commodo et esse velit nisi esse non aute exercitation. Fugiat ad elit minim nulla dolore ullamco commodo sint eu magna nulla mollit aute do. Do reprehenderit ad sint ad aliquip magna proident ullamco aliquip incididunt aliquip adipisicing. Duis ullamco ex culpa irure ullamco. Ea deserunt quis veniam exercitation."
  }
];

const allFirPass = (state = initialState, actions) => {
  console.log(actions.payload);
  switch (actions.type) {
    case "ALLFIROFUSER":
      return [...state, ...actions.payload];
    default:
      return state;
  }
};

export default allFirPass;
