import {
  GraduationCap,
  Heart,
  Home,
  Paintbrush,
  Users,
  Utensils,
  Zap,
} from "lucide-react";
import { Need } from "../types/carolita.types";
export const needs: Need[] = [
  {
    id: "electrical",
    title: "Instalación eléctrica",
    description:
      "La instalación eléctrica es vieja y el consumo es excesivo. Necesitamos revisión, reparación y actualización completa del sistema eléctrico.",
    icon: Zap,
    category: "Infraestructura",
  },
  {
    id: "waterproofing",
    title: "Impermeabilización y reparación de techos",
    description:
      "Reparación de goteras en pasillos, baños y salones. Aplicar impermeabilizante en áreas techadas para proteger nuestras instalaciones.",
    icon: Home,
    category: "Infraestructura",
  },
  {
    id: "painting",
    title: "Pintura de instalaciones",
    description:
      "Pintura de fachada, bazar, cocina, baños y bardas exteriores del patio que están deterioradas y requieren mantenimiento.",
    icon: Paintbrush,
    category: "Infraestructura",
  },
  {
    id: "bathrooms",
    title: "Remodelación y adaptaciones de baños",
    description:
      "Renovación completa de baños e instalación de pasamanos y medidas de seguridad para garantizar accesibilidad y dignidad.",
    icon: Home,
    category: "Infraestructura",
  },
  {
    id: "educational",
    title: "Materiales didácticos y educativos",
    description:
      "Material para actividades educativas, papelería y mobiliario. Reparación de mesas y sillas dañadas para las clases.",
    icon: GraduationCap,
    category: "Atención a usuarios",
  },
  {
    id: "therapy",
    title: "Equipamiento de movimiento y fisioterapia",
    description:
      "Materiales deportivos y equipos de fisioterapia que facilitan las terapias y actividades para el desarrollo integral.",
    icon: Heart,
    category: "Atención a usuarios",
  },
  {
    id: "bakery",
    title: "Taller de repostería",
    description:
      "Mantenimiento de horno, tanque de gas, horno de microondas, báscula, insumos y equipo de protección para el taller productivo.",
    icon: Utensils,
    category: "Taller de Repostería",
  },
  {
    id: "scholarships",
    title: "Becas y uniformes",
    description:
      "Becas individuales, becas de transporte y uniformes para apoyar directamente a nuestra población beneficiaria.",
    icon: Users,
    category: "Población",
  },
];
