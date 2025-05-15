// import A1 from "../../assets/img/author-1.png";
// import A2 from "../../assets/img/author-2.png";
// import A3 from "../../assets/img/author-3.png";
// import A4 from "../../assets/img/author-4.png";
// import A5 from "../../assets/img/author-5.png";
// import A6 from "../../assets/img/author-6.png";
// import { Button } from "../ui/button";
// const OrbitingCircle = () => {
//   return (
//     <div className="relative mx-auto h-[400px] max-w-4xl rounded-full p-6 lg:h-[700px] lg:w-full lg:max-w-[1500px]">
//       <div className="duration-1700 absolute -left-5 top-[0%] flex size-28 animate-pulse flex-col items-center justify-center rounded-full bg-transparent p-2 shadow">
//         <img src={A1} alt="Wave" className="mx-auto w-full rounded-full" />
//         <span className="rounded-full bg-[#6bb64a] px-5 text-lg font-semibold">
//           heelo
//         </span>
//       </div>
//       <div className="duration-2000 absolute -right-12 top-[40%] flex size-20 animate-pulse flex-col items-center justify-center rounded-full bg-transparent p-2 shadow">
//         <img src={A5} alt="Wave" className="mx-auto w-full rounded-full" />
//         <span className="rounded-full bg-yellow-500 px-5 text-lg font-semibold">
//           heelo
//         </span>
//       </div>
//       <div className="absolute left-1/2 h-[350px] w-full max-w-3xl -translate-x-1/2 rounded-full p-6 lg:h-[650px] lg:max-w-[1300px]">
//         <div className="duration-1500 absolute left-10 top-[80%] flex size-20 animate-pulse flex-col items-center justify-center rounded-full bg-transparent p-2 shadow">
//           <img src={A3} alt="Wave" className="mx-auto w-full rounded-full" />
//           <span className="rounded-full bg-blue-500 px-5 text-lg font-semibold">
//             heelo
//           </span>
//         </div>
//         <div className="duration-2000 absolute right-8 top-[10%] flex size-24 animate-pulse flex-col items-center justify-center rounded-full bg-transparent p-2 shadow">
//           <img src={A4} alt="Wave" className="mx-auto w-full rounded-full" />
//           <span className="rounded-full bg-pink-500 px-5 text-lg font-semibold">
//             heelo
//           </span>
//         </div>
//         <div className="absolute left-1/2 h-[300px] w-full max-w-2xl -translate-x-1/2 rounded-full lg:h-[600px] lg:max-w-[1150px]">
//           <div className="duration-1500 absolute left-2 top-[30%] flex size-24 animate-pulse flex-col items-center justify-center rounded-full bg-transparent p-2 shadow">
//             <img src={A2} alt="Wave" className="mx-auto w-full rounded-full" />
//             <span className="rounded-full bg-purple-500 px-5 text-lg font-semibold">
//               heelo
//             </span>
//           </div>
//           <div className="duration-1700 absolute right-4 top-[70%] flex size-28 animate-pulse flex-col items-center justify-center rounded-full bg-transparent p-2 shadow">
//             <img src={A6} alt="Wave" className="mx-auto w-full rounded-full" />
//             <span className="rounded-full bg-[#6bb64a] px-5 text-lg font-semibold">
//               heelo
//             </span>
//           </div>
//           <div className="mx-auto flex max-w-4xl flex-col items-center justify-center gap-8 px-4 py-10 text-center lg:py-20">
//             <h1 className="text-base font-semibold text-[#6bb64a]">
//               INTEGRATION
//             </h1>
//             <p className="text-[28px] font-bold leading-tight text-white md:text-[36px] lg:text-6xl">
//               Bridging the Gap Between with Our Innovative Solutions!
//             </p>
//             <span className="w-3/4 text-base font-[400] capitalize text-gray-300 sm:text-lg">
//               We create Digital Solutions that meet business objectives and
//               ensure impactful transformation towards a better future.
//             </span>
//             <div className="flex items-center justify-center gap-4">
//               <Button className="border-2 border-[#6bb64a] bg-[#6bb64a] p-6 text-xl hover:bg-[#6bb64a]/80">
//                 Get Started
//               </Button>
//               <Button className="border-2 border-[#6bb64a] bg-transparent p-6 text-xl hover:bg-[#6bb64a]">
//                 Learn More
//               </Button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default OrbitingCircle;
import A1 from "../../assets/img/author-1.png";
import A2 from "../../assets/img/author-2.png";
import A3 from "../../assets/img/author-3.png";
import A4 from "../../assets/img/author-4.png";
import A5 from "../../assets/img/author-5.png";
import A6 from "../../assets/img/author-6.png";
import { Button } from "../ui/button";

