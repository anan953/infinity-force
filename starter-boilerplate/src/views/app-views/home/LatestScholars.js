import React from "react";
import styled from "styled-components";
import CustomIcon from "components/util-components/CustomIcon";
import { Avatar } from "antd";

const Wrapper = styled.div`
  margin-bottom: 20px;
`;

const Tiltle = styled.div`
  font-family: Neue Haas Unica Pro;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.4px;
  color: #252733;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const ListUser = styled.div`
  display: inline-block;
  height: 60px;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  width: 100%;
  padding-bottom: 10px;
`;

const Icon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15 5L13.59 6.41L18.17 11H2V13H18.17L13.58 17.59L15 19L22 12L15 5Z" fill="#929292" />
  </svg>
);

function LatestScholar() {
  const listUser = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <Wrapper>
      <Tiltle>
        <div>Latest Scholars</div>
        <div>
          <CustomIcon className="text-primary font-size-xl" svg={Icon} />
        </div>
      </Tiltle>
      <ListUser>
        {listUser.map((item) => (
          <Avatar style={{ marginRight: 27, marginBottom: 10 }} size={54} key={item} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        ))}
      </ListUser>
    </Wrapper>
  );
}

export default LatestScholar;
