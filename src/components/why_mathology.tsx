import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

import Ai from "@/assets/img/1723840133204.jpg";

import { BentoGrid, BentoGridItem } from "./ui/bento-grid";

const Skeleton = () => (
  <div className="flex h-full min-h-[6rem] w-full flex-1 rounded-xl bg-gradient-to-br from-neutral-200 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800">
    <img src={Ai} alt="" className="h-full w-full shrink-0" />
  </div>
);
const items = [
  {
    title: "AI & ML",
    description: [
      "🤖 Chatbot Development",
      "✨ Generative AI Solutions",
      "👁️ Computer Vision Applications",
      "📊 Data Science & Analytics",
      "🚀 AI PoC & MVP Development",
      "🏗️ Data Engineering Pipelines",
    ],
    header: <Skeleton />,
    icon: <IconClipboardCopy className="size-8 text-neutral-500" />,
  },
  {
    title: "Gamification",
    description: [
      "🎮 Game-based learning & engagement",
      "🏆 Reward systems for motivation",
      "📈 User behavior tracking",
      "🧠 Cognitive training via gameplay",
    ],
    header: <Skeleton />,
    icon: <IconFileBroken className="size-8 text-neutral-500" />,
  },
  {
    title: "Bespoke Development",
    description: [
      "🎯 Custom software for your needs",
      "🧩 Seamless system integration",
      "🖌️ UI/UX focused on satisfaction",
      "⚙️ Scalable, maintainable architecture",
    ],
    header: <Skeleton />,
    icon: <IconSignature className="size-8 text-neutral-500" />,
  },
  {
    title: "Mobile App Development",
    description: [
      "📱 Native & cross-platform solutions",
      "💬 In-app communication & chat features",
      "⚡ Performance-optimized for all devices",
      "🎯 Focused on user engagement & retention",
    ],
    header: <Skeleton />,
    icon: <IconTableColumn className="size-8 text-neutral-500" />,
  },
  {
    title: "Blockchain",
    description: [
      "🔗 dApp development",
      "🔒 Secure smart contracts",
      "💱 Blockchain for payments & identity",
      "📜 Immutable data records",
    ],
    header: <Skeleton />,
    icon: <IconArrowWaveRightUp className="size-8 text-neutral-500" />,
  },
  {
    title: "Cloud & DevOps",
    description: [
      "☁️ Scalable cloud infrastructure",
      "⚙️ CI/CD pipeline automation",
      "🔒 Secure cloud solutions",
      "📈 Performance optimization",
    ],
    header: <Skeleton />,
    icon: <IconBoxAlignTopLeft className="size-8 text-neutral-500" />,
  },
  {
    title: "Virtual Reality",
    description: [
      "🌍 Immersive 3D environments and simulations",
      "🕶️ Cutting-edge VR hardware integration",
      "🎮 Interactive gaming and training experiences",
      "🚀 Explore new worlds for education & entertainment",
    ],
    header: <Skeleton />,
    icon: <IconBoxAlignRightFilled className="size-8 text-neutral-500" />,
  },
];

const Domain = () => {
  return (
    <BentoGrid className="mx-auto max-w-6xl px-6 py-24 lg:px-0">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          // header={item.header}
          icon={item.icon}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
  );
};

export default Domain;
