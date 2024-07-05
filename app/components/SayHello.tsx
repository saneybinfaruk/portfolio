import React from "react";

const SayHello = () => {
  return (
    <div className="flex flex-col items-center gap-6 text-center">
      <h3 className="text-white text-2xl font-semibold">
        Let&apos;s create awesome products!
      </h3>
      <h5 className="text-white text-xl font-thin">
        I am always open to discuss your project, improve your online presence
        or help with your UX/UI design challenges.
      </h5>
      <a
        href="mailto:mesbahuddensaney@gmail.com"
        className="text-white bg-blue-700 hover:bg-blue-900 transition-colors duration-300 px-16 py-4 text-xl font-medium rounded-lg mt-5"
      >
        Say hello
      </a>
    </div>
  );
};

export default SayHello;
