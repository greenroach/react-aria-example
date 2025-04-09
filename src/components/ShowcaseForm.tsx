import { Form } from "react-aria-components";
import { Input } from "@tokens/input";
import { Button } from "@tokens/button";
import { NumberInput } from "@tokens/number-input";

export const ShowcaseForm = () => {
  return (
    <Form>
      <Input label="Label" placeholder="enter text" />
      <NumberInput label="Number Input" placeholder="enter number" />
      <Button
        size="small"
        variant="contained"
        theme="primary"
        onPress={() => console.log("Button clicked!")}
      >
        Click me
      </Button>
    </Form>
  );
};
