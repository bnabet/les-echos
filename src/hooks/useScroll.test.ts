import { renderHook, act } from "@testing-library/react";
import { useScroll } from "./useScroll";
import { vi, describe, test, expect, beforeEach, afterEach } from "vitest";

describe("useScroll hook", () => {
  beforeEach(() => {
    Object.defineProperty(window, "scrollY", {
      writable: true,
      configurable: true,
      value: 0,
    });

    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  test("should return false initially when scrollY is below threshold", () => {
    const { result } = renderHook(() => useScroll(50));
    expect(result.current).toBe(false);
  });

  test("should return true when scrollY exceeds threshold", () => {
    const { result } = renderHook(() => useScroll(50));

    act(() => {
      window.scrollY = 100;
      window.dispatchEvent(new Event("scroll"));

      vi.runAllTimers();
    });

    expect(result.current).toBe(true);
  });

  test("should remain false if scroll delta is small", () => {
    const { result } = renderHook(() => useScroll(50));

    act(() => {
      window.scrollY = 30;
      window.dispatchEvent(new Event("scroll"));
      vi.runAllTimers();
    });

    expect(result.current).toBe(false);
  });
});
