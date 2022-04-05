import Section from "./components/Section";
import Styled from "styled-components";

const Container = Styled.div`
display: flex;
justify-content: center;
height:100%;
align-items: center;
`;

function App() {
  return (
    <Container>
      <Section>
        <p>welcome</p>
      </Section>
    </Container>
  );
}
export default App;
