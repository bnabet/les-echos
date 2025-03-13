export type Subscription = "RIGHT_1" | "RIGHT_2";

export type User = {
  id: string;
  firstName: string;
  lastName: string;
  gender: string;
  email: string;
  image: string;
  subscriptions: Subscription[];
};

export type Newsletter = {
  id: string;
  image: string;
  description: string;
  title: string;
  schedules: string | null;
  site: string;
  subscriptions: Subscription[];
};

export type NewslettersBySite = {
  [key: string]: Newsletter[];
};

export type NavItem = {
  label: string;
  icon: React.ReactNode;
  active?: boolean;
};
