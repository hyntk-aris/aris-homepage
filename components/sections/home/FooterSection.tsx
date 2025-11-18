"use client";

import { useState } from "react";
import { Maximize2, ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Define mảng 'services': { label, href } // Define mảng 'industries': { label, href } // Define mảng 'offices': { name, address, email, phone, fax } (HCM, HN, Tokyo)
const services = [
  { label: "Phát triển phần mềm dịch vụ trong gói ONE-STOP", href: "#" },
  { label: "Phát triển hệ thống/ứng dụng", href: "#" },
  { label: "Phát triển ứng dụng di động", href: "#" },
  { label: "Kiểm soát chất lượng kiểm thử phần mềm", href: "#" },
  { label: "Thiết kế UI/UX - Thiết kế đồ họa", href: "#" },
  { label: "Hợp tác nghiên cứu và phát triển (R&D)", href: "#" },
  { label: "Tư vấn chuyên đổi số, giải pháp chuyên đổi số", href: "#" },
  { label: "Thuê ngoài quy trình với dịch vụ (BPO)", href: "#" },
  { label: "Giám sát - Vận hành, Bảo trì hệ thống", href: "#" },
  { label: "OT Security, TXONE Element", href: "#" },
  { label: "Dịch vụ cung cấp kỹ sư", href: "#" },
  { label: "AI/ML/Automation", href: "#" },
];

const industries = [
  { label: "Ngành Sản Xuất / Nhà Máy", href: "#" },
  { label: "Bán Lẻ & Thương Mại Điện Tử", href: "#" },
  { label: "Chăm Sóc Sức Khoẻ", href: "#" },
  { label: "An Ninh Mạng", href: "#" },
  { label: "Bất Động Sản", href: "#" },
  { label: "Tài Chính / Ngân Hàng", href: "#" },
  { label: "Giao Thông / Vận Tải / Logistics", href: "#" },
];

const offices = [
  {
    name: "Trụ sở Hồ Chí Minh",
    address: "(Tòa nhà Waseco) Số 10, đường Phố Quang, Phường Tân Sơn Hòa, TP Hồ Chí Minh, Việt Nam",
    email: "contact@aris-vn.com",
    phone: "(+84) 28.3842 - 4484",
    fax: "(+84) 28.3842 - 4473",
  },
  {
    name: "Chi nhánh Hà Nội",
    address: "Tầng 08, Tòa nhà Detech Tower II, 107 Nguyễn Phong Sắc, Phường Cầu Giấy, Hà Nội",
    email: "contact@aris-vn.com",
    phone: "(+84) 28.3842 - 4484",
    fax: "(+84) 28.3842 - 4473",
  },
  {
    name: "Trụ sở TOKYO",
    address: "Shinjuku Nomura Bldg 10F, 1-26-2 Nishi-Shinjuku, Shinjuku-ku, Tokyo, 163-0510, Japan",
    email: "contact@aris-vn.com",
    phone: "(+81) 3.3340 - 1053",
    fax: "(+81) 3.3340 - 1054",
  },
];

export function FooterSection() {
  const [isMapOpen, setIsMapOpen] = useState(false);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Phần 1: Thông tin & Bản đồ (Top) */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 pt-16 pb-8">
          {/* 3 Cột Thông tin Trụ sở */}
          {offices.map((office, index) => (
            <div key={index} className="space-y-3">
              <h3 className="font-bold text-slate-900 text-sm">{office.name}</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                {office.address}
              </p>
              <div className="text-xs text-gray-600 space-y-1">
                <p>
                  <span className="font-semibold">Email:</span> {office.email}
                </p>
                <p>
                  <span className="font-semibold">Điện thoại:</span> {office.phone}
                </p>
                <p>
                  <span className="font-semibold">Fax:</span> {office.fax}
                </p>
              </div>
            </div>
          ))}

          {/* Cột 4: Map Widget */}
          <div className="lg:col-span-1">
            {/* Render Map Thumbnail: div relative aspect-video rounded-lg overflow-hidden. // Inside: <iframe ... src="google_map_embed_url" allowFullScreen ... /> // Expand Button: absolute bottom-2 right-2 bg-white p-2 rounded shadow hover:bg-gray-100 cursor-pointer. Icon: Maximize2. */}
            <div className="relative w-full h-64 rounded-lg overflow-hidden bg-gray-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.517758103474!2d106.68163!3d10.758765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ee66e6c3607%3A0x80c1f21b3d7d8b0c!2sAris%20Vietnam!5e0!3m2!1sen!2s!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              ></iframe>

              {/* Expand Button */}
              <button
                onClick={() => setIsMapOpen(true)}
                className="absolute bottom-2 right-2 bg-white p-2 rounded shadow hover:bg-gray-100 transition-colors cursor-pointer z-10"
                aria-label="Expand map"
              >
                <Maximize2 size={18} className="text-slate-900" />
              </button>
            </div>
          </div>
        </div>

        {/* Phần 2: Danh sách liên kết (Middle) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8 border-t border-gray-200">
          {/* Dịch vụ */}
          <div>
            <h3 className="font-bold text-slate-900 mb-4">Dịch vụ</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href={service.href}
                    className="text-sm text-gray-600 hover:text-slate-900 transition-colors"
                  >
                    {service.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Ngành trọng điểm */}
          <div>
            <h3 className="font-bold text-slate-900 mb-4">Ngành trọng điểm</h3>
            <ul className="space-y-2">
              {industries.map((industry, index) => (
                <li key={index}>
                  <a
                    href={industry.href}
                    className="text-sm text-gray-600 hover:text-slate-900 transition-colors"
                  >
                    {industry.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Phần 3: Copyright & Back to Top (Bottom) */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 pb-8 border-t border-gray-200">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <svg
              className="w-6 h-6"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <text x="0" y="50" fontSize="48" fontWeight="bold" fill="#000">
                ARIS
              </text>
            </svg>
            <span className="text-xs text-gray-600">
              Copyright © 2025 ARIS Vietnam | All rights reserved.
            </span>
          </div>

          {/* Scroll To Top Function: const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' }) // Button: button onClick={scrollToTop} className="bg-black p-3 rounded hover:opacity-80 text-white" */}
          <button
            onClick={scrollToTop}
            className="bg-slate-900 p-3 rounded hover:bg-slate-800 transition-colors text-white flex-shrink-0"
            aria-label="Back to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>

      {/* Modal Logic: Sử dụng AnimatePresence (nếu có) hoặc Fixed Div z-50 để render Map lớn khi isMapOpen === true. */}
      <AnimatePresence>
        {isMapOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4"
            onClick={() => setIsMapOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-lg w-full h-[90vh] max-w-5xl overflow-hidden relative"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.517758103474!2d106.68163!3d10.758765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ee66e6c3607%3A0x80c1f21b3d7d8b0c!2sAris%20Vietnam!5e0!3m2!1sen!2s!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>

              {/* Close Button */}
              <button
                onClick={() => setIsMapOpen(false)}
                className="absolute top-4 right-4 bg-white p-2 rounded shadow hover:bg-gray-100 transition-colors z-10"
                aria-label="Close map"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </footer>
  );
}
