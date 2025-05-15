// "use client"
// import { useState } from "react"
// import { ArrowRight } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Link } from "react-router-dom"
// import Logo from "../assets/img/footer-logo.svg"
// export default function SiteFooter() {
//   const [email, setEmail] = useState("")
//   return (
//     <footer className="bg-[#0d1a25] text-white">
//       <div className="container mx-auto px-4 py-12">
//         <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
//           {/* Logo Section */}
//           <div className="flex flex-col">
//             <div className="flex items-center">
//               <img src={Logo} alt="Logo" className="" />
//             </div>
//           </div>
//           {/* Expertise Section */}
//           <div className="flex flex-col">
//             <h3 className="mb-4 text-xl font-semibold uppercase text-green-500">Expertise</h3>
//             <nav className="flex flex-col gap-2 text-lg w-fit">
//               <Link to="#" className="hover:text-green-400">
//                 Artificial Intelligence
//               </Link>
//               <Link to="#" className="hover:text-green-400">
//                 Mobile App Dev
//               </Link>
//               <Link to="#" className="hover:text-green-400">
//                 Generative AI
//               </Link>
//               <Link to="#" className="hover:text-green-400">
//                 Blockchain
//               </Link>
//               <Link to="#" className="hover:text-green-400">
//                 Gaming
//               </Link>
//             </nav>
//           </div>
//           {/* Company Section */}
//           <div className="flex flex-col">
//             <h3 className="mb-4 text-xl font-semibold uppercase text-green-500">Company</h3>
//             <nav className="flex flex-col gap-2 text-lg">
//               <Link to="#" className="hover:text-green-400">
//                 About Us
//               </Link>
//               <Link to="#" className="hover:text-green-400">
//                 Our Team
//               </Link>
//               <Link to="#" className="hover:text-green-400">
//                 Contact Us
//               </Link>
//               <Link to="#" className="hover:text-green-400">
//                 Case Studies
//               </Link>
//             </nav>
//           </div>
//           {/* Join Us Section */}
//           <div className="flex flex-col">
//             <h3 className="mb-4 text-xl font-semibold uppercase text-green-500">Join Us</h3>
//             <p className="mb-4 text-lg">
//               By providing your e-mail address, you are consenting to receive press releases.
//             </p>
//             <div className="flex flex-col gap-3">
//               <Input
//                 type="email"
//                 placeholder="Enter your Email"
//                 className="border-gray-600 bg-transparent text-white placeholder:text-gray-400 h-10"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//               <Button className="bg-green-500 text-white hover:bg-green-600">
//                 SUBSCRIBE <ArrowRight className="ml-2 h-4 w-4" />
//               </Button>
//             </div>
//           </div>
//         </div>
//         <div className="my-8 h-[1px] bg-gray-500"></div>
//         <div className="text-center text-lg text-gray-400">©2017-2024 DigiMark Developers. All rights reserved.</div>
//       </div>
//     </footer>
//   )
// }
import { useState } from "react";

import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import Logo from "../assets/img/footer-logo.svg";

export default function SiteFooter() {
  const [email, setEmail] = useState("");

  return (
    <footer className="bg-[#0d1a25] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Logo Section */}
          <div className="flex flex-col">
            <div className="flex items-center">
              <img src={Logo} alt="Logo" className="max-w-[150px]" />
            </div>
          </div>

          {/* Expertise Section */}
          <div className="flex flex-col">
            <h3 className="mb-4 text-lg font-semibold uppercase text-green-500 sm:text-xl">
              Expertise
            </h3>
            <nav className="flex w-fit flex-col gap-2 text-base sm:text-lg">
              <Link to="#" className="hover:text-green-400">
                Artificial Intelligence
              </Link>
              <Link to="#" className="hover:text-green-400">
                Mobile App Dev
              </Link>
              <Link to="#" className="hover:text-green-400">
                Generative AI
              </Link>
              <Link to="#" className="hover:text-green-400">
                Blockchain
              </Link>
              <Link to="#" className="hover:text-green-400">
                Gaming
              </Link>
            </nav>
          </div>

          {/* Company Section */}
          <div className="flex flex-col">
            <h3 className="mb-4 text-lg font-semibold uppercase text-green-500 sm:text-xl">
              Company
            </h3>
            <nav className="flex flex-col gap-2 text-base sm:text-lg">
              <Link to="#" className="hover:text-green-400">
                About Us
              </Link>
              <Link to="#" className="hover:text-green-400">
                Our Team
              </Link>
              <Link to="#" className="hover:text-green-400">
                Contact Us
              </Link>
              <Link to="#" className="hover:text-green-400">
                Case Studies
              </Link>
            </nav>
          </div>

          {/* Join Us Section */}
          <div className="flex flex-col">
            <h3 className="mb-4 text-lg font-semibold uppercase text-green-500 sm:text-xl">
              Join Us
            </h3>
            <p className="mb-4 text-base sm:text-lg">
              By providing your e-mail address, you are consenting to receive
              press releases.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Input
                type="email"
                placeholder="Enter your Email"
                className="h-10 flex-1 border-gray-600 bg-transparent text-white placeholder:text-gray-400"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button className="w-full bg-green-500 text-white hover:bg-green-600 sm:w-auto">
                SUBSCRIBE <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="my-8 h-[1px] bg-gray-500"></div>

        <div className="text-center text-sm text-gray-400 sm:text-base">
          ©2017-2024 DigiMark Developers. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
