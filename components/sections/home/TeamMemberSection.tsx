"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Define mảng 'members': { id, name, position, image (để trống hoặc string placeholder) } // Tạo khoảng 8-10 members để test hiệu ứng scroll sticky
const members = [
  { id: 1, name: "Nhat Tran", position: "CEO", image: "" },
  { id: 2, name: "Kha Nguyen", position: "Position", image: "" },
  { id: 3, name: "Khoa Pham", position: "Position", image: "" },
  { id: 4, name: "Lan Nguyen", position: "Position", image: "" },
  { id: 5, name: "Van Nguyen", position: "Position", image: "" },
  { id: 6, name: "Tien Nguyen", position: "Position", image: "" },
  { id: 7, name: "Anh Le", position: "Position", image: "" },
  { id: 8, name: "Quan Vu", position: "Position", image: "" },
  { id: 9, name: "Hoa Nguyen", position: "Position", image: "" },
  { id: 10, name: "Nguyen Vuong", position: "Position", image: "" },
  { id: 11, name: "Duc Nguyen", position: "Position", image: "" },
  { id: 12, name: "Tu Le", position: "Position", image: "" },
];

export function TeamMemberSection() {
  return (
    <section className="py-20 bg-background">
      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-8">
        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Sticky Container: class="lg:col-span-4 lg:sticky lg:top-24 h-fit flex flex-col gap-6" // (Tech Lead Note: 'h-fit' là bắt buộc để sticky hoạt động đúng) */}
          <div className="lg:col-span-4 lg:sticky lg:top-24 h-fit flex flex-col gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                Đội ngũ đóng hành cùng thành công của bạn
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Với nhân lực "TEAM - SPIRIT - WANT", chúng tôi hướng tới xây dựng và luôn luôn sống với người dùng làm trọng tâm của những phía nhằm cải nghi đó là kinh nghiệm tối ưu để cải tiến.
              </p>
            </div>
            <Button className="w-fit rounded-full px-6 py-3 bg-slate-900 hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-gray-200 text-white">
              Tìm hiểu thêm
            </Button>
          </div>

          {/* Grid Container: class="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12" */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
            {/* Logic Staggered: const isEven = index % 2 !== 0; // Container Card: className={cn("flex flex-col gap-4", isEven && "md:mt-24")} // Image Placeholder: class="w-full aspect-[3/4] bg-gray-100 rounded-2xl" */}
            {members.map((member, index) => {
              const isEven = index % 2 !== 0;
              return (
                <div
                  key={member.id}
                  className={cn("flex flex-col gap-4", isEven && "md:mt-24")}
                >
                  {/* Image Placeholder */}
                  <div className="w-full aspect-[3/4] bg-gray-100 dark:bg-slate-900/50 rounded-2xl"></div>

                  {/* Member Info */}
                  <div className="flex flex-col gap-2">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      {member.name}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{member.position}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
