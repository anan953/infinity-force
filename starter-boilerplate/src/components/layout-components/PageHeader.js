import React from "react";
import IntlMessage from "../util-components/IntlMessage";
import { Avatar } from "antd";
import styled from "styled-components";
import CustomIcon from "components/util-components/CustomIcon";

const SearchIcon = () => (
  <svg
    width="24"
    height="25"
    viewBox="0 0 24 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15.5 14.0342H14.71L14.43 13.7642C15.4439 12.5882 16.0011 11.0869 16 9.53418C16 8.2486 15.6188 6.9919 14.9046 5.92298C14.1903 4.85406 13.1752 4.02094 11.9874 3.52897C10.7997 3.037 9.49279 2.90827 8.23192 3.15908C6.97104 3.40988 5.81285 4.02895 4.90381 4.93799C3.99477 5.84703 3.3757 7.00522 3.1249 8.2661C2.87409 9.52697 3.00282 10.8339 3.49479 12.0216C3.98676 13.2093 4.81988 14.2245 5.8888 14.9387C6.95772 15.653 8.21442 16.0342 9.5 16.0342C11.11 16.0342 12.59 15.4442 13.73 14.4642L14 14.7442V15.5342L19 20.5242L20.49 19.0342L15.5 14.0342ZM9.5 14.0342C7.01 14.0342 5 12.0242 5 9.53418C5 7.04418 7.01 5.03418 9.5 5.03418C11.99 5.03418 14 7.04418 14 9.53418C14 12.0242 11.99 14.0342 9.5 14.0342Z"
      fill="#929292"
    />
  </svg>
);

const NotifyIcon = () => (
  <svg
    width="24"
    height="25"
    viewBox="0 0 24 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 22.0342C13.1 22.0342 14 21.1342 14 20.0342H10C10 20.5646 10.2107 21.0733 10.5858 21.4484C10.9609 21.8235 11.4696 22.0342 12 22.0342ZM18 16.0342V11.0342C18 7.96418 16.36 5.39418 13.5 4.71418V4.03418C13.5 3.20418 12.83 2.53418 12 2.53418C11.17 2.53418 10.5 3.20418 10.5 4.03418V4.71418C7.63 5.39418 6 7.95418 6 11.0342V16.0342L4 18.0342V19.0342H20V18.0342L18 16.0342Z"
      fill="#929292"
    />
    <circle cx="17" cy="7.03418" r="4" fill="#FF8B00" />
  </svg>
);

const HeaderWrap = styled.div`
  margin-bottom: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.span`
  font-family: Eurostile;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0.4000000059604645px;
  text-align: left;
  color: #ff8b00;
`;

const Notify = styled.span`
  display: flex;
  align-items: center;
  padding: 0 32px 0 24px;
  border-right: 1px solid #dddfe5;
  height: 42px;
`;

const AvatarWrap = styled.span`
  padding-ledft: 32px;
`;

const Name = styled.span`
  font-family: Neue;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0.4000000059604645px;
  text-align: left;
  color: #252733;
  margin: 0 16px 0 32px;
`;

const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PageHeader = ({ title, display }) => {
  return true ? (
    <HeaderWrap className="app-page-header">
      <Title>
        <IntlMessage id={title ? title : "Dashboard"} />
      </Title>
      <HeaderRight>
        <CustomIcon className="text-primary font-size-xl" svg={SearchIcon} />
        <Notify>
          <CustomIcon className="text-primary font-size-xl" svg={NotifyIcon} />
        </Notify>
        <AvatarWrap>
          <Name>Samantha</Name>
          <Avatar style={{ color: "#f56a00", backgroundColor: "#fde3cf" }}>
            U
          </Avatar>
        </AvatarWrap>
      </HeaderRight>
    </HeaderWrap>
  ) : null;
};

export default PageHeader;
