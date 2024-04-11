import Header from "@/components/Header";
import React from "react";
import styled from "styled-components";
import map from "@/assets/map.png";
import GlobalStyle from "@/components/GlobalStyle";

import { useState } from "react";
import ReportModal from "@/components/modal/ReportModal";

const MapImg = styled.img`
  background-image: url(${map});
  width: 100%;
  height: 50rem;
`;

const MainTopContainer = styled.div`
  margin-top: 15px;
  padding: 20px;
`;

const MainBottomContainer = styled.div`
  position: relative;
  margin-left: 1.5rem;
  margin-right: 1.5rem;
`;

const ListWrap = styled.ul`
  padding: 0 25px 0 25px;
  margin-bottom: 15rem;
`;

const MainList = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  border-bottom: 3px black solid;
  padding-bottom: 3px;
  font-weight: 900;
  font-size: 1.2rem;
`;

const ItemList = styled.li`
  display: flex;
  flex-direction: row;
  /* justify-content: space-around; */
  border-bottom: 2px gray solid;
  padding-top: 1rem;
  padding-bottom: 1rem;

  font-weight: 600;
  font-size: 1.1rem;
`;

const ListSpan = styled.span`
  flex: 1;
  text-align: center;
`;

const AroundArea = styled.h2`
  margin: 0;
  font-size: 1.5rem;
  font-weight: 900;

  padding: 1rem 1rem 1rem 1rem;
`;

const ReportButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  background-color: #ff9700;
  border: 0;
  border-radius: 10px;
  color: white;
  padding: 7px 7px 7px 7px;
  font-size: 1.1rem;
  cursor: pointer;
`;

function Main() {
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달창 상태 관리

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <>
      <GlobalStyle />
      <Header />
      <MainTopContainer>
        <MapImg></MapImg>
      </MainTopContainer>
      <MainBottomContainer>
        <AroundArea>내 주변 흡연구역</AroundArea>
        <ReportButton onClick={toggleModal}>+ 흡연구역 제보하기</ReportButton>
        {isModalOpen && <ReportModal onClose={toggleModal} />}{" "}
        <ListWrap>
          <MainList>
            <ListSpan>위치</ListSpan>
            <ListSpan>형태</ListSpan>
            <ListSpan>주소</ListSpan>
          </MainList>
          <ItemList>
            <ListSpan>왕십리광장 (북측)</ListSpan>
            <ListSpan>개방형</ListSpan>
            <ListSpan>서울 성동구 행당동 192-3</ListSpan>
          </ItemList>
          <ItemList>
            <ListSpan>왕십리민자역사 후면(6번 출구)</ListSpan>
            <ListSpan>개방형</ListSpan>
            <ListSpan>서울 성동구 행당동 1-137</ListSpan>
          </ItemList>
          <ItemList>
            <ListSpan>성수역 2번 출구 후면</ListSpan>
            <ListSpan>개방형</ListSpan>
            <ListSpan>서울 성동구 성수동 2가</ListSpan>
          </ItemList>
        </ListWrap>
      </MainBottomContainer>
    </>
  );
}

export default Main;