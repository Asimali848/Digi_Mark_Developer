import { useEffect, useState } from "react";

import { motion } from "framer-motion";

import Title from "@/assets/img/faqs.svg";
import bg from "@/assets/img/ringimage1.svg";
import { faqlist } from "@/lib/constants";

import MaxWidthWrapper from "./max-width-wrapper";

const FAQs = ({ id }: { id?: string }) => {
  const [more, setMore] = useState({
    id: 1,
    more: true,
  });

  const handleToggle = (id: number) => {
    setMore({
      id,
      more: more.id === id ? !more.more : true,
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative mx-auto h-fit w-full md:h-[820px] lg:h-[1000px]">
      <img src={bg} alt="" className="z-0 h-[1200px] w-full" />

      <MaxWidthWrapper className="absolute top-0 z-[1] mx-auto flex w-fit flex-col items-start justify-start gap-20 overflow-hidden py-10 lg:py-32">
        <motion.div
          id={id}
          className="flex w-full flex-col items-center justify-center gap-3"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <img
            src={Title}
            alt="FAQ's"
            className="w-16 md:w-20 lg:mt-9 lg:w-28"
          />
          <div className="flex flex-col items-center justify-center gap-5">
            <h1 className="text-xl font-bold text-[#363539] md:text-3xl lg:text-5xl">
              Frequently Asked Questions
            </h1>
            <div className="flex flex-col pt-3">
              <h1 className="text-medium text-center font-[400] text-[#797A84] md:text-lg lg:text-2xl">
                Find question and answer related to the Mathology transforms
              </h1>
              <h1 className="text-medium text-center font-[400] text-[#797A84] md:text-lg lg:text-2xl">
                math learning and support.
              </h1>
            </div>
          </div>
          <div className="mx-auto mb-5 mt-4 flex w-full flex-col items-center justify-center gap-5 overflow-y-auto md:mt-12 lg:mb-10">
            <div className="grid w-full gap-5 md:grid-cols-2">
              {faqlist.map((faq, index) => (
                <motion.div
                  key={faq.id}
                  className="flex flex-col gap-3 rounded-2xl bg-gray-100 p-4 hover:shadow-lg"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <h1 className="text-[20px] font-bold">{faq.title}</h1>
                  <h1 className="font-[400] text-[#797A84] md:text-sm lg:text-[16px]">
                    {more.more && more.id === faq.id
                      ? faq.description
                      : `${faq.description.slice(0, 80)}...`}
                    . &nbsp;
                    <span
                      onClick={() => handleToggle(faq.id)}
                      className="cursor-pointer font-semibold text-[#2431DD] underline"
                    >
                      {more.more && more.id === faq.id
                        ? "Read Less"
                        : "Read More"}
                    </span>
                  </h1>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </MaxWidthWrapper>
    </div>
  );
};

export default FAQs;
