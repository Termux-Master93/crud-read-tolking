import type { AppDispatch, RootState } from "../store";
import { useDispatch,useSelector } from "react-redux";
import { TypedUseSelectorHook } from "react-redux";

export const useAppselector: TypedUseSelectorHook<RootState> =useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;
