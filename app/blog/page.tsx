export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-white dark:from-neutral-900 dark:to-neutral-800">
      <div className="mx-auto max-w-7xl px-4 py-20">
        <h1 className="text-center font-bold text-4xl md:text-5xl text-neutral-900 dark:text-neutral-100 mb-6">
          Blog
        </h1>
        <p className="text-center text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
          Cập nhật các thông tin chi tiết, xu hướng và thực tiễn tốt nhất trong lĩnh vực AI và chuyển đổi số mới nhất.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          {[1, 2, 3, 4].map((item) => (
            <article key={item} className="border border-neutral-200 dark:border-neutral-700 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-r from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-800"></div>
              <div className="p-6">
                <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-2">
                  {new Date().toLocaleDateString('vi-VN')} • 5 phút đọc
                </p>
                <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-3">
                  Bài viết Blog {item}
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400 mb-4">
                  Khám phá các thông tin chi tiết chính và chiến lược để tận dụng công nghệ AI nhằm đạt được lợi thế cạnh tranh.
                </p>
                <a href="#" className="text-slate-900 dark:text-slate-100 font-semibold hover:opacity-70 transition-opacity">
                  Đọc thêm →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
