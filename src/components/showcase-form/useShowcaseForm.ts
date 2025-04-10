import { useCallback, useMemo, useReducer } from "react";

interface FormState {
  name: string;
  size: number;
}

type FormAction =
  | { type: "SET_NAME"; payload: string }
  | { type: "SET_SIZE"; payload: number }
  | { type: "RESET_FORM" };

const initialState: FormState = {
  name: "",
  size: 10,
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

export const useShowcaseFormState = () => {
  const [state, dispatch] = useReducer(formReducer, initialState);

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
