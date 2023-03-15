import styled from "@emotion/styled";
import { theme } from "../../styles/theme";
import axios from "axios";
import { useEffect } from "react";

export default function Main() {
  const getFoodInfo = async () => {
    try {
      const res = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/random.php"
      );
      const data = res.data.meals[0];
      console.log(data);
      return data;
    } catch (error) {
      console.error(error);
    }
  };
  const foodInfohandler = async () => {
    const foodInfo = await getFoodInfo();
  };
  useEffect(() => {
    foodInfohandler();
  }, []);

  return (
    <Container>
      <Wrapper>
        <Text>
          <h1>아 진짜 뭐먹지?</h1>
          <p>나의 취향을 바탕으로 식사 메뉴를 추천받아 보세요!</p>
        </Text>
        <Image src="/img/choiceMenu/foods.png"></Image>
        <Button>메뉴 추천 테스트 시작!</Button>
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
  background-color: ${theme.whiteColor};
`;

const Wrapper = styled.div`
  width: 430px;
  height: 500px;
  margin-top: 60px;
  border-radius: 6px;
  border: solid 1px ${theme.lightGrayColor};
  background-color: ${theme.whiteColor};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Text = styled.div`
  text-align: center;
  & > h1 {
    font-size: 30px;
  }
  & > p {
    margin: 10px 0 0 0;
    font-size: 14px;
  }
`;

const Image = styled.img`
  width: 60%;
  margin: 30px 0 40px 0;
`;

const Button = styled.button`
  width: 240px;
  height: 40px;
  border: none;
  border-radius: 4px;
  outline: none;
  font-size: 14px;
  font-weight: 700;
  color: ${theme.whiteColor};
  background-color: ${theme.mainRedColor};
  cursor: pointer;
`;
