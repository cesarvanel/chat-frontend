import { createSlice} from "@reduxjs/toolkit";
import { getAllUser } from "./actions";

import { ReduxAction, userState } from "../../types/types";
import { User } from "../../types/types";

export const userSate: userState = {
  sesUser: {},
  contact: [],
  loading: false,
  error:""
};

const userSlice = createSlice({
  name: "user",
  initialState: userSate,
  reducers: {
    LOAD_ALL_USER: (state, action: ReduxAction) => {
      state.contact = action.payload;
      state.loading = true;
    },

    LOGIN: (state, action: ReduxAction) => {
      state.sesUser = action.payload;
    },
  },

  extraReducers:(builder) =>{
    builder.addCase(getAllUser.fulfilled,(state, action) =>{
      state.contact = action.payload.allUser
      state.loading = true
    } )

    builder.addCase(getAllUser.pending, (state) =>{
      state.loading = false
    })

    builder.addCase(getAllUser.rejected, (state, action) =>{
      state.error = action.meta.rejectedWithValue
    })
  }
});

export default userSlice;
