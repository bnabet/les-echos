import { NEWSLETTER_ITEMS } from "../mocks/newsletters";
import { Newsletter, User } from "../types";

export async function getNewsletters(): Promise<Newsletter[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(NEWSLETTER_ITEMS);
    }, 1500);
  });
}

export const hasAccessToNewsletter = (user: User, newsletter: Newsletter): boolean => {
  if (newsletter.subscriptions.length === 0) return true;

  return newsletter.subscriptions.some((right) => user.subscriptions.includes(right));
};
