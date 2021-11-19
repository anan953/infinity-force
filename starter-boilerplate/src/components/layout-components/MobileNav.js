import React from "react";
import { connect } from "react-redux";
import { onMobileNavToggle } from "redux/actions/Theme";
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
  z-index: 999;
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
