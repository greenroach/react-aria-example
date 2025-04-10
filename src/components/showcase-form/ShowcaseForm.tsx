import { Form, Group } from "react-aria-components";
import { Input } from "@tokens/input";
import { Button } from "@tokens/button";
import { NumberInput } from "@tokens/number-input";
import { Flex } from "@adobe/react-spectrum";
import { Slider } from "@tokens/slider/Slider";
import styles from "./ShowcaseForm.module.scss";
import { IconBin } from "@components/icons";

export const ShowcaseForm = () => {
  return (
    <Form className={styles.form}>
      <Flex marginBottom="24px">
        <Input label="Name" placeholder="enter text" />
      </Flex>
      <Group>
        <Flex gap="10px" direction="row">
          <NumberInput label="Size (GB)" />
          <Flex minWidth="175px" alignContent="end" direction="row" wrap="wrap">
            <Slider />
          </Flex>
        </Flex>
      </Group>
      <Flex
        gap="10px"
        direction="row"
        marginTop="32px"
        justifyContent="stretch"
        width="100%"
      >
        <Button
          variant="outlined"
          icon={<IconBin />}
          onPress={() => console.log("Cancel clicked!")}
        >
          Clear
        </Button>
        <Button onPress={() => console.log("Cancel clicked!")}>Cancel</Button>
      </Flex>
    </Form>
  );
};
