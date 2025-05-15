// import Clutch from "@/assets/img/clutch.svg";
// import ISO from "@/assets/img/iso_certified.svg";
// import Pasha from "@/assets/img/pasha.svg";
// import PSEB from "@/assets/img/pseb.svg";
// import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
// const Feature = () => {
//   const testimonials = [
//     {
//       quote:
//         "True growth with AI isn’t about replacing people—it’s about empowering them to do more, think bigger, and solve problems faster than ever before.",
//       name: "Sustainable",
//       designation: "GROWTH WITH AI",
//       src: "https://sbscyber.com/hs-fs/hubfs/Images/BlogImages/AdobeStock_604631734.jpeg?width=8000&height=4064&name=AdobeStock_604631734.jpeg",
//     },
//     {
//       quote:
//         "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
//       name: "Scalablity",
//       designation: "Drive Business",
//       src: "https://myvistage.com/hub/wp-content/uploads/sites/4/2024/03/Growth-Acquisition-Blog-1024x686-1.jpg",
//     },
//     {
//       quote:
//         "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
//       name: "Inovation",
//       designation: "Lead With Innovation",
//       src: "https://online.spalding.edu/sites/default/files/field/image/role-senior-leaders-play-achieving-innovation-strategy.jpg",
//     },
//     {
//       quote:
//         "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
//       name: "Win Customers",
//       designation: "Win the customer Game",
//       src: "https://ixtenso.com/media/story_section_image/10492/image-01-gamification-controller-retail-eurocis-tech.jpg",
//     },
//   ];
//   return (
//     <div className="h-full min-h-screen w-full py-6">
//       <AnimatedTestimonials testimonials={testimonials} />;
//       <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-8 rounded-xl border-2 bg-white px-10 py-8 shadow-xl shadow-slate-300">
//         <h1 className="text-center text-3xl font-bold text-green-500">
//           We Work For:
//         </h1>
//         <div className="flex items-center justify-center gap-8">
//           <div className="flex w-full flex-col items-center justify-center rounded-lg bg-transparent py-20 text-xl">
//             <img src={Clutch} alt="" />
//           </div>
//           <div className="flex w-full flex-col items-center justify-center rounded-lg bg-transparent py-10 text-xl">
//             <img src={ISO} alt="" />
//           </div>
//           <div className="flex w-full flex-col items-center justify-center rounded-lg bg-transparent py-10 text-xl">
//             <img src={PSEB} alt="" />
//           </div>
//           <div className="flex w-full flex-col items-center justify-center rounded-lg bg-transparent py-20 text-xl">
//             <img src={Pasha} alt="" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default Feature;
import Clutch from "@/assets/img/clutch.svg";
import ISO from "@/assets/img/iso_certified.svg";
import Pasha from "@/assets/img/pasha.svg";
import PSEB from "@/assets/img/pseb.svg";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

const Feature = () => {
  const testimonials = [
    {
      quote:
        "True growth with AI isn’t about replacing people—it’s about empowering them to do more, think bigger, and solve problems faster than ever before.",
      name: "Sustainable",
      designation: "GROWTH WITH AI",
      src: "https://sbscyber.com/hs-fs/hubfs/Images/BlogImages/AdobeStock_604631734.jpeg?width=8000&height=4064&name=AdobeStock_604631734.jpeg",
    },
    {
      quote:
        "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      name: "Scalablity",
      designation: "Drive Business",
      src: "https://myvistage.com/hub/wp-content/uploads/sites/4/2024/03/Growth-Acquisition-Blog-1024x686-1.jpg",
    },
    {
      quote:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      name: "Inovation",
      designation: "Lead With Innovation",
      src: "https://online.spalding.edu/sites/default/files/field/image/role-senior-leaders-play-achieving-innovation-strategy.jpg",
    },
    {
      quote:
        "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
      name: "Win Customers",
      designation: "Win the customer Game",
      src: "https://ixtenso.com/media/story_section_image/10492/image-01-gamification-controller-retail-eurocis-tech.jpg",
    },
  ];

  return (
    <div className="h-full min-h-screen w-full px-4 py-6 sm:px-6 lg:px-8">
      {/* Testimonials Section */}
      <AnimatedTestimonials testimonials={testimonials} />

      {/* Certification Logos Section */}
      <div className="mx-auto mt-10 w-full max-w-[1440px] flex-col gap-6 rounded-xl border-2 bg-white px-4 py-6 shadow-xl shadow-slate-300 sm:gap-8 sm:px-6 sm:py-8 md:px-10">
        <h1 className="text-center text-2xl font-bold text-green-500 sm:text-3xl">
          We Work For:
        </h1>

        <div className="mt-6 grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-8">
          <div className="flex flex-col items-center justify-center rounded-lg bg-transparent py-8">
            <img
              src={Clutch}
              alt="Clutch"
              className="w-full max-w-[120px] object-contain"
            />
          </div>
          <div className="flex flex-col items-center justify-center rounded-lg bg-transparent py-8">
            <img
              src={ISO}
              alt="ISO Certified"
              className="w-full max-w-[120px] object-contain"
            />
          </div>
          <div className="flex flex-col items-center justify-center rounded-lg bg-transparent py-8">
            <img
              src={PSEB}
              alt="PSEB"
              className="w-full max-w-[120px] object-contain"
            />
          </div>
          <div className="flex flex-col items-center justify-center rounded-lg bg-transparent py-8">
            <img
              src={Pasha}
              alt="Pasha"
              className="w-full max-w-[120px] object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
