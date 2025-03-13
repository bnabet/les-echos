import { useEffect, useState } from "react";

import { getNewsletters } from "../../../api/newsletters";
import { Newsletter, NewslettersBySite } from "../../../types";

export function useNewsletters() {
  const [newsletters, setNewsletters] = useState<NewslettersBySite>({});
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function loadNewsletters() {
      try {
        const data: Newsletter[] = await getNewsletters();

        const newslettersBySite = data.reduce<NewslettersBySite>((acc, newsletter) => {
          if (!acc[newsletter.site]) {
            acc[newsletter.site] = [];
          }
          acc[newsletter.site].push(newsletter);
          return acc;
        }, {});

        setNewsletters(newslettersBySite);
      } catch (error) {
        console.error("Erreur lors du chargement des newsletters", error);
      } finally {
        setLoading(false);
      }
    }

    loadNewsletters();
  }, []);

  return { newsletters, loading };
}
