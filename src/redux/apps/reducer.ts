import { createSlice } from "@reduxjs/toolkit";

import { userState } from "../../types/types";

export const userSate: userState = {
  sesUser: {},
};

const userSlice = createSlice({
  name: "user",
  initialState: userSate,
  reducers: {

  },
});

export default userSlice;
