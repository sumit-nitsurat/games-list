import React, { useReducer } from "react";


export const Store = React.createContext(); //eslint-disable-line
const initialState = {
  isLoggedIn: false,
  loading: false,
  error: ""
};

const loginReducer = (state, action) => {
    switch(action.type) {
        case 'LOGIN_SUCCESS':
            return {...state, ...{ isLoggedIn: true, loading: false, error: ""}}
        case 'LOGIN_PENDING':
            return {...state, loading: true}
        case 'LOGIN_ERROR':
            return {...state, ...{error: action.error, loading: false}}
        default:
            return state;
    }
}

export function StoreProvider(props) {
  const [state, dispatch] = useReducer(loginReducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}