import { CvPortfolio } from "../CvPortfolio";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sản phẩm | Nguyễn Hùng Mạnh",
  description:
    "Các case sản phẩm Nguyễn Hùng Mạnh đã tham gia với góc nhìn QA: vai trò, thách thức, cách kiểm thử và kết quả.",
};

export default function WorksPage() {
  return <CvPortfolio page="works" />;
}
