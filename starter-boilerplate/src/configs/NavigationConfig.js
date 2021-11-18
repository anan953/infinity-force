import { DashboardOutlined } from "@ant-design/icons";
import { APP_PREFIX_PATH } from "configs/AppConfig";

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
