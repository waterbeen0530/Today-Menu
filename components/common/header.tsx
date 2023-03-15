import styled from "@emotion/styled";
import { theme } from "../../styles/theme";

export default function Header() {
  return (
    <Container>
      <Wrapper>
        <Logo>
          <img src="/img/header/logo.png" alt="" />
          오늘의 메뉴
        </Logo>

        <Frame>
          <p>랜덤 음식 디스펜서</p>
          <p>그 음식 뭐더라</p>
          <p>아 진짜 뭐먹지</p>
        </Frame>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 70px;
  border-bottom: solid 1px ${theme.lightGrayColor};
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${theme.whiteColor};
`;

const Wrapper = styled.div`
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.div`
  gap: 10px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  img {
    width: 30px;
  }
`;

const Frame = styled.div`
  gap: 16px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 14px;
  font-weight: 600;
  & > p:hover {
    color: ${theme.mainRedColor};
    transition: all 0.3s;
    cursor: pointer;
  }
`;
