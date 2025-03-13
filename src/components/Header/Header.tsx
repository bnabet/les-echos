import { Menu, Moon, Sun } from "lucide-react";
import { HeaderMarket } from "./components/HeaderMarket";
import { LesEchosLogo } from "../LesEchosLogo";
import { HeaderUser } from "./components/HeaderUser";
import { User } from "../../types";
import { useTheme } from "../../hooks/useTheme";
import { Navigation } from "../Navigation/Navigation";
import clsx from "clsx";

type HeaderProps = {
  currentUser: User;
  isScrolled: boolean;
  isSidebarOpen: boolean;
  switchUser: () => void;
  setSidebarOpen: (value: boolean) => void;
  setUserMenuOpen: (value: boolean) => void;
};

export function Header({
  currentUser,
  isScrolled,
  isSidebarOpen,
  switchUser,
  setSidebarOpen,
  setUserMenuOpen,
}: HeaderProps) {
  const { isDark, toggleTheme } = useTheme();

  const desktopLogoScale = isScrolled ? "scale(0.8)" : "scale(1)";
  const mobileLogoScale = isScrolled ? "scale(0.75)" : "scale(0.9)";

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 w-full z-30 bg-white shadow-md transition-transform duration-300 ease-in-out dark:bg-background-dark",
        isSidebarOpen ? "translate-x-64" : "translate-x-0"
      )}
      // style={{ height: "64px" }}
    >
      <HeaderMarket />

      <div
        className={clsx(
          "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col",
          isScrolled ? "gap-1" : "gap-2"
        )}
      >
        <div
          className={clsx(
            "flex items-center justify-between transition-[padding] duration-300 ease-out transform-gpu",
            isScrolled ? "py-3" : "py-4"
          )}
        >
          {/* LOGO Desktop */}
          <div
            className="hidden md:block transition-transform duration-300 ease-out origin-left transform-gpu"
            style={{ transform: desktopLogoScale }}
          >
            <LesEchosLogo />
          </div>

          {/* LOGO Mobile */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={() => setSidebarOpen(!isSidebarOpen)}
              className="p-2 -ml-2 text-text-primary-light dark:text-text-primary-dark"
              aria-label="Menu"
            >
              <Menu className="w-6 h-6" />
            </button>
            <div
              className="transition-transform duration-300 ease-out origin-left transform-gpu"
              style={{ transform: mobileLogoScale }}
            >
              <LesEchosLogo />
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* USER Desktop */}
            <div className="hidden md:flex items-center gap-4">
              <HeaderUser user={currentUser} isScrolled={isScrolled} />
              <button
                onClick={switchUser}
                className="px-4 py-1.5 bg-primary hover:bg-primary-dark text-white rounded-sm transition-colors"
              >
                Connexion
              </button>
            </div>

            {/* USER Mobile */}
            <button
              className="md:hidden"
              onClick={() => setUserMenuOpen(true)}
              aria-label="Menu utilisateur"
            >
              <HeaderUser user={currentUser} isScrolled={isScrolled} compact />
            </button>

            {/* THEME */}
            <button
              onClick={toggleTheme}
              className={clsx(
                "rounded-sm bg-surface-light dark:bg-surface-dark text-text-primary-light dark:text-text-primary-dark hover:bg-surface-light/80 dark:hover:bg-surface-dark/80 transition-all duration-300 ease-out transform-gpu",
                isScrolled ? "p-1.5" : "p-2",
                "md:p-2"
              )}
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun
                  className={clsx(
                    "transition-all duration-300 ease-out transform-gpu",
                    isScrolled ? "w-4 h-4" : "w-5 h-5",
                    "sm:w-5 sm:h-5"
                  )}
                />
              ) : (
                <Moon
                  className={clsx(
                    "transition-all duration-300 ease-out transform-gpu",
                    isScrolled ? "w-4 h-4" : "w-5 h-5",
                    "sm:w-5 sm:h-5"
                  )}
                />
              )}
            </button>
          </div>
        </div>

        <Navigation isScrolled={isScrolled} />
      </div>
    </header>
  );
}
