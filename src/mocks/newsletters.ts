import { Newsletter } from "../types";

export const NEWSLETTER_ITEMS: Newsletter[] = [
  {
    id: "000000000000000000000000",
    image:
      "https://media.lesechos.com/api/v1/images/view/5ccaaf3dd286c26c6330ff49/300x200-webp/matinale.webp",
    description:
      "Chaque matin. les articles qui font la une de l'actualité pour ne rien rater des titres de la matinée.",
    title: "La matinale",
    schedules: "Du lundi au vendredi à 8h30",
    site: "ECH",
    subscriptions: ["RIGHT_1"],
  },
  {
    id: "000000000000000000000001",
    image:
      "https://media.lesechos.com/api/v1/images/view/66632ed855157b445b22ccda/300x200/les-exclus-de-8h30-min.png",
    description:
      "Des informations exclusives de notre Rédaction pour avoir un coup d’avance et agir dès l’ouverture des marchés.",
    title: "Les Exclusifs de 8h30",
    schedules: "Quotidienne",
    site: "INV",
    subscriptions: ["RIGHT_2"],
  },
  {
    id: "000000000000000000000002",
    image:
      "https://media.lesechos.com/api/v1/images/view/67b5cef558dc9d4f874a3c9c/300x200/quotidienne.png",
    description:
      "Chaque jour, l'essentiel de l'actualité M&A et Private Equity pour un tour d'horizon rapide et efficace du marché.",
    title: "Quotidienne",
    schedules: "Du lundi au vendredi à 18h",
    site: "CPF",
    subscriptions: ["RIGHT_1"],
  },
  {
    id: "000000000000000000000003",
    image:
      "https://media.lesechos.com/api/v1/images/view/655c85a163ff9560f1592a0b/300x200/adieu-la-crise.png",
    description:
      "Chaque semaine, un kit de survie pour les entrepreneurs. Actu, témoignages, conseils : la résilience en action.",
    title: "Entrepreneurs : adieu la crise !",
    schedules: "Hebdomadaire",
    site: "ETP",
    subscriptions: [],
  },
  {
    id: "000000000000000000000004",
    image:
      "https://media.lesechos.com/api/v1/images/view/5ccaae3c8fe56f32f4167085/300x200-webp/matinale-premium.webp",
    description:
      "Tout ce qu'il faut savoir pour démarrer la journée dans notre condensé de l'actualité préparé spécialement pour nos abonnés.",
    title: "La matinale des abonnés",
    schedules: "Du lundi au vendredi à 8h30",
    site: "ECH",
    subscriptions: ["RIGHT_2"],
  },
  {
    id: "000000000000000000000005",
    image:
      "https://media.lesechos.com/api/v1/images/view/66632fee7543dd476c7e99a9/300x200/mi-seance-min.png",
    description:
      "Les dernières informations marchés et valeurs à connaitre avant l’ouverture de la séance pour faciliter vos arbitrages.",
    title: "Morning mail",
    schedules: "Quotidienne",
    site: "INV",
    subscriptions: [],
  },
  {
    id: "000000000000000000000006",
    image:
      "https://media.lesechos.com/api/v1/images/view/5c794ffa8fe56f476c18a2b7/300x200/capfi-8h30.jpeg",
    description:
      "En exclusivité, chaque vendredi nos journalistes sélectionnent l'essentiel de l'actu corporate finance.",
    title: "Les indispensables de la rédaction",
    schedules: "Tous les vendredis à 8h30",
    site: "CPF",
    subscriptions: [],
  },
  {
    id: "000000000000000000000007",
    image:
      "https://media.lesechos.com/api/v1/images/view/655c85c2eee53229630b023b/300x200/entrepreneurs.png",
    description: "L'actualité du monde des entreprises et des entrepreneurs.",
    title: "L'hebdo",
    schedules: "Tous les mardis",
    site: "ETP",
    subscriptions: ["RIGHT_1"],
  },
  {
    id: "000000000000000000000008",
    image: "https://media.lesechos.com/api/v1/images/view/5e38544bd286c22748027b23/300x200/18h.jpg",
    description:
      "Chaque soir les articles qui font la une de l'actualité pour ne rien rater des titres de la journée.",
    title: "Les titres de 18h",
    schedules: "Du lundi au vendredi à 8h30",
    site: "ECH",
    subscriptions: ["RIGHT_1"],
  },
  {
    id: "000000000000000000000009",
    image:
      "https://media.lesechos.com/api/v1/images/view/636929e6b29f430c29312cb4/300x200/investir-miseance.jpg",
    description:
      "Le point d’étape indispensable pour vous aider à optimiser vos arbitrages pour le reste de la séance.",
    title: "Mi-Séance",
    schedules: "Quotidienne",
    site: "INV",
    subscriptions: ["RIGHT_1"],
  },
  {
    id: "000000000000000000000010",
    image:
      "https://media.lesechos.com/api/v1/images/view/67b5cf4b10a67619a83a370a/300x200/breaking-news.png",
    description:
      "L'article scoop vient à vous. Recevez en \"live\" l'information exclusive, affichée dans son intégralité et agrémentée de chiffres clés.",
    title: "Breaking News",
    schedules: null,
    site: "CPF",
    subscriptions: ["RIGHT_2"],
  },
  {
    id: "000000000000000000000011",
    image:
      "https://media.lesechos.com/api/v1/images/view/655c85d6abaee170544d3619/300x200/toujours-plus-haut.png",
    description: "Découvrez des femmes qui font bouger les lignes, et leurs leçons de vie.",
    title: "Toujours plus haut",
    schedules: "Mensuel",
    site: "ETP",
    subscriptions: ["RIGHT_1"],
  },
  {
    id: "000000000000000000000012",
    image:
      "https://media.lesechos.com/api/v1/images/view/5d6d14ef8fe56f1922495bd6/300x200/18h-premium.png",
    description:
      "Retrouvez un décryptage de l'actualité du jour par un de nos rédacteurs en chef, à lire sans quitter sa boîte de réception et préparé spécialement pour nos abonnés.",
    title: "La 18h des abonnés",
    schedules: "Du lundi au vendredi à 8h30",
    site: "ECH",
    subscriptions: ["RIGHT_2"],
  },
  {
    id: "000000000000000000000013",
    image:
      "https://media.lesechos.com/api/v1/images/view/636929373301a249aa5e05a7/300x200/investir-cloture.jpg",
    description:
      "Le retour sur la séance écoulée avec les principaux événements marchés et valeurs pour vous aider à préparer la séance du lendemain.",
    title: "Clôture",
    schedules: "Quotidienne",
    site: "INV",
    subscriptions: ["RIGHT_1"],
  },
  {
    id: "000000000000000000000014",
    image:
      "https://media.lesechos.com/api/v1/images/view/608165558fe56f4c0e234406/300x200/capfi-lbo.jpg",
    description:
      "Chaque jeudi, la rédaction sélectionne les cinq LBO les plus marquants de la semaine écoulée.",
    title: "L'essentiel du LBO",
    schedules: "Tous les jeudis",
    site: "CPF",
    subscriptions: ["RIGHT_1"],
  },
  {
    id: "000000000000000000000015",
    image:
      "https://media.lesechos.com/api/v1/images/view/5c877de18fe56f2099671855/300x200/zoom-echos.jpg",
    description:
      "Recevez un focus sur LE sujet d'actualité du moment. Une sélection d'articles à ne pas manquer pour mieux comprendre.",
    title: "Le Zoom des Echos",
    schedules: "Du lundi au vendredi à 8h30",
    site: "ECH",
    subscriptions: [],
  },
  {
    id: "000000000000000000000016",
    image:
      "https://media.lesechos.com/api/v1/images/view/66632fcee6098b38fe764e4b/300x200/enquete-de-la-semaine-min.png",
    description:
      "Chaque semaine, les enquêtes de la Rédaction sur une valeur, un secteur ou un événement marché pour améliorer votre connaissance du marché.",
    title: "Enquête de la semaine",
    schedules: "Hebdomadaire",
    site: "INV",
    subscriptions: ["RIGHT_2"],
  },
  {
    id: "000000000000000000000017",
    image:
      "https://media.lesechos.com/api/v1/images/view/5c8285193e4546721d449b87/300x200/21h30.jpg",
    description:
      "Recevez votre journal en version numérique dès 21h30 la veille de sa parution. Réservé aux abonnés Entreprises et Pro.",
    title: "Votre journal à 21h30",
    schedules: "Du lundi au vendredi à 8h30",
    site: "ECH",
    subscriptions: ["RIGHT_2"],
  },
  {
    id: "000000000000000000000018",
    image:
      "https://media.lesechos.com/api/v1/images/view/66633098f49ec35a4c4a829b/300x200/la-semaine-en-bourse-min.png",
    description:
      "Les arbitrages de François Monnier en avant-première sur nos portefeuilles Investir 10, sélections des valeurs à avoir dans son portefeuille pour optimiser ses investissements.",
    title: "Investir 10 en avant-première",
    schedules: "Hebdomadaire",
    site: "INV",
    subscriptions: ["RIGHT_2"],
  },
];
