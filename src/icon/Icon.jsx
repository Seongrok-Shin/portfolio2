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
  SiCsharp, SiDotnet,
  SiExpo,
  SiFirebase,
  SiJavascript,
  SiMysql,
  SiR, SiRazorpay,
  SiRstudio,
  SiTailwindcss,
} from "react-icons/si";
import {TbBrandNextjs, TbBrandReactNative, TbRazor} from "react-icons/tb";
import { FaC, FaDocker, FaNodeJs, FaPhp } from "react-icons/fa6";
import { motion } from "framer-motion";
import {CgMenuMotion, CgShapeCircle} from "react-icons/cg";
import { DiMongodb } from "react-icons/di";
import { FcNext, FcPrevious } from "react-icons/fc";
import { FaYoutube } from "react-icons/fa6";
import { BsBrowserChrome } from "react-icons/bs";
import {GiRazor} from "react-icons/gi";
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
  nav: (
    <CgMenuMotion className="img-fluid position-absolute top-0 start-0 fixed-top my-2 mx-3" />
  ),
  mongo: <DiMongodb />,
  node: <FaNodeJs />,
  docker: <FaDocker />,
  previousArrow: <FcPrevious />,
  nextArrow: <FcNext />,
  web: <BsBrowserChrome />,
  youtube: <FaYoutube />,
  dotnet: <SiDotnet />,
};

export default function Icon({ hoverColor, color, fontSize, name, border }) {
  return iconMap[name] ? (
    <motion.span
      whileHover={{ color: hoverColor }}
      onHoverStart={(e) => {}}
      onHoverEnd={(e) => {}}
      style={{ color, fontSize, border }}
    >
      {iconMap[name]}
    </motion.span>
  ) : null;
}
