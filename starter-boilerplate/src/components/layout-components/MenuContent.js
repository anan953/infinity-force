import React from "react";
import { Link } from "react-router-dom";
import { Menu, Grid } from "antd";
import IntlMessage from "../util-components/IntlMessage";
import Icon from "../util-components/Icon";
import navigationConfig from "configs/NavigationConfig";
import { connect } from "react-redux";
import { SIDE_NAV_LIGHT, NAV_TYPE_SIDE } from "constants/ThemeConstant";
import utils from "utils";
import { onMobileNavToggle } from "redux/actions/Theme";
import styled from "styled-components";
import CustomIcon from "components/util-components/CustomIcon";

const EthIcon = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8.91211 16.6191L16.7377 27.7368V21.254L8.91211 16.6191Z"
      fill="#929292"
    />
    <path
      d="M16.7378 21.2539V27.7367L24.4869 16.7363L16.7378 21.2539Z"
      fill="#929292"
    />
    <path
      d="M8.91211 15.08L16.7377 19.7878V11.5479L8.91211 15.08Z"
      fill="#929292"
    />
    <path
      d="M16.7377 2.04004L8.91211 15.0797L16.7377 11.5475V2.04004Z"
      fill="#929292"
    />
    <path
      d="M24.4869 15.0797L16.7378 2.04004V11.5475L24.4869 15.0797Z"
      fill="#929292"
    />
    <path
      d="M16.7378 11.5479V19.7878L24.4869 15.08L16.7378 11.5479Z"
      fill="#929292"
    />
  </svg>
);

