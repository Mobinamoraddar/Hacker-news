import React from "react";
import styled from "styled-components";

const Title = styled.a.attrs({
    target: `_blank`,
    href: `#`,
  })`
    font-size: 18px;
    color: #fff;
    font-weight: 400;
    padding-right: 10px;
    &:hover {
      font-weight: 900;
    }
  `,
  MainDiv = styled.div`
    background-color: #9bbac9;
    font-size: 14px;
    font-weight: bold;
    width: 75vw;
    display: flex;
    flex-direction: column;
    width: 75vw;
    border-radius: 2px;
    padding: 5px;
    margin: 10px auto;

    &:hover {
      background-color: rgba(51, 94, 113, 0.1);
      border-radius: 5px;
    }
  `,
  Link = styled.a.attrs({
    target: `_blank`,
    href: `#`,
  })`
    font-size: 0.8em;
    opacity: 0.8;
    color: #034562;
    cursor: pointer;
    width: 200px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    display: inline-block;
    &:hover {
      color: #034562ab;
    }
  `,
  TitleDiv = styled.div`
    display: flex;
    align-items: center;
  `,
  DetailDiv = styled.div`
    display: flex;
    justify-content: flex-end;
    color: #034764;
  `,
  Paragraph = styled.a.attrs({
    target: `_blank`,
    href: `#`,
  })`
    font-size: 0.8em;
    color: rgb(3, 56, 78);
    opacity: 0.8;
    font-family: "Alata", sans-serif;
    cursor: pointer;
    width: 80px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    display: inline-block;
    margin-right: 10px;
    margin-left: 10px;
    opacity: 0.8;
    cursor: pointer;
    white-space: nowrap;
    text-overflow: clip;
    overflow: hidden;
    margin-left: 20px;
    &:hover {
      color: #00003a;
    }
  `;

export const Body = function (props) {
  return (
    <>
      <MainDiv>
        <TitleDiv>
          <Title href={props.url} target="_blank">
            {props.title}
          </Title>
          <Link href={props.url} target="_blank">
            ({props.url})
          </Link>
        </TitleDiv>
        <DetailDiv>
          <Paragraph href={props.url} target="_blank">
            author: {props.author}
          </Paragraph>
          <Paragraph href={props.url} target="_blank">
            created at: {props.date}
          </Paragraph>
        </DetailDiv>
      </MainDiv>
    </>
  );
};
