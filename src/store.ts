import { createContext } from "react";
const initialState = { first: "Gustavo", lastName: "Dias" };

const context = createContext<typeof initialState>(initialState);