const InfinityIcon = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5.91211 15.5588C5.92538 15.0331 5.9298 14.507 5.95438 13.9818C5.98256 13.3779 6.0208 12.7745 6.06908 12.1716C6.10693 11.7022 6.16018 11.2338 6.21835 10.7663C6.28033 10.2201 6.37942 9.67862 6.51492 9.14575C6.57719 8.87915 6.67068 8.62079 6.79346 8.376C6.95731 8.07222 7.11444 7.9962 7.45492 8.06192C7.81425 8.14321 8.1605 8.27394 8.48373 8.45039C9.23132 8.83987 9.95234 9.27813 10.6421 9.76229C11.6454 10.4452 12.6205 11.1667 13.577 11.9129C14.0992 12.3202 14.6102 12.7417 15.1372 13.1428C15.2034 13.1871 15.2525 13.2529 15.276 13.3289C15.2996 13.405 15.2963 13.4869 15.2666 13.5608C15.1961 13.8022 15.0505 14.0149 14.8508 14.1682C14.5586 14.4222 14.2078 14.5998 13.8298 14.685C13.7825 14.7004 13.7318 14.7018 13.6837 14.6889C13.6357 14.6761 13.5924 14.6496 13.5591 14.6126C13.4023 14.4318 13.2491 14.2478 13.0946 14.0649C12.9272 13.8669 12.762 13.6668 12.5918 13.4711C12.576 13.447 12.5548 13.4268 12.5299 13.4121C12.5051 13.3975 12.4772 13.3887 12.4484 13.3866C12.4196 13.3844 12.3907 13.3889 12.3639 13.3997C12.3371 13.4104 12.3131 13.4272 12.2939 13.4487C11.1805 14.3253 10.1031 15.2437 9.0754 16.2195C9.05915 16.2413 9.03664 16.2576 9.01087 16.2664C8.98509 16.2752 8.95725 16.2759 8.93104 16.2685C8.9054 16.2595 8.88314 16.2429 8.86726 16.2209C8.85138 16.1989 8.84264 16.1725 8.84224 16.1454C8.77655 15.7235 8.7433 15.2971 8.74278 14.8701C8.74447 14.8271 8.7623 14.7862 8.79275 14.7557C9.33165 14.2684 9.87072 13.7812 10.4149 13.3005C10.6851 13.0615 10.9657 12.8342 11.2413 12.6013C11.2677 12.5834 11.2891 12.5591 11.3033 12.5306C11.3175 12.5021 11.3241 12.4705 11.3224 12.4387C11.3208 12.4069 11.311 12.3761 11.2939 12.3493C11.2768 12.3224 11.253 12.3004 11.2249 12.2854C10.5673 11.8451 9.84459 11.5103 9.0831 11.2931C9.02167 11.276 8.95638 11.2789 8.89671 11.3014C8.83704 11.3238 8.7861 11.3647 8.7513 11.418C8.63019 11.5777 8.54117 11.7593 8.48914 11.9527C8.37424 12.3145 8.29612 12.687 8.25598 13.0645C8.20142 13.5595 8.14833 14.0559 8.12621 14.5531C8.10213 15.0926 8.10278 15.6345 8.11425 16.1748C8.12375 16.6137 8.15456 17.0528 8.19618 17.49C8.23506 18.0837 8.34846 18.6702 8.53371 19.2357C8.5756 19.3514 8.62741 19.4634 8.68855 19.5703C8.7343 19.678 8.8189 19.7647 8.92561 19.8131C9.03232 19.8616 9.15337 19.8683 9.2648 19.8319C9.63523 19.7538 9.991 19.6179 10.319 19.4292C10.8791 19.1243 11.4188 18.7835 11.9347 18.409C12.862 17.755 13.7572 17.058 14.6333 16.3375C16.2653 14.9952 17.8871 13.6398 19.52 12.2991C20.5015 11.4925 21.49 10.6953 22.4857 9.90748C23.0453 9.45945 23.6367 9.05248 24.2553 8.68975C24.5415 8.50877 24.8516 8.36839 25.1766 8.27267C25.3052 8.23874 25.4381 8.22349 25.5711 8.22738C25.6665 8.23842 25.7575 8.27286 25.8363 8.32761C25.915 8.38236 25.9789 8.45572 26.0222 8.54113C26.2038 8.83846 26.3357 9.16334 26.4125 9.50299C26.5336 9.97312 26.6239 10.4506 26.6829 10.9324C26.8194 11.9728 26.8934 13.0203 26.9044 14.0695C26.9149 14.9524 26.917 15.8375 26.8959 16.7211C26.8795 17.4241 26.8315 18.1271 26.7795 18.8281C26.7237 19.6426 26.6215 20.4532 26.4733 21.2562C26.4002 21.7241 26.2705 22.1814 26.0869 22.6181C26.049 22.6955 26.0055 22.7701 25.9568 22.8413C25.9084 22.9153 25.8387 22.973 25.7568 23.0067C25.6749 23.0405 25.5847 23.0488 25.4981 23.0306C25.1699 22.9825 24.8523 22.8796 24.5585 22.726C23.7369 22.3234 22.9505 21.8531 22.2073 21.3199C21.4851 20.8181 20.7682 20.3074 20.0664 19.7775C19.268 19.1745 18.4925 18.5411 17.6982 17.9326C17.6331 17.8887 17.585 17.8241 17.5617 17.7493C17.5384 17.6745 17.5414 17.594 17.57 17.5211C17.6359 17.2889 17.7729 17.0831 17.9618 16.9325C18.2616 16.6636 18.6263 16.4769 19.0201 16.3908C19.0653 16.3767 19.1136 16.376 19.1592 16.3886C19.2048 16.4013 19.2457 16.4268 19.2772 16.4621C19.4451 16.6562 19.6149 16.8491 19.7738 17.0507C20.7584 18.3646 22.1458 19.322 23.7252 19.7777C23.7911 19.8008 23.8628 19.8018 23.9292 19.7804C23.9957 19.7591 24.0533 19.7165 24.0932 19.6593C24.2221 19.4868 24.3153 19.2904 24.3673 19.0816C24.4769 18.7053 24.5537 18.3202 24.5967 17.9306C24.6424 17.5287 24.685 17.1257 24.7032 16.722C24.7281 16.1722 24.7407 15.6212 24.7352 15.0707C24.7311 14.6518 24.7003 14.2325 24.6636 13.8147C24.6308 13.4467 24.5816 13.079 24.5263 12.7141C24.4801 12.3741 24.3908 12.0414 24.2607 11.7239C24.2143 11.6204 24.1595 11.5209 24.0968 11.4264C24.0492 11.3487 23.977 11.2889 23.8916 11.2566C23.8063 11.2243 23.7126 11.2212 23.6253 11.2478C23.3555 11.3111 23.0966 11.4137 22.8568 11.5523C22.2118 11.9134 21.594 12.3208 21.0082 12.7713C19.9229 13.5742 18.8813 14.4323 17.8391 15.2892C17.0833 15.9105 16.3266 16.5308 15.5689 17.1503C14.7892 17.7894 14.0112 18.4308 13.229 19.0671C12.1384 19.9542 11.0498 20.8436 9.8994 21.6552C9.39206 22.0293 8.85189 22.3569 8.28547 22.6339C8.05712 22.7466 7.81327 22.8249 7.56191 22.8661C7.41771 22.896 7.26773 22.88 7.13319 22.8201C6.99866 22.7603 6.8864 22.6598 6.8123 22.5327C6.63489 22.2359 6.50477 21.9133 6.4266 21.5766C6.28236 21.0307 6.18257 20.474 6.12822 19.912C6.06596 19.2888 6.0037 18.6646 5.97191 18.039C5.93701 17.354 5.9362 16.6673 5.92178 15.9812C5.91883 15.8406 5.92178 15.7 5.92178 15.5596L5.91211 15.5588Z"
      fill="#929292"
    />
  </svg>
);

