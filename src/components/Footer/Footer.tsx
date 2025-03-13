import { Facebook, Twitter, Linkedin } from "lucide-react";
import { LesEchosLogo } from "../LesEchosLogo";

type FooterSection = {
  title: string;
  links: string[];
};

const FOOTER_SECTIONS: FooterSection[] = [
  {
    title: "Pratique",
    links: [
      "Aide & Contact",
      "Signaler un contenu illicite",
      "Abonnement",
      "Publicité",
      "Abonnement presse numérique",
      "Entités du groupe",
      "Cookies",
      "Mentions légales",
      "Conditions générales et particulières",
      "Politique de confidentialité",
      "Charte éthique",
      "Flux RSS",
      "Archives",
      "Plan du site",
    ],
  },
  {
    title: "Services",
    links: [
      "Le journal",
      "Vidéos",
      "Mes articles",
      "Mes secteurs",
      "Newsletters",
      "Podcasts",
      "Infographies",
      "Thema",
    ],
  },
  {
    title: "Le Groupe",
    links: [
      "Les Echos",
      "Investir",
      "Entrepreneurs",
      "Les Echos Week-End",
      "Série Limitée",
      "Les Echos Start",
      "Mieux Vivre Votre Argent",
      "Planète",
      "Capital Finance",
      "Radio Classique",
      "Connaissance des Arts",
      "Historia",
      "ImaginE",
      "Les Echos événements",
      "Annonces Légales",
      "Marchés Publics",
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-background-light dark:bg-background-dark mt-16 pt-12 bg-surface-light dark:bg-surface-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-8">
            <div>
              <LesEchosLogo />
            </div>

            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-[#3b5998] text-white hover:opacity-80 transition-opacity"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-black text-white hover:opacity-80 transition-opacity"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-[#0077b5] text-white hover:opacity-80 transition-opacity"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>

            <div className="flex flex-col gap-4">
              <a href="#" className="block w-36">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                  alt="Télécharger dans l'App Store"
                  className="w-full"
                />
              </a>
              <a href="#" className="block w-36">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Disponible sur Google Play"
                  className="w-full"
                />
              </a>
            </div>
          </div>

          {FOOTER_SECTIONS.map((section) => (
            <div key={section.title}>
              <h2 className="font-bold text-text-primary-light dark:text-text-primary-dark mb-4">
                {section.title}
              </h2>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-text-secondary-light dark:text-text-secondary-dark hover:text-text-primary-light dark:hover:text-text-primary-dark transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 text-center text-text-secondary-light dark:text-text-secondary-dark text-sm font-semibold bg-background-light dark:bg-background-dark p-4 rounded-sm">
        Tous droits réservés - <span className="text-primary">Les Echos 2025</span>
      </div>
    </footer>
  );
}
