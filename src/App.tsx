import { useCallback, useEffect, useState } from "react";
import clsx from "clsx";

import { useScroll } from "./hooks/useScroll";

import { Header } from "./components/Header/Header";
import { Newsletters } from "./components/Newsletters/Newsletters";
import { Footer } from "./components/Footer/Footer";
import { UserMenu } from "./components/UserMenu/UserMenu";
import { MobileSidebar } from "./components/Navigation/MobileSidebar";

import { User } from "./types";
import {
  USER_WITH_MULTIPLE_SUBSCRIPTION,
  USER_WITH_ONE_SUBSCRIPTION,
  USER_WITHOUT_SUBSCRIPTION,
} from "./mocks/user";

function App() {
  const [currentUserIndex, setCurrentUserIndex] = useState(0);
  const [isUserMenuOpen, setUserMenuOpen] = useState(false);
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const isScrolled = useScroll(80);

  const users: User[] = [
    USER_WITH_MULTIPLE_SUBSCRIPTION,
    USER_WITH_ONE_SUBSCRIPTION,
    USER_WITHOUT_SUBSCRIPTION,
  ];

  const currentUser = users[currentUserIndex];

  useEffect(() => {
    document.body.style.overflow = isSidebarOpen || isUserMenuOpen ? "hidden" : "unset";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isSidebarOpen, isUserMenuOpen]);

  const switchUser = useCallback(() => {
    setCurrentUserIndex((prevIndex) => (prevIndex + 1) % users.length);
    setUserMenuOpen(false);
  }, [users.length]);

  return (
    <div className="relative min-h-screen bg-background-light dark:bg-background-dark overflow-x-hidden">
      <MobileSidebar isSidebarOpen={isSidebarOpen} onMenuToggle={setSidebarOpen} />

      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/20 dark:bg-black/40 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {isUserMenuOpen && (
        <UserMenu
          currentUser={currentUser}
          switchUser={switchUser}
          setUserMenuOpen={setUserMenuOpen}
        />
      )}

      <Header
        currentUser={currentUser}
        isScrolled={isScrolled}
        isSidebarOpen={isSidebarOpen}
        switchUser={switchUser}
        setSidebarOpen={setSidebarOpen}
        setUserMenuOpen={setUserMenuOpen}
      />

      <div
        className={clsx(
          "transition-transform duration-300 ease-in-out pt-24 md:pt-36",
          isSidebarOpen ? "translate-x-64" : "translate-x-0"
        )}
      >
        <main className="w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="bg-surface-light dark:bg-surface-dark text-center mb-12 p-4 rounded-sm shadow-sm space-y-3">
              <h1 className="text-2xl font-bold text-text-primary-light dark:text-text-primary-dark uppercase">
                Newsletters
              </h1>
              <p className="text-text-secondary-light dark:text-text-secondary-dark">
                Dans cette page, vous retrouvez l'ensemble des newsletters des Échos et des marques
                satellites. Ainsi, vous pouvez découvrir toutes nos newsletters selon vos centres
                d'intérêt et gérer plus facilement l'inscription à vos newsletters.
              </p>
            </div>

            <Newsletters currentUser={currentUser} />
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;
