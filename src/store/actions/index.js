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

export const handlePanelList = num => {
  console.log(num);
  return {
    type: "PANEL_LIST",
    payload: num
  };
};

export const allFirsPassNetwork = userId => {
  return dispatch => {
    return fetch("http://localhost:8000", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({ userId })
    })
      .then(resp => {
        const json = resp.json();
        return json;
      })
      .then(data => {
        if (data.message) {
          console.log(data.message);
        } else {
          dispatch(allFirsPass(data));
        }
      });
  };
};

export const allFirsPass = data => {
  return {
    type: "ALLFIROFUSER",
    payload: data
  };
};
