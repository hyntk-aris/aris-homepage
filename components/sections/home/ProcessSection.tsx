"use client"

import { useState } from "react"
import ProcessDisplayCard, { ProcessStep } from "@/components/ui/process-display-card"

const PROCESS_STEPS: ProcessStep[] = [
  {
    id: 1,
    title: "Phân tích",
    description: "Giai đoạn đầu tiên trong quy trình",
    details: "Chúng tôi tiến hành phân tích toàn diện nhu cầu của bạn. Điều này giúp chúng tôi hiểu rõ mục tiêu và kỳ vọng của bạn để xây dựng kỳ lưỡng để đảm bảo hiệu quả và chất lượng.",
  },
  {
    id: 2,
    title: "Lập kế hoạch",
    description: "Phát triển chiến lược chi tiết",
    details: "Sau khi phân tích hoàn tất, chúng tôi tạo một lộ trình chi tiết để triển khai dự án. Kế hoạch này bao gồm các yếu tố cụ thể, phân bổ nguồn lực, và định các mục tiêu được đảm bảo chất lượng cao nhất.",
  },
  {
    id: 3,
    title: "Thực hiện",
    description: "Triển khai theo kế hoạch đã xây dựng",
    details: "Chúng tôi bắt đầu triển khai theo kế hoạch đã xây dựng. Mỗi bước của quy trình được thực hiện một cách chính xác và tận tâm, đảm bảo các yếu tố tiêu dự án được hoàn thành một cách hiệu quả.",
  },
  {
    id: 4,
    title: "Kiểm soát chất lượng",
    description: "Liên tục giám sát và kiểm soát",
    details: "Chúng tôi liên tục giám sát và kiểm soát tất cả các hoạt động. Điều này đảm bảo dự án tiến triển đúng theo kế hoạch bạn đã được dặp ứng đ mục cao nhất.",
  },
  {
    id: 5,
    title: "Triển khai",
    description: "Đưa sản phẩm/dịch vụ vào hoạt động",
    details: "Sau khi hoàn tất và kiểm tra kỳ lưỡng, chúng tôi sẽ bàn giao sản phẩm hoặc cung cấp hỗ trợ vận hành để đảm bảo hoạt động suôn sẻ, hiệu quả sau khi triển khai.",
  },
  {
    id: 6,
    title: "Vận hành",
    description: "Hỗ trợ và tối ưu hóa liên tục",
    details: "Cuối cùng, chúng tôi tiếp tục duy trì dự án sản phẩm và cung cấp hỗ trợ vận hành để đảm bảo hoạt động suôn sẻ, hiệu quả sau khi triển khai.",
  },
]

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState(1)

  const activeStepData = PROCESS_STEPS.find((step) => step.id === activeStep)

  return (
    <section className="py-[164px] bg-background">
      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-3">
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white">
            Quy trình dự án
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl">
            Chúng tôi đồng hành cùng bạn trong từng giai đoạn - từ ý tưởng ban đầu cho đến khi sản phẩm chính thức ra mắt. Mỗi bước đều được xây dựng kỳ lưỡng để đảm bảo hiệu quả và chất lượng.
          </p>
        </div>

        {/* Grid Layout: Tabs (Left) + Display (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column - Vertical Tabs Navigation */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            {PROCESS_STEPS.map((step, index) => (
              <button
                key={step.id}
                onClick={() => setActiveStep(step.id)}
                className={`text-left p-4 rounded-lg border-2 transition-all duration-200 ${
                  activeStep === step.id
                    ? "border-blue-500 bg-blue-50 dark:bg-slate-900 dark:border-blue-500"
                    : "border-gray-200 bg-white dark:border-gray-800 dark:bg-slate-900/50 hover:border-gray-300 dark:hover:border-gray-700"
                }`}
              >
                <div className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  Step {index + 1}
                </div>
                <div className="text-lg font-bold text-slate-900 dark:text-white mt-1">
                  {step.title}
                </div>
              </button>
            ))}
          </div>

          {/* Right Column - Display Area */}
          <div className="lg:col-span-9">
            {activeStepData && <ProcessDisplayCard step={activeStepData} />}
          </div>
        </div>
      </div>
    </section>
  )
}
