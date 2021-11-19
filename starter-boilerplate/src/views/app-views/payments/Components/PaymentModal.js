import React from "react";
import { Modal } from "antd";
import styled from "styled-components";
import CustomIcon from "components/util-components/CustomIcon";

const AddIcon = () => (
  <svg
    width="44"
    height="43"
    viewBox="0 0 44 43"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      y="0.0371094"
      width="44"
      height="42.789"
      rx="21.3945"
      fill="#FF8B00"
    />
    <path
      d="M22.0002 14.208C21.5015 14.208 21.0973 14.6123 21.0973 15.1109V20.5284H15.6798C15.1811 20.5284 14.7769 20.9327 14.7769 21.4313C14.7769 21.93 15.1811 22.3343 15.6798 22.3343H21.0973V27.7518C21.0973 28.2504 21.5015 28.6547 22.0002 28.6547C22.4989 28.6547 22.9031 28.2504 22.9031 27.7518V22.3343H28.3206C28.8193 22.3343 29.2235 21.93 29.2235 21.4313C29.2235 20.9327 28.8193 20.5284 28.3206 20.5284H22.9031V15.1109C22.9031 14.6123 22.4989 14.208 22.0002 14.208Z"
      fill="white"
    />
  </svg>
);

const DeleteIcon = () => (
  <svg
    width="25"
    height="25"
    viewBox="0 0 25 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.72517 5.49016C6.33465 5.09963 5.70148 5.09963 5.31096 5.49016C4.92044 5.88068 4.92044 6.51385 5.31096 6.90437L11.0857 12.6791L5.31102 18.4538C4.9205 18.8443 4.92049 19.4775 5.31102 19.868C5.70154 20.2585 6.33471 20.2585 6.72523 19.868L12.4999 14.0933L18.2746 19.868C18.6651 20.2585 19.2983 20.2585 19.6888 19.868C20.0793 19.4775 20.0793 18.8443 19.6888 18.4538L13.9141 12.6791L19.6889 6.90437C20.0794 6.51385 20.0794 5.88068 19.6889 5.49016C19.2983 5.09963 18.6652 5.09963 18.2746 5.49016L12.4999 11.2649L6.72517 5.49016Z"
      fill="white"
    />
  </svg>
);

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const ModalTitle = styled.p`
  font-family: Eurostile;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0.4000000059604645px;
  text-align: left;
  color: #ff8b00;
  margin-bottom: 0;
`;

const InputCustom = styled.input`
  border-radius: 22px;
  border: none;
  width: 100%;
  background: #f2f2f2;
  margin-top: 27.31px;
  padding: 20px 23px 13px 24px;
  color: #8e8ea1;
`;

const AddSection = styled.div`
  display: flex;
  align-item: center;
  margin-top: 28.93px;
`;
const AddText = styled.span`
  font-family: Neue;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 27px;
  letter-spacing: 0em;
  text-align: left;
  color: #8e8ea1;
  margin-left: 9px;
  display: flex;
  align-items: center;
`;

const PrivateKey = styled.div`
  margin-top: 27.31px;
`;

const PrivateKeyInput = styled.input`
  border-radius: 22px;
  border: none;
  width: 100%;
  background: #f2f2f2;
  margin-bottom: 10px;
  padding: 20px 23px 13px 24px;
  color: #8e8ea1;
`;

const PrivateKeyText = styled.div`
  font-family: Neue;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: center;
  color: #8e8ea1;
  margin: 0;
`;

const DataSection = styled.div`
  margin: 10.7px 0 39.33px 0;
`;

const ColumnNumber = styled.div`
  border-radius: 22px;
  background: #f2f2f2;
  padding: 15px;
  width: 105px;
  display: flex;
  justify-content: center;
`;
const DataRow = styled.div`
  padding: 15px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background: #ffe2bf;
  }
  &:hover ${ColumnNumber} {
    background: #fff;
  }
`;

const IconColumn = styled.span`
  border-radius: 36.11px;
  background-color: #ff8b00;
  margin-right: 15px;
  width: 70px;
  height: 42.79px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SerialNumber = styled.span`
  font-family: Neue;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: left;
  color: #fff;
  margin-left: 5.42px;
`;

const ColumnSection = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 368px;
`;

const ColumnWrap = styled.span``;

