export const initalState = {
  basket: [],
  subTotal: 0,
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
        subTotal:
          state.subTotal + parseInt(action.item.price.replace(/,/g, ""), 10),
      };
    default:
      return state;
  }
};

export default reducer;
