import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import { Newsletter, User } from "../../../types";
import { NewslettersCard } from "./NewslettersCard";

describe("NewslettersCard component", () => {
  const mockNewsletter: Newsletter = {
    id: "newsletter1",
    image: "http://example.com/image.jpg",
    description: "A description of the newsletter.",
    title: "Newsletter Title",
    schedules: "Every Monday",
    site: "AAA",
    subscriptions: ["RIGHT_1"],
  };

  const userWithAccess: User = {
    id: "user1",
    firstName: "John",
    lastName: "Doe",
    gender: "M",
    email: "john@example.com",
    image: "http://example.com/avatar.png",
    subscriptions: ["RIGHT_1", "RIGHT_2"],
  };

  const userWithoutAccess: User = {
    id: "user2",
    firstName: "Jane",
    lastName: "Doe",
    gender: "F",
    email: "jane@example.com",
    image: "http://example.com/avatar2.png",
    subscriptions: ["RIGHT_2"],
  };

  const userWithoutSubscriptions: User = {
    id: "user3",
    firstName: "Jamie",
    lastName: "Doe",
    gender: "M",
    email: "jamie@example.com",
    image: "http://example.com/avatar3.png",
    subscriptions: [],
  };

  test("renders 'S'inscrire' button when user has access", () => {
    render(<NewslettersCard newsletter={mockNewsletter} user={userWithAccess} />);

    expect(screen.getByRole("button")).toHaveTextContent("S'inscrire");
    expect(screen.queryByTestId("newsletters-sub-logo")).toBeNull();
  });

  test("renders 'S'abonner' button when user does not have access", () => {
    render(<NewslettersCard newsletter={mockNewsletter} user={userWithoutAccess} />);

    expect(screen.getByRole("button")).toHaveTextContent("S'abonner");
    expect(screen.getByTestId("newsletters-sub-logo")).toBeInTheDocument();
  });

  test("renders 'S'abonner' button when user has no subscriptions", () => {
    render(<NewslettersCard newsletter={mockNewsletter} user={userWithoutSubscriptions} />);

    expect(screen.getByRole("button")).toHaveTextContent("S'abonner");
    expect(screen.getByTestId("newsletters-sub-logo")).toBeInTheDocument();
  });
});
