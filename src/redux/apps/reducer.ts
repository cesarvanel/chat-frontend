import { createSlice } from "@reduxjs/toolkit";
import { getAllUser } from "./actions";

import { ReduxAction, userState } from "../../types/types";
import { getMessage } from "./actions";

export const userSate: userState = {
  sesUser: { data: {}, loading: false },
  contact: [],
  message: [],
  loading: false,
  loadMsg: false,
  error: "",
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

    LoadSesUser: (state, action: ReduxAction) => {
      state.sesUser.data = action.payload;
      state.sesUser.loading = true;
    },

    AddNewMessage:(state, action) =>{
      state.message = action.payload
    },

  },

  extraReducers: (builder) => {
    builder.addCase(getAllUser.fulfilled, (state, action) => {
      state.contact = action.payload.allUser;
      state.loading = true;
    });

    builder.addCase(getAllUser.pending, (state) => {
      state.loading = false;
    });

    builder.addCase(getAllUser.rejected, (state, action) => {
      state.error = action.meta.rejectedWithValue;
    });

    builder.addCase(getMessage.fulfilled, (state, action) => {
      state.message = action.payload.data;
      state.loadMsg = true;
    });

    builder.addCase(getMessage.rejected, (state) => {
      state.loadMsg = false;
    });
  },
});

export default userSlice;
