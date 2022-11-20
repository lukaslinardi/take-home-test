import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";

import backgroundImage from "../assets/drug.jpeg";
import "./Login.css";

const validationSchema = yup.object({
  email: yup
    .string()
    .required("please input your email")
    .email()
    .min(5, "the minimum email is 5 character long"),
  password: yup
    .string()
    .required("please input your password")
    .min(5, "the minimum password is 5 character long"),
});

const Login = () => {
  const [] = useState();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: () => {
      console.log("submitted!");
    },
  });

  return (
    <div
      style={{
        position: "absolute",
        backgroundImage: `url(${backgroundImage})`,
        minHeight: "100%",
        minWidth: "100%",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="login-welcome-text">
        <h1>Selamat Datang di Solusi Perangkat Lunak Farmasi</h1>
        <h3>Sistem Manajemen Apotek Online</h3>
      </div>
      <div className="login-text">
        <p className="p">
          Silahkan masuk ke dalam akun anda dan kelola apotek Anda.
        </p>
      </div>
      <form className="login-form" onSubmit={formik.handleSubmit}>
        <div class="login-object">
          <label for="fname" className="label">
            E-mail
          </label>
          <input
            type="text"
            id="fname"
            name="firstname"
            placeholder="Your name.."
            onChange={(e) => formik.setFieldValue("email", e.target.value)}
          />
          <label for="lname" className="label">
            Password
          </label>
          <input
            type="text"
            id="lname"
            name="lastname"
            placeholder="Your last name.."
            onChange={(e) => formik.setFieldValue("email", e.target.value)}
          />
          <button type="submit" className="login-button">
            masuk
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
