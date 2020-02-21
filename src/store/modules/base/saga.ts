import { createAsyncAction } from "typesafe-actions";

export type FetchExampleReturn = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export const fetchExample = createAsyncAction(
  "base/FETCH_EXAMPLE_REQUEST",
  "base/FETCH_EXAMPLE_SUCCESS",
  "base/FETCH_EXAMPLE_FAILURE"
)<number, FetchExampleReturn, string>();
