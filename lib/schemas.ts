import { z } from "zod"

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: "Tên phải có ít nhất 2 ký tự",
    })
    .max(100, {
      message: "Tên không được vượt quá 100 ký tự",
    }),
  email: z
    .string()
    .email({
      message: "Vui lòng nhập email hợp lệ",
    })
    .max(255, {
      message: "Email không được vượt quá 255 ký tự",
    }),
  phone: z
    .string()
    .optional()
    .refine(
      (val) => !val || /^[\d\s\-\+\(\)]+$/.test(val),
      {
        message: "Số điện thoại không hợp lệ",
      }
    ),
  message: z
    .string()
    .min(10, {
      message: "Tin nhắn phải có ít nhất 10 ký tự",
    })
    .max(5000, {
      message: "Tin nhắn không được vượt quá 5000 ký tự",
    }),
})

export type ContactFormData = z.infer<typeof contactFormSchema>
