// import BG from "@/assets/img/Hero/Background.svg";
// import OrbitingCircle from "./landing/intro";
// import { Button } from "./ui/button";
// const Hero = () => {
//   return (
//     <div className="relative h-full w-full">
//       <img src={BG} alt="" className="w-full object-cover" />
//       <div className="absolute top-20 w-full py-20">
//         <OrbitingCircle />
//       </div>
//       <div className="absolute bottom-24 left-0 right-0 mx-auto flex w-full max-w-[1440px] flex-col gap-8 rounded-xl bg-white px-10 py-8 shadow-2xl">
//         <h1 className="text-center text-3xl font-bold text-[#1d4354]">
//           We Work For:
//         </h1>
//         <div className="flex items-center justify-center gap-8">
//           <Button className="border-2 border-[#6bb64a] bg-transparent p-6 text-xl text-green-600 hover:bg-[#6bb64a] hover:text-white">
//             Startups
//           </Button>
//           <Button className="border-2 border-[#6bb64a] bg-transparent p-6 text-xl text-green-600 hover:bg-[#6bb64a] hover:text-white">
//             For SMEs
//           </Button>
//           <Button className="border-2 border-[#6bb64a] bg-transparent p-6 text-xl text-green-600 hover:bg-[#6bb64a] hover:text-white">
//             Agencies
//           </Button>
//           <Button className="border-2 border-[#6bb64a] bg-transparent p-6 text-xl text-green-600 hover:bg-[#6bb64a] hover:text-white">
//             MVP
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default Hero;
import BG from "@/assets/img/Hero/Background.svg";

import OrbitingCircle from "./landing/intro";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <div className="relative h-full w-full overflow-hidden">
      {/* Background image */}
      <img
        src={BG}
        alt="Background"
        className="h-full min-h-screen w-full object-cover object-center"
      />

      {/* OrbitingCircle content */}
      <div className="absolute top-10 w-full px-2 sm:top-16 sm:px-4 md:top-20">
        <OrbitingCircle />
      </div>

      {/* Bottom Section */}
      <div className="absolute bottom-2 left-0 right-0 top-[70%] mx-auto w-full max-w-[1440px] px-4 sm:bottom-16 sm:px-6 md:bottom-24 md:top-[80%]">
        <div className="flex flex-col items-center gap-6 rounded-xl bg-white px-4 py-6 sm:px-8 sm:py-8 md:gap-8 md:px-10 md:py-10 md:shadow-2xl">
          <h1 className="text-center text-2xl font-bold text-[#1d4354] sm:text-3xl">
            We Work For:
          </h1>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8">
            {["Startups", "For SMEs", "Agencies", "MVP"].map((label) => (
              <Button
                key={label}
                className="min-w-[120px] border-2 border-[#6bb64a] bg-transparent px-4 py-2 text-base text-green-600 hover:bg-[#6bb64a] hover:text-white sm:px-6 sm:py-3 sm:text-lg md:px-8 md:py-4 md:text-xl"
              >
                {label}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
