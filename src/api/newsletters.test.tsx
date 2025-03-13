import { describe, test, expect } from "vitest";

import { hasAccessToNewsletter } from "./newsletters";
import { Newsletter, User } from "../types";

describe("hasAccessToNewsletter", () => {
  const newsletter: Newsletter = {
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

  test("returns true when user has a matching subscription", () => {
    expect(hasAccessToNewsletter(userWithAccess, newsletter)).toBe(true);
  });

  test("returns false when user does not have a matching subscription", () => {
    expect(hasAccessToNewsletter(userWithoutAccess, newsletter)).toBe(false);
  });

  test("returns false when user has no subscriptions", () => {
    expect(hasAccessToNewsletter(userWithoutSubscriptions, newsletter)).toBe(false);
  });
});
