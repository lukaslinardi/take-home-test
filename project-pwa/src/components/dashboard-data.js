import {
  SignalCellularAlt as SignalCellularAltIcon,
  Receipt as ReceiptIcon,
  Paid as PaidIcon,
  MoreVert as MoreVertIcon,
  Home as HomeIcon,
  WorkOutline as WorkOutlineIcon,
  Inventory as InventoryIcon,
  ShoppingCart as ShoppingCartIcon,
  AccountCircle as AccountCircleIcon,
  ArrowDropUp as ArrowDropUpIcon,
  ArrowDropDown as ArrowDropDownIcon,
} from "@mui/icons-material";

export const inventories = [
  {
    id: 1,
    name: "New Order",
    qty: 3,
  },
  {
    id: 2,
    name: "Prepare Order",
    qty: 5,
  },
  {
    id: 3,
    name: "Waiting Pickup",
    qty: 12,
  },
  {
    id: 4,
    name: "Sent",
    qty: 9,
  },
  {
    id: 5,
    name: "Cancel",
    qty: 7,
  },
  {
    id: 6,
    name: "Done",
    qty: 5,
  },
];

export const sidebars = [
  {
    id: 1,
    name: "Homepage",
    value: "#homepage",
    logo: <HomeIcon />,
  },
  {
    id: 2,
    name: "Sales",
    value: "#sales",
    logo: <WorkOutlineIcon />,
  },
  {
    id: 3,
    name: "Inventory",
    value: "#inventory",
    logo: <InventoryIcon />,
  },
  {
    id: 4,
    name: "Purchase",
    value: "#purchase",
    logo: <ShoppingCartIcon />,
  },
  {
    id: 5,
    name: "User Management",
    value: "#user-management",
    logo: <AccountCircleIcon />,
  },
];

export const sales = [
  {
    id: 1,
    name: "Target",
    logo: <ArrowDropUpIcon fontSize="large" sx={{ color: "#00a7ff" }} />,
    yield: <p style={{ margin: "0", color: "#00a7ff" }}>231</p>,
  },
  {
    id: 2,
    name: "Last Week",
    logo: <ArrowDropDownIcon fontSize="large" sx={{ color: "#d80101" }} />,
    yield: <p style={{ margin: "0", color: "#d80101" }}>224</p>,
  },
  {
    id: 3,
    name: "Last Month",
    logo: <ArrowDropUpIcon fontSize="large" sx={{ color: "#00a7ff" }} />,
    yield: <p style={{ margin: "0", color: "#00a7ff" }}>2132</p>,
  },
  {
    id: 4,
    name: "This Year",
    logo: <ArrowDropUpIcon fontSize="large" sx={{ color: "#00a7ff" }} />,
    yield: <p style={{ margin: "0", color: "#00a7ff" }}>8132</p>,
  },
];
