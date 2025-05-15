import { cn } from "@/lib/utils";

import { Marquee } from "./magicui/marquee";

const reviews = [
  {
    name: "Healthcare",
    username: "@DigiMark",
    body: "Imagine getting top-notch care from anywhere! Digital healthcare makes clinics run smoother, lets doctors see you remotely, and keeps everyone healthier.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Tour & Travel",
    username: "@DigiMark",
    body: "Our tailored software solutions empower Travel & Hospitality businesses to optimize operations and maximize revenue in a dynamic market.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "Retail",
    username: "@DigiMark",
    body: "Retail businesses partner with us to unlock new opportunities, drive revenue growth, and expand their customer base.",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Social",
    username: "@DigiMark",
    body: "We build App that helps to create networks, analyze user insights and experiences.",
    img: "https://avatar.vercel.sh/jill",
  },
];

const columns = [
  {
    name: "Hospitality",
    username: "@DigiMark",
    body: "Elevate the hospitality business with our cutting-edge technology solutions and drive business success.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Fintech",
    username: "@DigiMark",
    body: "Fintech automates routine procedures and improves outcomes. AI enables threats, prevents fraud, automates everyday tasks, and enhances the quality of service",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "On-Demand",
    username: "@DigiMark",
    body: "We offer tailored solutions that seamlessly connect businesses with their users in real time.",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "EdTech",
    username: "@DigiMark",
    body: "E-learning offers interactive content, personalization, cost savings, increased employee performance, and faster ROI",
    img: "https://avatar.vercel.sh/jill",
  },
];

const firstRow = reviews.slice(0, reviews.length);
const secondRow = columns.slice(columns.length / 2);

// const ReviewCard = ({
//   img,
//   name,
//   username,
//   body,
// }: {
//   img: string;
//   name: string;
//   username: string;
//   body: string;
// }) => {
//   return (
//     <figure
//       className={cn(
//         "relative h-52 w-36 cursor-pointer overflow-hidden rounded-xl border p-4 md:w-fit",
//         // light styles
//         "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
//         // dark styles
//         "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
//       )}
//     >
//       <div className="flex flex-row items-center gap-2">
//         <img className="rounded-full" width="32" height="32" alt="" src={img} />
//         <div className="flex flex-col">
//           <figcaption className="text-lg font-medium dark:text-white">
//             {name}
//           </figcaption>
//           <p className="text-lg font-medium dark:text-white/40">{username}</p>
//         </div>
//       </div>
//       <blockquote className="mt-2 w-72 text-sm">{body}</blockquote>
//     </figure>
//   );
// };

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-auto w-64 cursor-pointer overflow-hidden rounded-xl border p-4 sm:w-72 md:w-80",
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <img className="rounded-full" width="40" height="40" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-base font-semibold dark:text-white">
            {name}
          </figcaption>
          <p className="text-sm font-medium text-gray-500 dark:text-white/40">
            {username}
          </p>
        </div>
      </div>
      <blockquote className="mt-3 text-sm leading-snug text-gray-700 dark:text-gray-300">
        {body}
      </blockquote>
    </figure>
  );
};

// const plateform = () => {
//   return (
//     <div className="relative mx-auto flex w-full max-w-[1440px] flex-col items-center justify-center overflow-hidden py-10">
//       <Marquee pauseOnHover className="[--duration:20s]">
//         {firstRow.map((review) => (
//           <ReviewCard key={review.username} {...review} />
//         ))}
//       </Marquee>
//       <Marquee reverse pauseOnHover className="[--duration:20s]">
//         {secondRow.map((review) => (
//           <ReviewCard key={review.username} {...review} />
//         ))}
//       </Marquee>
//       <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
//       <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
//     </div>
//   );
// };

const Plateform = () => {
  return (
    <div className="relative mx-auto mb-96 w-full max-w-[1440px] px-4 py-12 sm:px-6 md:mb-0 md:px-8">
      <Marquee pauseOnHover className="space-x-4 [--duration:20s]">
        {firstRow.map((review, i) => (
          <ReviewCard key={i + review.name} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="mt-6 space-x-4 [--duration:20s]">
        {secondRow.map((review, i) => (
          <ReviewCard key={i + review.name} {...review} />
        ))}
      </Marquee>

      {/* Fading Edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-white dark:from-black" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-white dark:from-black" />
    </div>
  );
};

export default Plateform;
