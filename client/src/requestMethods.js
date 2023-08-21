
import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";

//const TOKEN=  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0Y2EwNTlhNTE5ZWMwMWJmMWVkMGRkYSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5MTM1MzU2NiwiZXhwIjoxNjkxNjEyNzY2fQ.tuB_v442NCWHf4MNztFbTYDkx8ToZ4d5CQRu6VJ7JlE"
const TOKEN =
  JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user1).currentUser1
    .accessToken || "";

// const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
// const currentUser = user && JSON.parse(user).currentUser;
// const TOKEN = currentUser?.accessToken;

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const user1Request = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});