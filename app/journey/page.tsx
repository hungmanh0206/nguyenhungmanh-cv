import { CvPortfolio } from "../CvPortfolio";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Công việc | Nguyễn Hùng Mạnh",
  description:
    "Timeline kinh nghiệm QA của Nguyễn Hùng Mạnh: LMS/eLearning, sản phẩm desktop, AI QA Toolkit và kiểm thử phần mềm.",
};

export default function JourneyPage() {
  return <CvPortfolio page="journey" />;
}
