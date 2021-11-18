import React from "react";
import styled from "styled-components";
import CustomIcon from "components/util-components/CustomIcon";

const CardContent = styled.div`
  display: flex;
  align-items: center;
  padding: 34.5px 0 34.5px 32px;
  border: 1px solid #dddfe5;
  border-radius: 12px;
  cursor: pointer;
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

function ContentBanner({ iconSvg, number, text }) {
  return (
    <CardContent>
      <CustomIcon className="text-primary font-size-xl" svg={iconSvg} />
      <CardData>
        <DataTitle>{text}</DataTitle>
        <DataNumber>{number}</DataNumber>
      </CardData>
    </CardContent>
  );
}

export default ContentBanner;
