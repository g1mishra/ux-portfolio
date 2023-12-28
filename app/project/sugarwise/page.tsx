import HeroGradientBG from "@/components/HeroGradientBG";
import OverviewSection from "@/components/project/OverviewSection";
import ProjectHero from "@/components/project/ProjectHero";
import React from "react";

const SugarwisePage = () => {
  return (
    <main className="relative flex min-h-screen flex-col items-stretch bg-gray-100 pb-12">
      <HeroGradientBG
        gradient="linear-gradient(180deg, #58A65C -23.98%, rgba(16, 16, 16, 0.90) 71.56%)"
        height="636px"
        maxHeight="70vh"
      />
      <ProjectHero
        title="Sugarwise"
        contents={[
          "Overview",
          "Kickoff",
          "Research",
          "Architecture",
          "Wireframing",
          "Prototyping",
          "Final designs",
          "Style guide",
          "Takeaway",
        ]}
      />
      <div className="container mx-auto flex flex-col items-center px-4">
        <OverviewSection
          overview={[
            "Sugarwise is an Augmented Reality (AR) - based mobile application. It enable users to scan grocery products at the grocery stores and scans the vital information, such as sugar content and provides healthier alternatives for those scanned products.",
            "Sugarwise uses a user-friendly approach which is motivated to streamline the decision-making process and guide users toward healthier food choices. AR technology simplifies this process, making it more accessible and comprehensible to users, empowering them to make informed decisions about the nutritional content of their prospective food choices and ultimately making users aware.",
          ]}
          role="Product Designer"
          research="User Research, Interaction design, Visual design, Prototyping & Testing"
          timeline="August - October 2023"
        />
      </div>
    </main>
  );
};

export default SugarwisePage;
