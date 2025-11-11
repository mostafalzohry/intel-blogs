import { Article, FilterOptions } from "@/types/article.types";

export const mockArticles: Article[] = [
  {
    id: "1",
    date: "20 May, 2024",
    type: "Data Breach",
    title: "Critical Infrastructure Vulnerability Discovered in Energy Sector",
    description:
      "Security researchers have identified a critical vulnerability affecting major energy infrastructure systems across multiple regions...",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=600&fit=crop",
    targetSectors: ["Energy", "Critical Infrastructure"],
    targetLocation: ["United States", "Europe"],
    threatActors: ["APT29", "Unknown"],
    tags: [
      "Critical",
      "Energy",
      "Infrastructure",
      "Vulnerability",
      "Security",
      "Alert",
    ],
  },
  {
    id: "2",
    date: "19 May, 2024",
    type: "Ransomware",
    title: "Healthcare Organizations Face Increased Ransomware Attacks",
    description:
      "Multiple healthcare providers report sophisticated ransomware campaigns targeting patient data and hospital systems...",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
    targetSectors: ["Healthcare", "Medical Services"],
    targetLocation: ["United Kingdom", "Canada"],
    threatActors: ["LockBit 3.0"],
    tags: [
      "Ransomware",
      "Healthcare",
      "Patient Data",
      "Cyber Attack",
      "Medical",
      "Emergency",
    ],
  },
  {
    id: "3",
    date: "18 May, 2024",
    type: "Phishing Campaign",
    title: "Sophisticated Phishing Campaign Targets Financial Institutions",
    description:
      "A new wave of phishing attacks leveraging AI-generated content is targeting employees of major financial institutions worldwide...",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
    targetSectors: ["Financial Services", "Banking"],
    targetLocation: ["Global", "Asia Pacific"],
    threatActors: ["Scattered Spider"],
    tags: [
      "Phishing",
      "AI",
      "Finance",
      "Banking",
      "Social Engineering",
      "Threat",
    ],
  },
  {
    id: "4",
    date: "17 May, 2024",
    type: "APT Activity",
    title: "Advanced Persistent Threat Group Targets Government Networks",
    description:
      "Intelligence agencies report increased activity from state-sponsored threat actors targeting government communication systems...",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop",
    targetSectors: ["Government", "Public Administration"],
    targetLocation: ["Middle East", "Europe"],
    threatActors: ["APT28", "Fancy Bear"],
    tags: [
      "APT",
      "Government",
      "State-Sponsored",
      "Intelligence",
      "Cyber Espionage",
      "Critical",
    ],
  },
  {
    id: "5",
    date: "16 May, 2024",
    type: "Malware",
    title: "New Malware Strain Targets Industrial Control Systems",
    description:
      "Cybersecurity firms have discovered a novel malware variant specifically designed to compromise industrial control systems...",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop",
    targetSectors: ["Manufacturing", "Industrial"],
    targetLocation: ["United States", "Germany"],
    threatActors: ["Unknown"],
    tags: [
      "Malware",
      "ICS",
      "Manufacturing",
      "Industrial",
      "OT Security",
      "Alert",
    ],
  },
  {
    id: "6",
    date: "15 May, 2024",
    type: "Data Leak",
    title:
      "Major Telecommunications Provider Data Breach Exposes Customer Records",
    description:
      "Sensitive customer information from a leading telecommunications company has been found on underground forums...",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
    targetSectors: ["Telecommunications", "Technology"],
    targetLocation: ["India", "Southeast Asia"],
    threatActors: ["Initial Access Broker"],
    tags: [
      "Data Breach",
      "Telecom",
      "Customer Data",
      "Privacy",
      "Leak",
      "Investigation",
    ],
  },
];

export const filterOptions: FilterOptions = {
  tags: [
    "Critical",
    "Ransomware",
    "Phishing",
    "APT",
    "Malware",
    "Data Breach",
    "Healthcare",
    "Finance",
  ],
  industries: [
    "Healthcare",
    "Finance",
    "Technology",
    "Manufacturing",
    "Energy",
    "Government",
  ],
  regions: [
    "United States",
    "Europe",
    "Asia Pacific",
    "Middle East",
    "Global",
    "United Kingdom",
  ],
  categories: [
    "Data Breach",
    "Malware",
    "Phishing",
    "Ransomware",
    "APT Activity",
  ],
  sectors: [
    "Energy",
    "Healthcare",
    "Financial Services",
    "Government",
    "Manufacturing",
    "Telecommunications",
  ],
  groups: ["APT28", "APT29", "LockBit 3.0", "Scattered Spider", "Fancy Bear"],
};
