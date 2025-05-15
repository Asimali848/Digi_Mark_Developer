import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

import { Globe } from "./magicui/globe";

const MathologyWork = () => {
  return (
    <div className="relative w-full px-4 py-10 sm:px-8 md:px-16">
      <div className="mx-auto flex w-full flex-col items-center justify-center gap-12 sm:gap-16">
        <div className="text-center text-3xl font-bold text-[#1d4354] sm:text-4xl md:text-5xl">
          Let's
          <span className="ml-2 inline-block bg-[#6bb64a] px-3 text-white">
            Talk & Work together!
          </span>
        </div>

        <div className="grid w-full max-w-[1440px] grid-cols-1 gap-10 md:grid-cols-2">
          {/* Form Section */}
          <div className="w-full">
            <form className="space-y-4">
              <Input placeholder="Name*" required className="h-14 bg-white" />
              <Input
                type="email"
                placeholder="Email"
                className="h-14 bg-white"
              />
              <Input placeholder="Subject" className="h-14 bg-white" />

              <Select>
                <SelectTrigger className="h-14 bg-white">
                  <SelectValue placeholder="Please specify your needs?" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Ai & Ml Developer">
                    AI & ML Developer
                  </SelectItem>
                  <SelectItem value="Web & App Developer">
                    Web & App Developer
                  </SelectItem>
                  <SelectItem value="SAAS Developer">SAAS Developer</SelectItem>
                  <SelectItem value="Cloud Enginner">Cloud Engineer</SelectItem>
                  <SelectItem value="QA & Testing">QA & Testing</SelectItem>
                  <SelectItem value="Request a Quote">
                    Request a Quote
                  </SelectItem>
                </SelectContent>
              </Select>

              <Textarea
                placeholder="Write your message..."
                className="h-36 bg-white"
              />

              <div className="text-sm text-gray-600">Recaptcha</div>

              <div className="flex justify-end">
                <Button className="bg-green-500 shadow-md hover:bg-green-600">
                  SEND MESSAGE
                </Button>
              </div>
            </form>
          </div>

          {/* Globe Section */}
          <div className="relative flex h-[400px] items-center justify-center overflow-hidden rounded-lg bg-background px-4 pb-20 pt-8 sm:px-12 sm:pb-32 md:h-[500px] md:px-40 md:pb-60 lg:h-[530px]">
            <Globe className="top-52 min-w-full" />
            <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MathologyWork;
