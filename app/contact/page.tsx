import { CvPortfolio } from "../CvPortfolio";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Liên hệ | Nguyễn Hùng Mạnh",
  description:
    "Kênh liên hệ công khai của Nguyễn Hùng Mạnh cho trao đổi về QA, AI Testing và sản phẩm LMS/eLearning.",
};

export default function ContactPage() {
  return <CvPortfolio page="contact" />;
}
