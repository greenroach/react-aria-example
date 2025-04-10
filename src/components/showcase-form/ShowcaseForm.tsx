import { Form, Group } from "react-aria-components";
import { Input } from "@tokens/input";
import { Button } from "@tokens/button";
import { NumberInput } from "@tokens/number-input";
import { Flex } from "@adobe/react-spectrum";
import { Slider } from "@tokens/slider/Slider";
import styles from "./ShowcaseForm.module.scss";
import { IconBin } from "@components/icons";

import { FC } from "react";
import { ShowcaseFormProps } from "./types";

const MIN_VALUE = 0;
const MAX_VALUE = 100;

export const ShowcaseForm: FC<ShowcaseFormProps> = ({
  state,
  handleClear,
  handleSubmit,
  handleNameChange,
  handleSizeChange,
  minValue = MIN_VALUE,
  maxValue = MAX_VALUE,
  step = 1,
}) => {
  return (
    <Form className={styles.form} onSubmit={handleSubmit}>
      <Flex marginBottom="24px">
        <Input
          label="Name"
          placeholder="enter text"
          value={state.name}
          name="name"
          onChange={handleNameChange}
        />
      </Flex>
      <Group>
        <Flex gap="10px" direction="row">
          <NumberInput
            label="Size (GB)"
            value={state.size}
            onChange={handleSizeChange}
            minValue={minValue}
            maxValue={maxValue}
            name="size"
          />
          <Flex minWidth="175px" alignContent="end" direction="row" wrap="wrap">
            <Slider
              value={state.size}
              onChange={(value) => {
                if (typeof value === "number") {
                  handleSizeChange(value);
                }
              }}
              minValue={minValue}
              maxValue={maxValue}
              step={step}
              aria-label="Size Slider"
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
