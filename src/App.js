import React from "react";
import { connect } from "react-redux";
import "./styles.css";

async function login({ username, password }) {
  return Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === "mitesh" && password === "mitesh") {
        resolve();
      } else {
        reject();
      }
    }, 1000);
  });
}

function App({ username, password, isLoading, isLoggedIn, error, dispatch }) {
  // const [state, dispatch] = useReducer(LoginReducer, initialState);
  // const {  } = props;
  // console.log(props);

  const onSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "login" });
    try {
      await login({ username, password });
      dispatch({ type: "success" });
    } catch {
      dispatch({ type: "error" });
    }
  };

  return isLoggedIn ? (
    `Hello ${username} !!`
  ) : (
    <form className="bs-example bs-example-form my-5" onSubmit={onSubmit}>
      <div className="container-fluid">
        <div className="panel panel-default">
          <div className="panel-body">
            {error && (
              <div className="alert alert-danger" role="alert">
                <span
                  className="glyphicon glyphicon-exclamation-sign"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Error:</span>
                {error}
              </div>
            )}
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                className="form-control"
                id="username"
                placeholder="Username"
                value={username}
                onChange={(e) =>
                  dispatch({
                    type: "field",
                    name: "username",
                    value: e.currentTarget.value
                  })
                }
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) =>
                  dispatch({
                    type: "field",
                    name: "password",
                    value: e.currentTarget.value
                  })
                }
              />
            </div>

            <button
              type="submit"
              className="btn btn-default"
              disabled={isLoading ? true : false}
            >
              {isLoading ? "Loging in..." : "Log In"}
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default connect((state) => state)(App);
