import clsx from "clsx";
import { ExternalLink } from "lucide-react";

type MarketIndex = {
  name: string;
  value: number;
  change: number;
};

const MARKET_INDICES: MarketIndex[] = [
  { name: "Cac 40", value: 7941.91, change: -1.31 },
  { name: "Dow Jones", value: 41433.48, change: -1.14 },
  { name: "Nasdaq composite", value: 17436.1, change: -0.19 },
  { name: "Nikkei 225", value: 36735.11, change: -0.64 },
  { name: "Pétrole Brent", value: 69.92, change: +1.13 },
];

export function HeaderMarket() {
  return (
    <div className="bg-surface-light dark:bg-surface-dark border-b border-text-secondary-light/10 dark:border-text-secondary-dark/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-1">
          <div className="flex-1 overflow-x-auto scrollbar-hide">
            <div className="flex items-center gap-8 min-w-max pr-8">
              {MARKET_INDICES.map((index) => (
                <div key={index.name} className="flex items-center gap-2 whitespace-nowrap">
                  <span className="text-sm font-medium text-text-primary-light dark:text-text-primary-dark">
                    {index.name}
                  </span>
                  <span className="text-sm text-text-secondary-light dark:text-text-secondary-dark">
                    {index.value.toLocaleString("fr-FR", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </span>
                  <span
                    className={clsx(
                      "text-sm",
                      index.change >= 0
                        ? "text-green-600 dark:text-green-400"
                        : "text-red-600 dark:text-red-400"
                    )}
                  >
                    {index.change >= 0 ? "+" : ""}
                    {index.change.toLocaleString("fr-FR", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                    %
                  </span>
                </div>
              ))}
            </div>
          </div>
          <a
            href="#"
            className="flex items-center gap-1 text-sm text-text-secondary-light dark:text-text-secondary-dark hover:text-text-primary-light dark:hover:text-text-primary-dark transition-colors whitespace-nowrap ml-4"
          >
            Voir la bourse sur Investir
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
}
