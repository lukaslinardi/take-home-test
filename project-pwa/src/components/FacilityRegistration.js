import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import { Fab } from "@mui/material";
import {
  Backup as BackupIcon,
  LocationOn as LocationOnIcon,
  Task as TaskIcon,
} from "@mui/icons-material";
import "../components/Register.css";
import backgroundImage from "../assets/register.jpeg";

const validationSchema = yup.object({
  companyName: yup.string().required("Company name is required"),
  companyTax: yup.string().required("Company tax is required"),
  addressTax: yup.string().required("Address tax is required"),
  postCode: yup.number().required(),
});

const FacilityRegistration = () => {
  const [dragActive, setDragActive] = useState(false);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      businessFields: "",
      companyName: "",
      companyTax: "",
      postCode: null,
    },
    validationSchema: validationSchema,
    onSubmit: () => {
      navigate("/");
    },
  });

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      // at least one file has been dropped so do something
      // handleFiles(e.dataTransfer.files);
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      // at least one file has been selected so do something
      // handleFiles(e.target.files);
    }
  };

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
        <Fab size="small" sx={{ backgroundColor: "grey", color: "white" }}>
          <TaskIcon />
        </Fab>
        Register
      </div>
      <div className="register-box">
        <h3>Input data perusahaan</h3>
        <form onSubmit={formik.handleSubmit}>
          <div className="grid-object">
            <select
              id="entre"
              name="bidang usaha"
              placeholder="bidang usaha"
              required
            >
              <option value="" disabled selected hidden>
                Bidang Usaha
              </option>
              <option value="farmasi">Farmasi</option>
              <option value="apotek">Apotek</option>
              <option value="software">Software</option>
              <option value="kimia">Kimia</option>
            </select>
            <input
              type="text"
              id="company"
              placeholder="Nama Perusahaan"
              name="Perusahaan"
              className="textfield"
              onChange={(e) =>
                formik.setFieldValue("companyName", e.target.value)
              }
            />
            {formik.touched.companyName && formik.errors.companyName ? (
              <p className="error-label">{formik.errors.companyName}</p>
            ) : null}
            <input
              type="text"
              id="tax"
              placeholder="NPWP Perusahaan"
              name="Tax"
              className="textfield"
              onChange={(e) =>
                formik.setFieldValue("companyTax", e.target.value)
              }
            />
            {formik.touched.companyTax && formik.errors.companyTax ? (
              <p className="error-label">{formik.errors.companyTax}</p>
            ) : null}
            <input
              type="text"
              id="tax-address"
              placeholder="Alamat Sesuai NPWP"
              name="Tax-Addresss"
              className="textfield"
              onChange={(e) =>
                formik.setFieldValue("addressTax", e.target.value)
              }
            />
            {formik.touched.addressTax && formik.errors.addressTax ? (
              <p className="error-label">{formik.errors.addressTax}</p>
            ) : null}
            <select id="provence" name="provence" required>
              <option value="" disabled selected hidden>
                Provinsi
              </option>
              <option value="jawa tengah">Jawa Barat</option>
              <option value="jawa tengah">Jawa Tengah</option>
              <option value="jawa timur">Jawa Timur</option>
              <option value="bali">Bali</option>
            </select>
            <select id="city" name="City" required>
              <option value="" disabled selected hidden>
                Kota / Kabupaten
              </option>
              <option value="jakarta">Jakarta</option>
              <option value="bogor">Bogor</option>
              <option value="bandung">Bandung</option>
              <option value="malang">Malang</option>
            </select>
            <select id="district" name="District" required>
              <option value="" disabled selected hidden>
                Kecamatan
              </option>
              <option value="bubulak">Bubulak</option>
              <option value="cilendek">Cilendek</option>
              <option value="batutulis">Batutulis</option>
              <option value="empang">Empang</option>
            </select>
            <input
              type="text"
              id="code-post"
              placeholder="Kode Pos"
              name="Code-Post"
              className="textfield"
              onChange={(e) => formik.setFieldValue("postCode", e.target.value)}
            />
            {formik.touched.postCode && formik.errors.postCode ? (
              <p className="error-label">Post code only accept number value</p>
            ) : null}
          </div>
          <h3>Upload Kelengkapan Data</h3>
          <input
            type="file"
            id="input-file-upload"
            multiple={true}
            accept=".pdf"
            onChange={handleChange}
          />
          <label id="label-file-upload" htmlFor="input-file-upload">
            <div>
              <p>Drag and drop your file here</p>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <BackupIcon fontSize="large" />
              </div>
            </div>
          </label>
          {dragActive && (
            <div
              id="drag-file-element"
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
            ></div>
          )}
          <button type="submit" className="register-button">
            Selanjutnya
          </button>
        </form>
      </div>
    </div>
  );
};

export default FacilityRegistration;