const ColumnTitle = styled.div`
  font-family: Neue;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 27px;
  letter-spacing: 0em;
  text-align: center;
  color: #8e8ea1;
  margin-bottom: 5.83px;
`;

const ControlButton = styled.div`
  margin-top: 39.33px;
  display: flex;
  justify-content: flex-end;
`;

const CloseBtn = styled.span`
  height: 34px;
  width: 119px;
  border-radius: 12px;
  color: #fff;
  background: #83b5d1;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const CancelBtn = styled.span`
  height: 34px;
  width: 119px;
  border-radius: 12px;
  color: #fff;
  background: #ff8b00;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 16px;
  cursor: pointer;
`;

function PaymentModal({ isShowModal, closeModal, handleCancel }) {
  return (
    <div>
      <Modal
        title=""
        visible={isShowModal}
        footer={null}
        closable={false}
        width={570}
        style={{ borderRadius: "0px" }}
        onCancel={handleCancel}
      >
        <ModalContent>
          <ModalTitle>Add Scholar</ModalTitle>
          <InputCustom placeholder="Scholar Name" />
          <InputCustom placeholder="Scholar Ronin Address" />
          <PrivateKey>
            <PrivateKeyInput placeholder="Private Key" />
            <PrivateKeyText>
              Please input private key to claim and pay automatically
            </PrivateKeyText>
          </PrivateKey>
          <InputCustom placeholder="Admin Share Address" />
          <InputCustom placeholder="Scholar Share Address" />
          <AddSection>
            <CustomIcon className="text-primary font-size-xl" svg={AddIcon} />
            <AddText>What does this Plus sign do?</AddText>
          </AddSection>
          <DataSection>
            <DataRow>
              <IconColumn>
                <CustomIcon
                  className="text-primary font-size-xl"
                  svg={DeleteIcon}
                />
                <SerialNumber> 0 </SerialNumber>
              </IconColumn>
              <ColumnSection>
                <ColumnWrap>
                  <ColumnTitle> Total</ColumnTitle>
                  <ColumnNumber>2011</ColumnNumber>
                </ColumnWrap>
                <ColumnWrap>
                  <ColumnTitle> Scholar</ColumnTitle>
                  <ColumnNumber>70%</ColumnNumber>
                </ColumnWrap>
                <ColumnWrap>
                  <ColumnTitle> Admin</ColumnTitle>
                  <ColumnNumber>30%</ColumnNumber>
                </ColumnWrap>
              </ColumnSection>
            </DataRow>
            {/* Row 2 */}
            <DataRow>
              <IconColumn>
                <CustomIcon
                  className="text-primary font-size-xl"
                  svg={DeleteIcon}
                />
                <SerialNumber> 0 </SerialNumber>
              </IconColumn>
              <ColumnSection>
                <ColumnWrap>
                  <ColumnTitle> Total</ColumnTitle>
                  <ColumnNumber>2011</ColumnNumber>
                </ColumnWrap>
                <ColumnWrap>
                  <ColumnTitle> Scholar</ColumnTitle>
                  <ColumnNumber>70%</ColumnNumber>
                </ColumnWrap>
                <ColumnWrap>
                  <ColumnTitle> Admin</ColumnTitle>
                  <ColumnNumber>30%</ColumnNumber>
                </ColumnWrap>
              </ColumnSection>
            </DataRow>
            {/* Row 3 */}
            <DataRow>
              <IconColumn>
                <CustomIcon
                  className="text-primary font-size-xl"
                  svg={DeleteIcon}
                />
                <SerialNumber> 0 </SerialNumber>
              </IconColumn>
              <ColumnSection>
                <ColumnWrap>
                  <ColumnTitle> Total</ColumnTitle>
                  <ColumnNumber>2011</ColumnNumber>
                </ColumnWrap>
                <ColumnWrap>
                  <ColumnTitle> Scholar</ColumnTitle>
                  <ColumnNumber>70%</ColumnNumber>
                </ColumnWrap>
                <ColumnWrap>
                  <ColumnTitle> Admin</ColumnTitle>
                  <ColumnNumber>30%</ColumnNumber>
                </ColumnWrap>
              </ColumnSection>
            </DataRow>
          </DataSection>

          {/* Control Button */}
          <ControlButton>
            <CloseBtn onClick={closeModal}>Close</CloseBtn>
            <CancelBtn onClick={closeModal}>Cancel</CancelBtn>
          </ControlButton>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default PaymentModal;
