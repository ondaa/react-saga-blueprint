import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import { BaseState } from "../store/modules/base";
import * as baseActions from "../store/modules/base/actions";
import { fetchExample } from "../store/modules/base/saga";

const HomeContainer: React.SFC = () => {
  const { count, jsonplaceholder, error } = useSelector(
    (state: { base: BaseState }) => ({
      ...state.base
    })
  );
  const dispatch = useDispatch();

  const increaseHandler = () => {
    dispatch(baseActions.increasment());
  };

  const decreseHandler = () => {
    dispatch(baseActions.decresment());
  };

  const fetchHandler = useCallback(() => {
    dispatch(fetchExample.request(count));
  }, [dispatch, count]);

  useEffect(() => {
    fetchHandler();
  }, [fetchHandler]);

  return (
    <div>
      <h2>Home</h2>
      <div>{count}</div>
      <div>
        <button onClick={increaseHandler}>increse</button>
        <button onClick={decreseHandler}>decrese</button>
      </div>
      <div>
        {jsonplaceholder && (
          <div className="fetch-data">
            <h3>Call 'Jsonplaceholder'</h3>
            <ul>
              <li>{jsonplaceholder.completed ? "true" : "false"}</li>
              <li>{jsonplaceholder.id}</li>
              <li>{jsonplaceholder.title}</li>
              <li>{jsonplaceholder.userId}</li>
            </ul>
          </div>
        )}
      </div>
      <div className="error">
        {error && (
          <div style={{ color: "red" }}>
            <div>Can't call nagative or zero</div>
            <div>{error}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomeContainer;
