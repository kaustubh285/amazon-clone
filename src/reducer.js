export const initalState = {
  basket: [],
  subTotal: 0,
  user: null,
  userName: null,
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
    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        // This finds the first item with that id and returns that index
        (basketItem) => basketItem.id === action.id
      );

      let newBasket = [...state.basket];

      if (index >= 0) {
        // this basically cuts the array from where the index is, resulting in removing the item from the list
        newBasket.splice(index, 1);
      } else {
        console.warn(`Can't remove product (${action.id}) as its not in cart`);
      }
      return {
        ...state,
        basket: newBasket,
        subTotal: state.subTotal - parseInt(action.price.replace(/,/g, ""), 10),
      };
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_USERNAME":
      return {
        ...state,
        userName: action.userName,
      };
    default:
      return state;
  }
};

export default reducer;