const SLPIcon = () => (
  <svg
    width="21"
    height="23"
    viewBox="0 0 21 23"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20.7523 12.3187C19.884 8.24185 17.4498 5.17296 13.4726 3.20867C13.214 3.08098 13.1143 2.94873 13.142 2.68542C13.1941 2.18871 13.2255 1.69001 13.2577 1.19166C13.2784 0.871897 13.1425 0.632017 12.8077 0.511809C10.9794 -0.144415 9.18446 -0.17378 7.46013 0.79245C7.32767 0.8666 7.22574 1.1052 7.23664 1.25952C7.27752 1.65067 7.34442 2.03909 7.43695 2.42257C7.60584 3.23868 7.59975 3.22563 6.8694 3.70637C3.86229 5.68553 2.02789 8.38521 1.18845 11.6977C0.416667 14.7432 1.27348 17.3735 3.60857 19.5678C5.51525 21.3596 7.96277 21.9591 10.5962 22.0389C12.5035 22.0674 14.2648 21.5366 15.964 20.8147C19.521 19.3035 21.5094 15.8736 20.7523 12.3187ZM18.22 11.8648L16.6156 14.4263L12.6044 12.4237L9.11955 15.8235L5.25877 12.8661L2.60132 15.1016L2.30056 12.4004L2.72671 13.9373L5.25877 12.0278L8.8187 14.5893L12.504 11.6552L16.415 13.4246L18.1448 11.0397L19.5237 13.0055L18.22 11.8648ZM16.7948 18.3039C16.1729 18.7637 15.4645 18.8979 15.2124 18.6038C14.9604 18.3097 15.26 17.6984 15.8819 17.2386C16.5037 16.7789 17.2122 16.6446 17.4643 16.9387C17.7165 17.2329 17.4167 17.8442 16.7948 18.3039ZM7.7489 6.33163C8.43428 6.73166 8.30437 8.06946 7.45855 9.31962C6.61273 10.5698 5.3714 11.2589 4.68602 10.8589C4.00065 10.4589 4.13056 9.12097 4.97628 7.87082C5.822 6.62066 7.06343 5.93152 7.7489 6.33163Z"
      fill="#929292"
    />
  </svg>
);

const WrapperIcon = styled.div`
  margin-right: 10px;
  transform: translate(0, 8px);
`;

const WrapperItem = styled.div`
  display: flex;
  align-items: center;
`;

const UnderSidebar = styled.div``;

const CoinInfo = styled.div`
  margin: 20px 0;
  padding: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CoinPrice = styled.span`
  margin-left: 10px;
  font-family: Neue;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 27px;
  letter-spacing: 0.002em;
  text-align: left;
  color: #929292;
`;

const CoinPercent = styled.span`
  margin-left: 10px;
  font-family: Neue;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 27px;
  letter-spacing: 0.002em;
  text-align: left;
  color: #ec3131;