const OrbitingCircle = () => {
  return (
    <div className="relative mx-auto h-[400px] max-w-sm p-2 sm:h-[500px] sm:max-w-md md:h-[600px] md:max-w-2xl lg:h-[700px] lg:max-w-[1500px]">
      {/* Outer avatars */}
      <div className="absolute left-0 top-[5%] flex size-16 animate-pulse flex-col items-center justify-center rounded-full bg-transparent p-1 shadow sm:size-20 sm:p-2 md:size-24 lg:size-28">
        <img src={A1} alt="Wave" className="w-full rounded-full" />
        <span className="mt-1 rounded-full bg-[#6bb64a] px-3 py-1 text-xs font-semibold sm:px-4 sm:text-sm">
          Green
        </span>
      </div>
      <div className="absolute right-0 top-[40%] flex size-16 animate-pulse flex-col items-center justify-center rounded-full bg-transparent p-1 shadow sm:size-20 sm:p-2 md:-right-10 md:size-24 lg:size-28">
        <img src={A5} alt="Wave" className="w-full rounded-full" />
        <span className="mt-1 rounded-full bg-yellow-500 px-3 py-1 text-xs font-semibold sm:px-4 sm:text-sm">
          Yellow
        </span>
      </div>

      {/* Mid circle avatars */}
      <div className="absolute left-1/2 top-1/2 h-[300px] w-full max-w-xs -translate-x-1/2 -translate-y-1/2 sm:h-[400px] sm:max-w-sm md:h-[500px] md:max-w-lg lg:h-[650px] lg:max-w-[1300px]">
        <div className="absolute top-[80%] flex size-14 animate-pulse flex-col items-center justify-center rounded-full bg-transparent p-1 shadow sm:size-16 sm:p-2 md:left-2 md:size-20 lg:size-24">
          <img src={A3} alt="Wave" className="w-full rounded-full" />
          <span className="mt-1 rounded-full bg-blue-500 px-3 py-1 text-xs font-semibold sm:px-4 sm:text-sm">
            bachi
          </span>
        </div>
        <div className="absolute right-2 flex size-16 animate-pulse flex-col items-center justify-center rounded-full bg-transparent p-1 shadow sm:size-20 sm:p-2 md:-right-16 md:-top-16 md:size-24 lg:top-[10%] lg:size-28">
          <img src={A4} alt="Wave" className="w-full rounded-full" />
          <span className="mt-1 rounded-full bg-pink-500 px-3 py-1 text-xs font-semibold sm:px-4 sm:text-sm">
            hello
          </span>
        </div>

        {/* Inner circle avatars + text */}
        <div className="absolute left-1/2 top-1/2 h-[250px] w-full max-w-xs -translate-x-1/2 -translate-y-1/2 sm:h-[350px] sm:max-w-sm md:h-[450px] md:max-w-xl lg:h-[600px] lg:max-w-[1150px]">
          <div className="absolute left-1 top-[30%] flex size-16 animate-pulse flex-col items-center justify-center rounded-full bg-transparent p-1 shadow sm:size-20 sm:p-2 md:-left-32 md:size-24 lg:-left-10 lg:top-[40%]">
            <img src={A2} alt="Wave" className="w-full rounded-full" />
            <span className="mt-1 rounded-full bg-purple-500 px-3 py-1 text-xs font-semibold sm:px-4 sm:text-sm">
              hello
            </span>
          </div>
          <div className="absolute right-1 top-[97%] flex size-20 animate-pulse flex-col items-center justify-center rounded-full bg-transparent p-1 shadow sm:size-24 sm:p-2 md:-right-7 md:top-[90%] md:size-28">
            <img src={A6} alt="Wave" className="w-full rounded-full" />
            <span className="mt-1 rounded-full bg-[#6bb64a] px-3 py-1 text-xs font-semibold sm:px-4 sm:text-sm">
              kala
            </span>
          </div>

          {/* Text content */}
          <div className="z-10 mx-auto mt-8 flex max-w-xs flex-col items-center justify-center gap-4 px-2 text-center sm:max-w-md sm:gap-6 md:max-w-lg md:gap-8 lg:max-w-4xl lg:gap-10">
            <h1 className="text-sm font-semibold text-[#6bb64a] sm:text-base">
              INTEGRATION
            </h1>
            <p className="w-1/2 text-lg font-bold leading-tight text-white sm:text-2xl md:w-full md:text-3xl lg:text-6xl">
              Bridging the Gap Between with Our Innovative Solutions!
            </p>
            <span className="w-2/3 text-sm font-normal text-gray-300 md:w-full md:text-xl">
              We create Digital Solutions that meet business objectives and
              ensure impactful transformation towards a better future.
            </span>
            <div className="mt-20 flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:pt-0">
              <Button className="border-2 border-[#6bb64a] bg-[#6bb64a] px-5 py-2 text-base hover:bg-[#6bb64a]/80 sm:px-6 sm:py-3 sm:text-lg">
                Get Started
              </Button>
              <Button className="border-2 border-[#6bb64a] bg-transparent px-5 py-2 text-base hover:bg-[#6bb64a] sm:px-6 sm:py-3 sm:text-lg">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrbitingCircle;
