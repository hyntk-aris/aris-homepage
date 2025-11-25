"use server"

import { z } from "zod"
import { Resend } from "resend"
import { contactFormSchema, type ContactFormData } from "@/lib/schemas"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendContactEmail(formData: ContactFormData) {
  try {
    // Validate dữ liệu với schema
    const validatedData = contactFormSchema.parse(formData)

    // Email nội dung
    const emailContent = `
      <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f5f5f5;">
        <div style="max-width: 600px; margin: 0 auto; background-color: white; padding: 30px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
          <h2 style="color: #333; margin-bottom: 20px;">Yêu cầu liên hệ từ Website</h2>
          
          <div style="margin-bottom: 20px; padding-bottom: 10px; border-bottom: 1px solid #eee;">
            <p style="margin: 0;"><strong>Tên:</strong> ${validatedData.name}</p>
          </div>
          
          <div style="margin-bottom: 20px; padding-bottom: 10px; border-bottom: 1px solid #eee;">
            <p style="margin: 0;"><strong>Email:</strong> <a href="mailto:${validatedData.email}">${validatedData.email}</a></p>
          </div>
          
          ${validatedData.phone ? `
          <div style="margin-bottom: 20px; padding-bottom: 10px; border-bottom: 1px solid #eee;">
            <p style="margin: 0;"><strong>Số điện thoại:</strong> ${validatedData.phone}</p>
          </div>
          ` : ''}
          
          <div style="margin-bottom: 20px;">
            <p style="margin: 0 0 10px 0;"><strong>Nội dung:</strong></p>
            <p style="margin: 0; white-space: pre-wrap; color: #555;">${validatedData.message}</p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; font-size: 12px; color: #999;">
            <p style="margin: 0;">Email này được gửi từ biểu mẫu liên hệ trên website của bạn.</p>
            <p style="margin: 5px 0 0 0;">Thời gian: ${new Date().toLocaleString('vi-VN')}</p>
          </div>
        </div>
      </div>
    `

    // Gửi email tới testing email của Resend
    const response = await resend.emails.send({
      from: "onboarding@resend.dev", // Email testing của Resend (không cần verify domain)
      to: "delivery@resend.dev", // Email testing để xem kết quả gửi
      subject: `Yêu cầu liên hệ từ ${validatedData.name}`,
      html: emailContent,
      replyTo: validatedData.email, // Cho phép reply trực tiếp tới khách hàng
    })

    if (response.error) {
      console.error("Resend error:", response.error)
      return {
        success: false,
        error: "Không thể gửi email. Vui lòng thử lại sau.",
      }
    }

    return {
      success: true,
      message: "Email đã được gửi thành công. Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất.",
    }
  } catch (error) {
    // Xử lý lỗi validation từ Zod
    if (error instanceof z.ZodError) {
      const errorMessages = error.issues.map((err) => err.message).join(", ")
      console.error("Validation error:", errorMessages)
      return {
        success: false,
        error: `Dữ liệu không hợp lệ: ${errorMessages}`,
      }
    }

    // Xử lý lỗi khác
    console.error("Unexpected error:", error)
    return {
      success: false,
      error: "Lỗi không xác định. Vui lòng thử lại sau.",
    }
  }
}

// Export type cho client component
export type SendEmailResponse = {
  success: boolean
  message?: string
  error?: string
}
