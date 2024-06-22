import React from "react";
import {
  FaGithub,
  FaMailBulk,
  FaLinkedin,
  FaReact,
  FaPython,
  FaGitAlt,
  FaJava,
  FaBootstrap,
  FaHtml5,
} from "react-icons/fa";
import {
  SiExpo,
  SiFirebase,
  SiJavascript,
  SiMysql,
  SiR,
  SiRstudio,
  SiTailwindcss,
} from "react-icons/si";
import { TbBrandNextjs, TbBrandReactNative } from "react-icons/tb";
import { FaC, FaPhp } from "react-icons/fa6";
import { motion } from "framer-motion";
import { CgMenuMotion } from "react-icons/cg";

const iconMap = {
  github: <FaGithub />,
  linkedin: <FaLinkedin />,
  mail: <FaMailBulk />,
  react: <FaReact />,
  next: <TbBrandNextjs />,
  rstudio: <SiRstudio />,
  r: <SiR />,
  reactnative: <TbBrandReactNative />,
  expo: <SiExpo />,
  php: <FaPhp />,
  python: <FaPython />,
  c: <FaC />,
  git: <FaGitAlt />,
  java: <FaJava />,
  javascript: <SiJavascript />,
  mysql: <SiMysql />,
  firebase: <SiFirebase />,
  bootstrap: <FaBootstrap />,
  tailwindcss: <SiTailwindcss />,
  html: <FaHtml5 />,
  nav: <CgMenuMotion className="img-fluid position-absolute top-0 start-0 fixed-top my-2 mx-3" />,
};

export default function Icon({ hoverColor, color, fontSize, name }) {
  return iconMap[name] ? (
    <motion.span
      whileHover={{ color: hoverColor }}
      onHoverStart={(e) => { }}
      onHoverEnd={(e) => { }}
      style={{ color, fontSize }}
    >
      {iconMap[name]}
    </motion.span>
  ) : null;
}
