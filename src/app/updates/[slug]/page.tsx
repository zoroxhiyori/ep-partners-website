import { notFound } from "next/navigation";
import { getUpdateBySlug, getUpdateSlugs, getUpdates } from "@/lib/content";
import type { Update } from "@/lib/content-types";
import ArticleView from "./ArticleView";
import MDXContent from "@/components/MDXContent";

export async function generateStaticParams() {
  return getUpdateSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const update = getUpdateBySlug(slug);
  if (!update) return {};
  return {
    title: `${update.title} | EP Partners`,
    description: update.excerpt,
  };
}

// The client view only needs metadata; the markdown body is rendered here on the server.
function withoutBody(update: Update): Omit<Update, "content"> {
  const meta: Partial<Update> = { ...update };
  delete meta.content;
  return meta as Omit<Update, "content">;
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const update = getUpdateBySlug(slug);
  if (!update) notFound();

  const all = getUpdates();
  const sameCat = all.filter((u) => u.slug !== slug && u.category === update.category);
  const related = sameCat.length >= 2 ? sameCat.slice(0, 3) : all.filter((u) => u.slug !== slug).slice(0, 3);

  return (
    <main className="flex flex-col">
      <ArticleView update={withoutBody(update)} related={related.map(withoutBody)}>
        <MDXContent source={update.content} />
      </ArticleView>
    </main>
  );
}
