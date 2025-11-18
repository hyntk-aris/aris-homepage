"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Define 'exploreData'. Mỗi item gồm: id, title, description, author, role, imageUrl.
const exploreData = [
  {
    id: 1,
    title: "Khám phá hành trình 1",
    description:
      "Lorem ipsum dolor sit amet consectetur eget maecenas sapien fusce egestas risus purus suspendisse turpis volutpat onare imperdiet bibendum eleifend quam feugiat sit semper fames id diam diam nisi mauris netus facilisi semper elementum quis turpis dui viverra nisl.",
    author: "Hy Nguyen",
    role: "Member",
    imageUrl: "",
  },
  {
    id: 2,
    title: "Khám phá hành trình 2",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    author: "Tuan Pham",
    role: "Team Lead",
    imageUrl: "",
  },
  {
    id: 3,
    title: "Khám phá hành trình 3",
    description:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt neque porro quisquam est, qui dolorem ipsum quia dolor sit.",
    author: "Linh Vo",
    role: "Designer",
    imageUrl: "",
  },
];

export function ExploreSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? exploreData.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === exploreData.length - 1 ? 0 : prev + 1
    );
  };

  const currentItem = exploreData[currentIndex];

  return (
    <section className="py-20 bg-background">
      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Khám phá hành trình
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
            Với tinh thần "One Team - One Spirit - One Win", hành trình kiến tạo ARIS Vietnam
            được xây dựng từ những viên gạch nhỏ, đặt trên nền móng vững chắc của niềm tin,
            sự đoàn lực lòng và khát vọng không ngừng vươn tới.
          </p>
        </div>

        {/* Render Slider Container: Flex row, items-center, justify-center, gap-4 md:gap-12. // Button Previous: Icon ArrowLeft, rounded-full border p-4 hover:bg-gray-100. */}
        <div className="flex items-center justify-center gap-4 md:gap-12">
          {/* Button Previous */}
          <button
            onClick={handlePrev}
            className="hidden md:flex items-center justify-center w-12 h-12 rounded-full border border-gray-300 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-slate-900 transition-colors flex-shrink-0"
            aria-label="Previous"
          >
            <ChevronLeft size={24} className="text-slate-900 dark:text-white" />
          </button>

          {/* Render Active Card: Sử dụng motion.div, key={currentIndex}. // Style Card: grid grid-cols-1 md:grid-cols-2 overflow-hidden rounded-3xl bg-white shadow-xl ring-1 ring-gray-900/5. // Col 1 (Image): Relative h-full min-h-[300px] md:min-h-[500px] bg-gray-50. // Col 2 (Content): Flex col justify-center p-8 md:p-16 space-y-6. */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 overflow-hidden rounded-3xl bg-white dark:bg-slate-900 shadow-xl ring-1 ring-gray-900/5 dark:ring-white/10"
            >
              {/* Col 1 (Image) */}
              <div className="relative h-full min-h-[300px] md:min-h-[500px] bg-gray-100 dark:bg-slate-900/50"></div>

              {/* Col 2 (Content): Flex col justify-center p-8 md:p-16 space-y-6. */}
              <div className="flex flex-col justify-center p-8 md:p-16 space-y-6">
                {/* Title: text-2xl font-bold text-slate-900. // Description: text-lg text-slate-600 leading-relaxed. */}
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4">
                    {currentItem.title}
                  </h3>
                  <p className="text-base md:text-lg text-slate-600 dark:text-gray-400 leading-relaxed">
                    {currentItem.description}
                  </p>
                </div>

                {/* Author Info: div mt-auto pt-6 (Name bold, Role gray). */}
                <div className="mt-auto pt-6 border-t border-gray-200 dark:border-gray-800">
                  <p className="font-semibold text-slate-900 dark:text-white">
                    {currentItem.author}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{currentItem.role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Button Next: Icon ArrowRight, tương tự button Prev. Cho phép Bấm sẽ Slide. */}
          <button
            onClick={handleNext}
            className="hidden md:flex items-center justify-center w-12 h-12 rounded-full border border-gray-300 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-slate-900 transition-colors flex-shrink-0"
            aria-label="Next"
          >
            <ChevronRight size={24} className="text-slate-900 dark:text-white" />
          </button>
        </div>

        {/* Mobile Navigation Buttons */}
        <div className="flex md:hidden justify-center gap-4 mt-8">
          <button
            onClick={handlePrev}
            className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-300 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-slate-900 transition-colors"
            aria-label="Previous"
          >
            <ChevronLeft size={20} className="text-slate-900 dark:text-white" />
          </button>
          <button
            onClick={handleNext}
            className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-300 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-slate-900 transition-colors"
            aria-label="Next"
          >
            <ChevronRight size={20} className="text-slate-900 dark:text-white" />
          </button>
        </div>
      </div>
    </section>
  );
}
