import React from "react";
import styled from "styled-components";
import { Table, Tag, Space, Col, Row } from "antd";
import CustomIcon from "components/util-components/CustomIcon";
import Chart from "react-apexcharts";
import { COLOR_1, COLOR_2 } from "constants/ChartConstant";

const TotalSLPEarnedIcon = () => (
  <svg width="52" height="62" viewBox="0 0 52 62" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M51.5844 34.5796C49.3269 23.2756 42.998 14.7664 32.6572 9.31993C31.985 8.96589 31.7256 8.59919 31.7976 7.8691C31.9332 6.49187 32.0149 5.1091 32.0986 3.72732C32.1525 2.84069 31.7989 2.17557 30.9286 1.84227C26.175 0.0227396 21.5081 -0.0586835 17.0248 2.62041C16.6804 2.82601 16.4154 3.48759 16.4438 3.91547C16.5501 5.00003 16.724 6.07702 16.9646 7.14029C17.4037 9.40313 17.3879 9.36695 15.489 10.6999C7.67048 16.1876 2.90102 23.6731 0.718487 32.8577C-1.28815 41.3021 0.939568 48.5952 7.01079 54.6794C11.9682 59.6474 18.3317 61.3096 25.1785 61.5312C30.1377 61.6101 34.7169 60.1383 39.1349 58.1366C48.383 53.9465 53.553 44.4362 51.5844 34.5796ZM45.0006 33.321L40.829 40.4234L30.3999 34.8707L21.3394 44.2974L11.3013 36.0975L4.39196 42.2957L3.60998 34.806L4.71796 39.0674L11.3013 33.7729L20.5571 40.8753L30.139 32.7399L40.3075 37.6459L44.805 31.0331L48.3902 36.4839L45.0006 33.321ZM41.2949 51.1749C39.6781 52.4497 37.8362 52.822 37.1808 52.0064C36.5255 51.1908 37.3046 49.496 38.9214 48.2212C40.5382 46.9464 42.3802 46.5741 43.0358 47.3897C43.6914 48.2052 42.912 49.9003 41.2949 51.1749ZM17.7757 17.9791C19.5576 19.0882 19.2199 22.7976 17.0207 26.2639C14.8216 29.7302 11.5942 31.6411 9.81218 30.5319C8.0302 29.4228 8.36796 25.7131 10.5668 22.2468C12.7657 18.7805 15.9934 16.8696 17.7757 17.9791Z"
      fill="#FF8B00"
    />
  </svg>
);

const TotalScholarSLPIcon = () => (
  <svg width="61" height="62" viewBox="0 0 61 62" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M27.45 0.0341797V61.0342C11.9865 59.5092 0 46.4247 0 30.5342C0 14.6437 11.9865 1.55918 27.45 0.0341797ZM33.6415 0.0341797V27.4537H61C59.5665 12.9967 48.068 1.46768 33.6415 0.0341797ZM33.6415 33.6147V61.0342C48.0985 59.6007 59.5665 48.0717 61 33.6147H33.6415Z"
      fill="#FF8B00"
    />
  </svg>
);

const TotalManagerSLPIcon = () => (
  <svg width="61" height="59" viewBox="0 0 61 59" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M57.7895 48.7975V52.0081C57.7895 55.5396 54.9 58.4291 51.3684 58.4291H6.42105C4.71808 58.4291 3.08486 57.7526 1.88068 56.5484C0.676502 55.3443 0 53.711 0 52.0081V7.0607C0 5.35773 0.676502 3.72451 1.88068 2.52033C3.08486 1.31615 4.71808 0.639648 6.42105 0.639648H51.3684C54.9 0.639648 57.7895 3.52912 57.7895 7.0607V10.2712H28.8947C27.1918 10.2712 25.5585 10.9477 24.3544 12.1519C23.1502 13.3561 22.4737 14.9893 22.4737 16.6923V42.3765C22.4737 44.0795 23.1502 45.7127 24.3544 46.9169C25.5585 48.121 27.1918 48.7975 28.8947 48.7975H57.7895ZM28.8947 42.3765H61V16.6923H28.8947V42.3765ZM41.7368 34.3502C39.0721 34.3502 36.9211 32.1991 36.9211 29.5344C36.9211 26.8696 39.0721 24.7186 41.7368 24.7186C44.4016 24.7186 46.5526 26.8696 46.5526 29.5344C46.5526 32.1991 44.4016 34.3502 41.7368 34.3502Z"
      fill="#FF8B00"
    />
  </svg>
);

