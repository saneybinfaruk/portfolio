import Image from "next/image";
import React from "react";

const Heading = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-4">
      <div className="w-40 h-40 overflow-hidden rounded-full border-2 border-blue-300 flex-shrink-0">
        <Image
          src="/me.png"
          alt="profile image"
          width={250}
          height={250}
          objectFit="cover"
          className="object-cover w-full h-full"
        />
      </div>

      <div className="flex flex-col gap-2 items-center lg:items-start  text-center lg:text-start">
        <h1 className="text-white text-3xl font-extrabold">Saney Bin Faruk</h1>
        <h3 className="text-blue-200 text-xl font-bold">
          Javascript Developer
        </h3>
        <p className="text-slate-200 text-lg mt-3 font-thin">
          Proficient in React.js, Node.js, Next Js, React Native | Experienced
          with MySQL, MongoDB, Redux, Zustand, and Stripe | Unity Game
          Development
        </p>
      </div>
    </div>
  );
};

export default Heading;
