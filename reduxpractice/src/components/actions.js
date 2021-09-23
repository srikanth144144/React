export const IncAction = (value) => (dispatch) => {
  dispatch({
    type: "INCEREMENT",
    payload: value,
  });
};

export const DecAction = (value) => (dispatch) => {
  dispatch({
    type: "DECREMENT",
    payload: value,
  });
};
