import { CvPortfolio } from "../CvPortfolio";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quy trình AI QA | Nguyễn Hùng Mạnh",
  description:
    "Mô hình AI Agent hỗ trợ QA từ requirement, testcase, execution, evidence đến re-run verify với QA Gate kiểm soát.",
};

export default function AiWorkflowPage() {
  return <CvPortfolio page="ai" />;
}