`;

const { SubMenu } = Menu;
const { useBreakpoint } = Grid;

const setLocale = (isLocaleOn, localeKey) =>
  isLocaleOn ? <IntlMessage id={localeKey} /> : localeKey.toString();

const setDefaultOpen = (key) => {
  let keyList = [];
  let keyString = "";
  if (key) {
    const arr = key.split("-");
    for (let index = 0; index < arr.length; index++) {
      const elm = arr[index];
      index === 0 ? (keyString = elm) : (keyString = `${keyString}-${elm}`);
      keyList.push(keyString);
    }
  }
  return keyList;
};

const SideNavContent = (props) => {
  const {
    sideNavTheme,
    routeInfo,
    hideGroupTitle,
    localization,
    onMobileNavToggle,
  } = props;
  const isMobile = !utils.getBreakPoint(useBreakpoint()).includes("lg");
  const closeMobileNav = () => {
    if (isMobile) {
      onMobileNavToggle(false);
    }
  };
  return (
    <>
      <Menu
        theme={sideNavTheme === SIDE_NAV_LIGHT ? "light" : "dark"}
        mode="inline"
        style={{
          height: "45%",
          borderRight: 0,
          borderBottom: "1px solid #DDDFE5",
        }}
        defaultSelectedKeys={[routeInfo?.key]}
        defaultOpenKeys={setDefaultOpen(routeInfo?.key)}
        className={hideGroupTitle ? "hide-group-title" : ""}
      >
        {navigationConfig.map((menu) =>
          menu.submenu.length > 0 ? (
            <Menu.ItemGroup
              key={menu.key}
              title={setLocale(localization, menu.title)}
            >
              {menu.submenu.map((subMenuFirst) =>
                subMenuFirst.submenu.length > 0 ? (
                  <SubMenu
                    icon={
                      subMenuFirst.icon ? (
                        <Icon type={subMenuFirst?.icon} />
                      ) : null
                    }
                    key={subMenuFirst.key}
                    title={setLocale(localization, subMenuFirst.title)}
                  >
                    {subMenuFirst.submenu.map((subMenuSecond) => (
                      <Menu.Item key={subMenuSecond.key}>
                        {subMenuSecond.icon ? (
                          <Icon type={subMenuSecond?.icon} />
                        ) : null}
                        <span>
                          {setLocale(localization, subMenuSecond.title)}
                        </span>
                        <Link
                          onClick={() => closeMobileNav()}
                          to={subMenuSecond.path}
                        />
                      </Menu.Item>
                    ))}
                  </SubMenu>
                ) : (
                  <Menu.Item key={subMenuFirst.key}>
                    {subMenuFirst.icon ? (
                      <Icon type={subMenuFirst.icon} />
                    ) : null}
                    <span>{setLocale(localization, subMenuFirst.title)}</span>
                    <Link
                      onClick={() => closeMobileNav()}
                      to={subMenuFirst.path}
                    />
                  </Menu.Item>
                )
              )}
            </Menu.ItemGroup>
          ) : (
            <Menu.Item key={menu.key}>
              <WrapperItem>
                {menu.icon ? (
                  <WrapperIcon>
                    <Icon type={menu?.icon} />
                  </WrapperIcon>
                ) : null}
                <span>{setLocale(localization, menu?.title)}</span>
                {menu.path ? (
                  <Link onClick={() => closeMobileNav()} to={menu.path} />
                ) : null}
              </WrapperItem>
            </Menu.Item>
          )
        )}
      </Menu>
      <UnderSidebar>
        <CoinInfo>
          <CustomIcon className="text-primary font-size-xl" svg={EthIcon} />
          <CoinPrice>3,557.05 USD</CoinPrice>
          <CoinPercent>-0.3%</CoinPercent>
        </CoinInfo>
        <CoinInfo>
          <CustomIcon
            className="text-primary font-size-xl"
            svg={InfinityIcon}
          />
          <CoinPrice>1,547.05 USD</CoinPrice>
          <CoinPercent>-0.3%</CoinPercent>
        </CoinInfo>
        <CoinInfo>
          <CustomIcon className="text-primary font-size-xl" svg={SLPIcon} />
          <CoinPrice>2,557.05 USD</CoinPrice>
          <CoinPercent>-0.3%</CoinPercent>
        </CoinInfo>
      </UnderSidebar>
    </>
  );
};

const TopNavContent = (props) => {
  const { topNavColor, localization } = props;
  return (
    <Menu mode="horizontal" style={{ backgroundColor: topNavColor }}>
      {navigationConfig.map((menu) =>
        menu.submenu.length > 0 ? (
          <SubMenu
            key={menu.key}
            popupClassName="top-nav-menu"
            title={
              <span>
                {menu.icon ? <Icon type={menu?.icon} /> : null}
                <span>{setLocale(localization, menu.title)}</span>
              </span>
            }
          >
            {menu.submenu.map((subMenuFirst) =>
              subMenuFirst.submenu.length > 0 ? (
                <SubMenu
                  key={subMenuFirst.key}
                  icon={
                    subMenuFirst.icon ? (
                      <Icon type={subMenuFirst?.icon} />
                    ) : null
                  }
                  title={setLocale(localization, subMenuFirst.title)}
                >
                  {subMenuFirst.submenu.map((subMenuSecond) => (
                    <Menu.Item key={subMenuSecond.key}>
                      <span>
                        {setLocale(localization, subMenuSecond.title)}
                      </span>
                      <Link to={subMenuSecond.path} />
                    </Menu.Item>
                  ))}
                </SubMenu>
              ) : (
                <Menu.Item key={subMenuFirst.key}>
                  {subMenuFirst.icon ? (
                    <Icon type={subMenuFirst?.icon} />
                  ) : null}
                  <span>{setLocale(localization, subMenuFirst.title)}</span>
                  <Link to={subMenuFirst.path} />
                </Menu.Item>
              )
            )}
          </SubMenu>
        ) : (
          <Menu.Item key={menu.key}>
            {menu.icon ? <Icon type={menu?.icon} /> : null}
            <span>{setLocale(localization, menu?.title)}</span>
            {menu.path ? <Link to={menu.path} /> : null}
          </Menu.Item>
        )
      )}
    </Menu>
  );
};

const MenuContent = (props) => {
  return props.type === NAV_TYPE_SIDE ? (
    <SideNavContent {...props} />
  ) : (
    <TopNavContent {...props} />
  );
};

const mapStateToProps = ({ theme }) => {
  const { sideNavTheme, topNavColor } = theme;
  return { sideNavTheme, topNavColor };
};

export default connect(mapStateToProps, { onMobileNavToggle })(MenuContent);
