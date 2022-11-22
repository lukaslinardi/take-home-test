import React, { useState } from "react";
import {
  SignalCellularAlt as SignalCellularAltIcon,
  Receipt as ReceiptIcon,
  Paid as PaidIcon,
  MoreVert as MoreVertIcon,
  ArrowDropUp as ArrowDropUpIcon,
  AddTask as AddTaskIcon,
  HelpOutline as HelpOutlineIcon,
  Mail as MailIcon,
} from "@mui/icons-material";

import Chart from "./ChartBar";
import PieChart from "./PieChart";

import "../components/Dashboard.css";

import { sidebars, inventories, sales } from "../components/dashboard-data";

const Dashboard = () => {
  const [selectedNav, setSelectedNav] = useState("");
  return (
    <div>
      <div
        style={{
          width: "100%",
          height: "50px",
          display: "flex",
          backgroundColor: "white",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <HelpOutlineIcon fontSize="large" sx={{ color: "gray" }} />

          <MailIcon fontSize="large" sx={{ color: "gray" }} />
          <p style={{ marginRight: "10px", color: "gray", fontWeight: "bold"}}>username</p>
        </div>
      </div>
      <div class="sidenav">
        <AddTaskIcon
          fontSize="large"
          sx={{ marginLeft: "20px", marginBottom: "50px", color: "#00c557" }}
        />
        {sidebars.map((sidebar) => (
          <div
            key={sidebar.id}
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "10px",
              marginLeft: "10px",
              backgroundColor: selectedNav === sidebar.value ? "#bcbbc3" : null,
              color: selectedNav === sidebar.value ? "#00a7ff" : "gray",
              borderRadius: "10px",
            }}
          >
            {sidebar.logo}
            <a
              style={{ fontWeight: "bold" }}
              onClick={() => setSelectedNav(sidebar.value)}
            >
              {sidebar.name}
            </a>
          </div>
        ))}
      </div>
      <div className="order-statistic">
        <h2>Order Statistic</h2>
      </div>
      <div className="grid-position">
        <div className="grid-container">
          <div className="grid-item">
            <p className="inventory-p">Total Selling</p>

            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h1 className="inventory-h">890</h1>
              <div style={{ marginRight: "20px", alignText: "center" }}>
                <ArrowDropUpIcon
                  fontSize="medium"
                  sx={{ color: "#00a7ff", margin: "0" }}
                />
                <p
                  style={{
                    margin: "0",
                    textAlign: "center",
                    fontSize: "bold",
                    color: "#00a7ff",
                  }}
                >
                  20,5%
                </p>
              </div>
            </div>
          </div>
          <div className="grid-item">
            <p className="inventory-p">Expired inventory</p>
            <h1 className="inventory-h">5</h1>
          </div>
          <div className="grid-item">
            <p className="inventory-p">Out of stock inventory</p>
            <h1 className="inventory-h">12</h1>
          </div>
        </div>
      </div>
      <div className="transaction-position">
        <div className="transaction-item">
          <SignalCellularAltIcon
            fontSize="large"
            sx={{ marginLeft: 3, color: "#00a7ff" }}
          />
          <div style={{ margin: 0, marginRight: 20 }}>
            <h3 style={{ textAlign: "end" }}>Total Transaksi</h3>
            <h2 style={{ textAlign: "end" }}>Rp. 8.000.000</h2>
          </div>
        </div>
        <div className="transaction-item">
          <ReceiptIcon
            fontSize="large"
            sx={{ marginLeft: 3, color: "#00a7ff" }}
          />
          <div style={{ margin: 0, marginRight: 20 }}>
            <h3 style={{ textAlign: "end" }}>Sales</h3>
            <h2 style={{ textAlign: "end" }}>289</h2>
          </div>
        </div>
        <div className="transaction-item">
          <PaidIcon fontSize="large" sx={{ marginLeft: 3, color: "#00a7ff" }} />
          <div style={{ margin: 0, marginRight: 20 }}>
            <h3 style={{ textAlign: "end" }}>Purchase</h3>
            <h2 style={{ textAlign: "end" }}>289</h2>
          </div>
        </div>
      </div>
      <div className="chartbar-box">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h2>Sales & Purchase</h2>
          <MoreVertIcon />
        </div>
        <Chart />
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            textAlign: "center",
            margin: "0",
          }}
        >
          {sales.map((sale) => (
            <div key={sale.id}>
              <p style={{ margin: "0", fontWeight: "bold" }}>{sale.name}</p>
              <div style={{ display: "flex", alignItems: "center" }}>
                {sale.logo}
                {sale.yield}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="inventory-box">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h2>Inventory</h2>
          <MoreVertIcon />
        </div>

        {inventories.map((inventory) => (
          <div
            key={inventory.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <p style={{ margin: "10px" }}>{inventory.name}</p>
            <div>
              <p className="inventory-qty">{inventory.qty}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="piechart-box">
        <PieChart />
      </div>
    </div>
  );
};

export default Dashboard;
