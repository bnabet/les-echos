import { User, Subscription } from "../types";

const FIRST_USER: Omit<User, "subscriptions"> = {
  id: "507f1f77bcf86cd799439011",
  firstName: "John",
  lastName: "Doe",
  gender: "M",
  email: "john.doe@example.com",
  image: "https://www.svgrepo.com/show/27220/avatar.svg",
};

const SECOND_USER: Omit<User, "subscriptions"> = {
  id: "507f1f77bcf86cd799439012",
  firstName: "Olivia",
  lastName: "Bennett",
  gender: "F",
  email: "olivia.bennet@example.com",
  image: "https://www.svgrepo.com/show/8138/avatar.svg",
};

const THIRD_USER: Omit<User, "subscriptions"> = {
  id: "507f1f77bcf86cd799439013",
  firstName: "Ethan",
  lastName: "Harper",
  gender: "M",
  email: "ethan.harper@example.com",
  image: "https://www.svgrepo.com/show/106358/avatar.svg",
};

export const USER_WITH_ONE_SUBSCRIPTION: User = {
  ...FIRST_USER,
  subscriptions: ["RIGHT_1"] as Subscription[],
};

export const USER_WITHOUT_SUBSCRIPTION: User = {
  ...SECOND_USER,
  subscriptions: [] as Subscription[],
};

export const USER_WITH_MULTIPLE_SUBSCRIPTION: User = {
  ...THIRD_USER,
  subscriptions: ["RIGHT_1", "RIGHT_2"] as Subscription[],
};
