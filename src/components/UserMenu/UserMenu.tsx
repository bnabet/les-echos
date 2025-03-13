import { Bell, LogOut, Settings, X } from "lucide-react";

import { User } from "../../types";
import clsx from "clsx";

type UserMenuProps = {
  currentUser: User;
  switchUser: () => void;
  setUserMenuOpen: (value: boolean) => void;
};

export function UserMenu({ currentUser, switchUser, setUserMenuOpen }: UserMenuProps) {
  return (
    <div
      data-testid="user-menu-mobile"
      className="fixed inset-0 md:hidden z-50 bg-background-light dark:bg-background-dark flex flex-col"
    >
      {/* Header */}
      <div className="flex-none flex items-center justify-between p-4 border-b border-text-secondary-light/10 dark:border-text-secondary-dark/10">
        <span className="text-lg font-bold text-text-primary-light dark:text-text-primary-dark">
          Mon compte
        </span>
        <button
          onClick={() => setUserMenuOpen(false)}
          className="p-2 text-text-primary-light dark:text-text-primary-dark hover:bg-surface-light dark:hover:bg-surface-dark rounded-full transition-colors"
          aria-label="Fermer"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto">
        {/* User infos */}
        <div className="p-6 border-b border-text-secondary-light/10 dark:border-text-secondary-dark/10 space-y-6">
          <div className="flex items-start gap-4">
            <img
              src={currentUser.image}
              alt="avatar"
              className={clsx(
                "w-12 h-12 shrink-0 rounded-full object-cover transition-all duration-300"
              )}
            />

            <div className="flex flex-col">
              <span className="font-semibold text-text-primary-light dark:text-text-primary-dark truncate transition-all duration-300">
                {currentUser.firstName} {currentUser.lastName}
              </span>
              <span className="text-sm text-text-secondary-light dark:text-text-secondary-dark truncate transition-all duration-300">
                {currentUser.email}
              </span>
            </div>
          </div>

          <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark ">
            Abonnement actif depuis le 15 janvier 2024
          </p>

          {/* Action buttons */}
          <div className=" dark:border-text-secondary-dark/10">
            <div className="grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center gap-2 p-3 bg-surface-light dark:bg-surface-dark rounded-sm hover:bg-surface-light/80 dark:hover:bg-surface-dark/80 transition-colors">
                <Bell className="w-5 h-5 text-text-secondary-light dark:text-text-secondary-dark" />
                <span className="text-sm font-medium text-text-primary-light dark:text-text-primary-dark">
                  Notifications
                </span>
              </button>
              <button className="flex items-center justify-center gap-2 p-3 bg-surface-light dark:bg-surface-dark rounded-sm hover:bg-surface-light/80 dark:hover:bg-surface-dark/80 transition-colors">
                <Settings className="w-5 h-5 text-text-secondary-light dark:text-text-secondary-dark" />
                <span className="text-sm font-medium text-text-primary-light dark:text-text-primary-dark">
                  Paramètres
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* User links */}
        <div className="p-4 space-y-2">
          <button className="w-full text-left p-3 rounded-sm hover:bg-surface-light dark:hover:bg-surface-dark transition-colors">
            <span className="text-text-primary-light dark:text-text-primary-dark">
              Gérer mon abonnement
            </span>
          </button>
          <button className="w-full text-left p-3 rounded-sm hover:bg-surface-light dark:hover:bg-surface-dark transition-colors">
            <span className="text-text-primary-light dark:text-text-primary-dark">
              Mes newsletters
            </span>
          </button>
          <button className="w-full text-left p-3 rounded-sm hover:bg-surface-light dark:hover:bg-surface-dark transition-colors">
            <span className="text-text-primary-light dark:text-text-primary-dark">
              Mes articles sauvegardés
            </span>
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="flex-none p-4 border-t border-text-secondary-light/10 dark:border-text-secondary-dark/10 bg-background-light dark:bg-background-dark">
        <button
          onClick={switchUser}
          className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-primary hover:bg-primary-dark text-white rounded-sm transition-colors"
        >
          <LogOut className="w-5 h-5" />
          <span>Déconnexion</span>
        </button>
      </div>
    </div>
  );
}
