import axios from "axios";

//login action types
export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";

//login action creators

export const login = creds => dispatch => {
  dispatch({ type: LOGIN_START });
  return axios
    .post("https://cep-buildweek.herokuapp.com/api/login", creds)
    .then(res => {
      console.log(res, "from login");
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("userid", res.data.user.id);
      dispatch({ type: LOGIN_SUCCESS, payload: res.data.payload });
    });
};

// to be relaced with "https://cep-buildweek.herokuapp.com/api/myevents"*********************
//Data Fetching
export const FETCH_DATA_START = "FETCH_DATA_START";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";
export const USER_UNAUTHORIZED = "FETCH_DATA_FAILURE";

export const getData = () => dispatch => {
  dispatch({ type: FETCH_DATA_START });
  axios
    .get("https://cep-buildweek.herokuapp.com/api/events", {
      headers: { Authorization: localStorage.getItem("token") }
    })
    .then(res => {
      console.log(res.data, "hi from get data res");
      dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data });
    })
    .catch(err => {
      if (err.response.status === 403) {
        dispatch({ type: USER_UNAUTHORIZED, payload: err.response });
      } else {
        dispatch({ type: FETCH_DATA_FAILURE, payload: err.response });
      }
    });
};

//Sign UP

export const REGISTER_START = "REGISTER_START";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";

export const signup = creds => dispatch => {
  dispatch({ type: REGISTER_START });
  axios
    .post("https://cep-buildweek.herokuapp.com/api/register", creds)
    .then(res => {
      console.log(res.data, "hi");
      dispatch({ type: REGISTER_SUCCESS, payload: res.data });
    });
  // .catch(err => {
  //   console.log(err)
  //   dispatch({ type: REGISTER_FAILURE, payload: err.response });
  // });
};

//getUser to pull the users
export const FETCH_USER_START = "FETCH_USER_START";
export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
export const FETCH_USER_FAILURE = "FETCH_USER_FAILURE";

export const getUser = () => dispatch => {
  dispatch({ type: FETCH_DATA_START });
  axios
    .get("https://cep-buildweek.herokuapp.com/api/users", {
      headers: { Authorization: localStorage.getItem("token") }
    })
    .then(res => {
      console.log(res, "hi from get user res");
      dispatch({ type: FETCH_USER_SUCCESS, payload: res.data.user });
    })
    .catch(err => {
      if (err.response.status === 403) {
        dispatch({ type: USER_UNAUTHORIZED, payload: err.response });
      } else {
        dispatch({ type: FETCH_DATA_FAILURE, payload: err.response });
      }
    });
};

//add events *******************************************************************8
export const ADD_EVENT_START = "ADD_EVENT_START";
export const ADD_EVENT_SUCCESS = "ADD_EVENT_SUCCESS";
export const ADD_EVENT_FAILURE = "ADD_EVENT_FAILURE";

export const addEvent = event => dispatch => {
  dispatch({ type: ADD_EVENT_START });
  axios
    .post("https://cep-buildweek.herokuapp.com/api/events", event, {
      headers: { Authorization: localStorage.getItem("token") }
    })
    .then(res => {
      console.log(res.data, "hiiiiiii");
      dispatch({ type: ADD_EVENT_SUCCESS, payload: res.data });
    });
  // .catch(err => {
  //   console.log(err)
  //   dispatch({ type: ADD_EVENT_FAILURE, payload: err.response });
  // });
};

//Delete Events
export const DELETE_EVENT_START = "DELETE_EVENT_START";
export const DELETE_EVENT_SUCCESS = "DELETE_EVENT_SUCCESS";
export const DELETE_EVENT_FAILURE = "DELETE_EVENT_FAILURE";

export const deleteEvent = id => dispatch => {
  
  dispatch({ type: DELETE_EVENT_START });
  axios
    .delete(`https://cep-buildweek.herokuapp.com/api/events/${id}`, {
      headers: { Authorization: localStorage.getItem("token") }
    })
    .then(res => {
      console.log(id, 'TESTING')
      dispatch({ type: DELETE_EVENT_SUCCESS, payload: id });
    })
    .catch(err => {
      if (err.response.status === 403) {
        dispatch({ type: USER_UNAUTHORIZED, payload: err.response });
      } else {
        dispatch({ type: DELETE_EVENT_FAILURE, payload: err.response });
      }
    });
};


//Edit Event 

export const EDIT_EVENT_START = 'EDIT_EVENT_START';
export const EDIT_EVENT_SUCCESS = 'EDIT_EVENT_SUCCESS';
export const EDIT_EVENT_FAILURE = 'EDIT_EVENT_FAILURE';

export const editEvent = (id,event) => dispatch => {
  
  dispatch({ type: EDIT_EVENT_START });
  axios
    .put(`https://cep-buildweek.herokuapp.com/api/events/${id}`, event, {
      headers: { Authorization: localStorage.getItem("token") }
    })
    .then(res => {
      console.log(id, 'TESTING put')
      dispatch({ type: EDIT_EVENT_SUCCESS, payload: res.data });
    })
    .catch(err => {
      if (err.response.status === 403) {
        dispatch({ type: USER_UNAUTHORIZED, payload: err.response });
      } else {
        dispatch({ type: EDIT_EVENT_FAILURE, payload: err.response });
      }
    });
};

