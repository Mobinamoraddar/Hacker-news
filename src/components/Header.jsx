import React from "react";
import styled from "styled-components";

export const Header = () => {
  const Title = styled.h1`
      font-size: 38px;
      color: #fff;
      font-weight: 700;
      letter-spacing: 1px;
      text-transform: uppercase;
      width: 160px;
      text-align: center;
      /* margin: auto; */
      white-space: nowrap;
      padding-bottom: 0px;
      &::before {
        background-color: #9bbac9;
        content: "";
        display: block;
        height: 3px;
        width: 75px;
        margin-bottom: 5px;
      }
      &::after {
        background-color: #9bbac9;
        content: "";
        display: block;
        height: 3px;
        width: 75px;
        margin-top: 0px;
        margin-left: 160px;
      }
    `,
    Header = styled.div`
      font-weight: 900;
      background-color: #034562;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 20px 60px 0px 60px;
    `,
    TitleDiv = styled.div`
      padding-left: 20px;
    `;

  return (
    <>
      <Header>
        <TitleDiv>
          <Title>HACKER NEWS</Title>
        </TitleDiv>
      </Header>
    </>
  );
};
