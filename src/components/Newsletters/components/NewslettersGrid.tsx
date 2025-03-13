import { NewslettersCard } from "./NewslettersCard";

import { NewslettersBySite, User } from "../../../types";

const SITE_NAMES: { [key: string]: string } = {
  ECH: "Les échos",
  INV: "Investir",
  CPF: "Capital Finance",
  ETP: "Entrepreneurs",
};

type NewslettersGridProps = {
  newsletters: NewslettersBySite;
  user: User;
};

export function NewslettersGrid({ newsletters, user }: NewslettersGridProps) {
  return (
    <section className="space-y-16">
      {Object.entries(newsletters).map(([site, siteNewsletters]) => (
        <div key={site} className="space-y-6">
          <div className="relative border-b border-text-secondary-light/20 dark:border-text-secondary-dark/20">
            <h2 className="text-2xl font-bold text-text-primary-light dark:text-text-primary-dark uppercase inline-block relative pb-2">
              {SITE_NAMES[site]}
              <span className="absolute bottom-[-1px] left-0 right-0 h-[3px] bg-primary"></span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteNewsletters.map((newsletter) => (
              <NewslettersCard key={newsletter.id} newsletter={newsletter} user={user} />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
