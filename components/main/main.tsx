import styled from "@emotion/styled";
import { theme } from "../../styles/theme";

export default function Main() {
  const item = [
    {
      title: "랜덤 음식 디스펜서",
      content: "랜덤으로 추천하는 식사 메뉴를 확인해보세요.",
    },
    {
      title: "아 그 음식 뭐더라",
      content: "원하는 음식을 검색하고 확인해보세요.",
    },
    {
      title: "아 진짜 뭐먹지?",
      content: "간단한 테스트를 통해 식사 메뉴를 추천 받아보세요.",
    },
  ];
  return (
    <Container>
      <Wrapper>
        <Text>
          <h1>오늘의 메뉴</h1>
          <p>
            선택장애로 인하여 식사 메뉴를 고민하는 <br />
            모든 이들에게 이 사이트를 드립니다.
          </p>
        </Text>

        <Frame>
          {item.map((arr, i) => (
            <Items key={i}>
              <TextBox>
                <h1>{arr.title}</h1>
                <p>{arr.content}</p>
              </TextBox>
              <RouteButton>바로가기</RouteButton>
            </Items>
          ))}
        </Frame>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 70%;
  margin-top: 90px;
  gap: 140px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
`;

const Text = styled.div`
  width: 100%;
  text-align: start;
  h1 {
    margin: 0;
    font-size: 40px;
  }
  p {
    margin: 20px 0 0 0;
    font-size: 14px;
  }
`;

const Frame = styled.div`
  width: 100%;
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(3, 1fr);
`;

const Items = styled.div`
  padding: 40px 30px;
  border-radius: 6px;
  background-color: ${theme.whiteColor};
  border: solid 1px ${theme.lightGrayColor};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  &:hover {
    animation: shaking 0.3s;
    animation-direction: alternate;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
    cursor: pointer;
  }

  @keyframes shaking {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-20px);
    }
  }
`;

const TextBox = styled.div`
  h1 {
    font-size: 22px;
    margin: 0;
  }
  p {
    font-size: 12px;
    margin: 10px 0 0 0;
  }
`;

const RouteButton = styled.div`
  width: 100px;
  height: 30px;
  margin-top: 40px;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${theme.whiteColor};
  font-weight: 600;
  font-size: 12px;
  background-color: ${theme.mainRedColor};
  cursor: pointer;
`;
