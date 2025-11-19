export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-white dark:from-neutral-900 dark:to-neutral-800">
      <div className="mx-auto max-w-7xl px-4 py-20">
        <h1 className="text-center font-bold text-4xl md:text-5xl text-neutral-900 dark:text-neutral-100 mb-6">
          Sản phẩm của chúng tôi
        </h1>
        <p className="text-center text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
          Khám phá bộ sưu tập toàn diện các sản phẩm được hỗ trợ bởi AI được thiết kế để chuyển đổi doanh nghiệp của bạn.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="p-6 border border-neutral-200 dark:border-neutral-700 rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-3">
                Sản phẩm {item}
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                Giải pháp AI nâng cao được tùy chỉnh để đáp ứng các yêu cầu và thách thức kinh doanh hiện đại.
              </p>
              <button className="mt-4 px-4 py-2 bg-slate-900 text-white rounded-lg hover:opacity-90 transition-opacity dark:bg-slate-100 dark:text-slate-900">
                Tìm hiểu thêm
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
