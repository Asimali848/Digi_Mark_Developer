// import bg from "../assets/images/Group 41.png";
// import { FaLongArrowAltRight } from "react-icons/fa";
import { ArrowBigRight } from "lucide-react";

import extrabreaks from "@/assets/img/landing_page/extrabreaks - Copy (2).svg";
import man from "@/assets/img/landing_page/istockphoto-1297832726-612x612.jpg";
import midfeed from "@/assets/img/landing_page/midfeed.svg";
import petx from "@/assets/img/landing_page/petluvs - Copy (2).svg";
import sybal from "@/assets/img/landing_page/sybal.svg";
import vical from "@/assets/img/landing_page/vocal - Copy.svg";
import voxendo from "@/assets/img/landing_page/voxendo - Copy (2).svg";

import bg from "../assets/img/landing_page/WhatsApp Image 2025-05-13 at 11.35.32 AM.jpeg";

// const Competitive = () => {
//   return (
//     <>
//       <div className="relative h-full w-full">
//         <div className="w-full">
//           <img src={bg} alt="" className="w-full" />
//         </div>
//         <div className="absolute -bottom-[300px] left-0 right-0 mx-auto w-1/2 bg-amber-50 p-10 text-center">
//           <div className="flex items-center justify-center gap-4">
//             <p className="text-4xl font-bold text-[#1d4354]">Customers</p>
//             <div className="relative aspect-video w-24">
//               <div className="z-0 size-full -rotate-3 bg-[#6bb64a]" />
//               <p className="absolute inset-0 top-1.5 z-[1] text-4xl font-bold text-white">
//                 Talk
//               </p>
//             </div>
//           </div>
//           <div className="grid grid-cols-2">
//             <div className="p-5 text-start">
//               <p className="text-2xl font-semibold text-[#1d4354]">
//                 Proof & Trust
//               </p>
//               <p className="mt-3 text-gray-400">
//                 Proof & Trust empower small and medium enterprises, providing an
//                 affordable solution that streamlines the assessment process
//                 without the need for specialized experts, allowing businesses to
//                 navigate vendor relationships with confidence and ease.
//               </p>
//               <div className="text-shadow-md mt-5 flex w-fit cursor-pointer items-center justify-start gap-2 hover:gap-3 hover:text-[#6bb64a] hover:shadow-[#6bb64a]">
//                 <a href="#">PROJECT DETALIS</a>
//                 <ArrowBigRight />
//               </div>
//               <div className="mt-5 flex items-center justify-start gap-10">
//                 <div>
//                   <p className="mb-3 text-lg font-semibold text-[#1d4354]">
//                     Country:
//                   </p>
//                   <p className="text-lg font-semibold text-[#1d4354]">
//                     Core Tech:
//                   </p>
//                 </div>
//                 <div>
//                   <p className="mb-3">Serbia</p>
//                   <p>Node.Js, Laravel, ReactJs, AWS, AI</p>
//                 </div>
//               </div>
//               <div className="mt-8 flex w-fit cursor-pointer items-center justify-start gap-2 rounded-xl bg-[#6bb64a] px-4 py-3 duration-300 hover:gap-3 hover:shadow-lg hover:shadow-[#6bb64a]">
//                 <a href="#">CONTACT US</a>
//                 <ArrowBigRight className="text-white" />
//               </div>
//             </div>
//             <div className="mt-10">
//               <img src={man} alt="" className="h-full object-cover" />
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="mx-auto w-full max-w-[1440px] py-8 mt-[300px]">
//         <div className="flex items-center justify-center ">
//           {[midfeed, vical, voxendo, petx].map((src, idx) => (
//             <div key={idx} className="border-r border-b border-gray-200 p-4 px-10">
//               <img src={src} alt="" className="h-36 w-56 object-contain" />
//             </div>
//           ))}
//         </div>
//         <div className="flex items-center justify-center ">
//           {[sybal, extrabreaks, midfeed, vical].map((src, idx) => (
//             <div key={idx} className="border-l border-b border-gray-200 p-4 px-10">
//               <img src={src} alt="" className="h-36 w-56 object-contain" />
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Competitive;

const Competitive = () => {
  return (
    <>
      <div className="relative w-full">
        {/* Background Image */}
        <div className="w-full">
          <img src={bg} alt="" className="w-full object-cover" />
        </div>

        {/* Content Block */}
        <div className="absolute -bottom-[350px] left-0 right-0 mx-auto w-full max-w-3xl rounded-xl bg-amber-50 p-6 px-4 text-center shadow-lg sm:p-10 sm:px-6 md:px-8 lg:-bottom-[300px] lg:max-w-5xl">
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <p className="text-2xl font-bold text-[#1d4354] sm:text-3xl md:text-4xl">
              Customers
            </p>
            <div className="relative aspect-video w-24 shrink-0">
              <div className="z-0 size-full -rotate-3 rounded-md bg-[#6bb64a]" />
              <p className="absolute inset-0 top-1.5 z-[1] text-3xl font-bold text-white sm:text-4xl">
                Talk
              </p>
            </div>
          </div>

          {/* Responsive Grid */}
          <div className="mt-8 grid grid-cols-1 gap-8 text-start md:grid-cols-2">
            {/* Left Text Block */}
            <div>
              <p className="text-xl font-semibold text-[#1d4354] md:text-2xl lg:text-4xl">
                Proof & Trust
              </p>
              <p className="mt-3 text-sm text-gray-500 lg:text-xl">
                Proof & Trust empower small and medium enterprises, providing an
                affordable solution that streamlines the assessment process
                without the need for specialized experts...
              </p>
              <div className="mt-5 flex w-fit cursor-pointer items-center gap-2 duration-300 hover:gap-3 hover:text-[#6bb64a]">
                <a href="#" className="text-sm md:text-lg">
                  PROJECT DETAILS
                </a>
                <ArrowBigRight />
              </div>
              <div className="mt-5 flex gap-10">
                <div>
                  <p className="mb-2 text-sm font-semibold text-[#1d4354] md:text-base">
                    Country:
                  </p>
                  <p className="text-sm font-semibold text-[#1d4354] md:text-base">
                    Core Tech:
                  </p>
                </div>
                <div>
                  <p className="mb-2 text-sm md:text-base">Serbia</p>
                  <p className="text-sm md:text-base">
                    Node.Js, Laravel, ReactJs, AWS, AI
                  </p>
                </div>
              </div>
              <div className="mt-6 flex w-fit items-center gap-2 rounded-xl bg-[#6bb64a] px-4 py-2 text-white transition-all hover:gap-3 hover:shadow-lg hover:shadow-[#6bb64a]">
                <a href="#">CONTACT US</a>
                <ArrowBigRight className="text-white" />
              </div>
            </div>

            {/* Right Image */}
            <div className="flex items-center justify-center md:justify-end">
              <img
                src={man}
                alt=""
                className="w-full max-w-sm rounded-md object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Logos Grid */}
      <div className="mx-auto mt-[350px] w-full max-w-[1440px] px-4 py-8">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            midfeed,
            vical,
            voxendo,
            petx,
            sybal,
            extrabreaks,
            midfeed,
            vical,
          ].map((src, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center border border-gray-200 p-4"
            >
              <img src={src} alt="" className="h-24 w-full object-contain" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Competitive;
