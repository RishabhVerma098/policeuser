export const slider = () => {
  return {
    type: "SLIDE"
  };
};

export const summaryData = data => {
  return {
    type: "SUMMARYDATA",
    payload: data
  };
};

export const userPostFetch = user => {
  return dispatch => {
    return fetch("http://localhost:8000/register/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(user)
    })
      .then(resp => {
        const ans = resp.headers.get("jwt");
        localStorage.setItem("token", ans);

        const json = resp.json();
        return json;
      })
      .then(data => {
        if (data.message) {
          console.log(data.message);
        } else {
          dispatch(loginUser(data));
        }
      });
  };
};

export const userLoginFetch = user => {
  return dispatch => {
    return fetch("http://localhost:8000/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(user)
    })
      .then(resp => resp.json())
      .then(data => {
        if (data.message) {
          console.log(data.message);
        } else {
          // localStorage.setItem("token", data.jwt)
          dispatch(loginUser(data.user));
        }
      });
  };
};

const loginUser = userObj => {
  console.log(userObj);
  return {
    type: "LOGIN_USER",
    payload: userObj
  };
};
