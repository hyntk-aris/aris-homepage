export default function UseCasesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-white dark:from-neutral-900 dark:to-neutral-800">
      <div className="mx-auto max-w-7xl px-4 py-20">
        <h1 className="text-center font-bold text-4xl md:text-5xl text-neutral-900 dark:text-neutral-100 mb-6">
          Trường hợp Sử dụng
        </h1>
        <p className="text-center text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
          Khám phá các ứng dụng thực tế và câu chuyện thành công của các giải pháp AI của chúng tôi trên nhiều ngành công nghiệp.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="p-6 border border-neutral-200 dark:border-neutral-700 rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-3">
                Trường hợp Sử dụng {item}
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                Tìm hiểu cách các giải pháp của chúng tôi đã giúp các doanh nghiệp đạt được mục tiêu thông qua các triển khai AI sáng tạo.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
