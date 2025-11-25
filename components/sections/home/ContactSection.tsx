"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { contactFormSchema, type ContactFormData } from "@/lib/schemas";
import { sendContactEmail } from "@/actions/send-email";

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    mode: "onChange",
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      setIsSubmitting(true);

      // Call server action
      const result = await sendContactEmail(data);

      if (result.success) {
        toast.success(
          result.message || "Đã gửi thông tin! Chúng tôi sẽ liên hệ sớm."
        );
        reset(); // Reset form sau khi gửi thành công
      } else {
        toast.error(result.error || "Lỗi khi gửi email. Vui lòng thử lại.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Lỗi không xác định. Vui lòng thử lại sau.");
    } finally {
      setIsSubmitting(false);
    }
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
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Row 1: Tên & Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-900 dark:text-white mb-2">
                  Tên
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Brian Clark"
                  {...register("name")}
                  className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-offset-0 transition-all bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 ${
                    errors.name
                      ? "border-red-500 focus:ring-red-500"
                      : "border-gray-200 dark:border-gray-800 focus:ring-slate-900 dark:focus:ring-white"
                  }`}
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
                )}
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-900 dark:text-white mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="example@youremail.com"
                  {...register("email")}
                  className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-offset-0 transition-all bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 ${
                    errors.email
                      ? "border-red-500 focus:ring-red-500"
                      : "border-gray-200 dark:border-gray-800 focus:ring-slate-900 dark:focus:ring-white"
                  }`}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
                )}
              </div>
            </div>

            {/* Row 2: Điện thoại */}
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-slate-900 dark:text-white mb-2">
                Điện thoại (tùy chọn)
              </label>
              <input
                type="tel"
                id="phone"
                placeholder="097 1548 125"
                {...register("phone")}
                className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-offset-0 transition-all bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 ${
                  errors.phone
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-200 dark:border-gray-800 focus:ring-slate-900 dark:focus:ring-white"
                }`}
              />
              {errors.phone && (
                <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>
              )}
            </div>

            {/* Row 3: Lời nhắn */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-900 dark:text-white mb-2">
                Lời nhắn
              </label>
              <textarea
                id="message"
                placeholder="Type your message here..."
                rows={4}
                {...register("message")}
                className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-offset-0 transition-all resize-none bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 ${
                  errors.message
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-200 dark:border-gray-800 focus:ring-slate-900 dark:focus:ring-white"
                }`}
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <div>
              <Button
                type="submit"
                disabled={isSubmitting || !isValid}
                className="w-fit bg-slate-900 dark:bg-white hover:bg-slate-800 dark:hover:bg-gray-200 text-white dark:text-slate-900 px-6 py-3 rounded-md flex items-center gap-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Đang gửi...
                  </>
                ) : (
                  <>
                    Gửi yêu cầu
                    <ArrowRight size={18} />
                  </>
                )}
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
