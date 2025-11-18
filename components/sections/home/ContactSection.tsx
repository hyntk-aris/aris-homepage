"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  return (
    <section className="w-full max-w-[1440px] min-h-screen bg-background mx-auto px-4 md:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
        {/* Cột Trái (Form Area) */}
        <div className="flex flex-col justify-center p-8 lg:p-24 bg-background">
          {/* Header */}
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Liên hệ tư vấn
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-3">
              Chúng tôi sẽ liên lạc ngay với bạn trong vòng và ngay sau khi nhận
              được thông tin.
            </p>
            <p className="italic text-gray-500 dark:text-gray-500 text-sm">
              *Trong trường hợp không nhận được email phản hồi trong vòng 1 tuần,
              xin vui lòng liên lạc lại với chúng tôi vì rất có thể id email đã xây ra.
              Rất xin lỗi vì sự bất tiện trong trường hợp này.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Row 1: Tên & Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-900 dark:text-white mb-2">
                  Tên
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Brian Clark"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 dark:border-gray-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-900 dark:focus:ring-white focus:ring-offset-0 transition-all"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-900 dark:text-white mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="example@youremail.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 dark:border-gray-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-900 dark:focus:ring-white focus:ring-offset-0 transition-all"
                />
              </div>
            </div>

            {/* Row 2: Điện thoại & Tiêu đề */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-slate-900 dark:text-white mb-2">
                  Điện thoại
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="097 1548 125"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 dark:border-gray-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-900 dark:focus:ring-white focus:ring-offset-0 transition-all"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-900 dark:text-white mb-2">
                  Tiêu đề
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="BRIX Agency"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 dark:border-gray-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-900 dark:focus:ring-white focus:ring-offset-0 transition-all"
                />
              </div>
            </div>

            {/* Row 3: Lời nhắn */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-900 dark:text-white mb-2">
                Lời nhắn
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Type your message here..."
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-200 dark:border-gray-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-900 dark:focus:ring-white focus:ring-offset-0 transition-all resize-none"
              ></textarea>
            </div>

            {/* Recaptcha Mock */}
            <div className="border border-gray-200 dark:border-gray-800 rounded-md p-4 flex items-center gap-3 bg-gray-50 dark:bg-slate-900/50">
              <input
                type="checkbox"
                id="recaptcha"
                className="w-6 h-6 cursor-pointer"
              />
              <span className="text-sm text-gray-700 dark:text-gray-400">I'm not a robot</span>
              <div className="ml-auto text-right text-xs">
                <div className="font-semibold text-gray-700 dark:text-gray-300">reCAPTCHA</div>
                <div className="text-gray-600 dark:text-gray-500">
                  Privacy - Terms
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div>
              <Button
                type="submit"
                className="w-fit bg-slate-900 dark:bg-white hover:bg-slate-800 dark:hover:bg-gray-200 text-white dark:text-slate-900 px-6 py-3 rounded-md flex items-center gap-2 transition-colors"
              >
                Gửi yêu cầu
                <ArrowRight size={18} />
              </Button>
            </div>
          </form>
        </div>

        {/* Cột Phải (Image Placeholder) */}
        <div className="hidden lg:block h-full w-full bg-gray-100 dark:bg-slate-900 relative">
          {/* Image placeholder - Ready for Image component */}
        </div>
      </div>
    </section>
  );
}
