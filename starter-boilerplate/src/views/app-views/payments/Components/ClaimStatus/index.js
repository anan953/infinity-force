import React from "react";
import styled from "styled-components";
import CustomIcon from "components/util-components/CustomIcon";

const Wrapper = styled.div`
  background: #ffffff;
  border: 0.864865px solid ${(props) => props.color};
  box-sizing: border-box;
  border-radius: 34.5946px;
  display: flex;
  height: 43px;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.color};
  width: 110px;
`;

const Text = styled.div`
  margin-left: 5px;
`;

const checkedIcon = () => (
  <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M10.419 19.1506C6.13796 19.1506 2.63525 15.6479 2.63525 11.3668C2.63525 7.08571 6.13796 3.58301 10.419 3.58301C14.7001 3.58301 18.2028 7.08571 18.2028 11.3668C18.2028 15.6479 14.7001 19.1506 10.419 19.1506ZM10.419 5.20463C7.04606 5.20463 4.25688 7.99382 4.25688 11.3668C4.25688 14.7398 7.04606 17.529 10.419 17.529C13.792 17.529 16.5812 14.7398 16.5812 11.3668C16.5812 7.99382 13.792 5.20463 10.419 5.20463Z"
      fill="#FF8B00"
    />
    <path
      d="M9.18644 14.415C8.99185 14.415 8.73239 14.3501 8.60266 14.1555L6.98104 12.5339C6.65671 12.2096 6.65671 11.6906 6.98104 11.3663C7.30536 11.042 7.82428 11.042 8.1486 11.3663L9.18644 12.4041L12.6891 8.90145C13.0135 8.57712 13.5324 8.57712 13.8567 8.90145C14.181 9.22577 14.181 9.74469 13.8567 10.069L9.77023 14.1555C9.57563 14.3501 9.38104 14.415 9.18644 14.415Z"
      fill="#FF8B00"
    />
  </svg>
);

const unclaimedIcon = () => (
  <svg width="21" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M11.2975 19.1496C7.01637 19.1496 3.51367 15.6469 3.51367 11.3658C3.51367 7.08473 7.01637 3.58203 11.2975 3.58203C15.5785 3.58203 19.0812 7.08473 19.0812 11.3658C19.0812 15.6469 15.5785 19.1496 11.2975 19.1496ZM11.2975 5.20365C7.92448 5.20365 5.13529 7.99284 5.13529 11.3658C5.13529 14.7388 7.92448 17.528 11.2975 17.528C14.6704 17.528 17.4596 14.7388 17.4596 11.3658C17.4596 7.99284 14.6704 5.20365 11.2975 5.20365Z"
      fill="#231F20"
    />
    <path d="M6.1084 6.60938L16.0543 16.5553" stroke="#231F20" stroke-width="1.72973" stroke-linecap="round" />
  </svg>
);

function Claimed() {
  return (
    <Wrapper color="#FF8B00">
      <CustomIcon className="text-primary font-size-xl" svg={checkedIcon} />
      <Text>Claimed</Text>
    </Wrapper>
  );
}

function Unclaimed() {
  return (
    <Wrapper color="#231F20">
      <CustomIcon className="text-primary font-size-xl" svg={unclaimedIcon} />
      <Text>Unclaimed</Text>
    </Wrapper>
  );
}

export { Claimed, Unclaimed };
