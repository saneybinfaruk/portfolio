import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  imageUrl: string;
  label: string;
  url: string;
  techUse: string;
}
const Card = ({ imageUrl, label, url, techUse }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-md  h-40 group">
      <Image
        src={imageUrl}
        alt="image"
        width={300}
        height={400}
        objectFit="cover"
        className="object-cover w-full h-full"
        placeholder="blur"
        blurDataURL="/naruto"
      />

      <div className="absolute inset-0 flex items-center justify-center bg-blue-600 bg-opacity-75 text-white text-lg font-semibold opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <Link href={url} target="_blank">
          <div className="flex flex-col items-center">
            <h1>{label}</h1>
            <p className="font-meduim text-sm">{techUse}</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Card;
