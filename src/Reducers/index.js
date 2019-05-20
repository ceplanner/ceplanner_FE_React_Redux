import {
  LOGIN_START,
  LOGIN_SUCCESS,
  FETCH_DATA_START,
  FETCH_DATA_SUCCESS,
  USER_UNAUTHORIZED,
  REGISTER_START,
  REGISTER_SUCCESS,
  REGISTER_FAILURE
} from "../Actions";

const initialState = {
  myEvents: [],
  loggingIn: false,
  token: localStorage.getItem("token"),
  error: "",
  loggedIn: false,
  fetchingEvents: false,
  errorStatusCode: null,
  registering: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        loggingIn: true
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loggingIn: false,
        token: action.payload,
        loggedIn: true
      };
    case FETCH_DATA_START:
      return {
        ...state,
        fetchingEvents: true
      };
    case FETCH_DATA_SUCCESS:
      // console.log(action.payload.data)
      return {
        ...state,
        error: "",
        errorStatusCode: null,
        fetchingEvents: false,
        myEvents: action.payload
      };
    case USER_UNAUTHORIZED:
      return {
        ...state,
        error: action.payload.data.error,
        errorStatusCode: action.payload.status,
        fetchingEvents: false
      };
    case REGISTER_START:
      return {
        ...state,
        registering: true
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        registering: false,
        error: "",
        errorStatusCode: null,
        myEvents: action.payload
      };

    default:
      return state;
  }
};

export default reducer;
