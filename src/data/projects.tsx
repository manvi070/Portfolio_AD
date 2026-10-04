export interface ProjectItem {
  id: string;
  number: string;
  numberColor: string;
  category: string;
  title: string;
  subtitle?: string;
  bgGradient: string;
  image: string;
  link?: string;
  hidden?: boolean;
}

export const projectsData: ProjectItem[] = [
  {
    id: "cosmo",
    number: "01.",
    numberColor: "text-[#94683C] dark:text-[#E0B88A]",
    category: "Home Decor",
    title: "Cosmo",
    bgGradient: "bg-gradient-to-b from-[#F8F4EE] via-[#9E7A5A] to-[#5C3F28] dark:from-[#2E2218] dark:via-[#21170F] dark:to-[#140D08]",
    image: "/images/projects/COSMO/L1.png",
    link: "/projects/cosmo",
  },
  {
    id: "inlay",
    number: "02.",
    numberColor: "text-[#8C7A68] dark:text-[#D4C4B4]",
    category: "Home Decor",
    title: "Inlay",
    bgGradient: "bg-gradient-to-b from-[#FAF8F5] via-[#E4DDD4] to-[#B8A898] dark:from-[#262320] dark:via-[#1D1A17] dark:to-[#12100E]",
    image: "/images/projects/INLAY/M1.png",
    link: "/projects/inlay",
  },
  {
    id: "entwined",
    number: "03.",
    numberColor: "text-[#D45828] dark:text-[#F68A5E]",
    category: "Home Decor",
    title: "Entwined",
    bgGradient: "bg-gradient-to-b from-[#FDF5ED] via-[#F4B982] to-[#C8481E] dark:from-[#33180E] dark:via-[#261008] dark:to-[#170804]",
    image: "/images/projects/Lamp/2.png",
    link: "/projects/entwined",
  },
  {
    id: "bloom",
    number: "04.",
    numberColor: "text-[#D82B67] dark:text-[#FF669D]",
    category: "Furniture",
    title: "Bloom",
    bgGradient: "bg-gradient-to-b from-[#FDF0F4] via-[#F4A8C4] to-[#B82356] dark:from-[#30101C] dark:via-[#220B13] dark:to-[#14060B]",
    image: "/images/projects/Bloom/1.png",
    link: "/projects/bloom",
  },
  {
    id: "internship-works",
    number: "05.",
    numberColor: "text-[#9A7B38] dark:text-[#DFCA8E]",
    category: "Product Design",
    title: "Internship Works",
    bgGradient: "bg-gradient-to-b from-[#F8F7F4] via-[#D5CBB9] to-[#2B2925] dark:from-[#24221E] dark:via-[#1A1815] dark:to-[#0D0C0A]",
    image: "/images/projects/Internship projects/cover.png",
    link: "/projects/internship-works",
  },
  {
    id: "college-projects",
    number: "06.",
    numberColor: "text-[#386692] dark:text-[#78AADC]",
    category: "Design & Craft",
    title: "College Projects",
    bgGradient: "bg-gradient-to-b from-[#F0F4F8] via-[#B8CADC] to-[#2C3E50] dark:from-[#16212B] dark:via-[#101922] dark:to-[#0A1016]",
    image: "/images/projects/clg projects/cover.png",
    link: "#",
    hidden: true,
  },
];
