import axios from "axios";

//login action types
export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";

//login action creators

export const login = creds => dispatch => {
  dispatch({ type: LOGIN_START });
  return axios.post("https://cep-buildweek.herokuapp.com/api/login", creds ).then(res => {
    console.log(res,'from login')
    localStorage.setItem("token", res.data.token);
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
    .get("https://cep-buildweek.herokuapp.com/api/users", {
      headers: { Authorization: localStorage.getItem("token") }
    })
    .then(res => {
      console.log(res,'hi from get data res')
      dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data.user});
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
// export const REGISTER_FAILURE = "REGISTER_FAILURE";

export const signup = creds => dispatch => {
  dispatch({ type: REGISTER_START });
  axios
    .post("https://cep-buildweek.herokuapp.com/api/register", creds)
    .then(res => {
      console.log(res.data, 'hi')
      dispatch({ type: REGISTER_SUCCESS, payload: res.data });
    })
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
      console.log(res,'hi from res')
      dispatch({ type: FETCH_USER_SUCCESS, payload: res.data.user});
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