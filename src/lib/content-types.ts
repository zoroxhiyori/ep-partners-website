// Client-safe types and constants — no Node.js imports

export type Category = "Tax & Accounting" | "Legal & Compliance" | "Business & Investment";
export type Language = "EN" | "KH" | "ZH";

export const categoryMeta: Record<Category, { bg: string; text: string }> = {
  "Tax & Accounting": { bg: "#ECFDF5", text: "#059669" },
  "Legal & Compliance": { bg: "#EEF2FF", text: "#4F46E5" },
  "Business & Investment": { bg: "#FFF7ED", text: "#D97706" },
};

export interface Update {
  slug: string;
  title: string;
  date: string;
  category: Category;
  languages: Language[];
  excerpt: string;
  author: string;
  readTime: number;
  tags: string[];
  content: string;
}

export interface Career {
  slug: string;
  title: string;
  location: string;
  type: string;
  department: string;
  closing_date: string;
  languages_required: string[];
  experience: string;
  requirements: string[];
  content: string;
}

export interface Testimonial {
  slug: string;
  name: string;
  role: string;
  company: string;
  rating: number;
  language: string;
  date: string;
  avatar_initials: string;
  category: string;
  content: string;
}

export interface TeamMember {
  slug: string;
  name: string;
  role: string;
  languages: string[];
  email?: string;
  linkedin?: string;
  order: number;
  content: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQGroup {
  slug: string;
  category: string;
  items: FAQItem[];
}

export interface Service {
  slug: string;
  number: string;
  title: string;
  icon_bg: string;
  icon_color: string;
  order: number;
  tagline: string;
  sub_services: string[];
  content: string;
}
