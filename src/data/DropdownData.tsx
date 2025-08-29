const bloodGroups=[
    {value: "A_POSITIVE", label: "A+"},
    {value: "A_NEGATIF", label: "A-"},
    {value: "B_POSITIVE", label: "B+"},
    {value: "B_NEGATIF", label: "B-"},
    {value: "O_POSITIVE", label: "O+"},
    {value: "O_NEGATIF", label: "O-"},
    {value: "AB_POSITIVE", label: "AB+"},
    {value: "AB_NEGATIF", label: "AB-"},
];
const bloodGroup: Record<string, string> = {
  A_POSITIVE: "A+",
  A_NEGATIF: "A-",
  B_POSITIVE: "B+",
  B_NEGATIF: "B-",
  O_POSITIVE: "O+",
  O_NEGATIF: "O-",
  AB_POSITIVE: "AB+",
  AB_NEGATIF: "AB-"
};

const doctorSpecializations=[
    "Cardiology",
    "Neurology",
    "Orthopedics",
    "Pediatrics",
    "Dermatology",
    "General surgery",
    "Psychiatry",
    "Radiology",
    "Gynecology",
    "Ophtalmology"
];
const doctorDepartments=[
    "Cardiology",
    "Neurology",
    "Orthopedics",
    "Pediatrics",
    "Dermatology",
    "Surgery",
    "Psychiatry",
    "Radiology",
    "Gynecology",
    "Ophtalmology",
    "ENT",
    "Anesthesiology",
    "Pathology",
    "Emergency Medicine"
];
const internshipOffers = [
    {
      id: 1,
      title: "Analyse de données",
      company: "ResearchCenter",
      location: "Emana, Cameroun",
      duration: "2 mois",
      category: "Data Science",
      description:
        "Au sein d'une entreprise de marketing digital à Oran, vous contribuerez à l'analyse des données comportementales des clients afin d'optimiser les campagnes publicitaires.",
      period: "7/1/2025 - 8/31/2025",
      missions: ["Collecte et analyse de données clients", "Création de tableaux de bord", "Reporting hebdomadaire"],
    },
    {
      id: 2,
      title: "Design Graphique",
      company: "ResearchCenter",
      location: "Yaoundé, Cameroun",
      duration: "2 mois",
      category: "Multimédia",
      description: "Rejoignez notre équipe créative pour développer des supports visuels innovants.",
      period: "7/1/2025 - 8/31/2025",
      missions: ["Création de supports visuels", "Identité de marque", "Design web"],
    },
    {
      id: 3,
      title: "Développeur Mobile",
      company: "ResearchCenter",
      location: "Emana",
      duration: "3 mois",
      category: "Informatique",
      description: "Développement d'applications mobiles natives et hybrides.",
      period: "7/1/2025 - 9/30/2025",
      missions: ["Développement iOS/Android", "Tests et débogage", "Documentation technique"],
    },
  ]

export { bloodGroups, doctorSpecializations, doctorDepartments, bloodGroup, internshipOffers };