const SLPEarnedData = {
  series: [
    {
      name: "Scholar",
      data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
    },
    {
      name: "Manager",
      data: [22, 53, 47, 63, 71, 85, 93, 105, 169],
    },
  ],
  options: {
    chart: {
      type: "line",
      zoom: {
        enabled: false,
      },
      height: 472,
      toolbar: {
        show: true,
        tools: {
          download: false,
        },
      },
      grid: {
        show: false, // you can either change hear to disable all grids
        xaxis: {
          lines: {
            show: false, //or just here to disable only x axis grids
          },
        },
        yaxis: {
          lines: {
            show: false, //or just here to disable only y axis
          },
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 3,
    },
    colors: [COLOR_1, COLOR_2],
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
    },
    legend: {
      position: "top",
      horizontalAlign: "right",
    },
    title: {
      text: "SLP Earned (3,361 Scholars)",
      style: {
        fontFamily: "Neue Haas Unica Pro",
        fontSize: "20px",
        fontStyle: "normal",
        fontWeight: 700,
        lineHeight: "30px",
        letterSpacing: "0.4000000059604645px",
        textAlign: "left",
        color: "#252733",
      },
    },
  },
};

const LeaderboardData = [
  {
    key: "1",
    Name: "John Brown",
    AverageSLP: 32,
    TodaySLP: 132,
    YesterdaySLP: 122,
    Unclaimed: 622,
    Scholar: 32,
    Manager: 392,
    Total: 902,
  },
  {
    key: "2",
    Name: "Brooklyn Brown",
    AverageSLP: 432,
    TodaySLP: 132,
    YesterdaySLP: 122,
    Unclaimed: 622,
    Scholar: 32,
    Manager: 392,
    Total: 902,
  },
  {
    key: "3",
    Name: "Jacob Jones",
    AverageSLP: 32,
    TodaySLP: 132,
    YesterdaySLP: 122,
    Unclaimed: 622,
    Scholar: 32,
    Manager: 392,
    Total: 902,
  },
  {
    key: "4",
    Name: "John Brown",
    AverageSLP: 32,
    TodaySLP: 132,
    YesterdaySLP: 122,
    Unclaimed: 622,
    Scholar: 32,
    Manager: 392,
    Total: 902,
  },
  {
    key: "5",
    Name: "Albert Brown",
    AverageSLP: 32,
    TodaySLP: 132,
    YesterdaySLP: 122,
    Unclaimed: 622,
    Scholar: 32,
    Manager: 392,
    Total: 902,
  },
];

const LeaderboardColumns = [
  {
    title: "Name",
    dataIndex: "Name",
    key: "Name",
    render: (text) => <ColumnText>{text}</ColumnText>,
  },
  {
    title: "Average SLP",
    dataIndex: "AverageSLP",
    key: "AverageSLP",
    render: (text) => <ColumnTextGold>{text}</ColumnTextGold>,
  },
  {
    title: "Today's SLP",
    dataIndex: "TodaySLP",
    key: "TodaySLP",
    render: (text) => <ColumnText>{text}</ColumnText>,
  },
  {
    title: "Yesterday SLP",
    dataIndex: "YesterdaySLP",
    key: "YesterdaySLP",
    render: (text) => <ColumnText>{text}</ColumnText>,
  },
  {
    title: "Unclaimed",
    dataIndex: "Unclaimed",
    key: "Unclaimed",
    render: (text) => <ColumnText>{text}</ColumnText>,
  },
  {
    title: "Scholar",
    dataIndex: "Scholar",
    key: "Scholar",
    render: (text) => <ColumnText>{text}</ColumnText>,
  },
  {
    title: "Manager",
    dataIndex: "Manager",
    key: "Manager",
    render: (text) => <ColumnText>{text}</ColumnText>,
  },
  {
    title: "Total",
    dataIndex: "Total",
    key: "Total",
    render: (text) => <ColumnText>{text}</ColumnText>,
  },
];

const ColumnTextGold = styled.span`
  color: #ff8b00;
`;

const ColumnText = styled.span`
  font-family: Neue Haas Unica Pro;
  font-size: 13px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: 0.4000000059604645px;
  text-align: left;
  color: #252733;
`;

const CardContent = styled.div`
  display: flex;
  align-items: center;
  padding: 34.5px 0 34.5px 32px;
  border: 1px solid #dddfe5;
  border-radius: 12px;
`;

const CardData = styled.span`
  margin-left: 24px;
`;

const DataTitle = styled.p`
  font-family: Eurostile;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 18px;
  letter-spacing: 0.4000000059604645px;
  text-align: left;
  color: #929292;
  margin-bottom: 8px;
`;

const DataNumber = styled.p`
  font-family: Neue Haas Unica Pro;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: 54px;
  letter-spacing: 0.4000000059604645px;
  text-align: left;
  color: #252733;
  margin: 0;
`;

const LineChartWrapper = styled.div`
  border: 1px solid #dddfe5;
  border-radius: 12px;
  padding: 32px;
`;

const TableWrapper = styled.div`
  border: 1px solid #dddfe5;
  border-radius: 12px;
  padding: 32px;
`;

const TableTitle = styled.p`
  font-family: Eurostile;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: 0.4000000059604645px;
  text-align: left;
  color: #252733;
  margin-bottom: 24px;
`;

const Home = () => {
  return (
    <div>
      <div style={{ padding: "30px" }}>
        <Row gutter={40}>
          <Col span={8}>
            <CardContent>
              <CustomIcon className="text-primary font-size-xl" svg={TotalSLPEarnedIcon} />
              <CardData>
                <DataTitle>Total SLP Earned</DataTitle>
                <DataNumber>245,202</DataNumber>
              </CardData>
            </CardContent>
          </Col>
          <Col span={8}>
            <CardContent>
              <CustomIcon className="text-primary font-size-xl" svg={TotalScholarSLPIcon} />
              <CardData>
                <DataTitle>Total Scholar SLP</DataTitle>
                <DataNumber>147,121</DataNumber>
              </CardData>
            </CardContent>
          </Col>
          <Col span={8}>
            <CardContent>
              <CustomIcon className="text-primary font-size-xl" svg={TotalManagerSLPIcon} />
              <CardData>
                <DataTitle>Total Manager SLP</DataTitle>
                <DataNumber>98,081</DataNumber>
              </CardData>
            </CardContent>
          </Col>
        </Row>
      </div>
      <LineChartWrapper>
        <Chart options={SLPEarnedData.options} series={SLPEarnedData.series} height={300} />
      </LineChartWrapper>
      <Row>
        <Col span={18}>
          <TableWrapper>
            <TableTitle>Leaderboard</TableTitle>
            <Table columns={LeaderboardColumns} dataSource={LeaderboardData} />
          </TableWrapper>
        </Col>
        <Col span={6}>col-12</Col>
      </Row>
    </div>
  );
};

export default Home;
