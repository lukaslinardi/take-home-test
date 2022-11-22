import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import { Fab } from "@mui/material";
import {
  Backup as BackupIcon,
  LocationOn as LocationOnIcon,
  Task as TaskIcon,
  AddTask as AddTaskIcon,
  HelpOutline as HelpOutlineIcon,
} from "@mui/icons-material";

import "../components/FacilityRegistration.css";
import backgroundImage from "../assets/register.jpeg";

const validationSchema = yup.object({
  businessFields: yup.string().required("Business field is required"),
  companyName: yup.string().required("Company name is required"),
  companyTax: yup.string().required("Company tax is required"),
  addressTax: yup.string().required("Address tax is required"),
  provence: yup.string().required("Provence is required"),
  city: yup.string().required("City is required"),
  district: yup.string().required("District is required"),
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
      addressTax: "",
      provence: "",
      city: "",
      district: "",
      postCode: null,
    },
    validationSchema: validationSchema,
    onSubmit: () => {
      navigate("/register");
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
          <HelpOutlineIcon fontSize="large" sx={{ color: 'gray' }}/>
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
      <div className="facility-vertical-line"></div>
      <div
        style={{
          position: "absolute",
          top: "20%",
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
      <div className="facility-register-box">
        <h3>Input data perusahaan</h3>
        <form onSubmit={formik.handleSubmit}>
          <div className="facility-grid-object">
            <select
              id="entre"
              name="bidang usaha"
              placeholder="bidang usaha"
              onChange={(e) => {
                if (e.target.value === "") {
                  formik.setFieldValue("businessFields", "");
                } else {
                  formik.setFieldValue("businessFields", e.target.value);
                }
              }}
              value={formik.values.businessFields}
            >
              <option value="" disabled selected hidden>
                Bidang Usaha
              </option>
              <option value="farmasi">Farmasi</option>
              <option value="apotek">Apotek</option>
              <option value="software">Software</option>
              <option value="kimia">Kimia</option>
            </select>
            {formik.touched.businessFields && formik.errors.businessFields ? (
              <p className="error-label">{formik.errors.businessFields}</p>
            ) : null}
            <input
              type="text"
              id="company"
              placeholder="Nama Perusahaan"
              name="Perusahaan"
              className="facility-textfield"
              onChange={(e) =>
                formik.setFieldValue("companyName", e.target.value)
              }
              value={formik.values.companyName}
            />
            {formik.touched.companyName && formik.errors.companyName ? (
              <p className="error-label">{formik.errors.companyName}</p>
            ) : null}
            <input
              type="text"
              id="tax"
              placeholder="NPWP Perusahaan"
              name="Tax"
              className="facility-textfield"
              onChange={(e) =>
                formik.setFieldValue("companyTax", e.target.value)
              }
              value={formik.values.companyTax}
            />
            {formik.touched.companyTax && formik.errors.companyTax ? (
              <p className="error-label">{formik.errors.companyTax}</p>
            ) : null}
            <input
              type="text"
              id="tax-address"
              placeholder="Alamat Sesuai NPWP"
              name="Tax-Addresss"
              className="facility-textfield"
              onChange={(e) =>
                formik.setFieldValue("addressTax", e.target.value)
              }
              value={formik.values.addressTax}
            />
            {formik.touched.addressTax && formik.errors.addressTax ? (
              <p className="error-label">{formik.errors.addressTax}</p>
            ) : null}
            <select
              id="provence"
              name="provence"
              onChange={(e) => {
                if (e.target.value === "") {
                  formik.setFieldValue("provence", "");
                } else {
                  formik.setFieldValue("provence", e.target.value);
                }
              }}
              value={formik.values.provence}
            >
              <option value="" disabled selected hidden>
                Provinsi
              </option>
              <option value="jawa tengah">Jawa Barat</option>
              <option value="jawa tengah">Jawa Tengah</option>
              <option value="jawa timur">Jawa Timur</option>
              <option value="bali">Bali</option>
            </select>
            {formik.touched.provence && formik.errors.provence ? (
              <p className="error-label">{formik.errors.provence}</p>
            ) : null}
            <select
              id="city"
              name="City"
              onChange={(e) => {
                if (e.target.value === "") {
                  formik.setFieldValue("city", "");
                } else {
                  formik.setFieldValue("city", e.target.value);
                }
              }}
              value={formik.values.city}
            >
              <option value="" disabled selected hidden>
                Kota / Kabupaten
              </option>
              <option value="jakarta">Jakarta</option>
              <option value="bogor">Bogor</option>
              <option value="bandung">Bandung</option>
              <option value="malang">Malang</option>
            </select>
            {formik.touched.city && formik.errors.city ? (
              <p className="error-label">{formik.errors.city}</p>
            ) : null}
            <select
              id="district"
              name="District"
              onChange={(e) => {
                if (e.target.value === "") {
                  formik.setFieldValue("district", "");
                } else {
                  formik.setFieldValue("district", e.target.value);
                }
              }}
              value={formik.values.district}
            >
              <option value="" disabled selected hidden>
                Kecamatan
              </option>
              <option value="bubulak">Bubulak</option>
              <option value="cilendek">Cilendek</option>
              <option value="batutulis">Batutulis</option>
              <option value="empang">Empang</option>
            </select>
            {formik.touched.district && formik.errors.district ? (
              <p className="error-label">{formik.errors.district}</p>
            ) : null}
            <input
              type="text"
              id="code-post"
              placeholder="Kode Pos"
              name="Code-Post"
              className="facility-textfield"
              onChange={(e) => formik.setFieldValue("postCode", e.target.value)}
              value={formik.values.postCode}
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
          <button type="submit" className="facility-register-button">
            Selanjutnya
          </button>
        </form>
      </div>
    </div>
  );
};

export default FacilityRegistration;
