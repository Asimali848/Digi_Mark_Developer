import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3",
        className
      )}
    >
      {children}
    </div>
  );
};

// export const BentoGridItem = ({
//   className,
//   title,
//   description,
//   header,
//   icon,
// }: {
//   className?: string;
//   title?: string | React.ReactNode;
//   description?: string | React.ReactNode;
//   header?: React.ReactNode;
//   icon?: React.ReactNode;
// }) => {
//   return (
//     <div
//       className={cn(
//         "group/bento relative row-span-1 flex flex-col justify-between space-y-4 overflow-hidden rounded-xl border border-neutral-200 bg-white p-4 shadow-input transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:bg-black dark:shadow-none",
//         className
//       )}
//     >
//       {/* Gradient background fill effect */}
//       <span className="pointer-events-none absolute inset-0 z-0 origin-left scale-x-0 transform bg-gradient-to-r from-green-200 via-emerald-300 to-green-300 transition-transform duration-700 ease-in-out group-hover/bento:scale-x-100" />

//       {/* Content layer */}
//       <div className="relative z-10">
//         {header}
//         <div className="transition duration-200 group-hover/bento:translate-x-2">
//           <div className="size-7">{icon}</div>
//           <div className="mb-2 mt-2 font-sans text-2xl font-bold text-[#1d4354] dark:text-neutral-200">
//             {title}
//           </div>
//           <div className="font-sans text-lg font-normal text-[#1d4354]/70 dark:text-neutral-300">
//             {description}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | string[] | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "group/bento relative row-span-1 flex flex-col justify-between gap-2 overflow-hidden rounded-xl border border-[#1d4354]/20 bg-white p-3 pb-2 shadow-input transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:bg-black dark:shadow-none",
        className
      )}
    >
      {/* Background fill gradient span (optional) */}
      <span className="pointer-events-none absolute inset-0 z-0 origin-left scale-x-0 transform bg-gradient-to-r from-green-300 via-emerald-200 to-green-100 transition-transform duration-500 ease-in-out group-hover/bento:scale-x-100" />

      <div className="relative z-10">
        {header}
        <div className="transition duration-200 group-hover/bento:translate-x-2">
          <div className="size-7">{icon}</div>
          <div className="mb-2 mt-2 font-sans text-2xl font-bold text-[#1d4354] dark:text-neutral-200">
            {title}
          </div>

          {/* Conditionally render list or plain text */}
          <div className="font-sans text-lg font-normal text-[#1d4354] dark:text-neutral-300">
            {Array.isArray(description) ? (
              <ul className="list-inside list-disc space-y-1">
                {description.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            ) : (
              description
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
