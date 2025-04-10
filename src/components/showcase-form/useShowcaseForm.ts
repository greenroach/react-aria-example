import { useCallback, useMemo, useReducer } from "react";
import type { FormState, ShowcaseFormProps } from "./types";

type FormAction =
  | { type: "SET_NAME"; payload: string }
  | { type: "SET_SIZE"; payload: number }
  | { type: "RESET_FORM" };

const initialState: FormState = {
  name: "",
  size: 0,
};

function formReducer(state: FormState, action: FormAction): FormState {
  switch (action.type) {
    case "SET_NAME":
      return { ...state, name: action.payload };
    case "SET_SIZE":
      return { ...state, size: action.payload };
    case "RESET_FORM":
      return initialState;
    default:
      return state;
  }
}

export const useShowcaseFormState = (initial: FormState = initialState) => {
  const [state, dispatch] = useReducer(formReducer, initial);

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      console.log("Form submitted with:", state);
    },
    [state],
  );

  return useMemo(
    () => ({ state, dispatch, handleSubmit }),
    [handleSubmit, state],
  );
};

export const useShowcaseFormProps = (
  initialState?: FormState,
): ShowcaseFormProps => {
  const { state, dispatch } = useShowcaseFormState(initialState);

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      console.log("Form submitted with:", state);
    },
    [state],
  );

  const handleClear = useCallback(() => {
    dispatch({ type: "RESET_FORM" });
  }, [dispatch]);

  const handleSizeChange = useCallback(
    (value: number) => {
      dispatch({ type: "SET_SIZE", payload: value });
    },
    [dispatch],
  );
  const handleNameChange = useCallback(
    (value: string) => {
      dispatch({ type: "SET_NAME", payload: value });
    },
    [dispatch],
  );

  return useMemo(
    () => ({
      state,
      handleSizeChange,
      handleNameChange,
      handleClear,
      handleSubmit,
    }),
    [handleClear, handleNameChange, handleSizeChange, handleSubmit, state],
  );
};
