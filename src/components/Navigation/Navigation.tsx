import clsx from "clsx";
import { NAV_ITEMS } from "./constants";

type NavigationProps = {
  isScrolled: boolean;
};

export function Navigation({ isScrolled }: NavigationProps) {
  return (
    <nav
      className={clsx("hidden md:block transition-all duration-300", isScrolled ? "pb-3" : "pb-4")}
    >
      <ul className="flex space-x-6">
        {NAV_ITEMS.map((item) => (
          <li key={item.label}>
            <a
              href="#"
              className={clsx(
                "flex items-center space-x-2 text-text-secondary-light dark:text-text-secondary-dark hover:text-text-primary-light dark:hover:text-text-primary-dark transition-colors",
                item.active ? "text-primary dark:text-primary-light" : ""
              )}
            >
              {item.icon}
              <span
                className={clsx("font-medium transition-all duration-300", {
                  "text-sm": isScrolled,
                  "text-base": !isScrolled,
                })}
              >
                {item.label}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
