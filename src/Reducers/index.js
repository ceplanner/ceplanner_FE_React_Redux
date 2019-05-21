import {
  LOGIN_START,
  LOGIN_SUCCESS,
  FETCH_DATA_START,
  FETCH_DATA_SUCCESS,
  USER_UNAUTHORIZED,
  REGISTER_START,
  REGISTER_SUCCESS,
  // REGISTER_FAILURE,

  FETCH_USER_START,
  FETCH_USER_SUCCESS,
} from "../Actions";

const initialState = {
  myEvents: [],
  users:[],
  loggingIn: false,
  token: localStorage.getItem("token"),
  error: "",
  loggedIn: false,
  fetchingEvents: false,
  errorStatusCode: null,
  registering: false,
  fetchingUsers: false,
  
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
        users: action.payload
      };

      // 
      case FETCH_USER_START:
      return {
        ...state,
        fetchingUsers: true
      };
    case FETCH_USER_SUCCESS:
      // console.log(action.payload.data)
      return {
        ...state,
        error: "",
        errorStatusCode: null,
        fetchingUsers: false,
        users: action.payload
      };

    default:
      return state;
  }
};

export default reducer;
