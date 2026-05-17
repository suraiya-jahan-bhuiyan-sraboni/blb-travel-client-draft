import {
  BadgeCheck,
  BookText,
  GraduationCap,
  Plane,
} from "lucide-react";

import { ConsultationTab } from "../types/consultation.types";

export const CONSULTATION_TABS: ConsultationTab[] = [
  {
    id: "vacation",
    label: "Vacations",
    icon: Plane,
  },
  {
    id: "hajj",
    label: "Hajj/Umrah",
    icon: BadgeCheck,
  },
  {
    id: "visa",
    label: "Visa Consultancy",
    icon: BookText,
  },
  {
    id: "education",
    label: "Education",
    icon: GraduationCap,
  },
];