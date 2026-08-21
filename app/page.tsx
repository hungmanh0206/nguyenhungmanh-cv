import { CvPortfolio } from "./CvPortfolio";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nguyễn Hùng Mạnh | QA Engineer cho LMS/eLearning",
  description:
    "Hồ sơ portfolio của Nguyễn Hùng Mạnh, QA Engineer tập trung LMS/eLearning và AI-driven Testing.",
};

export default function Home() {
  return <CvPortfolio page="resume" />;
}
