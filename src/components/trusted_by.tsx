import partner from "@/assets/img/partner.svg";
import product from "@/assets/img/product.svg";
import project from "@/assets/img/project.svg";
import staff from "@/assets/img/staff.svg";

import { Button } from "./ui/button";

// const TrustedBy = () => {
//   return (
//     <div className="h-full w-full py-10">
//       <div className="relative h-[calc(100dvh-310px)] w-full bg-[#1d4354] text-white">
//         <div className="absolute left-0 top-0 mx-auto flex h-full w-full flex-col items-center justify-center gap-20 bg-[url('/src/assets/img/white-dots.svg')] bg-cover">
//           <h1 className="text-5xl font-bold">Engagement Models</h1>
//           <div className="flex items-center justify-center gap-20">
//             <p className="flex flex-col items-center justify-center gap-5 text-3xl">
//               <img src={staff} alt="" className="size-20 rounded-lg" />
//               Staff Augmentation
//             </p>
//             <p className="flex flex-col items-center justify-center gap-5 text-3xl">
//               <img src={product} alt="" className="size-20 rounded-lg" />
//               Dedicated Team
//             </p>
//             <p className="flex flex-col items-center justify-center gap-5 text-3xl">
//               <img src={project} alt="" className="size-20 rounded-lg" />
//               Project Outsourcing
//             </p>
//             <p className="flex flex-col items-center justify-center gap-5 text-3xl">
//               <img src={partner} alt="" className="size-20 rounded-lg" />
//               Partner With us
//             </p>
//           </div>
//           <Button className="border-2 border-[#6bb64a] bg-[#6bb64a] p-6 text-xl hover:bg-[#6bb64a]/80">
//             Learn More
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TrustedBy;

const TrustedBy = () => {
  return (
    <div className="h-full w-full py-10">
      <div className="relative min-h-[calc(100dvh-310px)] w-full bg-[#1d4354] text-white">
        <div className="absolute left-0 top-0 mx-auto flex h-full w-full flex-col items-center justify-center gap-10 bg-[url('/src/assets/img/white-dots.svg')] bg-cover px-4 lg:gap-20">
          <h1 className="text-center text-3xl font-bold sm:text-4xl md:text-5xl">
            Engagement Models
          </h1>

          {/* Cards Grid */}
          <div className="grid w-full max-w-6xl grid-cols-2 gap-2 md:grid-cols-4 md:gap-10">
            {[
              { label: "Staff Augmentation", icon: staff },
              { label: "Dedicated Team", icon: product },
              { label: "Project Outsourcing", icon: project },
              { label: "Partner With us", icon: partner },
            ].map(({ label, icon }, i) => (
              <div
                key={i}
                className="flex flex-col items-center gap-5 text-center text-xl md:text-2xl"
              >
                <img
                  src={icon}
                  alt={label}
                  className="size-16 rounded-lg sm:size-20"
                />
                <span className="">{label}</span>
              </div>
            ))}
          </div>

          {/* Button */}
          <Button className="border-2 border-[#6bb64a] bg-[#6bb64a] px-6 py-4 text-lg hover:bg-[#6bb64a]/80 sm:text-xl md:mt-6">
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TrustedBy;
