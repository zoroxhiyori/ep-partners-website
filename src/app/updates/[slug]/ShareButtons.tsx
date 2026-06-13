"use client";

import { useState } from "react";

interface Props {
  title: string;
  size?: "sm" | "md";
}

function openShare(href: string) {
  window.open(href, "_blank", "width=620,height=440,noopener,noreferrer");
}

function getUrl() {
  return typeof window !== "undefined" ? window.location.href : "";
}

export default function ShareButtons({ title, size = "md" }: Props) {
  const [copied, setCopied] = useState(false);

  const iconSize = size === "sm" ? 15 : 18;
  const btnClass =
    size === "sm"
      ? "p-1.5 rounded-md transition-all duration-150"
      : "p-2 rounded-md transition-all duration-150";

  const handleCopy = () => {
    navigator.clipboard.writeText(getUrl()).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const encodedUrl = () => encodeURIComponent(getUrl());
  const encodedTitle = encodeURIComponent(title);

  return (
    <div className="flex items-center gap-1.5 flex-wrap">
      {/* Facebook */}
      <button
        onClick={() =>
          openShare(`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl()}`)
        }
        aria-label="Share on Facebook"
        className={`${btnClass} text-[#445571] hover:text-[#4267B2] hover:bg-[#4267B2]/10`}
      >
        <svg viewBox="0 0 24 24" fill="currentColor" width={iconSize} height={iconSize}>
          <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
        </svg>
      </button>

      {/* Telegram */}
      <button
        onClick={() =>
          openShare(
            `https://t.me/share/url?url=${encodedUrl()}&text=${encodedTitle}`
          )
        }
        aria-label="Share on Telegram"
        className={`${btnClass} text-[#445571] hover:text-[#26A5E4] hover:bg-[#26A5E4]/10`}
      >
        <svg viewBox="0 0 24 24" fill="currentColor" width={iconSize} height={iconSize}>
          <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
        </svg>
      </button>

      {/* LinkedIn */}
      <button
        onClick={() =>
          openShare(
            `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl()}`
          )
        }
        aria-label="Share on LinkedIn"
        className={`${btnClass} text-[#445571] hover:text-[#0077B5] hover:bg-[#0077B5]/10`}
      >
        <svg viewBox="0 0 24 24" fill="currentColor" width={iconSize} height={iconSize}>
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      </button>

      {/* Twitter / X */}
      <button
        onClick={() =>
          openShare(
            `https://twitter.com/intent/tweet?url=${encodedUrl()}&text=${encodedTitle}`
          )
        }
        aria-label="Share on X"
        className={`${btnClass} text-[#445571] hover:text-[#000000] hover:bg-black/10`}
      >
        <svg viewBox="0 0 24 24" fill="currentColor" width={iconSize} height={iconSize}>
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.259 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      </button>

      {/* Copy Link */}
      <button
        onClick={handleCopy}
        aria-label="Copy link"
        className={`${btnClass} transition-all duration-150 ${
          copied
            ? "text-[#059669] bg-[#ECFDF5]"
            : "text-[#445571] hover:text-[#0f1f3d] hover:bg-[#f4f5f7]"
        }`}
      >
        {copied ? (
          <svg viewBox="0 0 24 24" fill="currentColor" width={iconSize} height={iconSize}>
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width={iconSize} height={iconSize}>
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
          </svg>
        )}
      </button>

      {copied && (
        <span className="text-xs font-medium text-[#059669] ml-1">Copied!</span>
      )}
    </div>
  );
}
