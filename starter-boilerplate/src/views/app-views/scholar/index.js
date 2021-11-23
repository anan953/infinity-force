import React, { useState } from "react";
import styled from "styled-components";
import { Table, Avatar, Col, Row } from "antd";
import ContentBanner from "components/shared-components/ContentBanner";
import SearchSection from "./Components/SearchSection";
import { LatestScholarIcon, AverageWinRateIcon, AverageScholarMMRIcon, AverageDailySLPIcon, TotalScholarEarningsIcon, TotalScholarsIcon } from "./Components/icons";
// import LatestScholarIcon from "assets/svg/avatar.svg";

const TableData = [
  {
    key: "1",
    Name: "John Brown",
    AccountName: "JohnBrown",
    SLPToday: 132,
    YesterdaySLP: 122,
    SLPAverage: 622,
    MMR: 32,
    WinRate: 392,
    Axies: 902,
    NextClaim: "In 2 days",
  },
  {
    key: "2",
    Name: "Mark Cruise",
    AccountName: "TheOne",
    SLPToday: 132,
    YesterdaySLP: 122,
    SLPAverage: 622,
    MMR: 32,
    WinRate: 392,
    Axies: 902,
    NextClaim: "In 2 days",
  },
  {
    key: "3",
    Name: "Jack Brown",
    AccountName: "Jack453",
    SLPToday: 132,
    YesterdaySLP: 122,
    SLPAverage: 622,
    MMR: 32,
    WinRate: 392,
    Axies: 902,
    NextClaim: "In 2 days",
  },
  {
    key: "4",
    Name: "Jack London",
    AccountName: "Jack453",
    SLPToday: 132,
    YesterdaySLP: 122,
    SLPAverage: 622,
    MMR: 32,
    WinRate: 392,
    Axies: 902,
    NextClaim: "In 2 days",
  },
  {
    key: "5",
    Name: "Jack Brown",
    AccountName: "Jack453",
    SLPToday: 132,
    YesterdaySLP: 122,
    SLPAverage: 622,
    MMR: 32,
    WinRate: 392,
    Axies: 902,
    NextClaim: "In 2 days",
  },
  {
    key: "6",
    Name: "Jack Brown",
    AccountName: "Jack453",
    SLPToday: 132,
    YesterdaySLP: 122,
    SLPAverage: 622,
    MMR: 32,
    WinRate: 392,
    Axies: 902,
    NextClaim: "In 2 days",
  },
  {
    key: "7",
    Name: "Jack Brown",
    AccountName: "Jack453",
    SLPToday: 132,
    YesterdaySLP: 122,
    SLPAverage: 622,
    MMR: 32,
    WinRate: 392,
    Axies: 902,
    NextClaim: "In 2 days",
  },
  {
    key: "8",
    Name: "Jack Brown",
    AccountName: "Jack453",
    SLPToday: 132,
    YesterdaySLP: 122,
    SLPAverage: 622,
    MMR: 32,
    WinRate: 392,
    Axies: 902,
    NextClaim: "In 2 days",
  },
  {
    key: "9",
    Name: "Jack Brown",
    AccountName: "Jack453",
    SLPToday: 132,
    YesterdaySLP: 122,
    SLPAverage: 622,
    MMR: 32,
    WinRate: 392,
    Axies: 902,
    NextClaim: "In 2 days",
  },
  {
    key: "10",
    Name: "Jack Brown",
    AccountName: "Jack453",
    SLPToday: 132,
    YesterdaySLP: 122,
    SLPAverage: 622,
    MMR: 32,
    WinRate: 392,
    Axies: 902,
    NextClaim: "In 2 days",
  },
  {
    key: "11",
    Name: "Jack Brown",
    AccountName: "Jack453",
    SLPToday: 132,
    YesterdaySLP: 122,
    SLPAverage: 622,
    MMR: 32,
    WinRate: 392,
    Axies: 902,
    NextClaim: "In 2 days",
  },
];

