export default function RecruitmentsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-white dark:from-neutral-900 dark:to-neutral-800">
      <div className="mx-auto max-w-7xl px-4 py-20">
        <h1 className="text-center font-bold text-4xl md:text-5xl text-neutral-900 dark:text-neutral-100 mb-6">
          Tham gia Đội ngũ của chúng tôi
        </h1>
        <p className="text-center text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
          Chúng tôi đang tuyển dụng các chuyên gia tài năng để giúp thúc đẩy sự đổi mới trong lĩnh vực AI và chuyển đổi số.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          {[
            { title: "Kỹ sư AI Cấp cao", location: "Làm việc từ xa", type: "Toàn thời gian" },
            { title: "Nhà phát triển Full Stack", location: "Thành phố Hồ Chí Minh", type: "Toàn thời gian" },
            { title: "Nhà thiết kế UI/UX", location: "Làm việc từ xa", type: "Toàn thời gian" },
            { title: "Quản lý Sản phẩm", location: "Hà Nội", type: "Toàn thời gian" },
          ].map((job, idx) => (
            <div key={idx} className="p-6 border border-neutral-200 dark:border-neutral-700 rounded-lg hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">
                    {job.title}
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400 text-sm mt-1">
                    {job.location} • {job.type}
                  </p>
                </div>
              </div>
              <p className="text-neutral-600 dark:text-neutral-400 mb-4">
                Chúng tôi đang tìm kiếm các chuyên gia có kinh nghiệm để tham gia đội ngũ đang phát triển của chúng tôi và tạo ra tác động.
              </p>
              <button className="px-4 py-2 bg-slate-900 text-white rounded-lg hover:opacity-90 transition-opacity dark:bg-slate-100 dark:text-slate-900">
                Ứng tuyển Ngay
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
