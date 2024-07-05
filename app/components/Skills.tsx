import React from "react";

const Skills = () => {
  const list = [
    "React.js",
    "Next.js",
    "Node.js",
    "React Native",
    "Tailwind CSS",
    "Redux",
    "Zustand",
    "MySQL",
    "MongoDB",
    "TypeScript",
    "GraphQL",
    "Docker",
    "Git/GitHub",
    "RESTful APIs",
    "Jest",
    "React Testing Library",
    "Firebase",
    "Authentication/Authorization",
    "Sass/Less",
    "WebSockets",
  ];

  return (
    <section className="flex flex-col">
      <h1 className="text-white text-2xl font-semibold mb-12">Skill</h1>
      <div className="flex gap-2 flex-wrap my-2">
        {list.map((l) => (
          <span key={l} className="text-white border-gray-500 border px-8 py-3 rounded-lg">
            {l}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Skills;
