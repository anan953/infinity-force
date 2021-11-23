import React from "react";
import { Table } from "antd";
import styled from "styled-components";
import { Claimed, Unclaimed } from "./ClaimStatus";
import { Paid, Unpaid, Pending, Perfect, Error, HoldOn } from "./PaymentStatus";
const Wrapper = styled.div`
  margin-top: 30px;
  position: relative;
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

const DataText = styled.div`
  font-family: Neue;
  font-style: normal;
  font-weight: 500;
  font-size: 13.33px;
  line-height: 20px;
  letter-spacing: 0.4px;
  color: #252733;
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

const Paging = styled.div`
  font-family: Neue;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 21px;
  color: #9d9b9c;
  position: absolute;
  bottom: 0;

  & > b {
    color: #1a3353;
  }

  @media only screen and (max-width: 576px) {
    display: none;
  }
`;

const MAPPING_ICON = {
  pending: <Pending />,
  unpaid: <Unpaid />,
  paid: <Paid />,
};

const MAPPING_DESTINATION = {
  Perfect: <Perfect />,
  Error: <Error />,
  HoldOn: <HoldOn />,
};

const LeaderboardData = [
  {
    key: "1x",
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
    key: "2x",
    Name: "John Brown",
    date: "11/18 22:53",
    statusClaim: false,
    totalAcc: "2343 SLP",
    scholarShare: "1343 SLP",
    managerShare: "1000 SLP",
    paymentStatus: "unpaid",
    destinationMatch: "HoldOn",
  },
  {
    key: "3x",
    Name: "John Brown",
    date: "11/18 22:53",
    statusClaim: false,
    totalAcc: "2343 SLP",
    scholarShare: "1343 SLP",
    managerShare: "1000 SLP",
    paymentStatus: "pending",
    destinationMatch: "Error",
  },
  {
    key: "4x",
    Name: "John Brown",
    date: "11/18 22:53",
    statusClaim: true,
    totalAcc: "2343 SLP",
    scholarShare: "1343 SLP",
    managerShare: "1000 SLP",
    paymentStatus: "pending",
    destinationMatch: "Perfect",
  },
  {
    key: "5x",
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
    key: "6x",
    Name: "John Brown",
    date: "11/18 22:53",
    statusClaim: false,
    totalAcc: "2343 SLP",
    scholarShare: "1343 SLP",
    managerShare: "1000 SLP",
    paymentStatus: "paid",
    destinationMatch: "Perfect",
  },
  {
    key: "7x",
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
    key: "8x",
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
    key: "9x",
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
    statusClaim: false,
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
      align: "left",
      render: (text) => <DataText>{text}</DataText>,
    },
    {
      title: "Next Claim",
      dataIndex: "date",
      key: "date",
      align: "center",
      render: (text) => <DataText>{text}</DataText>,
    },
    {
      title: "Claim Status",
      dataIndex: "statusClaim",
      key: "statusClaim",
      align: "center",
      render: (statusClaim) => (
        <div className="d-flex justify-content-center align-items-center	">
          {statusClaim ? <Claimed /> : <Unclaimed />}
        </div>
      ),
    },
    {
      title: "Account Total",
      dataIndex: "totalAcc",
      key: "totalAcc",
      align: "center",
      render: (text) => <DataText>{text}</DataText>,
    },
    {
      title: "Scholar Share",
      dataIndex: "scholarShare",
      key: "scholarShare",
      align: "center",

      render: (text) => <DataText>{text}</DataText>,
    },
    {
      title: "Manager Share",
      dataIndex: "managerShare",
      key: "managerShare",
      align: "center",
      render: (text) => <DataText>{text}</DataText>,
    },
    {
      title: "Payment Status",
      dataIndex: "paymentStatus",
      key: "paymentStatus",
      align: "center",
      render: (paymentStatus) => (
        <div className="d-flex justify-content-center align-items-center	">
          {MAPPING_ICON[paymentStatus]}
        </div>
      ),
    },
    {
      title: "Destination Match",
      dataIndex: "destinationMatch",
      key: "destinationMatch",
      align: "center",
      render: (text) => <span>{MAPPING_DESTINATION[text]}</span>,
    },
    {
      title: "Action",
      align: "center",
      render: (text) => <BtnEdit>Edit</BtnEdit>,
    },
  ];

  return (
    <Wrapper>
      <TableCustom
        rowKey="key"
        pagination={{ pageSize: 5 }}
        rowSelection={{ type: "checkbox" }}
        columns={LeaderboardColumns}
        dataSource={LeaderboardData}
      />

      <Paging>
        Showing <b>1-5</b> from <b>{LeaderboardData.length}</b> data
      </Paging>
    </Wrapper>
  );
}

export default TableData;
