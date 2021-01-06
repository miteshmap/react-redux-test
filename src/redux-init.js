import { createStore } from "redux";

const initialState = {
  username: "",
  password: "",
  error: "",
  isLoading: false,
  isLoggedIn: false
};

function loginReducer(state = initialState, action) {
  switch (action.type) {
    case "field":
      return {
        ...state,
        [action.name]: action.value,
        error: "",
        isLoading: false,
        isLoggedIn: false
      };
      break;

    case "login":
      return {
        ...state,
        error: "",
        isLoading: true,
        isLoggedIn: false
      };
      break;

    case "success":
      return {
        ...state,
        error: "",
        isLoading: false,
        isLoggedIn: true
      };
      break;

    case "error":
      return {
        ...state,
        error: "We could not found user with given username and password",
        isLoading: false,
        isLoggedIn: false
      };
      break;
    default:
      // return state;
      break;
  }
  return state;
}

let store = createStore(loginReducer);

export default store;
