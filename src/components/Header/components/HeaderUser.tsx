import clsx from "clsx";
import { User } from "../../../types";

type HeaderAvatarProps = {
  user: User;
  iconSize: string;
};

type HeaderUserProps = {
  user: User;
  isScrolled?: boolean;
  compact?: boolean;
};

function HeaderAvatar({ user, iconSize }: HeaderAvatarProps) {
  return (
    <img
      src={user.image}
      alt="avatar"
      className={clsx("shrink-0 rounded-full object-cover transition-all duration-300", iconSize)}
    />
  );
}

export function HeaderUser({ user, isScrolled, compact = false }: HeaderUserProps) {
  const iconSize = compact && isScrolled ? "w-7 h-7" : "w-8 h-8";

  if (compact) {
    return <HeaderAvatar user={user} iconSize={iconSize} />;
  }

  return (
    <div className="flex items-center gap-3 px-4">
      <HeaderAvatar user={user} iconSize={iconSize} />

      <div className="hidden md:flex flex-col">
        <span className="text-sm font-semibold text-text-primary-light dark:text-text-primary-dark truncate transition-all duration-300">
          {user.firstName} {user.lastName}
        </span>
        <span className="text-xs text-text-secondary-light dark:text-text-secondary-dark truncate transition-all duration-300">
          {user.email}
        </span>
      </div>
    </div>
  );
}
