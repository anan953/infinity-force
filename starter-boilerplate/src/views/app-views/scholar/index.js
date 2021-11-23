import React, { useState } from "react";
import styled from "styled-components";
import { Table, Avatar, Col, Row } from "antd";
import CustomIcon from "components/util-components/CustomIcon";
import { COLOR_1, COLOR_2 } from "constants/ChartConstant";
import ContentBanner from "components/shared-components/ContentBanner";
import SearchSection from "./Components/SearchSection";

// import LatestScholarIcon from "assets/svg/avatar.svg";

const TotalScholarsIcon = () => (
  <svg
    width="62"
    height="62"
    viewBox="0 0 62 62"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M41.333 28.4922C45.6213 28.4922 49.0572 25.0864 49.0572 20.8672C49.0572 16.648 45.6213 13.2422 41.333 13.2422C37.0447 13.2422 33.583 16.648 33.583 20.8672C33.583 25.0864 37.0447 28.4922 41.333 28.4922ZM20.6663 28.4922C24.9547 28.4922 28.3905 25.0864 28.3905 20.8672C28.3905 16.648 24.9547 13.2422 20.6663 13.2422C16.378 13.2422 12.9163 16.648 12.9163 20.8672C12.9163 25.0864 16.378 28.4922 20.6663 28.4922ZM20.6663 33.5755C14.6472 33.5755 2.58301 36.5493 2.58301 42.4714V48.8255H38.7497V42.4714C38.7497 36.5493 26.6855 33.5755 20.6663 33.5755ZM41.333 33.5755C40.5838 33.5755 39.7313 33.6264 38.8272 33.7026C41.8238 35.8376 43.9163 38.7097 43.9163 42.4714V48.8255H59.4163V42.4714C59.4163 36.5493 47.3522 33.5755 41.333 33.5755Z"
      fill="#FF8B00"
    />
  </svg>
);

const TotalScholarEarningsIcon = () => (
  <svg
    width="61"
    height="62"
    viewBox="0 0 61 62"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M27.45 0.0341797V61.0342C11.9865 59.5092 0 46.4247 0 30.5342C0 14.6437 11.9865 1.55918 27.45 0.0341797ZM33.6415 0.0341797V27.4537H61C59.5665 12.9967 48.068 1.46768 33.6415 0.0341797ZM33.6415 33.6147V61.0342C48.0985 59.6007 59.5665 48.0717 61 33.6147H33.6415Z"
      fill="#FF8B00"
    />
  </svg>
);

const AverageDailySLPIcon = () => (
  <svg
    width="52"
    height="62"
    viewBox="0 0 52 62"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M51.5844 34.0796C49.3269 22.7756 42.998 14.2664 32.6572 8.81993C31.985 8.46589 31.7256 8.09919 31.7976 7.3691C31.9332 5.99187 32.0149 4.6091 32.0986 3.22732C32.1525 2.34069 31.7989 1.67557 30.9286 1.34227C26.175 -0.47726 21.5081 -0.558684 17.0248 2.12041C16.6804 2.32601 16.4154 2.98759 16.4438 3.41547C16.5501 4.50003 16.724 5.57702 16.9646 6.64029C17.4037 8.90313 17.3879 8.86695 15.489 10.1999C7.67048 15.6876 2.90102 23.1731 0.718487 32.3577C-1.28815 40.8021 0.939568 48.0952 7.01079 54.1794C11.9682 59.1474 18.3317 60.8096 25.1785 61.0312C30.1377 61.1101 34.7169 59.6383 39.1349 57.6366C48.383 53.4465 53.553 43.9362 51.5844 34.0796ZM45.0006 32.821L40.829 39.9234L30.3999 34.3707L21.3394 43.7974L11.3013 35.5975L4.39196 41.7957L3.60998 34.306L4.71796 38.5674L11.3013 33.2729L20.5571 40.3753L30.139 32.2399L40.3075 37.1459L44.805 30.5331L48.3902 35.9839L45.0006 32.821ZM41.2949 50.6749C39.6781 51.9497 37.8362 52.322 37.1808 51.5064C36.5255 50.6908 37.3046 48.996 38.9214 47.7212C40.5382 46.4464 42.3802 46.0741 43.0358 46.8897C43.6914 47.7052 42.912 49.4003 41.2949 50.6749ZM17.7757 17.4791C19.5576 18.5882 19.2199 22.2976 17.0207 25.7639C14.8216 29.2302 11.5942 31.1411 9.81218 30.0319C8.0302 28.9228 8.36796 25.2131 10.5668 21.7468C12.7657 18.2805 15.9934 16.3696 17.7757 17.4791Z"
      fill="#FF8B00"
    />
  </svg>
);

// const LatestScholarIcon = () => (

// );

const AverageScholarMMRIcon = () => (
  <svg
    width="65"
    height="65"
    viewBox="0 0 65 65"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M32.5003 46.7732L49.2378 56.8753L44.7962 37.8357L59.5837 25.0253L40.1107 23.3732L32.5003 5.41699L24.8899 23.3732L5.41699 25.0253L20.2045 37.8357L15.7628 56.8753L32.5003 46.7732Z"
      fill="#FF8B00"
    />
  </svg>
);

const AverageWinRateIcon = () => (
  <svg
    width="56"
    height="57"
    viewBox="0 0 56 57"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_339_372)">
      <path
        d="M52.5539 6.1H13.3539V0.5H7.75391V56.5H13.3539V34.1H52.5539L46.9539 20.1L52.5539 6.1ZM35.7539 20.1C35.7539 23.18 33.2339 25.7 30.1539 25.7C27.0739 25.7 24.5539 23.18 24.5539 20.1C24.5539 17.02 27.0739 14.5 30.1539 14.5C33.2339 14.5 35.7539 17.02 35.7539 20.1Z"
        fill="#FF8B00"
      />
    </g>
    <defs>
      <clipPath id="clip0_339_372">
        <rect
          width="56"
          height="56"
          fill="white"
          transform="translate(0 0.5)"
        />
      </clipPath>
    </defs>
  </svg>
);

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

const TableWrapper = styled.div`
  border: 1px solid #dddfe5;
  border-radius: 12px;
  padding: 32px;
`;

const TableTitle = styled.p`
  font-family: Eurostile, Arial, serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: 0.4000000059604645px;
  text-align: left;
  color: #252733;
  margin-bottom: 24px;
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
      icon: AverageDailySLPIcon,
      scholarName: "Brooklyn Simmons",
      text: "Latest Scholar",
    },
    {
      icon: AverageScholarMMRIcon,
      number: "1 121",
      text: "Average Scholar MMR",
    },
    { icon: AverageWinRateIcon, number: "98,5%", text: "Average Win Rate" },
  ]);

  return (
    <Wrapper>
      <Row gutter={[32, 15.97]}>
        {listDetail.map((item, i) => (
          <Col lg={8} md={24} sm={24} xs={24} key={i}>
            <ContentBanner
              iconSvg={item.icon}
              number={item.number}
              text={item.text}
              scholarName={item.scholarName}
            />
          </Col>
        ))}
      </Row>

      <SearchSection />

      <Row>
        <Col lg={24} sm={24} xs={24}>
          <TableCustom
            pagination={{ pageSize: 9 }}
            columns={TableColumns}
            dataSource={TableData}
          />

          <Paging>
            Showing <b>1-9</b> from <b>{TableData.length}</b> data
          </Paging>
        </Col>
      </Row>
    </Wrapper>
  );
};

export default Home;
