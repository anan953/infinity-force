import React from "react";
import { Row, Col, Input } from "antd";
import styled from "styled-components";
import CustomIcon from "components/util-components/CustomIcon";

const Wrapper = styled.div`
  margin-top: 55px;
  margin-bottom: 15px;
`;

const IconSearch = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19.2739 16.8414L15.1488 12.7163C16.0011 11.4317 16.5 9.89367 16.5 8.24024C16.5 3.76011 12.8551 0.115234 8.375 0.115234C3.89488 0.115234 0.25 3.76011 0.25 8.24024C0.25 12.7204 3.89488 16.3652 8.375 16.3652C10.0284 16.3652 11.5665 15.8664 12.8511 15.014L16.9761 19.1391C17.6099 19.7737 18.6401 19.7737 19.2739 19.1391C19.9084 18.5045 19.9084 17.4759 19.2739 16.8414ZM2.6875 8.24024C2.6875 5.10398 5.23875 2.55273 8.375 2.55273C11.5113 2.55273 14.0625 5.10398 14.0625 8.24024C14.0625 11.3765 11.5113 13.9277 8.375 13.9277C5.23875 13.9277 2.6875 11.3765 2.6875 8.24024Z"
      fill="#8E8EA1"
    />
  </svg>
);

const Button = styled.span`
  border-radius: 12px;
  padding: 2px 0px 2px 0px;
  font-family: Neue;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: center;
  width: 100%;

  color: #9d9b9c;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 36px;
  cursor: pointer;
  border: 1px solid #dddfe5;

  &:hover {
    background: #ff8b00;
    font-weight: 700;
    color: #fff;
  }
`;

const InputCustom = styled(Input)`
  padding-left: 30px;
  border-radius: 12px;
  background-color: #f2f2f2;

  &.ant-input-affix-wrapper > input.ant-input {
    padding-left: 7px;
  }
`;

function SearchSection() {
  return (
    <Wrapper>
      <Row justify="space-between" gutter={[16, 16]}>
        <Col lg={0} md={0} sm={24} xs={24}>
          <Row gutter={[16, 16]}>
            <Col span={12}>
              <Button>ADD SCHOLAR</Button>
            </Col>
            <Col span={12}>
              <Button>OPTIONS</Button>
            </Col>
          </Row>
        </Col>

        <Col lg={8} md={8} sm={24} xs={24}>
          <InputCustom
            size="small"
            prefix={
              <CustomIcon
                className="text-primary font-size-xl"
                svg={IconSearch}
              />
            }
            placeholder="Search scholar here..."
          />
        </Col>

        <Col lg={8} md={8} sm={0} xs={0}>
          <Row gutter={[16, 16]}>
            <Col span={12}>
              <Button>ADD SCHOLAR</Button>
            </Col>
            <Col span={12}>
              <Button>OPTIONS</Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Wrapper>
  );
}

export default SearchSection;
