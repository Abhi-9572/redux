import { createStore } from "redux";
import { shirtReducer } from "./shirtReducer";

export const shirtStore=createStore(shirtReducer)