import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "EP Partners Co., Ltd",
    short_name: "EP Partners",
    description:
      "Professional accounting, tax and advisory services in Cambodia",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0f1f3d",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
