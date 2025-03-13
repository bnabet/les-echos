/// <reference types="@testing-library/jest-dom" />
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
import * as useScrollHook from "./hooks/useScroll";
import { vi, describe, test, expect } from "vitest";

vi.spyOn(useScrollHook, "useScroll").mockReturnValue(false);

describe("App component", () => {
  test("renders the newsletters title", () => {
    render(<App />);

    const titleElement = screen.getByRole("heading", { name: /newsletters/i });
    expect(titleElement).toBeInTheDocument();
  });

  test("opens user menu when button is clicked", async () => {
    render(<App />);

    const menuButton = screen.getByRole("button", { name: /menu utilisateur/i });
    expect(menuButton).toBeInTheDocument();

    await userEvent.click(menuButton);

    const userMenu = await screen.findByTestId("user-menu-mobile");
    expect(userMenu).toBeInTheDocument();
  });

  test('sets body overflow to "hidden" when user menu is open and resets when closed', async () => {
    render(<App />);

    expect(document.body.style.overflow).toBe("unset");

    const menuButton = screen.getByRole("button", { name: /menu utilisateur/i });
    await userEvent.click(menuButton);

    expect(document.body.style.overflow).toBe("hidden");
  });

  test("switchUser changes the current user displayed in the header", async () => {
    render(<App />);

    const initialUserName = screen.getByText(/ethan harper/i);
    expect(initialUserName).toBeInTheDocument();

    const switchUserButton = screen.getByRole("button", { name: /connexion/i });
    await userEvent.click(switchUserButton);

    const newUserName = await screen.findByText(/john doe/i);
    expect(newUserName).toBeInTheDocument();
  });
});
