import { Loader2 } from "lucide-react";

import { useNewsletters } from "./hooks/useNewsletters";
import { NewslettersGrid } from "./components/NewslettersGrid";

import { User } from "../../types";

type NewslettersProps = {
  currentUser: User;
};

export function Newsletters({ currentUser }: NewslettersProps) {
  const { newsletters, loading } = useNewsletters();

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center space-y-4 flex-1">
        <span className="text-text-secondary-light dark:text-text-secondary-dark">
          Chargement des newsletters...
        </span>
        <Loader2 className="w-8 h-8 animate-spin text-text-secondary-light dark:text-text-secondary-dark" />
      </div>
    );
  }

  return <NewslettersGrid newsletters={newsletters} user={currentUser} />;
}
