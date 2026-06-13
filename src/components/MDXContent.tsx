import { MDXRemote } from "next-mdx-remote/rsc";

const components = {
  h2: ({ children }: { children?: React.ReactNode }) => (
    <h2 className="text-xl font-bold text-[#0f1f3d] mt-8 mb-3 leading-tight">{children}</h2>
  ),
  h3: ({ children }: { children?: React.ReactNode }) => (
    <h3 className="text-[17px] font-semibold text-[#0f1f3d] mt-6 mb-2">{children}</h3>
  ),
  p: ({ children }: { children?: React.ReactNode }) => (
    <p className="text-[15px] text-[#445571] leading-[1.8] mb-4">{children}</p>
  ),
  ul: ({ children }: { children?: React.ReactNode }) => (
    <ul className="list-disc pl-6 mb-4 space-y-1.5">{children}</ul>
  ),
  ol: ({ children }: { children?: React.ReactNode }) => (
    <ol className="list-decimal pl-6 mb-4 space-y-1.5">{children}</ol>
  ),
  li: ({ children }: { children?: React.ReactNode }) => (
    <li className="text-[15px] text-[#445571] leading-relaxed">{children}</li>
  ),
  blockquote: ({ children }: { children?: React.ReactNode }) => (
    <blockquote className="border-l-[3px] border-[#c9a84c] bg-[rgba(201,168,76,0.06)] pl-5 pr-4 py-4 my-6 rounded-r-lg text-[#0f1f3d] text-[15px] leading-relaxed not-italic">
      {children}
    </blockquote>
  ),
  strong: ({ children }: { children?: React.ReactNode }) => (
    <strong className="font-semibold text-[#0f1f3d]">{children}</strong>
  ),
  em: ({ children }: { children?: React.ReactNode }) => (
    <em className="italic text-[#445571]">{children}</em>
  ),
  a: ({ children, href }: { children?: React.ReactNode; href?: string }) => (
    <a href={href} className="!text-[#c9a84c] hover:!text-[#0f1f3d] underline transition-colors duration-150">
      {children}
    </a>
  ),
  hr: () => <hr className="border-[#e5e7eb] my-8" />,
  code: ({ children }: { children?: React.ReactNode }) => (
    <code className="bg-[rgba(201,168,76,0.1)] text-[#0f1f3d] px-1.5 py-0.5 rounded text-[13px] font-mono">
      {children}
    </code>
  ),
};

export default function MDXContent({ source }: { source: string }) {
  return <MDXRemote source={source} components={components} />;
}
