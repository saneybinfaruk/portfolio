import Link from "next/link";
import React from "react";

const SocialLinks = () => {
  const list = [
    {
      label: "Facebook",
      link: "https://www.facebook.com/saneybinfaruk/",
    },
    { label: "LinkedIn", link: "https://www.linkedin.com/in/saney-bin-faruk/" },
    { label: "GitHub", link: "https://github.com/saneybinfaruk" },
  ];
  return (
    <div className="flex justify-center py-24 text-xl gap-10 px-5">
      {list.map((l) => (
        <Link
          key={l.label}
          href={l.link}
          target="_blank"
          className="text-blue-200 hover:underline text-base md:text-xl"
        >
          {l.label}
        </Link>
      ))}
    </div>
  );
};

export default SocialLinks;
