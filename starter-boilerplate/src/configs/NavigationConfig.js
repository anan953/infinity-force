import { DashboardOutlined } from "@ant-design/icons";
import { APP_PREFIX_PATH } from "configs/AppConfig";
import CustomIcon from "components/util-components/CustomIcon";
import styled from "styled-components";

const dashBoardNavTree = [
  {
    key: "dashboard",
    path: `${APP_PREFIX_PATH}/dashboard`,
    title: "dashboard",
    icon: DashboardOutlined,
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
