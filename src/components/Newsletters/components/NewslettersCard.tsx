import clsx from "clsx";

import { hasAccessToNewsletter } from "../../../api/newsletters";

import { NewslettersSubLogo } from "./NewslettersSubLogo";

import { Newsletter, User } from "../../../types";

type NewslettersCardProps = {
  newsletter: Newsletter;
  user: User;
};

export function NewslettersCard({ newsletter, user }: NewslettersCardProps) {
  const hasAccess = hasAccessToNewsletter(user, newsletter);

  return (
    <div className="bg-background-light dark:bg-surface-dark rounded-sm overflow-hidden flex flex-col h-full shadow-md">
      {/* Card image */}
      <div className="relative h-48 bg-surface-light dark:bg-surface-dark relative">
        <img
          src={newsletter.image}
          alt="Article image"
          className="w-full h-full object-cover"
          loading="lazy"
        />

        <div className="absolute inset-0 bg-black/75 flex flex-col items-center justify-center text-white text-center">
          <h3 className="text-2xl font-bold font-serif px-6">{newsletter.title}</h3>
          <span className="text-sm font-medium">{newsletter.schedules}</span>
        </div>

        {!hasAccess && (
          <div
            className="absolute top-2 right-2 p-2 bg-secondary text-white w-6 h-6 rounded-sm"
            data-testid="newsletters-sub-logo"
          >
            <NewslettersSubLogo className="w-5 h-5 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          </div>
        )}
      </div>

      {/* Card content */}
      <div className="p-6 flex flex-col flex-grow items-center">
        <p className="text-text-primary-light dark:text-text-secondary-dark text-center mb-6 flex-grow">
          {newsletter.description}
        </p>

        <button
          type="button"
          className={clsx(
            "w-full max-w-48 py-2 px-8 rounded-full font-medium transition-colors",
            hasAccess
              ? "bg-primary hover:bg-primary-dark text-white"
              : "bg-secondary hover:bg-secondary-dark"
          )}
        >
          {hasAccess ? "S'inscrire" : "S'abonner"}
        </button>
      </div>
    </div>
  );
}
