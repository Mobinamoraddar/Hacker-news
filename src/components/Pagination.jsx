import React from "react";
import styled from "styled-components";

const Box = styled.div`
    width: 30px;
    height: 30px;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 200px;
    margin: 0 auto;
    cursor: pointer;
    border-radius: 50%;
  `,
  BoxContent = styled.div`
    color: #034562;
    font-size: 16px;
    font-weight: 900;
  `,
  MainDiv = styled.div`
    background-color: #034562;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 60px;
  `,
  Next = styled.a`
    color: #9bbac9;
    margin-right: 37vw;
    cursor: pointer;
    font-size: 16px;
    font-weight: 900;
    &:hover {
      color: #fff;
    }
  `,
  Prev = styled.a`
    color: #9bbac9;
    margin-left: 37vw;
    cursor: pointer;
    font-size: 16px;
    font-weight: 900;
    &:hover {
      color: #fff;
    }
  `;

export const Page = (props) => {
  return (
    <>
      <MainDiv>
        <Prev href="#" onClick={props.prevClick}>
          Last Page
        </Prev>
        <Box>
          <BoxContent>{props.pageNumber}</BoxContent>
        </Box>
        <Next href="#" onClick={props.nextClick}>
          Next Page
        </Next>
      </MainDiv>
    </>
  );
};
