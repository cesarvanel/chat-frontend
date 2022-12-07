import { configureStore } from "@reduxjs/toolkit";
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux'
import userSlice from "./apps/reducer";

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch 
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;


export const contactSelector = (state:RootState) => state.user.contact;
export const sesUserSelector = (state:RootState) => state.user.sesUser;
export const loadingSelector = (state:RootState) => state.user.loading;

export default store;