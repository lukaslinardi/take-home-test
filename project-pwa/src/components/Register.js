import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import { Fab } from "@mui/material";
import {
  LocationOn as LocationOnIcon,
  Task as TaskIcon,
  AddTask as AddTaskIcon,
  HelpOutline as HelpOutlineIcon,
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
    .required("Please confirm your password")
    .oneOf([yup.ref("password"), null], "Password must match"),
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
          width: "100%",
          height: "50px",
          display: "flex",
          backgroundColor: "white",
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
      <div
        style={{
          position: "absolute",
          top: "10%",
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
          top: "20%",
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
        <form onSubmit={formik.handleSubmit} autoComplete="off">
          <div className="grid-object">
            <input
              type="text"
              id="email"
              placeholder="Email"
              name="Email"
              className="textfield"
              onChange={(e) => formik.setFieldValue("email", e.target.value)}
            />
            {formik.touched.email && formik.errors.email ? (
              <p className="error-label">{formik.errors.email}</p>
            ) : null}

            <input
              type="password"
              id="password"
              placeholder="Kata Sandi"
              name="Password"
              className="textfield"
              onChange={(e) => formik.setFieldValue("password", e.target.value)}
            />
            {formik.touched.password && formik.errors.password ? (
              <p className="error-label">{formik.errors.password}</p>
            ) : null}

            <input
              type="password"
              id="confirm-password"
              placeholder="Konfirmasi Kata Sandi"
              name="confirmPassword"
              className="textfield"
              onChange={(e) =>
                formik.setFieldValue("confirmPassword", e.target.value)
              }
            />
            {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
              <p className="error-label">{formik.errors.confirmPassword}</p>
            ) : null}
            <div style={{ display: "flex" }}>
              <input type="checkbox" />
              <p style={{ fontSize: "small" }}>
                Dengan membuat akun, Anda menyetujui Ketentuan Pengunaan dan
                Pemberitahuan Privasi aplikasi OLIN
              </p>
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <button
              className="back-button"
              onClick={() => navigate("/facility")}
            >
              Kembali
            </button>
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
