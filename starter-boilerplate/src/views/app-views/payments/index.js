import React, { useState } from "react";
import ContentBanner from "components/shared-components/ContentBanner";
import { Row, Col } from "antd";
import styled from "styled-components";
import SearchSection from "./Components/SearchSection";
import NodeButton from "./Components/NodeButton";
import TableData from "./Components/Table";
import PaymentModal from "./Components/PaymentModal";
const ListBtnSection = styled.div`
  margin-top: 30px;
`;

const IconPay = () => (
  <svg
    width="49"
    height="60"
    viewBox="0 0 49 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M30.8407 0.757812H6.74978C3.43728 0.757812 0.727051 3.4169 0.727051 6.6669V53.9396C0.727051 57.1896 3.43728 59.8487 6.74978 59.8487H42.8861C46.1986 59.8487 48.9089 57.1896 48.9089 53.9396V18.4851L30.8407 0.757812ZM33.8521 27.3487H21.8066V30.3033H30.8407C32.4969 30.3033 33.8521 31.6328 33.8521 33.2578V42.1214C33.8521 43.7464 32.4969 45.076 30.8407 45.076H27.8293V48.0305H21.8066V45.076H15.7839V39.1669H27.8293V36.2124H18.7952C17.139 36.2124 15.7839 34.8828 15.7839 33.2578V24.3942C15.7839 22.7692 17.139 21.4396 18.7952 21.4396H21.8066V18.4851H27.8293V21.4396H33.8521V27.3487Z"
      fill="#FF8B00"
    />
  </svg>
);

const IconPending = () => (
  <svg
    width="54"
    height="55"
    viewBox="0 0 54 55"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M33.75 33.3199L41.58 37.9099L39.42 41.4199L29.7 35.4799V21.9799H33.75V33.3199ZM54 32.7799C54 44.6869 44.307 54.3799 32.4 54.3799C26.946 54.3799 21.978 52.3279 18.171 48.9799H5.4C2.295 48.9799 0 46.6849 0 43.5799V19.2799C0 16.2559 2.403 13.9879 5.4 13.8799V12.5299C5.4 5.80688 10.827 0.379883 17.55 0.379883C23.868 0.379883 28.998 5.21288 29.592 11.3959C30.51 11.2609 31.455 11.1799 32.4 11.1799C44.307 11.1799 54 20.8729 54 32.7799ZM10.8 13.8799H24.3V11.8819C23.976 8.45288 21.06 5.77988 17.55 5.77988C13.824 5.77988 10.8 8.80388 10.8 12.5299V13.8799ZM48.6 32.7799C48.6 23.8429 41.337 16.5799 32.4 16.5799C23.463 16.5799 16.2 23.8429 16.2 32.7799C16.2 41.7169 23.463 48.9799 32.4 48.9799C41.337 48.9799 48.6 41.7169 48.6 32.7799Z"
      fill="#FF8B00"
    />
  </svg>
);

const IconUnpaid = () => (
  <svg
    width="56"
    height="50"
    viewBox="0 0 56 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0 49.8799H56L28 0.879883L0 49.8799ZM30.5455 42.143H25.4545V36.9851H30.5455V42.143ZM30.5455 31.8273H25.4545V21.5115H30.5455V31.8273Z"
      fill="#FF8B00"
    />
  </svg>
);

function Payments() {
  const [listDetail] = useState([
    { icon: IconPay, number: "$134,023", text: "Paid" },
    { icon: IconPending, number: "$2,230", text: "Pending" },
    { icon: IconUnpaid, number: "$1,660", text: "Unpaid" },
  ]);

  const [listButton, setListButton] = useState([
    { id: 1, active: false, showMobile: false, text: "UPLOAD FROM EXCEL" },
    { id: 2, active: false, showMobile: false, text: "VIEW LOGS" },
    { id: 3, active: false, showMobile: true, text: "REFRESH" },
    { id: 4, active: false, showMobile: true, text: "CLAIM REWARDS" },
    { id: 5, active: false, showMobile: true, text: "PAY" },
    {
      id: 6,
      active: false,
      showMobile: false,
      text: "DELETE",
      isWarning: true,
    },
  ]);

  const changeActive = (id) => {
    setListButton(
      listButton.map((item) => ({ ...item, active: item.id === id }))
    );
  };
  const [isShowModal, setIsShowModal] = useState(false);

  const showModal = () => {
    setIsShowModal(true);
  };

  const closeModal = () => {
    setIsShowModal(false);
  };

  const handleCancel = () => {
    setIsShowModal(false);
  };

  return (
    <div>
      <Row gutter={[32, 8]}>
        {listDetail.map((item, i) => (
          <Col lg={8} md={24} sm={24} xs={24} key={i}>
            <ContentBanner
              iconSvg={item.icon}
              number={item.number}
              text={item.text}
            />
          </Col>
        ))}
      </Row>

      <SearchSection showModal={showModal} />

      <ListBtnSection>
        <Row gutter={[16, 8]}>
          {listButton.map((item, i) =>
            item.showMobile ? (
              <Col lg={4} md={8} sm={8} xs={8} key={i}>
                <NodeButton {...item} changeActive={changeActive} />
              </Col>
            ) : (
              <Col lg={4} md={0} sm={0} xs={0} key={i}>
                <NodeButton {...item} changeActive={changeActive} />
              </Col>
            )
          )}
        </Row>
      </ListBtnSection>

      <TableData />

      {/* Modal section */}
      <PaymentModal
        isShowModal={isShowModal}
        closeModal={closeModal}
        handleCancel={handleCancel}
      />
    </div>
  );
}

export default Payments;
