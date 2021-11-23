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
  width: 100%;
  min-height: 151px;

  &:hover {
    background: #ff8b00;
  }
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

  ${CardContent}:hover & {
    color: #231f20;
  }
`;

const DataNumber = styled.p`
  font-family: Neue;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: 54px;
  letter-spacing: 0.4000000059604645px;
  text-align: left;
  color: #252733;
  margin: 0;

  ${CardContent}:hover & {
    color: #ffffff;
  }
`;

const Icon = styled(CustomIcon)``;

const ScholarName = styled.p`
  font-family: Neue;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: 0.4000000059604645px;
  text-align: left;
  margin: 0;
  color: #252733;

  ${CardContent}:hover & {
    color: #ffffff;
  }
`;

function ContentBanner({ iconSvg, number, text, scholarName }) {
  return (
    <CardContent className="hover-icon">
      <Icon className="text-primary font-size-xl " svg={iconSvg} />
      <CardData>
        <DataTitle>{text}</DataTitle>
        <DataNumber>{number}</DataNumber>
        {scholarName && <ScholarName>{scholarName}</ScholarName>}
      </CardData>
    </CardContent>
  );
}

export default ContentBanner;
