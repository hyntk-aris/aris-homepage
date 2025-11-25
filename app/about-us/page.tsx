export default function AboutUsPage() {
  return (
    <main className="w-full min-h-[calc(100vh-80px)] flex flex-col items-center justify-center px-4">
      <div className="text-center space-y-6 max-w-2xl">
        <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white">
          Về Chúng Tôi
        </h1>
        
        <p className="text-xl text-gray-600 dark:text-gray-400">
          Chúng tôi đang chuẩn bị nội dung tuyệt vời cho bạn.
        </p>
        
        <div className="pt-8">
          <div className="inline-block">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-slate-900 dark:border-white"></div>
          </div>
        </div>
        
        <p className="text-sm text-gray-500 dark:text-gray-400 pt-4">
          Coming Soon
        </p>
      </div>
    </main>
  )
}
