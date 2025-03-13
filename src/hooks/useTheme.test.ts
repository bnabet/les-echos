import { renderHook, act } from "@testing-library/react";
import { useTheme } from "./useTheme";
import { describe, test, expect } from "vitest";

describe("useTheme hook", () => {
  test("should default to light theme (isDark false) and toggleTheme works", () => {
    const { result } = renderHook(() => useTheme());

    expect(result.current.isDark).toBe(false);

    act(() => {
      result.current.toggleTheme();
    });
    expect(result.current.isDark).toBe(true);

    act(() => {
      result.current.toggleTheme();
    });
    expect(result.current.isDark).toBe(false);
  });
});