const TableColumns = [
  {
    title: "Name",
    dataIndex: "Name",
    key: "Name",
    align: "left",
    render: (text) => <ColumnText>{text}</ColumnText>,
  },
  {
    title: "AccountName",
    dataIndex: "AccountName",
    key: "AccountName",
    align: "left",
    render: (text) => <ColumnTextGold>{text}</ColumnTextGold>,
  },
  {
    title: "SLP Today",
    dataIndex: "SLPToday",
    key: "SLPToday",
    align: "center",
    render: (text) => <ColumnText>{text}</ColumnText>,
  },
  {
    title: "Yesterday SLP",
    dataIndex: "YesterdaySLP",
    key: "YesterdaySLP",
    align: "center",
    render: (text) => <ColumnText>{text}</ColumnText>,
  },
  {
    title: "SLP Average",
    dataIndex: "SLPAverage",
    key: "SLPAverage",
    align: "center",
    render: (text) => <ColumnText>{text}</ColumnText>,
  },
  {
    title: "MMR",
    dataIndex: "MMR",
    key: "MMR",
    align: "center",
    render: (text) => <ColumnText>{text}</ColumnText>,
  },
  {
    title: "Win Rate",
    dataIndex: "WinRate",
    key: "WinRate",
    align: "center",
    render: (text) => <ColumnText>{text}</ColumnText>,
  },
  {
    title: "Axies",
    dataIndex: "Axies",
    key: "Axies",
    align: "center",
    render: (text) => <ColumnText>{text}</ColumnText>,
  },
  {
    title: "Next Claim",
    dataIndex: "NextClaim",
    key: "NextClaim",
    align: "left",
    render: (text) => <ColumnText>{text}</ColumnText>,
  },
];

const ColumnText = styled.span`
  font-family: Neue, Arial, serif;
  font-size: 13px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: 0.4000000059604645px;
  text-align: left;
  color: #252733;
  background-color: #fafafa;
`;

const ColumnTextGold = styled.span`
  font-family: Neue, Arial, serif;
  font-size: 13px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: 0.4000000059604645px;
  text-align: left;
  color: #ff8b00;
`;

const Wrapper = styled.div`
  width: 100%;
`;

const Paging = styled.div`
  font-family: Neue;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 21px;
  color: #9d9b9c;
  position: absolute;
  bottom: 25px;

  & > b {
    color: #1a3353;
  }

  @media only screen and (max-width: 576px) {
    display: none;
  }
`;

const TableCustom = styled(Table)`
  .ant-table {
    border: 1px solid #dddfe5;
    box-sizing: border-box;
    border-radius: 12px;
    padding: 15px 25px;
  }

  &.ant-table-thead {
    background: linear-gradient(0deg, #fafafa, #fafafa);
    border-radius: 12px;
  }
`;

const Home = () => {
  const [listDetail] = useState([
    { icon: TotalScholarsIcon, number: "1,272", text: "Total Scholars" },
    {
      icon: TotalScholarEarningsIcon,
      number: "147,272",
      text: "Total Scholar Earnings",
    },
    { icon: AverageDailySLPIcon, number: "254,081", text: "Average Daily SLP" },
    {
      icon: LatestScholarIcon,
      scholarName: "Brooklyn Simmons",
      text: "Latest Scholar",
    },
    {
      icon: AverageScholarMMRIcon,
      number: "1121",
      text: "Average Scholar MMR",
    },
    { icon: AverageWinRateIcon, number: "98,5%", text: "Average Win Rate" },
  ]);

  return (
    <Wrapper>
      <Row gutter={[32, 15.97]}>
        {listDetail.map((item, i) => (
          <Col lg={8} md={24} sm={24} xs={24} key={i}>
            <ContentBanner iconSvg={item.icon} number={item.number} text={item.text} scholarName={item.scholarName} />
          </Col>
        ))}
      </Row>

      <SearchSection />

      <Row>
        <Col lg={24} sm={24} xs={24}>
          <TableCustom pagination={{ pageSize: 9 }} columns={TableColumns} dataSource={TableData} />

          <Paging>
            Showing <b>1-9</b> from <b>{TableData.length}</b> data
          </Paging>
        </Col>
      </Row>
    </Wrapper>
  );
};

export default Home;
