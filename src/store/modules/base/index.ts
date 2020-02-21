import { createReducer, ActionType } from "typesafe-actions";

import * as actions from "./actions";
import * as sagaActions from "./saga";

export type BaseAction = ActionType<typeof actions & typeof sagaActions>;

export type BaseState = {
  count: number;
  jsonplaceholder: sagaActions.FetchExampleReturn | null;
  error: string | null;
};

const initialState: BaseState = {
  count: 0,
  jsonplaceholder: null,
  error: null
};

export default createReducer<BaseState, BaseAction>(initialState, {
  "base/INCREASMENT": state => {
    return {
      ...state,
      count: ++state.count
    };
  },
  "base/DECRESMENT": state => {
    return {
      ...state,
      count: --state.count
    };
  },

  "base/FETCH_EXAMPLE_FAILURE": (state, action) => {
    return {
      ...state,
      error: action.payload
    };
  },

  "base/FETCH_EXAMPLE_REQUEST": state => {
    return {
      ...state,
      error: null,
      jsonplaceholder: null
    };
  },

  "base/FETCH_EXAMPLE_SUCCESS": (state, action) => {
    return {
      ...state,
      jsonplaceholder: { ...action.payload }
    };
  }
});
