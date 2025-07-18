import type { ComponentType } from "react";
import {
  SiGithub,
  SiInstagram,
  SiLinkedin,
  SiX,
} from "@icons-pack/react-simple-icons";
import {
  BarChart3,
  Calculator,
  Car,
  Clock,
  FilePlus,
  FileText,
  Fuel,
  Gavel,
  TrendingUp,
} from "lucide-react";
import { sortByName } from "@/utils/sorting";

export interface NavigationItem {
  title: string;
  url: string;
  icon: ComponentType<{ className?: string }>;
  description: string;
}

export interface SocialMediaItem {
  title: string;
  url: string;
  icon: ComponentType<{ className?: string }>;
}

export interface NavLinks {
  cars: {
    overview: NavigationItem;
    fuelTypes: NavigationItem;
    vehicleTypes: NavigationItem;
  };
  coe: NavigationItem[];
  general: NavigationItem[];
  socialMedia: SocialMediaItem[];
}

const socialMedia = [
  {
    title: "Twitter",
    url: "https://twitter.com/sgcarstrends",
    icon: SiX,
  },
  {
    title: "Instagram",
    url: "https://instagram.com/sgcarstrends",
    icon: SiInstagram,
  },
  {
    title: "LinkedIn",
    url: "https://linkedin.com/company/sgcarstrends",
    icon: SiLinkedin,
  },
  {
    title: "GitHub",
    url: "https://github.com/sgcarstrends",
    icon: SiGithub,
  },
];

export const navLinks: NavLinks = {
  cars: {
    overview: {
      title: "New Registrations",
      url: "/cars",
      icon: FilePlus,
      description: "Monthly car registration statistics and trends",
    },
    fuelTypes: {
      title: "Fuel Types",
      url: "/cars/fuel-types",
      icon: Fuel,
      description: "Breakdown by petrol, diesel, hybrid and electric",
    },
    vehicleTypes: {
      title: "Vehicle Types",
      url: "/cars/vehicle-types",
      icon: Car,
      description: "Analysis of saloons, hatchbacks, SUVs and more",
    },
  },
  coe: [
    {
      title: "Overview",
      url: "/coe",
      icon: BarChart3,
      description: "Current COE premiums and market overview",
    },
    {
      title: "Historical Results",
      url: "/coe/results",
      icon: Clock,
      description: "Past bidding rounds and premium history",
    },
    {
      title: "Trends Analysis",
      url: "/coe/trends",
      icon: TrendingUp,
      description: "Market trends and price movement analysis",
    },
    {
      title: "Bidding Results",
      url: "/coe/bidding",
      icon: Gavel,
      description: "Latest bidding exercise outcomes",
    },
    {
      title: "PQP Rates",
      url: "/coe/pqp",
      icon: Calculator,
      description: "Prevailing quota premiums and calculations",
    },
  ],
  general: [
    {
      title: "Blog",
      url: "/blog",
      icon: FileText,
      description: "Insights and analysis on Singapore's car market",
    },
    {
      title: "Visitors",
      url: "/visitors",
      icon: BarChart3,
      description: "Website traffic and visitor analytics",
    },
  ],
  socialMedia: sortByName(socialMedia, { sortKey: "title" }),
};
