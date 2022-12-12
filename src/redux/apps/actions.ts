import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { GET_ALL_MESSAGE, GET_ALL_USERS } from "../../types/constans/constant";

export const getAllUser = createAsyncThunk("getallUser", async () => {
  try {
    const { data } = await axios.get(GET_ALL_USERS);
    return data;

  } catch (error) {
    console.log(error);
  }
});

export type MessageParam = {
  sender: any;
  receiver: any;
};

export const getMessage = createAsyncThunk<any, MessageParam>(
  "getMessage",
  async (params) => {
    try {
      const { data } = await axios.get(
        `${GET_ALL_MESSAGE}?sender=${params.sender}&receiver=${params.receiver}`
      );


      return data;
    } catch (error) {
      console.log(error);
    }
  }
);
