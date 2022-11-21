import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import { Fab } from "@mui/material";
import {
  LocationOn as LocationOnIcon,
  Task as TaskIcon,
} from "@mui/icons-material";

import "../components/Register.css";
import backgroundImage from "../assets/register.jpeg";

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
  confirmPassword: yup
    .string()
    .required("Please confirm your new password")
    .oneOf([yup.ref("newPassword"), null], "Password must match"),
});

const Register = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: validationSchema,
    onSubmit: () => {
      navigate("/");
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
          position: "absolute",
          top: "5%",
          left: "5%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Fab size="small" sx={{ backgroundColor: "#3685ff", color: "white" }}>
          <LocationOnIcon />
        </Fab>
        <p>Pendaftaran Sarana</p>
      </div>
      <div className="vertical-line"></div>
      <div
        style={{
          position: "absolute",
          top: "15%",
          left: "5%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Fab size="small" sx={{ backgroundColor: "#3685ff", color: "white" }}>
          <TaskIcon />
        </Fab>
        Register
      </div>
      <div className="register-box">
        <h3>Register Akun OLIN</h3>
        <form>
          <div className="grid-object">
            <input
              type="text"
              id="email"
              placeholder="Email"
              name="Email"
              className="textfield"
            />
            <input
              type="text"
              id="password"
              placeholder="Kata Sandi"
              name="Passwordj"
              className="textfield"
            />
            <input
              type="text"
              id="confirm-password"
              placeholder="Konfirmasi Kata Sandi"
              name="confirmPassword"
              className="textfield"
            />
          </div>
          <div style={{ display: "flex" }}>
            <button className="back-button">Kembali</button>
            <button type="submit" className="register-button">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
