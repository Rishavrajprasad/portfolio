"use client";
import Link from "next/link";
import { RiGithubFill, RiLinkedinFill, RiTwitterFill } from "react-icons/ri";

const icons = [
  {
    path: "/",
    name: <RiGithubFill />,
  },
  {
    path: "/",
    name: <RiLinkedinFill />,
  },
];
const Socials = ({ containerStyles, iconsStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <Link href={icon.path} key={index}>
            <div className={`${iconsStyles}`}>{icon.name}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
