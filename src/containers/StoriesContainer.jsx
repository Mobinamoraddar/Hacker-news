import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { Body } from "../components/Body";
import { Page } from "../components/Pagination";

const Input = styled.input.attrs({
    type: "search",
    id: "search",
  })`
    font-size: 12px;
    margin: 0px 90px 25px 0px;
    padding: 11px 10px;
    width: 300px;
    outline: none;
    border: 1px solid #bbb;
    border-radius: 20px;
    display: inline-block;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-transition: 0.2s ease all;
    -moz-transition: 0.2s ease all;
    -ms-transition: 0.2s ease all;
    -o-transition: 0.2s ease all;
    transition: 0.2s ease all;
    &:focus {
      outline: none;
      box-shadow: 0px 0px 5px #00003a;
    }
  `,
  HeaderStyled = styled.div`
    background-color: #034562;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    min-height: 60px;
    width: 100%;
  `;

export const StoriesContainer = function (props) {
  const [data, setData] = useState({ hits: [] });
  const [query, setQuery] = useState("");
  const [pageNumber, setPageNumber] = useState(0);

  const baseUrlF = () => {
    let baseUrl = `https://hn.algolia.com/api/v1/search?tags=story&hitsPerPage=20`;
    if (query) {
      baseUrl += `&query=${query}`;
    }
    if (pageNumber > 0) {
      baseUrl += `&page=${pageNumber}`;
    }
    return baseUrl;
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(baseUrlF());

      setData(result.data);
    };

    fetchData();
  }, [query, pageNumber]);

  const changeValue = (e) => {
    setQuery(e);
    baseUrlF();
  };

  const nextClick = () => {
    if (pageNumber < 49) {
      setPageNumber(pageNumber + 1);
      baseUrlF();
    } else {
      setPageNumber(49);
    }
  };
  const prevClick = () => {
    if (pageNumber !== 0) {
      setPageNumber(pageNumber - 1);
      baseUrlF();
    } else {
      setPageNumber(0);
    }
  };
  return (
    <>
      <HeaderStyled>
        <Input
          placeholder={query.length < 1 ? "What are you looking for?" : query}
          onKeyDown={(e) => setTimeout(() => changeValue(e.target.value), 1000)}
        />
      </HeaderStyled>

      {data.hits.map((item) => (
        <Body
          key={item.objectID}
          title={item.title}
          date={item.created_at.slice(0, 10)}
          point={item.points}
          author={item.author}
          url={item.url}
        />
      ))}
      <Page
        pageNumber={pageNumber + 1}
        nextClick={() => nextClick()}
        prevClick={() => prevClick()}
      />
    </>
  );
};
