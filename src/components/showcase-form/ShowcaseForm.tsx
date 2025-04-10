import { Form, Group } from "react-aria-components";
import { Input } from "@tokens/input";
import { Button } from "@tokens/button";
import { NumberInput } from "@tokens/number-input";
import { Flex } from "@adobe/react-spectrum";
import { Slider } from "@tokens/slider/Slider";
import styles from "./ShowcaseForm.module.scss";
import { IconBin } from "@components/icons";
import { useCallback } from "react";
import { useShowcaseFormState } from "./useShowcaseForm";

export const ShowcaseForm = () => {
  const { state, dispatch } = useShowcaseFormState();

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      console.log("Form submitted with:", state);
    },
    [state],
  );

  const handleClear = () => {
    dispatch({ type: "RESET_FORM" });
  };

  return (
    <Form className={styles.form} onSubmit={handleSubmit}>
      <Flex marginBottom="24px">
        <Input
          label="Name"
          placeholder="enter text"
          value={state.name}
          onChange={(value) => dispatch({ type: "SET_NAME", payload: value })}
        />
      </Flex>
      <Group>
        <Flex gap="10px" direction="row">
          <NumberInput
            label="Size (GB)"
            value={state.size}
            onChange={(value) => {
              dispatch({ type: "SET_SIZE", payload: value });
            }}
            minValue={0}
            maxValue={100}
          />
          <Flex minWidth="175px" alignContent="end" direction="row" wrap="wrap">
            <Slider
              value={state.size}
              onChange={(value) =>
                dispatch({ type: "SET_SIZE", payload: value })
              }
              min={0}
              max={100}
              step={1}
            />
          </Flex>
        </Flex>
      </Group>
      <Flex
        gap="16px"
        direction="row"
        marginTop="32px"
        justifyContent="stretch"
        width="100%"
      >
        <Button
          variant="outlined"
          icon={<IconBin />}
          onPress={handleClear}
          type="button"
        >
          Clear
        </Button>
        <Button type="submit">Submit</Button>
      </Flex>
    </Form>
  );
};
