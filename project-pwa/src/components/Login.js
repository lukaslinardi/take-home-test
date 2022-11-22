import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";

import {
  AddTask as AddTaskIcon,
  HelpOutline as HelpOutlineIcon,
} from "@mui/icons-material";

import backgroundImage from "../assets/login.jpeg";
import olinLogo from "../assets/olin.jpeg";
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
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: () => {
      navigate("/dashboard");
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
      <div
        style={{
          width: "100%",
          height: "50px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <AddTaskIcon fontSize="large" sx={{ color: "#00c557" }} />
        <div style={{ display: "flex", alignItems: "center" }}>
          <HelpOutlineIcon fontSize="large" sx={{ color: "gray" }} />
          <p style={{ marginRight: "10px", color: "gray" }}>Pusat Bantuan</p>
        </div>
      </div>
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
        <div className="login-object">
          <label for="fname" className="label">
            E-mail
          </label>
          <input
            type="text"
            id="fname"
            name="firstname"
            onChange={(e) => formik.setFieldValue("email", e.target.value)}
          />
          {formik.touched.email && formik.errors.email ? (
            <p className="error-label">{formik.errors.email}</p>
          ) : null}
          <label for="lname" className="label">
            Password
          </label>
          <input
            type="text"
            id="lname"
            name="lastname"
            onChange={(e) => formik.setFieldValue("password", e.target.value)}
          />
          {formik.touched.password && formik.errors.password ? (
            <p className="error-label">{formik.errors.password}</p>
          ) : null}
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ display: "flex" }}>
              <input type="checkbox" />
              <p style={{ fontSize: "small" }}>Ingat saya</p>
            </div>
            <div style={{ display: "flex" }}>
              <a href="default.asp" target="_blank" className="nav-link">
                Lupa Password?
              </a>
            </div>
          </div>
          <button type="submit" className="login-button">
            Masuk
          </button>
          <div className="column">
            <p style={{ fontSize: "small" }}>
              Belum Registrasi? Silahkan klik&nbsp;
            </p>
            <Link to="/facility" className="nav-link">
              Daftar
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
