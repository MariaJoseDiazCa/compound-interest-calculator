import Styled from "styled-components";
import { Formik, Form } from "formik";
import Section from "./components/Section";
import Input from "./components/Input";

const Container = Styled.div`
display: flex;
justify-content: center;
height:100%;
align-items: center;
`;

function App() {
  const handleSubmit = () => {};
  return (
    <Container>
      <Section>
        <Formik
          initialValues={{
            deposit: "",
            constribution: "",
            years: "",
            rate: "",
          }}
          onSubmit={handleSubmit}
        >
          <Form>
            <Input name="deposit" label="Depósito inicial" />
            <Input name="constribution" label="Contibución anual" />
            <Input name="years" label="Años" />
            <Input name="rate" label="Interés estimado" />
          </Form>
        </Formik>
      </Section>
    </Container>
  );
}
export default App;
