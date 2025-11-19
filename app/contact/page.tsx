export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-white dark:from-neutral-900 dark:to-neutral-800">
      <div className="mx-auto max-w-7xl px-4 py-20">
        <h1 className="text-center font-bold text-4xl md:text-5xl text-neutral-900 dark:text-neutral-100 mb-6">
          Liên hệ với chúng tôi
        </h1>
        <p className="text-center text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
          Có câu hỏi gì? Chúng tôi rất muốn nghe từ bạn. Gửi cho chúng tôi một tin nhắn và chúng tôi sẽ phản hồi sớm nhất có thể.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16">
          {/* Contact Form */}
          <div>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-neutral-900 dark:text-neutral-100 mb-2">
                  Tên Đầy đủ
                </label>
                <input
                  type="text"
                  placeholder="Tên của bạn"
                  className="w-full px-4 py-2 border border-neutral-300 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 focus:outline-none focus:border-slate-900 dark:focus:border-slate-100"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-900 dark:text-neutral-100 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="email@gmail.com"
                  className="w-full px-4 py-2 border border-neutral-300 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 focus:outline-none focus:border-slate-900 dark:focus:border-slate-100"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-900 dark:text-neutral-100 mb-2">
                  Tin nhắn
                </label>
                <textarea
                  placeholder="Tin nhắn của bạn..."
                  rows={5}
                  className="w-full px-4 py-2 border border-neutral-300 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 focus:outline-none focus:border-slate-900 dark:focus:border-slate-100"
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-slate-900 text-white rounded-lg hover:opacity-90 transition-opacity font-semibold dark:bg-slate-100 dark:text-slate-900"
              >
                Gửi Tin nhắn
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
                Địa chỉ
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                123 Đường Kinh Doanh<br />
                Thành phố Hồ Chí Minh, Việt Nam
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
                Điện thoại
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                +84 (0) 123 456 7890
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
                Email
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                hello@company.com
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
                Giờ làm việc
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                Thứ Hai - Thứ Sáu: 9:00 AM - 6:00 PM<br />
                Thứ Bảy - Chủ Nhật: Đóng cửa
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
