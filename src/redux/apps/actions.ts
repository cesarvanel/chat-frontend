import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { User } from "../../types/types";
import { GET_ALL_USERS } from "../../types/constans/constant";
import store from "../store";

export const getAllUser = createAsyncThunk(
  "getallUser",
  async () => {
    try {
      const { data } = await axios.get(GET_ALL_USERS);
      return data;
    } catch (error) {
     console.log(error)
    }
  }
);