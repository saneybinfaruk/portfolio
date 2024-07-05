import React from "react";
import Card from "./Card";

const Portfolio = () => {
  const portfolois = [
    {
      label: "Makeup Hub",
      techUse: "React Js",
      imageUrl:
        "https://docs.google.com/uc?id=19wYQqLXPkldl5mxFPeo_mm5_BGJGRsfu",
      url: "https://waveymakeuphub.netlify.app",
    },
    {
      label: "Makeup Store",
      techUse: "React Js",
      imageUrl:
        "https://docs.google.com/uc?id=1_UBCEizuly2h3arm0dWRmW2S5YpNcoGI",
      url: "https://jamboramakeupstore.netlify.app/",
    },
    {
      label: "Issue Tracker",
      techUse: "Next Js",
      imageUrl:
        "https://docs.google.com/uc?id=1e1HxUUmAEtS3i0HGPkXo2o8qHDd41kNa",
      url: "https://issue-tracker-rho-seven.vercel.app/",
    },
    {
      label: "Rawg Game Hub",
      techUse: "React Js",
      imageUrl:
        "https://docs.google.com/uc?id=1ATJ_ZCWva0pK8aesiP7nfM2iUvyVnDAh",
      url: "https://rawg-game-hub.netlify.app/",
    },
    {
      label: "Movie Rental",
      techUse: "React Js",
      imageUrl:
        "https://docs.google.com/uc?id=13yzGIopMTc6kkRIf5EiECZ5HtAJvd03y",
      url: "https://react-frontend-8pof.onrender.com/",
    },
    {
      label: "Cooker Recipe App",
      techUse: "React Native",
      imageUrl:
        "https://docs.google.com/uc?id=1vULOnlGM0AiLeGp39LyvNyI6wS9GgVa0",
      url: "https://drive.google.com/file/d/1VkVbsv2KQgIE3skFNs4WYiB09ejWMTc8/view?usp=drive_link",
    },
  ];

  return (
    <div>
      <h3 className="text-white font-semibold text-2xl mb-10">Portfolio</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
        {portfolois.map((portfolio, index) => (
          <Card
            key={portfolio.label}
            imageUrl={portfolio.imageUrl}
            label={portfolio.label}
            url={portfolio.url}
            techUse={portfolio.techUse}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
