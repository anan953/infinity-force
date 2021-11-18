import React from "react";
import { Table } from "antd";
import styled from "styled-components";

const Wrapper = styled.div`
  margin-top: 30px;
`;

const ColumnTextGold = styled.span`
  color: #ff8b00;
`;

const BtnEdit = styled.div`
  background: #ffffff;
  border: 1px solid #ff8b00;
  box-sizing: border-box;
  border-radius: 12px;
  color: #ff8b00;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const ColumnText = styled.div`
  font-family: Neue Haas Unica Pro;
  font-size: 13px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: 0.4000000059604645px;
  text-align: left;
  color: #252733;
`;

const TableCustom = styled(Table)`
  .ant-table {
    border: 1px solid #dddfe5;
    box-sizing: border-box;
    border-radius: 12px;
    padding: 15px 25px;
  }
`;

const LeaderboardData = [
  {
    key: "1",
    Name: "John Brown",
    date: "11/18 22:53",
    statusClaim: true,
    totalAcc: "2343 SLP",
    scholarShare: "1343 SLP",
    managerShare: "1000 SLP",
    paymentStatus: "paid",
    destinationMatch: "Perfect",
  },
  {
    key: "2",
    Name: "John Brown",
    date: "11/18 22:53",
    statusClaim: true,
    totalAcc: "2343 SLP",
    scholarShare: "1343 SLP",
    managerShare: "1000 SLP",
    paymentStatus: "paid",
    destinationMatch: "Perfect",
  },
  {
    key: "3",
    Name: "John Brown",
    date: "11/18 22:53",
    statusClaim: true,
    totalAcc: "2343 SLP",
    scholarShare: "1343 SLP",
    managerShare: "1000 SLP",
    paymentStatus: "paid",
    destinationMatch: "Perfect",
  },
  {
    key: "4",
    Name: "John Brown",
    date: "11/18 22:53",
    statusClaim: true,
    totalAcc: "2343 SLP",
    scholarShare: "1343 SLP",
    managerShare: "1000 SLP",
    paymentStatus: "paid",
    destinationMatch: "Perfect",
  },
  {
    key: "5",
    Name: "John Brown",
    date: "11/18 22:53",
    statusClaim: true,
    totalAcc: "2343 SLP",
    scholarShare: "1343 SLP",
    managerShare: "1000 SLP",
    paymentStatus: "paid",
    destinationMatch: "Perfect",
  },
  {
    key: "6",
    Name: "John Brown",
    date: "11/18 22:53",
    statusClaim: true,
    totalAcc: "2343 SLP",
    scholarShare: "1343 SLP",
    managerShare: "1000 SLP",
    paymentStatus: "paid",
    destinationMatch: "Perfect",
  },
  {
    key: "7",
    Name: "John Brown",
    date: "11/18 22:53",
    statusClaim: true,
    totalAcc: "2343 SLP",
    scholarShare: "1343 SLP",
    managerShare: "1000 SLP",
    paymentStatus: "paid",
    destinationMatch: "Perfect",
  },
  {
    key: "8",
    Name: "John Brown",
    date: "11/18 22:53",
    statusClaim: true,
    totalAcc: "2343 SLP",
    scholarShare: "1343 SLP",
    managerShare: "1000 SLP",
    paymentStatus: "paid",
    destinationMatch: "Perfect",
  },
  {
    key: "9",
    Name: "John Brown",
    date: "11/18 22:53",
    statusClaim: true,
    totalAcc: "2343 SLP",
    scholarShare: "1343 SLP",
    managerShare: "1000 SLP",
    paymentStatus: "paid",
    destinationMatch: "Perfect",
  },
  {
    key: "5",
    Name: "John Brown",
    date: "11/18 22:53",
    statusClaim: true,
    totalAcc: "2343 SLP",
    scholarShare: "1343 SLP",
    managerShare: "1000 SLP",
    paymentStatus: "paid",
    destinationMatch: "Perfect",
  },
  {
    key: "6",
    Name: "John Brown",
    date: "11/18 22:53",
    statusClaim: true,
    totalAcc: "2343 SLP",
    scholarShare: "1343 SLP",
    managerShare: "1000 SLP",
    paymentStatus: "paid",
    destinationMatch: "Perfect",
  },
  {
    key: "7",
    Name: "John Brown",
    date: "11/18 22:53",
    statusClaim: true,
    totalAcc: "2343 SLP",
    scholarShare: "1343 SLP",
    managerShare: "1000 SLP",
    paymentStatus: "paid",
    destinationMatch: "Perfect",
  },
  {
    key: "8",
    Name: "John Brown",
    date: "11/18 22:53",
    statusClaim: true,
    totalAcc: "2343 SLP",
    scholarShare: "1343 SLP",
    managerShare: "1000 SLP",
    paymentStatus: "paid",
    destinationMatch: "Perfect",
  },
  {
    key: "9",
    Name: "John Brown",
    date: "11/18 22:53",
    statusClaim: true,
    totalAcc: "2343 SLP",
    scholarShare: "1343 SLP",
    managerShare: "1000 SLP",
    paymentStatus: "paid",
    destinationMatch: "Perfect",
  },
  {
    key: "10",
    Name: "John Brown",
    date: "11/18 22:53",
    statusClaim: true,
    totalAcc: "2343 SLP",
    scholarShare: "1343 SLP",
    managerShare: "1000 SLP",
    paymentStatus: "paid",
    destinationMatch: "Perfect",
  },
  {
    key: "11",
    Name: "John Brown",
    date: "11/18 22:53",
    statusClaim: true,
    totalAcc: "2343 SLP",
    scholarShare: "1343 SLP",
    managerShare: "1000 SLP",
    paymentStatus: "paid",
    destinationMatch: "Perfect",
  },
  {
    key: "12",
    Name: "John Brown",
    date: "11/18 22:53",
    statusClaim: true,
    totalAcc: "2343 SLP",
    scholarShare: "1343 SLP",
    managerShare: "1000 SLP",
    paymentStatus: "paid",
    destinationMatch: "Perfect",
  },
  {
    key: "13",
    Name: "John Brown",
    date: "11/18 22:53",
    statusClaim: true,
    totalAcc: "2343 SLP",
    scholarShare: "1343 SLP",
    managerShare: "1000 SLP",
    paymentStatus: "paid",
    destinationMatch: "Perfect",
  },
  {
    key: "14",
    Name: "John Brown",
    date: "11/18 22:53",
    statusClaim: true,
    totalAcc: "2343 SLP",
    scholarShare: "1343 SLP",
    managerShare: "1000 SLP",
    paymentStatus: "paid",
    destinationMatch: "Perfect",
  },
];

function TableData() {
  const LeaderboardColumns = [
    {
      title: "Name",
      dataIndex: "Name",
      key: "Name",
      align: "center",
      render: (text) => <ColumnText>{text}</ColumnText>,
    },
    {
      title: "Next Claim",
      dataIndex: "date",
      key: "date",
      align: "center",
      render: (text) => <ColumnTextGold>{text}</ColumnTextGold>,
    },
    {
      title: "Claim Status",
      dataIndex: "statusClaim",
      key: "statusClaim",
      align: "center",
      render: (text) => <ColumnText>{text}</ColumnText>,
    },
    {
      title: "Account Total",
      dataIndex: "totalAcc",
      key: "totalAcc",
      align: "center",
      render: (text) => <ColumnText>{text}</ColumnText>,
    },
    {
      title: "Scholar Share",
      dataIndex: "scholarShare",
      key: "scholarShare",
      align: "center",

      render: (text) => <ColumnText>{text}</ColumnText>,
    },
    {
      title: "Manager Share",
      dataIndex: "managerShare",
      key: "managerShare",
      align: "center",
      render: (text) => <ColumnText>{text}</ColumnText>,
    },
    {
      title: "Payment Status",
      dataIndex: "paymentStatus",
      key: "paymentStatus",
      align: "center",
      render: (text) => <ColumnText>{text}</ColumnText>,
    },
    {
      title: "Destination Match",
      dataIndex: "destinationMatch",
      key: "destinationMatch",
      align: "center",
      render: (text) => <ColumnText>{text}</ColumnText>,
    },
    {
      title: "Action",
      align: "center",
      render: (text) => <BtnEdit>Edit</BtnEdit>,
    },
  ];

  return (
    <Wrapper>
      <TableCustom rowKey="key" pagination={{ pageSize: 6 }} rowSelection={{ type: "checkbox" }} columns={LeaderboardColumns} dataSource={LeaderboardData} />
    </Wrapper>
  );
}

export default TableData;
