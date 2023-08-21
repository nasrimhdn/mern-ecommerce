//compared
import { loginFailure, loginStart, loginSuccess } from "./user1Redux";
import { publicRequest } from "../requestMethods";

export const login = async (dispatch, user1) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user1);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};