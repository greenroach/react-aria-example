import { expect, it, describe, vi } from "vitest";
import { act, renderHook } from "@testing-library/react";
import { useShowcaseFormProps, useShowcaseFormState } from "./useShowcaseForm";

describe("useShowcaseFormState", () => {
  it("should return a default values", () => {
    const { result } = renderHook(() => useShowcaseFormState());

    expect(result.current.state).toMatchObject({ name: "", size: 0 });
  });

  it("should return a default values from props if they are provided", () => {
    const defaultState = { name: "Test Name", size: 42 };
    const { result } = renderHook(() => useShowcaseFormState(defaultState));

    expect(result.current.state).toMatchObject(defaultState);
  });

  it("should update the name when dispatching SET_NAME", () => {
    const { result } = renderHook(() => useShowcaseFormState());

    act(() => {
      result.current.dispatch({ type: "SET_NAME", payload: "Test Name" });
    });

    expect(result.current.state.name).toBe("Test Name");
  });

  it("should update the size when dispatching SET_SIZE", () => {
    const { result } = renderHook(() => useShowcaseFormState());

    act(() => {
      result.current.dispatch({ type: "SET_SIZE", payload: 33 });
    });

    expect(result.current.state.size).toBe(33);
  });

  it("should reset the form when dispatching RESET_FORM", () => {
    const { result } = renderHook(() => useShowcaseFormState());

    act(() => {
      result.current.dispatch({ type: "SET_NAME", payload: "Test Name" });
      result.current.dispatch({ type: "SET_SIZE", payload: 42 });
      result.current.dispatch({ type: "RESET_FORM" });
    });

    expect(result.current.state).toMatchObject({ name: "", size: 0 });
  });
});

describe("useShowcaseFormProps", () => {
  it("should initialize with default state", () => {
    const { result } = renderHook(() => useShowcaseFormProps());

    expect(result.current.state).toMatchObject({ name: "", size: 0 });
  });

  it("should initialize with provided initial state", () => {
    const initialState = { name: "Initial Name", size: 10 };
    const { result } = renderHook(() => useShowcaseFormProps(initialState));

    expect(result.current.state).toMatchObject(initialState);
  });

  it("should update the name using handleNameChange", () => {
    const { result } = renderHook(() => useShowcaseFormProps());

    act(() => {
      result.current.handleNameChange("Updated Name");
    });

    expect(result.current.state.name).toBe("Updated Name");
  });

  it("should update the size using handleSizeChange", () => {
    const { result } = renderHook(() => useShowcaseFormProps());

    act(() => {
      result.current.handleSizeChange(25);
    });

    expect(result.current.state.size).toBe(25);
  });

  it("should reset the form using handleClear", () => {
    const { result } = renderHook(() => useShowcaseFormProps());

    act(() => {
      result.current.handleNameChange("Name to Reset");
      result.current.handleSizeChange(50);
      result.current.handleClear();
    });

    expect(result.current.state).toMatchObject({ name: "", size: 0 });
  });

  it("should handle form submission using handleSubmit", () => {
    const { result } = renderHook(() => useShowcaseFormProps());
    const mockEvent = {
      preventDefault: vi.fn(),
    } as unknown as React.FormEvent;

    act(() => {
      result.current.handleNameChange("Submitted Name");
      result.current.handleSizeChange(100);
      result.current.handleSubmit(mockEvent);
    });

    expect(mockEvent.preventDefault).toHaveBeenCalled();
  });
});
