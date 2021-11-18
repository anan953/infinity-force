import React from "react";
import styled, { css } from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 34px;
  background: #ffffff;
  border: 1px solid #ff8b00;
  box-sizing: border-box;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: #ff8b00;

  ${(props) =>
    props.isWarning &&
    css`
      background: #e43700;
      color: #ffffff;
    `}
`;

function NodeButton({ id, active, text, changeActive, isWarning }) {
  const handleClick = () => changeActive(id);

  return (
    <Wrapper isWarning={isWarning} onClick={handleClick} active={active}>
      {text}
    </Wrapper>
  );
}

export default NodeButton;
