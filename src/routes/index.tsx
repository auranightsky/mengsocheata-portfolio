import { createFileRoute } from "@tanstack/react-router";
import { PortfolioPage } from "@/components/portfolio/PortfolioPage";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Meng Socheata — Deep Learning Researcher" },
      {
        name: "description",
        content:
          "Meng Socheata is a Pusan National University student exploring deep learning, large language models, and computer vision.",
      },
      { property: "og:title", content: "Meng Socheata — Deep Learning Researcher" },
      {
        property: "og:description",
        content:
          "Academic portfolio exploring deep learning, large language models, and computer vision.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PortfolioPage,
});
