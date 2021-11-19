import { DashboardOutlined } from "@ant-design/icons";
import { APP_PREFIX_PATH } from "configs/AppConfig";
import CustomIcon from "components/util-components/CustomIcon";
import styled from "styled-components";

const dashboardIcon = () => (
  <svg
    width="25"
    height="25"
    viewBox="0 0 25 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.91211 21.04H5.91211C4.81211 21.04 3.91211 20.14 3.91211 19.04V5.04004C3.91211 3.94004 4.81211 3.04004 5.91211 3.04004H9.91211C11.0121 3.04004 11.9121 3.94004 11.9121 5.04004V19.04C11.9121 20.14 11.0121 21.04 9.91211 21.04ZM15.9121 21.04H19.9121C21.0121 21.04 21.9121 20.14 21.9121 19.04V14.04C21.9121 12.94 21.0121 12.04 19.9121 12.04H15.9121C14.8121 12.04 13.9121 12.94 13.9121 14.04V19.04C13.9121 20.14 14.8121 21.04 15.9121 21.04ZM21.9121 8.04004V5.04004C21.9121 3.94004 21.0121 3.04004 19.9121 3.04004H15.9121C14.8121 3.04004 13.9121 3.94004 13.9121 5.04004V8.04004C13.9121 9.14004 14.8121 10.04 15.9121 10.04H19.9121C21.0121 10.04 21.9121 9.14004 21.9121 8.04004Z"
      fill="#FF8B00"
    />
  </svg>
);

const dashBoardNavTree = [
  {
    key: "dashboard",
    path: `${APP_PREFIX_PATH}/dashboard`,
    title: "dashboard",
    icon: dashboardIcon,
    breadcrumb: false,
    submenu: [],
  },
  {
    key: "payment",
    path: `${APP_PREFIX_PATH}/payment`,
    title: "Payments",
    icon: DashboardOutlined,
    breadcrumb: false,
    submenu: [],
  },
  {
    key: "price-prediction",
    path: `${APP_PREFIX_PATH}/price-prediction`,
    title: "price-prediction",
    icon: DashboardOutlined,
    breadcrumb: false,
    submenu: [],
  },
];

const navigationConfig = [...dashBoardNavTree];

export default navigationConfig;
