import styled from "@emotion/styled";
import { theme } from "../../styles/theme";
import Header from "../../components/common/header";
import Main from "../../components/choiceMenu/main";

export default function ChoiceMenuMain() {
  return (
    <Container>
      <Header />
      <Main />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  color: ${theme.blackColor};
`;
