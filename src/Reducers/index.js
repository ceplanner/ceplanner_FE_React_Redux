import {
  LOGIN_START,
  LOGIN_SUCCESS,
  FETCH_DATA_START,
  FETCH_DATA_SUCCESS,
  USER_UNAUTHORIZED,
  REGISTER_START,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  FETCH_USER_START,
  FETCH_USER_SUCCESS,
  ADD_EVENT_START,
  ADD_EVENT_SUCCESS,
  ADD_EVENT_FAILURE,
  DELETE_EVENT_START,
  DELETE_EVENT_SUCCESS,
  DELETE_EVENT_FAILURE,
  EDIT_EVENT_START,
  EDIT_EVENT_SUCCESS,
  EDIT_EVENT_FAILURE
} from "../Actions";

const initialState = {
  myEvents: [],
  users: [],
  loggingIn: false,
  token: localStorage.getItem("token"),
  error: "",
  loggedIn: false,
  fetchingEvents: false,
  errorStatusCode: null,
  registering: false,
  fetchingUsers: false,
  addingEvent: false,
  deletingEvent: false,
  editingEvent: false
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

    case ADD_EVENT_START:
      return {
        ...state,
        addingEvent: true
      };
    case ADD_EVENT_SUCCESS:
      return {
        ...state,
        addingEvent: false,
        error: "",
        errorStatusCode: null,
        myEvents: action.payload
      };
    case ADD_EVENT_FAILURE:
      return {
        ...state,
        addingEvent: false,
        error: action.payload
      };

    case DELETE_EVENT_START:
      return {
        ...state,
        deletingEvent: true
      };
    case DELETE_EVENT_SUCCESS:
      return {
        ...state,
        deletingEvent: false,
        error: "",
        errorStatusCode: null,
        myEvents: [
          ...state.myEvents.filter(event => event.id !== action.payload)
        ]
      };

    case DELETE_EVENT_FAILURE:
      return {
        ...state,
        deletingEvent: false,
        error: action.payload
      };
    case EDIT_EVENT_START:
      return {
        ...state,
        editingEvent: true
      };
    case EDIT_EVENT_SUCCESS:
      return {
        ...state,
        editingEvent: false,
        error: "",
        errorStatusCode: null,
        myEvents: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
