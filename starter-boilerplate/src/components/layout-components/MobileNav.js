import React from "react";
import { Row, Col } from "antd";
import { connect } from "react-redux";
import { NAV_TYPE_SIDE } from "constants/ThemeConstant";
import { Scrollbars } from "react-custom-scrollbars";
import MenuContent from "./MenuContent";
import { onMobileNavToggle } from "redux/actions/Theme";
import Logo from "./Logo";
import Flex from "components/shared-components/Flex";
import { ArrowLeftOutlined } from "@ant-design/icons";
import styled from "styled-components";
import navigationConfig from "configs/NavigationConfig";
import CustomIcon from "components/util-components/CustomIcon";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  width: 100%;
  height: 60px;
  position: fixed;
  bottom: 0;
  background: #ffffff;
  border: 1px solid #dddfe5;
  box-sizing: border-box;
  display: flex;
`;

const IconMenu = styled.div`
  width: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MobileNav = ({ sideNavTheme, routeInfo }) => {
  return (
    <Wrapper>
      {navigationConfig.map((item) => (
        <IconMenu>
          <Link to={item.path}>
            <CustomIcon className={`text-primary font-size-xl ${routeInfo?.key === item.key && "active-icon-mobile"}`} svg={item.icon} />
          </Link>
        </IconMenu>
      ))}
    </Wrapper>
  );
};

const mapStateToProps = ({ theme }) => {
  const { navCollapsed, sideNavTheme, mobileNav } = theme;
  return { navCollapsed, sideNavTheme, mobileNav };
};

export default connect(mapStateToProps, { onMobileNavToggle })(MobileNav);
