import { Home, Newspaper, Clapperboard, BookmarkCheck, BookOpenText } from "lucide-react";

import { NavItem } from "../../types";

export const NAV_ITEMS: NavItem[] = [
  { label: "Accueil", icon: <Home className="w-5 h-5" />, active: true },
  { label: "Le journal", icon: <BookOpenText className="w-5 h-5" /> },
  { label: "Vidéos", icon: <Clapperboard className="w-5 h-5" /> },
  { label: "Mes articles", icon: <BookmarkCheck className="w-5 h-5" /> },
  { label: "Newsletters", icon: <Newspaper className="w-5 h-5" /> },
];
