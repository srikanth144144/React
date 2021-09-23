const count = 5;

export function reducer(state = count, action) {
  const { type, payload } = action;
  switch (type) {
    case "INCEREMENT":
      return state + payload;
    case "DECREMENT":
      return state - payload;
    default:
      return state;
  }
}

export default reducer;
