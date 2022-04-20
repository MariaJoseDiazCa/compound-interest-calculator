import { Formik, Form } from "formik";
import Section from "./components/Section";
import Input from "./components/Input";
import Button from "./components/Button";
import Container from "./components/Container";

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
            <Button>Calcular</Button>
          </Form>
        </Formik>
      </Section>
    </Container>
  );
}
export default App;
