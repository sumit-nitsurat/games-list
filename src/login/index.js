import React from 'react';
import { useHistory } from "react-router-dom";
import './login.css';
import { useForm } from "../hooks/useForm";
import validate from '../utils/validationRules';

const Login = () => {
  let history = useHistory();
  const onSubmit = () => {
    history.push("/games");
  }

  const {
    values,
    errors,
    handleChange,
    handleSubmit,
  } = useForm(onSubmit, validate);

  return (
    <div className="container">
      <div className="container">
        <form onSubmit={handleSubmit} noValidate>
          <label htmlFor="uname"><b>Username</b></label>
          <input type="text" placeholder="Enter Email" name="email" onChange={handleChange} value={values.email || ''} required />
          {errors.email && (
            <p className="help text-danger">{errors.email}</p>
          )}

          <label htmlFor="psw"><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="password" onChange={handleChange} value={values.password || ''} required />
          {errors.password && (
            <p className="help text-danger">{errors.password}</p>
          )}
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;