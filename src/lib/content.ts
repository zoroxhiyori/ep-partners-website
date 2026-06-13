import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type {
  Category,
  Language,
  Update,
  Career,
  Testimonial,
  TeamMember,
  FAQItem,
  FAQGroup,
  Service,
} from "./content-types";

export { categoryMeta } from "./content-types";

import type { Category, Language, Update, Career, Testimonial, TeamMember, FAQItem, FAQGroup, Service } from "./content-types";

const contentRoot = path.join(process.cwd(), "content");

function readDir(subdir: string) {
  const dir = path.join(contentRoot, subdir);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md"))
    .map((f) => {
      const raw = fs.readFileSync(path.join(dir, f), "utf-8");
      const { data, content } = matter(raw);
      return { slug: path.basename(f, ".md"), data, content: content.trim() };
    });
}

function estimateReadTime(text: string): number {
  return Math.max(1, Math.round(text.split(/\s+/).length / 200));
}

// ── Updates ───────────────────────────────────────────────────────────────────

export function getUpdates(): Update[] {
  return readDir("updates")
    .map(({ slug, data, content }) => ({
      slug,
      content,
      title: String(data.title ?? ""),
      date: String(data.date ?? ""),
      category: (data.category ?? "Tax & Accounting") as Category,
      languages: (data.languages ?? ["EN"]) as Language[],
      excerpt: String(data.excerpt ?? ""),
      author: String(data.author ?? "EP Partners Team"),
      readTime: Number(data.readTime) || estimateReadTime(content),
      tags: (data.tags ?? []) as string[],
    }))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getUpdateBySlug(slug: string): Update | undefined {
  const file = path.join(contentRoot, "updates", `${slug}.md`);
  if (!fs.existsSync(file)) return undefined;
  const raw = fs.readFileSync(file, "utf-8");
  const { data, content } = matter(raw);
  const body = content.trim();
  return {
    slug,
    content: body,
    title: String(data.title ?? ""),
    date: String(data.date ?? ""),
    category: (data.category ?? "Tax & Accounting") as Category,
    languages: (data.languages ?? ["EN"]) as Language[],
    excerpt: String(data.excerpt ?? ""),
    author: String(data.author ?? "EP Partners Team"),
    readTime: Number(data.readTime) || estimateReadTime(body),
    tags: (data.tags ?? []) as string[],
  };
}

export function getUpdateSlugs(): string[] {
  const dir = path.join(contentRoot, "updates");
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md"))
    .map((f) => path.basename(f, ".md"));
}

// ── Careers ───────────────────────────────────────────────────────────────────

export function getCareers(): Career[] {
  return readDir("careers").map(({ slug, data, content }) => ({
    slug,
    content,
    title: String(data.title ?? ""),
    location: String(data.location ?? "Phnom Penh, Cambodia"),
    type: String(data.type ?? "Full-time"),
    department: String(data.department ?? ""),
    closing_date: String(data.closing_date ?? ""),
    languages_required: (data.languages_required ?? ["EN"]) as string[],
    experience: String(data.experience ?? ""),
    requirements: (data.requirements ?? []) as string[],
  }));
}

// ── Testimonials ──────────────────────────────────────────────────────────────

export function getTestimonials(): Testimonial[] {
  return readDir("testimonials").map(({ slug, data, content }) => ({
    slug,
    content: content.trim(),
    name: String(data.name ?? ""),
    role: String(data.role ?? ""),
    company: String(data.company ?? ""),
    rating: Number(data.rating ?? 5),
    language: String(data.language ?? "EN"),
    date: String(data.date ?? ""),
    avatar_initials: String(data.avatar_initials ?? "?"),
    category: String(data.category ?? ""),
  }));
}

// ── Team ──────────────────────────────────────────────────────────────────────

export function getTeamMembers(): TeamMember[] {
  return readDir("team")
    .map(({ slug, data, content }) => ({
      slug,
      content,
      name: String(data.name ?? ""),
      role: String(data.role ?? ""),
      languages: (data.languages ?? ["EN"]) as string[],
      email: data.email ? String(data.email) : undefined,
      linkedin: data.linkedin ? String(data.linkedin) : undefined,
      order: Number(data.order ?? 99),
    }))
    .sort((a, b) => a.order - b.order);
}

// ── FAQ ───────────────────────────────────────────────────────────────────────

function parseFAQs(content: string): FAQItem[] {
  const items: FAQItem[] = [];
  const blocks = content.split(/(?=^## )/m).filter(Boolean);
  for (const block of blocks) {
    const body = block.replace(/^## /, "").split("\n");
    const question = body[0].trim();
    const answer = body
      .slice(1)
      .join("\n")
      .trim()
      .replace(/^>\s*/gm, "");
    if (question && answer) items.push({ question, answer });
  }
  return items;
}

export function getFAQs(): FAQGroup[] {
  return readDir("faq").map(({ slug, data, content }) => ({
    slug,
    category: String(data.category ?? "General"),
    items: parseFAQs(content),
  }));
}

export function getAllFAQItems(): FAQItem[] {
  return getFAQs().flatMap((g) => g.items);
}

// ── Services ──────────────────────────────────────────────────────────────────

export function getServices(): Service[] {
  return readDir("services")
    .map(({ slug, data, content }) => ({
      slug,
      content,
      number: String(data.number ?? "01"),
      title: String(data.title ?? ""),
      icon_bg: String(data.icon_bg ?? "#EEF2FF"),
      icon_color: String(data.icon_color ?? "#4F46E5"),
      order: Number(data.order ?? 99),
      tagline: String(data.tagline ?? ""),
      sub_services: (data.sub_services ?? []) as string[],
    }))
    .sort((a, b) => a.order - b.order);
}
