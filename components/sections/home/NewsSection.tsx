"use client";

import { Button } from "@/components/ui/button";

// Define 'newsData'. Item 1 là bài Featured (có ảnh to). Item 2,3,4 là bài tin tức thường.
const newsData = [
  {
    id: 1,
    title: "Kỷ niệm 14 năm thành lập ARIS Vietnam với chủ đề ĐÓN BÌNH MINH...",
    description:
      "Hành trình 14 năm của ARIS Vietnam là câu chuyện về sự khích lệ, đó một vấn đề trong lĩnh vực công nghệ. Năm nay, với chủ đề \"ĐÓN BÌNH MINH - Bình minh Công nghệ, dần dắu Tỷ lệ nhân tạo\", chúng tôi khổng chỉ chân dung một cơi nước danh nhân mà còn những định hình tương sang được yêu cầu của những công nghệ tối ưu thảnh động lực với đó được đây phát triển bền vững.",
    date: "30/8/2025",
    image: "",
    featured: true,
  },
  {
    id: 2,
    title: "ARIS hợp tác của EU từ các hộc hạ...",
    description:
      "Với mục tiêu dẫn dắt trong việc cấp nhân thức về các vấn đề của công nghệ để gánh sự những cấp không chỗ được...",
    date: "17/2/2025",
    image: "",
    featured: false,
  },
  {
    id: 3,
    title: "ARIS Việt Nam đã giành đầu xu hữu...",
    description:
      "Với mục tiêu dẫn dắt trong việc cấp nhân thức về các vấn đề có được nâng cấp tức người được cấp không chỗ...",
    date: "17/1/2025",
    image: "",
    featured: false,
  },
  {
    id: 4,
    title: "Tri ân khách hàng đã gắn bó với A...",
    description:
      "Với mục tiêu dẫn dắt trong việc cấp nhân thức về các vấn đề có được nâng cấp tức người được cấp không...",
    date: "17/1/2025",
    image: "",
    featured: false,
  },
];

export function NewsSection() {
  // Separate featured from other news
  const featuredArticle = newsData[0];
  const otherNews = newsData.slice(1);

  return (
    <section className="py-20 bg-background">
      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-8">
        {/* Header Section */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Tin tức mới cập nhật
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Tin tức và hoạt động nổi bật tu công ty, dự án về độc tạc.
          </p>
        </div>

        {/* Render Featured Card: Container dùng 'grid grid-cols-1 lg:grid-cols-12 gap-8'. // Image Col: 'lg:col-span-5 h-full min-h-[300px]'. // Content Col: 'lg:col-span-7 flex flex-col justify-center'. // Trong Content: Title lớn, Description dùng 'line-clamp-3', Date căn về phía bên phải bottom. */}
        <div className="mb-12 grid grid-cols-1 lg:grid-cols-12 gap-8 bg-gray-50 dark:bg-slate-900/50 p-8 rounded-lg">
          {/* Image Col */}
          <div className="lg:col-span-5 h-full min-h-[300px]">
            <div className="w-full h-full bg-gray-200 dark:bg-slate-900 rounded-lg"></div>
          </div>

          {/* Content Col */}
          <div className="lg:col-span-7 flex flex-col justify-center gap-4">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">
              {featuredArticle.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 line-clamp-3">
              {featuredArticle.description}
            </p>
            <div className="text-right text-gray-500 dark:text-gray-400 text-sm mt-auto">
              {featuredArticle.date}
            </div>
          </div>
        </div>

        {/* Render Sub-header: Flex container 'justify-between items-center py-8'. */}
        <div className="flex justify-between items-center py-8">
          <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Tin khác</h3>
          <Button
            variant="outline"
            className="rounded-full px-6 py-2 border-gray-200 dark:border-gray-800 text-slate-900 dark:text-white hover:bg-gray-50 dark:hover:bg-slate-900"
          >
            Xem thêm
          </Button>
        </div>

        {/* Render Grid Container: 'grid grid-cols-1 md:grid-cols-3 gap-8'. // Map 3 item còn lại của newsData. // Mỗi Card: Flex col. Image aspect-[16/9]. Content: Title, Description 'line-clamp-3', Date text-right. */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {otherNews.map((news) => (
            <div key={news.id} className="flex flex-col gap-4">
              {/* Image Thumbnail */}
              <div className="w-full aspect-[16/9] bg-gray-200 dark:bg-slate-900 rounded-lg"></div>

              {/* Content */}
              <div className="flex flex-col gap-3">
                <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                  {news.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-3">
                  {news.description}
                </p>
                <div className="text-right text-gray-500 dark:text-gray-400 text-xs">
                  {news.date}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
