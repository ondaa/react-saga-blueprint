import { createAction } from "typesafe-actions";

const INCREASMENT = `base/INCREASMENT`;
const DECRESMENT = `base/DECRESMENT`;

export const increasment = createAction(INCREASMENT)();
export const decresment = createAction(DECRESMENT)();
