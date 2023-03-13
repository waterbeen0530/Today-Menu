import styled from "@emotion/styled";
import { theme } from "../styles/theme";
import Header from "../components/common/header";
import Main from "../components/main/main";

export default function Home() {
  return (
    <Container>
      <Header />
      <Main />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: ${theme.blackColor};
`;
