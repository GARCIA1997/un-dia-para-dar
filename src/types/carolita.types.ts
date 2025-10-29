import { Heart } from "lucide-react";

export interface Need {
  id: string;
  title: string;
  description: string;
  icon: typeof Heart;
  category: string;
}
