// Reducer function to manage the state of a shopping cart
const reducer = (state = [], action) => {
  switch (action.type) {

    // Handle adding an item to the cart
    case "ADD_TO_CART":
      // Check if the item already exists in the cart
      const existingItem = state.find((item) => item.id === action.payload.id);

      // If the item exists, increase its quantity
      if (existingItem) {
        return state.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + action.payload.quantity }
            : item
        );
      }

      // If the item does not exist, add it to the cart
      return [...state, action.payload];

    // Handle removing an item from the cart
    case "REMOVE_FROM_CART":
      return state.filter((item) => item.id !== action.payload);

    // Handle increasing the quantity of an item in the cart
    case "ADD_ITEM_QUANTITY":
      return state.map((item) => {
        if (item.id === action.payload) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });

    // Handle decreasing the quantity of an item in the cart
    case "SUBTRACT_ITEM_QUANTITY":
      return state
        .map((item) =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0); // Remove item if quantity drops to 0

    // Default case when no action matches
    default:
      return state;
  }
};

export default reducer;
