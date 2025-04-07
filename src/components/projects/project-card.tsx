import Link from "next/link";
import Image from "next/image";

import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";

import Carousel from "@/components/utility/carousel";
import { GithubIcon } from "@/components/icons";

export interface ProjectCardProps {
  name: string;
  favicon: string;
  imageUrl: string[];
  description: string;
  sourceCodeHref?: string;
  liveWebsiteHref?: string;
}

export default function ProjectCard(props: ProjectCardProps) {
  return (
    <motion.div
      initial={{ y: 80 }}
      whileInView={{ y: 0 }}
      viewport={{ margin: "-100px" }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 0.3,
      }}
      className="w-full overflow-hidden rounded-lg border border-accent/20 bg-background shadow-md transition-shadow duration-150 hover:shadow-md hover:shadow-accent/20 dark:bg-zinc-800 dark:hover:shadow-lg"
    >
      <Carousel images={props.imageUrl} aspectRatio={2.1} />
      <div className="flex h-[170px] flex-col justify-between p-3 text-foreground sm:p-4">
        <div className="flex flex-col">
          <div className="flex items-center gap-3">
            <span className="relative h-5 w-5">
              <Image src={props.favicon} alt="logo" fill sizes="20px" />
            </span>
            <span className="text-sm font-semibold">{props.name}</span>
          </div>
          <div className="mt-3">
            <p className="text-xs md:text-sm">{props.description}</p>
          </div>
        </div>
        <div className="mt-6 flex items-center justify-end gap-6">
          {props.sourceCodeHref && (
            <Link
              href={props.sourceCodeHref}
              target="_blank"
              className="flex items-center gap-1 text-xs underline md:text-sm"
            >
              <GithubIcon className="h-5 w-5" /> Source code
            </Link>
          )}
          {props.liveWebsiteHref && (
            <Link
              href={props.liveWebsiteHref}
              target="_blank"
              className="flex items-center gap-1 text-xs underline md:text-sm"
            >
              <FiExternalLink className="h-5 w-5" /> Live
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
}
