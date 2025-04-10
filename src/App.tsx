import { ShowcaseForm } from "./components/showcase-form";
import "./App.scss";
import { Flex } from "@adobe/react-spectrum";

function App() {
  return (
    <Flex justifyContent="center" height="100vh" alignItems="center">
      <ShowcaseForm />
    </Flex>
  );
}

export default App;
