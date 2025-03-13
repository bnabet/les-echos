import clsx from "clsx";
import { NAV_ITEMS } from "./constants";

type MobileSidebarProps = {
  isSidebarOpen: boolean;
  onMenuToggle: (isOpen: boolean) => void;
};

export function MobileSidebar({ isSidebarOpen, onMenuToggle }: MobileSidebarProps) {
  return (
    <>
      <nav
        className={clsx(
          "md:hidden fixed top-0 left-0 bottom-0 w-64 bg-background-light dark:bg-background-dark shadow-lg transform transition-transform duration-300 ease-in-out z-50",
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex flex-col h-full">
          <div className="p-4 border-b border-text-secondary-light/10 dark:border-text-secondary-dark/10">
            <span className="text-lg font-bold text-text-primary-light dark:text-text-primary-dark">
              Menu
            </span>
          </div>
          <div className="flex-1 overflow-y-auto">
            <ul className="p-4 space-y-4">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <a
                    href="#"
                    className={clsx(
                      "flex items-center space-x-4 p-2 text-text-secondary-light dark:text-text-secondary-dark hover:text-text-primary-light dark:hover:text-text-primary-dark transition-colors",
                      item.active ? "text-primary dark:text-primary-light" : ""
                    )}
                    onClick={() => onMenuToggle(false)}
                  >
                    {item.icon}
                    <span className="text-lg font-medium">{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/20 dark:bg-black/40 z-10 md:hidden"
          onClick={() => onMenuToggle(false)}
        />
      )}
    </>
  );
}
