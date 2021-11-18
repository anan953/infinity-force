import React from "react";
import styled from "styled-components";

import Chart from "react-apexcharts";
import { COLOR_1 } from "constants/ChartConstant";

import { Menu, Dropdown, Button, message } from "antd";
import { DownOutlined, UserOutlined } from "@ant-design/icons";
import { Breadcrumb } from "antd";

const data = {
  series: [
    {
      name: "Net Profit",
      data: [44, 55, 57, 56, 61, 58, 63, 60, 66, 68, 45, 86],
    },
  ],
  options: {
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
        endingShape: "rounded",
      },
    },
    colors: [COLOR_1],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: (val) => `$${val} thousands`,
      },
    },
  },
};

const Wrapper = styled.div`
  margin: 0 50px;
`;

const Title = styled.h2``;

const DropdownWrapper = styled.div`
  margin-bottom: 20px;
`;

const DropdownBuilding = styled(Dropdown)`
  margin-right: 20px;
`;

const DropdownUnitSize = styled(Dropdown)``;

const BottomText = styled.p`
  color: #1a3353;
`;

const BreadcrumbAntd = styled(Breadcrumb)`
  margin-bottom: 20px;
`;

const PricePrediction = () => {
  function handleMenuClick(e) {
    message.info("Click on menu item.");
    console.log("click", e);
  }

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="1" icon={<UserOutlined />}>
        1st menu item
      </Menu.Item>
      <Menu.Item key="2" icon={<UserOutlined />}>
        2nd menu item
      </Menu.Item>
      <Menu.Item key="3" icon={<UserOutlined />}>
        3rd menu item
      </Menu.Item>
    </Menu>
  );

  return (
    <Wrapper>
      <BreadcrumbAntd>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href="">Price Prediction</a>
        </Breadcrumb.Item>
      </BreadcrumbAntd>
      <Title>Price Prediction</Title>
      <DropdownWrapper>
        <DropdownBuilding overlay={menu}>
          <Button>
            Building <DownOutlined />
          </Button>
        </DropdownBuilding>
        <DropdownUnitSize overlay={menu}>
          <Button>
            Unit Size <DownOutlined />
          </Button>
        </DropdownUnitSize>
      </DropdownWrapper>
      <Chart
        options={data.options}
        series={data.series}
        height={430}
        type="bar"
      />
      <BottomText>
        <b>Estimated Yearly Revenue per Unit:</b> 3940$
      </BottomText>
    </Wrapper>
  );
};

export default PricePrediction;
