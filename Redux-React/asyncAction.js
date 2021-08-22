const redux = require("redux");
const CreacteStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;
const thunkMiddleware = require("redux-thunk").default;
const axios = require("axios");

const initialstate = {
  loading: false,
  users: [],
  error: "",
};

const FETCH_USER_REQUEST = "FETCH_USER_REQUEST";
const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
const FETCH_USER_FAILURE = "FETCH_USER_FAILURE";

const fetchuserrequest = () => {
  return {
    type: FETCH_USER_REQUEST,
  };
};
const fetchusersuccess = (users) => {
  return {
    type: FETCH_USER_SUCCESS,
    payload: users,
  };
};
const fetchuserfailuer = (error) => {
  return {
    type: FETCH_USER_FAILURE,
    payload: error,
  };
};
const reducer = (state = initialstate, action) => {
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return { ...state, loading: true };

    case FETCH_USER_SUCCESS:
      return {
        loading: false,
        users: action.payload,
        error: "",
      };

    case FETCH_USER_FAILURE:
      return {
        loading: false,
        users: [],
        error: action.payload,
      };
  }
};
const fetchUsers = () => {
  return function (dispatch) {
    dispatch(fetchuserrequest());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((responce) => {
        const users = responce.data.map((user) => user.id);
        dispatch(fetchusersuccess(users));
      })
      .catch((error) => {
        dispatch(fetchuserfailuer(error.message));
      });
  };
};

const store = CreacteStore(reducer, applyMiddleware(thunkMiddleware));
store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch(fetchUsers());
