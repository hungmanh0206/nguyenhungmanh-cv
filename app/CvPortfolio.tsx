"use client";

import {
  type CSSProperties,
  type KeyboardEvent as ReactKeyboardEvent,
  type ReactNode,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

type Locale = "vi" | "en";
type IconName =
  | "academy"
  | "book"
  | "building"
  | "calendar"
  | "certificate"
  | "check"
  | "chevron"
  | "close"
  | "database"
  | "download"
  | "external"
  | "globe"
  | "home"
  | "layers"
  | "link"
  | "linkedin"
  | "mail"
  | "map"
  | "phone"
  | "progress"
  | "settings"
  | "shield"
  | "spark"
  | "star"
  | "target"
  | "user"
  | "zap";

const modalSections = ["experience", "skills", "certificates", "contact"] as const;
type ModalKey = (typeof modalSections)[number];

const certificateUrl = "https://hust.ediploma.vn/verify/Zf3y-0Ovt-iJen";
const certificatePdfUrl = "/data-analysis-certificate.pdf";
const certificatePdfPreviewUrl = `${certificatePdfUrl}#toolbar=1&navpanes=0&zoom=page-fit&view=Fit`;
const linkedinUrl = "https://www.linkedin.com/in/nguyen-hung-manh-97316117b/";

const content = {
  vi: {
    languageName: "Tiếng Việt",
    languageLabel: "Ngôn ngữ",
    nav: ["Kinh nghiệm", "Kỹ năng", "Chứng chỉ", "Liên hệ"],
    modalCloseLabel: "Đóng",
    heroBadge: "IT Tester | AI QA Engineer",
    name: "NGUYỄN HÙNG MẠNH",
    intro: [
      {
        title: "QA Engineer",
        copy: "kiểm thử phần mềm, phân tích yêu cầu và đảm bảo chất lượng.",
      },
      {
        title: "AI-driven Testing",
        copy: "ứng dụng AI vào thiết kế test case, thực thi và báo cáo.",
      },
      {
        title: "LMS/eLearning",
        copy: "tập trung vào sản phẩm học tập số và nền tảng đào tạo.",
      },
    ],
    ctaPrimary: "Tải CV tiếng Việt",
    ctaSecondary: "LinkedIn",
    pdf: "/nguyen-hung-manh-cv-vi.pdf",
    stats: [
      { value: "6+ năm", label: "kinh nghiệm QA" },
      { value: "AI", label: "định hướng kiểm thử" },
      { value: "LMS/eLearning", label: "sản phẩm trọng tâm" },
    ],
    contactTitle: "Thông tin cá nhân",
    contact: [
      { icon: "calendar" as const, label: "Ngày sinh", value: "02/06/1996" },
      {
        icon: "map" as const,
        label: "Quê quán",
        value: "Quảng Chính, Thanh Hoá",
      },
      { icon: "phone" as const, label: "Điện thoại", value: "0862342696" },
      {
        icon: "mail" as const,
        label: "Email",
        value: "hungmanh0206@gmail.com",
        href: "mailto:hungmanh0206@gmail.com",
      },
      {
        icon: "map" as const,
        label: "Địa chỉ",
        value: "ICID Complex, Lê Trọng Tấn, Dương Nội, Hà Nội",
      },
      {
        icon: "linkedin" as const,
        label: "LinkedIn",
        value: "nguyen-hung-manh",
        href: linkedinUrl,
      },
    ],
    focusTitle: "Mục tiêu nghề nghiệp",
    focus:
      "Phát triển chuyên sâu theo hướng AI QA Engineer, ứng dụng kinh nghiệm xây dựng AI Agent vào quy trình kiểm thử nhằm tự động hóa các tác vụ QA, nâng cao độ phủ kiểm thử, phát hiện lỗi sớm và rút ngắn vòng phản hồi chất lượng sản phẩm.",
    experienceTitle: "Kinh nghiệm làm việc",
    productLabel: "Sản phẩm đã tham gia",
    experiences: [
      {
        role: "IT Tester",
        company: "Công ty Cổ phần Giáo dục SAPP",
        date: "02/2026 - Nay",
        products: [
          {
            name: "LMS Pro",
            href: "https://uat-lms.sapp.edu.vn/lms-pro-new-version",
          },
        ],
        bullets: [
          "Phân tích yêu cầu nghiệp vụ, xây dựng Test Design và Test Case cho hệ thống quản lý học tập LMS PRO.",
          "Thực hiện Functional Testing, UI Testing, API Testing, Integration Testing và Regression Testing nhằm đảm bảo chất lượng và tính ổn định của sản phẩm.",
          "Quản lý lỗi trên Jira, phối hợp với PM, BA, UI/UX và Developer để làm rõ yêu cầu, đánh giá rủi ro và đảm bảo độ phủ kiểm thử.",
          "Nghiên cứu, phát triển và triển khai AI Test Automation Kit cho phân tích yêu cầu, thiết kế test case, thực thi kiểm thử và báo cáo kết quả.",
        ],
      },
      {
        role: "Kiểm thử phần mềm",
        company: "Công ty Cổ phần ULEARNBOX",
        date: "04/2024 - 04/2025",
        products: [
          {
            name: "uPresenter",
            href: "https://upresenter.ai/vi/",
          },
        ],
        bullets: [
          "Xây dựng Test Plan và Test Case cho nền tảng eLearning ứng dụng AI, bao gồm AI Content Generation, Text-to-Speech, Slide Recognition và Learning Management.",
          "Đảm bảo chất lượng cho các tính năng AI và luồng nghiệp vụ trọng yếu của hệ thống.",
          "Theo dõi lỗi trên Redmine, phối hợp với Product Owner, Developer và AI Engineer để làm rõ yêu cầu, đánh giá rủi ro và xác nhận kết quả sửa lỗi.",
          "Thực hiện kiểm thử hồi quy, đánh giá chất lượng phiên bản phát hành và đề xuất cải tiến quy trình QA.",
        ],
      },
      {
        role: "Kiểm thử phần mềm",
        company: "Công ty Cổ phần Hệ thống ATOMI",
        date: "04/2019 - 04/2024",
        products: [
          {
            name: "ActivePresenter",
            href: "https://atomisystems.com/activepresenter/",
          },
          {
            name: "Saola Animate",
            href: "https://atomisystems.com/saola-animate/",
          },
        ],
        bullets: [
          "Phân tích yêu cầu, xây dựng Test Plan và Test Case cho ActivePresenter và Saola Animate.",
          "Thực hiện kiểm thử chức năng, giao diện, tương thích đa nền tảng Windows/macOS và kiểm thử hồi quy.",
          "Quản lý lỗi trên Redmine, phối hợp với đội phát triển để xác minh, theo dõi và đảm bảo chất lượng các phiên bản phát hành.",
          "Hướng dẫn thành viên QA mới và tham gia cải tiến quy trình QA nhằm nâng cao hiệu quả kiểm thử.",
        ],
      },
      {
        role: "Thực tập sinh - Manual QA",
        company: "Công ty Cổ phần Hệ thống ATOMI",
        date: "04/2019 - 06/2019",
        bullets: [
          "Tìm hiểu ActivePresenter và Saola Animate, hai sản phẩm phục vụ eLearning và nội dung tương tác HTML5.",
          "Tham gia viết test case và học quy trình làm việc Agile cơ bản.",
        ],
      },
    ],
    skillsTitle: "Các kỹ năng",
    skillGroups: [
      {
        title: "Kiểm thử phần mềm",
        items: [
          "Test Planning",
          "Test Design",
          "Test Case Development",
          "Defect Management",
          "Test Reporting",
        ],
      },
      {
        title: "Kỹ thuật kiểm thử",
        items: [
          "Functional Testing",
          "Regression Testing",
          "Integration Testing",
          "API Testing",
          "UI Testing",
          "Smoke Testing",
        ],
      },
      {
        title: "AI & tự động hóa",
        items: [
          "AI-driven Testing",
          "AI-assisted Test Design",
          "AI Workflow Automation",
          "Prompt Engineering",
        ],
      },
      {
        title: "Công cụ & nền tảng",
        items: [
          "Jira",
          "Redmine",
          "Postman",
          "Claude Code",
          "Codex",
          "VS Code",
          "Excel",
          "Google Sheets",
          "GitHub",
        ],
      },
      {
        title: "Cơ sở dữ liệu & kỹ năng mềm",
        items: [
          "SQL",
          "Data Validation",
          "Data Verification",
          "Requirement Analysis",
          "Problem Solving",
          "Communication",
          "Mentoring",
        ],
      },
    ],
    educationTitle: "Học vấn",
    education: {
      faculty: "Khoa Công nghệ thông tin",
      major: "Chuyên ngành Hệ thống thông tin",
      school: "Học viện Công nghệ Bưu chính Viễn thông",
      date: "08/2014-01/2019",
      note: "Đã tốt nghiệp 01/2019",
    },
    certTitle: "Chứng chỉ",
    verifyLabel: "Xem chứng chỉ",
    certificatePreviewTitle: "Chứng chỉ Data Analysis",
    certificateDownloadLabel: "Tải PDF chứng chỉ",
    certificateFallback: "Mở trang xác thực",
    certs: [
      { year: "2020", title: "TOEIC 600" },
      {
        year: "2026",
        title:
          "Data Analysis - Khóa học Data Analysis giảng dạy bởi Đại học Bách Khoa và Rikkeisoft",
        href: certificateUrl,
      },
    ],
    awardsTitle: "Danh hiệu và hoạt động",
    awards: [
      {
        year: "2024",
        title:
          "Giải nhất cuộc thi đóng góp ý tưởng phát triển ứng dụng uPresenter với ý tưởng xây dựng kho Template cho ứng dụng.",
      },
      {
        year: "08/2015 - 01/2019",
        title:
          "Thành viên Câu lạc bộ Hội đồng hương Thanh Hóa, tham gia hoạt động vui chơi, thiện nguyện và xã hội.",
      },
    ],
    interestsTitle: "Sở thích",
    interests: [
      "Chơi cầu lông, bóng đá",
      "Xem phim",
      "Đọc sách về lịch sử, chính trị và khoa học",
    ],
    footer:
      "Sẵn sàng trao đổi về QA, AI Testing, eLearning và các sản phẩm cần chất lượng ổn định.",
  },
  en: {
    languageName: "English",
    languageLabel: "Language",
    nav: ["Experience", "Skills", "Certificates", "Contact"],
    modalCloseLabel: "Close",
    heroBadge: "IT Tester | AI QA Engineer",
    name: "NGUYEN HUNG MANH",
    intro: [
      {
        title: "QA Engineer",
        copy: "software testing, requirement analysis, and quality assurance.",
      },
      {
        title: "AI-driven Testing",
        copy: "applying AI to test design, execution, and reporting.",
      },
      {
        title: "LMS/eLearning",
        copy: "focused on digital learning products and training platforms.",
      },
    ],
    ctaPrimary: "Download English CV",
    ctaSecondary: "LinkedIn",
    pdf: "/nguyen-hung-manh-cv-en.pdf",
    stats: [
      { value: "6+ years", label: "QA experience" },
      { value: "AI", label: "testing direction" },
      { value: "LMS/eLearning", label: "core product domain" },
    ],
    contactTitle: "Personal information",
    contact: [
      { icon: "calendar" as const, label: "Date of birth", value: "June 2, 1996" },
      {
        icon: "map" as const,
        label: "Hometown",
        value: "Quang Chinh, Thanh Hoa, Vietnam",
      },
      { icon: "phone" as const, label: "Phone", value: "0862342696" },
      {
        icon: "mail" as const,
        label: "Email",
        value: "hungmanh0206@gmail.com",
        href: "mailto:hungmanh0206@gmail.com",
      },
      {
        icon: "map" as const,
        label: "Address",
        value: "ICID Complex, Le Trong Tan Street, Duong Noi Ward, Hanoi",
      },
      {
        icon: "linkedin" as const,
        label: "LinkedIn",
        value: "nguyen-hung-manh",
        href: linkedinUrl,
      },
    ],
    focusTitle: "Career objective",
    focus:
      "Deepen my specialization as an AI QA Engineer by applying experience building AI Agents to testing workflows, automating QA tasks, improving test coverage, detecting defects early, and shortening the product quality feedback loop.",
    experienceTitle: "Work experience",
    productLabel: "Products contributed to",
    experiences: [
      {
        role: "IT Tester",
        company: "SAPP Education JSC",
        date: "02/2026 - Present",
        products: [
          {
            name: "LMS Pro",
            href: "https://uat-lms.sapp.edu.vn/lms-pro-new-version",
          },
        ],
        bullets: [
          "Analyzed business requirements and developed Test Designs and Test Cases for the LMS PRO Learning Management System.",
          "Performed Functional, UI, API, Integration, and Regression Testing to ensure product quality and system stability.",
          "Managed defects in Jira and collaborated with PMs, BAs, UI/UX Designers, and Developers to clarify requirements, assess risks, and ensure test coverage.",
          "Researched, developed, and implemented an AI Test Automation Kit for requirement analysis, test case generation, test execution, and reporting.",
        ],
      },
      {
        role: "Quality Assurance Tester",
        company: "ULEARNBOX JSC",
        date: "04/2024 - 04/2025",
        products: [
          {
            name: "uPresenter",
            href: "https://upresenter.ai/vi/",
          },
        ],
        bullets: [
          "Developed Test Plans and Test Cases for an AI-powered eLearning platform covering AI Content Generation, Text-to-Speech, Slide Recognition, and Learning Management.",
          "Performed testing and quality assurance for AI-driven features and core business workflows.",
          "Identified and managed defects using Redmine while collaborating with Product Owners, Developers, and AI Engineers to clarify requirements, assess risks, and validate fixes.",
          "Conducted regression testing, assessed release quality, and contributed to continuous QA process improvement.",
        ],
      },
      {
        role: "Quality Assurance Tester",
        company: "ATOMI SYSTEMS INC.",
        date: "04/2019 - 04/2024",
        products: [
          {
            name: "ActivePresenter",
            href: "https://atomisystems.com/activepresenter/",
          },
          {
            name: "Saola Animate",
            href: "https://atomisystems.com/saola-animate/",
          },
        ],
        bullets: [
          "Analyzed requirements and developed Test Plans and Test Cases for ActivePresenter and Saola Animate desktop applications.",
          "Performed functional, UI, cross-platform Windows/macOS, and regression testing to ensure product quality and stability.",
          "Managed defects using Redmine and collaborated with developers to validate fixes and maintain release quality.",
          "Mentored junior QA members and contributed to QA process improvements.",
        ],
      },
      {
        role: "Manual QA Intern",
        company: "ATOMI SYSTEMS INC.",
        date: "04/2019 - 06/2019",
        bullets: [
          "Learned and used ActivePresenter and Saola Animate, two products for eLearning and HTML5 interactive content.",
          "Participated in writing test cases and learned basic Agile working methodology.",
        ],
      },
    ],
    skillsTitle: "Skills",
    skillGroups: [
      {
        title: "Software testing",
        items: [
          "Test Planning",
          "Test Design",
          "Test Case Development",
          "Defect Management",
          "Test Reporting",
        ],
      },
      {
        title: "Testing techniques",
        items: [
          "Functional Testing",
          "Regression Testing",
          "Integration Testing",
          "API Testing",
          "UI Testing",
          "Smoke Testing",
        ],
      },
      {
        title: "AI & automation",
        items: [
          "AI-driven Testing",
          "AI-assisted Test Design",
          "AI Workflow Automation",
          "Prompt Engineering",
        ],
      },
      {
        title: "Tools & platforms",
        items: [
          "Jira",
          "Redmine",
          "Postman",
          "Claude Code",
          "Codex",
          "VS Code",
          "Excel",
          "Google Sheets",
          "GitHub",
        ],
      },
      {
        title: "Database & soft skills",
        items: [
          "SQL",
          "Data Validation",
          "Data Verification",
          "Requirement Analysis",
          "Problem Solving",
          "Communication",
          "Mentoring",
        ],
      },
    ],
    educationTitle: "Education",
    education: {
      faculty: "Faculty of Information Technology",
      major: "Information Systems Major",
      school: "Posts and Telecommunications Institute of Technology",
      date: "08/2014-01/2019",
      note: "Graduated in January 2019",
    },
    certTitle: "Certifications",
    verifyLabel: "View certificate",
    certificatePreviewTitle: "Data Analysis Certificate",
    certificateDownloadLabel: "Download PDF",
    certificateFallback: "Open verification page",
    certs: [
      { year: "2020", title: "TOEIC 600" },
      {
        year: "2026",
        title:
          "Data Analysis - Hanoi University of Science and Technology (HUST) & Rikkeisoft",
        href: certificateUrl,
      },
    ],
    awardsTitle: "Awards and activities",
    awards: [
      {
        year: "2024",
        title:
          "First prize in the uPresenter Product Improvement Ideas contest, proposing a template library for the application.",
      },
      {
        year: "08/2015 - 01/2019",
        title:
          "Member of Thanh Hoa Students Club, participating in community, charity, and social activities.",
      },
    ],
    interestsTitle: "Interests",
    interests: [
      "Playing badminton and football",
      "Watching movies",
      "Reading books on history, politics, and science",
    ],
    footer:
      "Open to conversations about QA, AI Testing, eLearning, and products that need stable quality.",
  },
} as const;

type Content = (typeof content)[Locale];
type Experience = Content["experiences"][number];
type SkillGroup = Content["skillGroups"][number];
type Certificate = Content["certs"][number];
type Product = {
  readonly name: string;
  readonly href: string;
};
export type PortfolioPageKey =
  | "resume"
  | "journey"
  | "skills"
  | "works"
  | "ai"
  | "contact";
type MinimapItem = {
  readonly id: string;
  readonly label: string;
};
type ThreeDIconName =
  | "bulb"
  | "chart"
  | "computer"
  | "lab"
  | "medal"
  | "notebook"
  | "shield"
  | "target";

const skillGroupThreeDIcons: readonly ThreeDIconName[] = [
  "shield",
  "target",
  "lab",
  "computer",
  "chart",
];
const interestThreeDIcons: readonly ThreeDIconName[] = [
  "medal",
  "computer",
  "notebook",
];

const languageOptions = [
  { value: "vi", label: content.vi.languageName },
  { value: "en", label: content.en.languageName },
] as const satisfies readonly { value: Locale; label: string }[];

const portfolioCopy = {
  vi: {
    brand: "Nguyễn Hùng Mạnh",
    primaryNavLabel: "Điều hướng chính",
    bottomNavLabel: "Điều hướng nhanh",
    nav: {
      resume: "Hồ sơ",
      journey: "Công việc",
      skills: "Kỹ năng",
      works: "Sản phẩm",
      ai: "AI Workflow",
      contact: "Liên hệ",
    },
    minimapLabel: "Bản đồ trang",
    portfolioEdition: "PORTFOLIO · 2026",
    greeting: "Xin chào, tôi là",
    headline: "QA Engineer xây độ tin cậy cho sản phẩm số",
    heroLead:
      "Tôi kết hợp kiểm thử phần mềm, phân tích yêu cầu và AI-driven Testing để giúp sản phẩm LMS/eLearning phát hành ổn định hơn.",
    heroIconCards: [
      {
        icon: "shield" as const,
        title: "QA Gates",
        copy: "Chặn output thiếu cơ sở trước khi đi vào execution.",
      },
      {
        icon: "lab" as const,
        title: "AI Testing Lab",
        copy: "Tự động hóa testcase, execution và re-run verification.",
      },
      {
        icon: "chart" as const,
        title: "Quality Metrics",
        copy: "Đo coverage, pass-rate và rủi ro theo từng vòng release.",
      },
    ],
    aboutEyebrow: "ABOUT ME",
    aboutTitle: "Một chút về tôi",
    aboutLead:
      "Tôi tập trung vào chất lượng sản phẩm từ lúc làm rõ yêu cầu đến khi xác nhận bản phát hành, đặc biệt với các nền tảng học tập số và luồng nghiệp vụ có AI hỗ trợ.",
    toolkitTitle: "Bộ kỹ năng sử dụng thường xuyên",
    skillsEyebrow: "SKILLS",
    skillsLead:
      "Các nhóm kỹ năng QA, AI testing, công cụ và nền tảng tôi sử dụng trong công việc hằng ngày.",
    journeyEyebrow: "WORK",
    journeyTitle: "Công việc & hành trình",
    journeyOverviewLabel: "Sơ đồ hành trình",
    journeyDetailTitle: "Chi tiết kinh nghiệm",
    worksEyebrow: "PRODUCTS & SKILLS",
    worksTitle: "Sản phẩm đã tham gia",
    productSkillTitle: "Kỹ năng sử dụng trong sản phẩm",
    workCaseLabel: "Case",
    viewProject: "Xem sản phẩm",
    aiEyebrow: "AI WORKFLOW",
    aiTitle: "QA Automation AI Agent",
    aiLead:
      "Một workflow AI Agent cho QA: từ đọc requirement, sinh testcase, publish AIO Tests, execute, triage bug đến re-run verify và đóng vòng học.",
    aiWorkflow: {
      overviewTitle: "AI Workflow Overview",
      operatingTitle: "Luồng vận hành 3 pha",
      systemTitle: "QA Agent AI System",
      flowMapTitle: "Input / Workflow / Output",
      guardrailTitle: "Gate kiểm soát chất lượng",
      boundaryTitle: "AI-led / Human-led",
      expansionTitle: "5 trục mở rộng",
      outcomeTitle: "Before -> After",
      artifactTitle: "Artifact mỗi vòng chạy",
      inputTitle: "Input",
      workflowTitle: "Workflow",
      outputTitle: "Output",
      inputHeadline: "Requirement",
      inputCopy: "Business rule, rủi ro, nguồn testcase và mirror AIO.",
      outputHeadline: "PASS Done",
      outputCopy: "Evidence, bug, coverage, sổ tri thức và vòng học tiếp theo.",
      roleTitle: "Object",
      aiActionTitle: "What AI do?",
      outputItemTitle: "Deliverable",
      overviewBody: [
        "Workflow bắt đầu từ requirement, tài liệu nghiệp vụ và rủi ro sản phẩm cần kiểm soát.",
        "AI hỗ trợ phân tích, sinh testcase, kiểm tra gate và tổng hợp evidence; QA vẫn là người duyệt scope, quyết định bug và chịu trách nhiệm chất lượng cuối cùng.",
      ],
      roles: [
        {
          icon: "target" as const,
          title: "BA / PO",
          copy: "Cung cấp requirement, business rule và ngữ cảnh sản phẩm.",
        },
        {
          icon: "shield" as const,
          title: "QA",
          copy: "Duyệt gate, xác nhận coverage và quyết định kết quả kiểm thử.",
        },
        {
          icon: "lab" as const,
          title: "AI Agent",
          copy: "Xử lý tác vụ lặp, trace evidence và đề xuất mở rộng kiểm thử.",
        },
      ],
      phases: [
        {
          label: "Phase 1",
          title: "Sinh & publish testcase",
          points: [
            "Requirement -> Ambiguity Gate",
            "Excel testcase 10 cột",
            "QA confirmation",
            "Publish AIO Tests",
          ],
        },
        {
          label: "Phase 2",
          title: "Execute có kiểm soát",
          points: [
            "Pull mirror AIO",
            "preflight_gate",
            "Execute + mở rộng 5 trục",
            "output_gate -> push cycle",
          ],
        },
        {
          label: "Phase 3",
          title: "Re-run, verify & close",
          points: [
            "Triage FE/BE",
            "Log bug QA duyệt",
            "Dev fix re-run 2-3 lần",
            "PASS Done -> đóng vòng học",
          ],
        },
      ],
      steps: [
        {
          icon: "target" as const,
          title: "Phân tích & sinh testcase",
          copy: "AI đọc requirement, tách scope/risk và đề xuất testcase có trace để QA duyệt.",
        },
        {
          icon: "notebook" as const,
          title: "Review & QA Gate",
          copy: "QA xử lý Ambiguity Gate, xác nhận phạm vi và chặn output thiếu cơ sở.",
        },
        {
          icon: "computer" as const,
          title: "Publish AIO Tests",
          copy: "Chuẩn hóa folder, testcase, cycle và mirror dữ liệu giữa Excel và AIO.",
        },
        {
          icon: "lab" as const,
          title: "Execute & mở rộng",
          copy: "Agent chạy preflight, thực thi test và mở rộng theo 5 trục chống lọt bug.",
        },
        {
          icon: "shield" as const,
          title: "Triage & log bug",
          copy: "Phân tầng FE/BE, gom evidence và chỉ tạo bug sau khi QA duyệt.",
        },
        {
          icon: "chart" as const,
          title: "Re-run verify & học lại",
          copy: "Re-run 2-3 vòng, cập nhật sổ tri thức và chuẩn hóa điều kiện PASS Done.",
        },
      ],
      gates: [
        "preflight_gate",
        "design_gate / gate:gen-testcase",
        "output_gate",
        "risk_gate / expansion:plan",
        "self-review --enforce",
        "gate:policy một nguồn",
      ],
      boundary: [
        {
          title: "AI-led",
          points: ["Xử lý throughput", "Tổng hợp evidence", "Thao tác lặp có checklist"],
        },
        {
          title: "Human-led",
          points: ["Duyệt gate", "Quyết định log bug", "Chịu trách nhiệm chất lượng"],
        },
      ],
      expansion: [
        "Field cùng khối",
        "Cùng giá trị khác màn",
        "Chuỗi lưu trữ",
        "Nhánh / biến thể",
        "Trạng thái kế cận",
      ],
      outcomes: [
        { before: "Soạn testcase nhiều ngày", after: "1 phiên có QA Gate" },
        { before: "Coverage cảm tính", after: "Trace coverage 80-100%" },
        { before: "Pass-rate thủ công", after: "90-100% có output_gate" },
        { before: "Gate rời rạc", after: "6 gate vận hành thống nhất" },
      ],
      artifacts: [
        "Testcase Excel",
        "Mirror AIO",
        "Coverage & risk",
        "Ambiguity Gate",
        "AIO Tests + cycle",
        "Evidence",
        "Bug + sổ tri thức",
        "Máy chống lọt bug",
      ],
    },
    credentialsEyebrow: "RESUME",
    credentialsTitle: "Học vấn, chứng chỉ và hoạt động",
    contactEyebrow: "CONTACT",
    contactTitle: "Trao đổi với tôi",
    contactLead:
      "Sẵn sàng trao đổi về QA, AI Testing, eLearning và các sản phẩm cần chất lượng ổn định.",
  },
  en: {
    brand: "Nguyễn Hùng Mạnh",
    primaryNavLabel: "Primary navigation",
    bottomNavLabel: "Quick navigation",
    nav: {
      resume: "Resume",
      journey: "Work",
      skills: "Skills",
      works: "Works",
      ai: "AI Workflow",
      contact: "Contact",
    },
    minimapLabel: "Page minimap",
    portfolioEdition: "PORTFOLIO · 2026",
    greeting: "Hello, I am",
    headline: "QA Engineer building confidence for digital products",
    heroLead:
      "I combine software testing, requirement analysis, and AI-driven Testing to help LMS/eLearning products ship with greater stability.",
    heroIconCards: [
      {
        icon: "shield" as const,
        title: "QA Gates",
        copy: "Block unsupported output before it reaches execution.",
      },
      {
        icon: "lab" as const,
        title: "AI Testing Lab",
        copy: "Automate testcase generation, execution, and re-run verification.",
      },
      {
        icon: "chart" as const,
        title: "Quality Metrics",
        copy: "Track coverage, pass-rate, and risk across release loops.",
      },
    ],
    aboutEyebrow: "ABOUT ME",
    aboutTitle: "A little about me",
    aboutLead:
      "I focus on product quality from requirement clarification through release validation, especially for digital learning platforms and AI-assisted workflows.",
    toolkitTitle: "Toolkit I use often",
    skillsEyebrow: "SKILLS",
    skillsLead:
      "The QA, AI testing, tools, and platform skills I use in daily product work.",
    journeyEyebrow: "WORK",
    journeyTitle: "Work & journey",
    journeyOverviewLabel: "Journey map",
    journeyDetailTitle: "Detailed experience",
    worksEyebrow: "PRODUCTS & SKILLS",
    worksTitle: "Products I contributed to",
    productSkillTitle: "Skills behind the products",
    workCaseLabel: "Case",
    viewProject: "View project",
    aiEyebrow: "AI WORKFLOW",
    aiTitle: "QA Automation AI Agent",
    aiLead:
      "An AI Agent workflow for QA: reading requirements, generating test cases, publishing AIO Tests, executing, triaging bugs, re-running verification, and closing the learning loop.",
    aiWorkflow: {
      overviewTitle: "AI Workflow Overview",
      operatingTitle: "Three-phase operation",
      systemTitle: "QA Agent AI System",
      flowMapTitle: "Input / Workflow / Output",
      guardrailTitle: "Quality gates",
      boundaryTitle: "AI-led / Human-led",
      expansionTitle: "Five expansion axes",
      outcomeTitle: "Before -> After",
      artifactTitle: "Artifacts per run",
      inputTitle: "Input",
      workflowTitle: "Workflow",
      outputTitle: "Output",
      inputHeadline: "Requirement",
      inputCopy: "Business rules, risks, testcase source, and AIO mirror.",
      outputHeadline: "PASS Done",
      outputCopy: "Evidence, bugs, coverage, knowledge base, and next-loop learning.",
      roleTitle: "Object",
      aiActionTitle: "What AI does",
      outputItemTitle: "Deliverable",
      overviewBody: [
        "The workflow starts from requirements, business documents, and product risks that need control.",
        "AI assists with analysis, testcase generation, gate checks, and evidence synthesis; QA still approves scope, decides bug logging, and owns final quality.",
      ],
      roles: [
        {
          icon: "target" as const,
          title: "BA / PO",
          copy: "Provides requirements, business rules, and product context.",
        },
        {
          icon: "shield" as const,
          title: "QA",
          copy: "Approves gates, confirms coverage, and decides testing outcomes.",
        },
        {
          icon: "lab" as const,
          title: "AI Agent",
          copy: "Handles repetitive tasks, traces evidence, and proposes test expansion.",
        },
      ],
      phases: [
        {
          label: "Phase 1",
          title: "Generate & publish test cases",
          points: [
            "Requirement -> Ambiguity Gate",
            "10-column testcase Excel",
            "QA confirmation",
            "Publish AIO Tests",
          ],
        },
        {
          label: "Phase 2",
          title: "Controlled execution",
          points: [
            "Pull AIO mirror",
            "preflight_gate",
            "Execute + expand 5 axes",
            "output_gate -> push cycle",
          ],
        },
        {
          label: "Phase 3",
          title: "Re-run, verify & close",
          points: [
            "FE/BE triage",
            "QA-approved bug logging",
            "Dev fix re-run 2-3 times",
            "PASS Done -> learning loop",
          ],
        },
      ],
      steps: [
        {
          icon: "target" as const,
          title: "Analyze & generate",
          copy: "AI reads requirements, separates scope/risk, and proposes traceable test cases for QA approval.",
        },
        {
          icon: "notebook" as const,
          title: "Review & QA Gate",
          copy: "QA resolves the Ambiguity Gate, confirms scope, and blocks weak or unsupported output.",
        },
        {
          icon: "computer" as const,
          title: "Publish AIO Tests",
          copy: "Standardize folders, test cases, cycles, and mirrored data between Excel and AIO.",
        },
        {
          icon: "lab" as const,
          title: "Execute & expand",
          copy: "The Agent runs preflight checks, executes tests, and expands coverage across five anti-leak axes.",
        },
        {
          icon: "shield" as const,
          title: "Triage & log bugs",
          copy: "Classify FE/BE issues, collect evidence, and create defects only after QA approval.",
        },
        {
          icon: "chart" as const,
          title: "Re-run verify & learn",
          copy: "Re-run 2-3 rounds, update the knowledge base, and standardize PASS Done conditions.",
        },
      ],
      gates: [
        "preflight_gate",
        "design_gate / gate:gen-testcase",
        "output_gate",
        "risk_gate / expansion:plan",
        "self-review --enforce",
        "gate:policy single source",
      ],
      boundary: [
        {
          title: "AI-led",
          points: ["Handle throughput", "Summarize evidence", "Repeat checklist-based operations"],
        },
        {
          title: "Human-led",
          points: ["Approve gates", "Decide bug logging", "Own quality accountability"],
        },
      ],
      expansion: [
        "Same-block fields",
        "Same values on other screens",
        "Storage chains",
        "Branches / variants",
        "Adjacent states",
      ],
      outcomes: [
        { before: "Testcase drafting takes days", after: "One QA-gated session" },
        { before: "Coverage is subjective", after: "80-100% trace coverage" },
        { before: "Manual pass-rate checks", after: "90-100% with output_gate" },
        { before: "Scattered gates", after: "6 unified gates" },
      ],
      artifacts: [
        "Testcase Excel",
        "AIO mirror",
        "Coverage & risk",
        "Ambiguity Gate",
        "AIO Tests + cycle",
        "Evidence",
        "Bug + knowledge base",
        "Anti-leak machine",
      ],
    },
    credentialsEyebrow: "RESUME",
    credentialsTitle: "Education, certificates and activities",
    contactEyebrow: "CONTACT",
    contactTitle: "Let us talk",
    contactLead:
      "Open to conversations about QA, AI Testing, eLearning, and products that need stable quality.",
  },
} as const satisfies Record<Locale, unknown>;

const productProfiles = {
  vi: {
    "LMS Pro": {
      domain: "Learning Management System",
      frame: "monitor",
      iconSrc: "/product-icons/lms-pro.ico",
      screenSrcs: [
        "/product-screens/lms-pro-1.png",
        "/product-screens/lms-pro-2.png",
        "/product-screens/lms-pro-3.png",
      ],
      copy: "Nền tảng quản lý học tập tại SAPP với luồng học, vận hành lớp và báo cáo đào tạo.",
    },
    uPresenter: {
      domain: "AI eLearning",
      frame: "monitor",
      iconSrc: "/product-icons/upresenter.svg",
      screenSrcs: [
        "/product-screens/upresenter-1.png",
        "/product-screens/upresenter-2.svg",
        "/product-screens/upresenter-3.svg",
      ],
      copy: "Nền tảng tạo nội dung học tập có AI hỗ trợ cho slide, giọng đọc và quản lý học liệu.",
    },
    ActivePresenter: {
      domain: "eLearning Authoring",
      frame: "monitor",
      iconSrc: "/product-icons/activepresenter.svg",
      screenSrcs: [
        "/product-screens/activepresenter-1.webp",
        "/product-screens/activepresenter-2.webp",
        "/product-screens/activepresenter-3.webp",
      ],
      copy: "Công cụ tạo bài giảng, quay màn hình, mô phỏng phần mềm và nội dung tương tác.",
    },
    "Saola Animate": {
      domain: "HTML5 Animation",
      frame: "tablet",
      iconSrc: "/product-icons/saola-animate.png",
      screenSrcs: [
        "/product-screens/saola-animate-1.webp",
        "/product-screens/saola-animate-2.webp",
        "/product-screens/saola-animate-3.webp",
        "/product-screens/saola-animate-4.webp",
      ],
      copy: "Công cụ thiết kế animation HTML5 và nội dung tương tác chạy trên web.",
    },
  },
  en: {
    "LMS Pro": {
      domain: "Learning Management System",
      frame: "monitor",
      iconSrc: "/product-icons/lms-pro.ico",
      screenSrcs: [
        "/product-screens/lms-pro-1.png",
        "/product-screens/lms-pro-2.png",
        "/product-screens/lms-pro-3.png",
      ],
      copy: "A SAPP learning management platform covering learning flows, class operations, and training reports.",
    },
    uPresenter: {
      domain: "AI eLearning",
      frame: "monitor",
      iconSrc: "/product-icons/upresenter.svg",
      screenSrcs: [
        "/product-screens/upresenter-1.png",
        "/product-screens/upresenter-2.svg",
        "/product-screens/upresenter-3.svg",
      ],
      copy: "An AI-assisted learning content platform for slides, voice generation, and learning asset management.",
    },
    ActivePresenter: {
      domain: "eLearning Authoring",
      frame: "monitor",
      iconSrc: "/product-icons/activepresenter.svg",
      screenSrcs: [
        "/product-screens/activepresenter-1.webp",
        "/product-screens/activepresenter-2.webp",
        "/product-screens/activepresenter-3.webp",
      ],
      copy: "An authoring tool for courses, screen recording, software simulation, and interactive content.",
    },
    "Saola Animate": {
      domain: "HTML5 Animation",
      frame: "tablet",
      iconSrc: "/product-icons/saola-animate.png",
      screenSrcs: [
        "/product-screens/saola-animate-1.webp",
        "/product-screens/saola-animate-2.webp",
        "/product-screens/saola-animate-3.webp",
        "/product-screens/saola-animate-4.webp",
      ],
      copy: "A tool for designing HTML5 animation and interactive web content.",
    },
  },
} as const satisfies Record<
  Locale,
  Record<
    string,
    {
      readonly copy: string;
      readonly domain: string;
      readonly frame: "monitor" | "tablet";
      readonly iconSrc: string;
      readonly screenSrcs: readonly string[];
    }
  >
>;

const toolLogoProfiles: Record<
  string,
  { readonly logo: string; readonly tone: string }
> = {
  Jira: { logo: "/tool-logos/jira.svg", tone: "#0052cc" },
  Redmine: { logo: "/tool-logos/redmine.svg", tone: "#b32024" },
  Postman: { logo: "/tool-logos/postman.svg", tone: "#ff6c37" },
  "Claude Code": { logo: "/tool-logos/claude-code.svg", tone: "#d97757" },
  Codex: { logo: "/tool-logos/codex.svg", tone: "#412991" },
  "VS Code": { logo: "/tool-logos/vscode.svg", tone: "#007acc" },
  Excel: { logo: "/tool-logos/excel.svg", tone: "#217346" },
  "Google Sheets": { logo: "/tool-logos/google-sheets.svg", tone: "#34a853" },
  GitHub: { logo: "/tool-logos/github.svg", tone: "#181717" },
};

export function CvPortfolio({ page = "resume" }: { page?: PortfolioPageKey }) {
  const [locale, setLocale] = useState<Locale>("vi");
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [activeModal, setActiveModal] = useState<ModalKey | null>(null);
  const [isModalClosing, setIsModalClosing] = useState(false);
  const languageComboboxRef = useRef<HTMLDivElement>(null);
  const t = content[locale];
  const portfolio = portfolioCopy[locale];
  const productCards = useMemo(() => getPortfolioProducts(t, locale), [locale, t]);
  const minimapItems = useMemo(
    () => getPageMinimapItems(page, t, portfolio, productCards),
    [page, portfolio, productCards, t],
  );
  const [activeMinimapId, setActiveMinimapId] = useState(minimapItems[0]?.id ?? "top");
  const topNavItems = [
    { href: "/", icon: "user" as const, key: "resume" as const, label: portfolio.nav.resume },
    {
      href: "/journey",
      icon: "progress" as const,
      key: "journey" as const,
      label: portfolio.nav.journey,
    },
    {
      href: "/works",
      icon: "layers" as const,
      key: "works" as const,
      label: portfolio.nav.works,
    },
    {
      href: "/ai-workflow",
      icon: "spark" as const,
      key: "ai" as const,
      label: portfolio.nav.ai,
    },
    {
      href: "/contact",
      icon: "mail" as const,
      key: "contact" as const,
      label: portfolio.nav.contact,
    },
  ];
  const dockItems = [
    { href: "/", icon: "user" as const, key: "resume" as const, label: portfolio.nav.resume },
    {
      href: "/journey",
      icon: "progress" as const,
      key: "journey" as const,
      label: portfolio.nav.journey,
    },
    {
      href: "/works",
      icon: "layers" as const,
      key: "works" as const,
      label: portfolio.nav.works,
    },
    {
      href: "/ai-workflow",
      icon: "spark" as const,
      key: "ai" as const,
      label: portfolio.nav.ai,
    },
    {
      href: "/contact",
      icon: "mail" as const,
      key: "contact" as const,
      label: portfolio.nav.contact,
    },
  ];
  const statIcons: readonly ThreeDIconName[] = ["shield", "lab", "computer"];

  useEffect(() => {
    if (!activeModal) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsModalClosing(true);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeModal]);

  useEffect(() => {
    if (!isLanguageOpen) {
      return;
    }

    const handlePointerDown = (event: PointerEvent) => {
      if (!languageComboboxRef.current?.contains(event.target as Node)) {
        setIsLanguageOpen(false);
      }
    };

    const handleKeyDown = (event: globalThis.KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsLanguageOpen(false);
      }
    };

    window.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isLanguageOpen]);

  useEffect(() => {
    if (!isModalClosing) {
      return;
    }

    const timer = window.setTimeout(() => {
      setActiveModal(null);
      setIsModalClosing(false);
    }, 180);

    return () => {
      window.clearTimeout(timer);
    };
  }, [isModalClosing]);

  useEffect(() => {
    function updateMinimap() {
      const viewportAnchor = window.innerHeight * 0.38;
      const current =
        minimapItems.reduce((active, item) => {
          const element = document.getElementById(item.id);

          if (!element) {
            return active;
          }

          return element.getBoundingClientRect().top <= viewportAnchor
            ? item.id
            : active;
        }, minimapItems[0]?.id ?? "top") ?? "top";

      setActiveMinimapId(current);
    }

    updateMinimap();
    window.addEventListener("scroll", updateMinimap, { passive: true });
    window.addEventListener("resize", updateMinimap);

    return () => {
      window.removeEventListener("scroll", updateMinimap);
      window.removeEventListener("resize", updateMinimap);
    };
  }, [minimapItems]);

  useEffect(() => {
    const selectors = [
      ".portfolio-main .portfolio-section",
      ".portfolio-main .portfolio-card",
      ".portfolio-main .timeline-item",
      ".portfolio-main .skill-group",
      ".portfolio-main .journey-milestone",
      ".portfolio-main .ai-phase-card",
      ".portfolio-main .ai-phase-detail-card",
      ".portfolio-main .ai-role-card",
      ".portfolio-main .ai-flow-step",
      ".portfolio-main .ai-metric-card",
      ".portfolio-main .ai-artifact-chip",
    ].join(",");
    const elements = Array.from(document.querySelectorAll<HTMLElement>(selectors));

    if (elements.length === 0) {
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
    );

    elements.forEach((element, index) => {
      element.classList.remove("is-visible");
      element.style.setProperty("--reveal-delay", `${Math.min(index * 18, 150)}ms`);
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, [locale, page]);

  function handleLocaleSelect(nextLocale: Locale) {
    setLocale(nextLocale);
    setIsLanguageOpen(false);
  }

  function handleLanguageKeyDown(event: ReactKeyboardEvent<HTMLButtonElement>) {
    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
      setIsLanguageOpen(true);
      setLocale((currentLocale) => {
        const direction = event.key === "ArrowDown" ? 1 : -1;
        const currentIndex = languageOptions.findIndex(
          (option) => option.value === currentLocale,
        );
        const nextIndex =
          (currentIndex + direction + languageOptions.length) % languageOptions.length;

        return languageOptions[nextIndex].value;
      });
      return;
    }

    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setIsLanguageOpen((open) => !open);
    }
  }

  function openModal(section: ModalKey) {
    setIsModalClosing(false);
    setActiveModal(section);
  }

  function closeModal() {
    if (!activeModal || isModalClosing) {
      return;
    }

    setIsModalClosing(true);
  }

  return (
    <div className="site-shell portfolio-shell" id="top">
      <header className="site-header portfolio-header">
        <nav className="nav-links portfolio-top-nav" aria-label={portfolio.primaryNavLabel}>
          {topNavItems.map((item) => (
            <a
              aria-current={page === item.key ? "page" : undefined}
              className={page === item.key ? "is-active" : undefined}
              href={item.href}
              key={item.href}
            >
              <Icon name={item.icon} />
              <span>{item.label}</span>
            </a>
          ))}
        </nav>
        <div className="language-select" ref={languageComboboxRef}>
          <span id="language-label">{t.languageLabel}</span>
          <div className="language-combobox">
            <button
              aria-activedescendant={
                isLanguageOpen ? `language-option-${locale}` : undefined
              }
              aria-controls="language-options"
              aria-expanded={isLanguageOpen}
              aria-haspopup="listbox"
              aria-labelledby="language-label language-combobox-value"
              className="language-trigger"
              id="language-combobox"
              onClick={() => setIsLanguageOpen((open) => !open)}
              onKeyDown={handleLanguageKeyDown}
              role="combobox"
              type="button"
            >
              <Icon className="language-icon" name="globe" />
              <span id="language-combobox-value">{t.languageName}</span>
              <Icon className="language-chevron" name="chevron" />
            </button>
            {isLanguageOpen ? (
              <div
                aria-labelledby="language-label"
                className="language-options"
                id="language-options"
                role="listbox"
              >
                {languageOptions.map((option) => (
                  <button
                    aria-selected={locale === option.value}
                    className={`language-option${
                      locale === option.value ? " is-selected" : ""
                    }`}
                    id={`language-option-${option.value}`}
                    key={option.value}
                    onClick={() => handleLocaleSelect(option.value)}
                    role="option"
                    type="button"
                  >
                    <span>{option.label}</span>
                    <span className="language-option-check" aria-hidden="true">
                      {locale === option.value ? <Icon name="check" /> : null}
                    </span>
                  </button>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </header>

      <main className={`portfolio-main portfolio-main-${page}`}>
        {page === "resume" ? (
          <>
            <section className="portfolio-hero" id="resume" aria-labelledby="hero-title">
              <div className="portfolio-hero-copy">
                <span className="portfolio-kicker">
                  <span>{portfolio.portfolioEdition}</span>
                </span>
                <h1 id="hero-title">
                  <span>{t.name}</span>
                  <strong>{portfolio.headline}</strong>
                </h1>
                <span className="hero-role">{t.heroBadge}</span>
                <p>{portfolio.heroLead}</p>
                <div className="hero-signal-list" aria-label="Profile focus">
                  {t.intro.map((item) => (
                    <span key={item.title}>{item.title}</span>
                  ))}
                </div>
                <div className="portfolio-stats-grid" aria-label="Profile highlights">
                  {t.stats.map((stat, index) => (
                    <div className="portfolio-stat-card" key={stat.label}>
                      <ThreeDIcon name={statIcons[index] ?? "target"} />
                      <strong>{stat.value}</strong>
                      <span>{stat.label}</span>
                    </div>
                  ))}
                </div>
                <div className="hero-actions">
                  <a className="button button-primary" href={t.pdf} download>
                    <Icon name="download" />
                    <span>{t.ctaPrimary}</span>
                  </a>
                  <a
                    className="button button-outline"
                    href={linkedinUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Icon name="linkedin" />
                    <span>{t.ctaSecondary}</span>
                  </a>
                </div>
              </div>

              <div className="portfolio-hero-visual">
                <div className="portfolio-portrait-frame">
                  <img src="/manh-profile.png" alt={t.name} />
                </div>
                <div className="hero-icon-board" aria-label="QA focus areas">
                  {portfolio.heroIconCards.map((card) => (
                    <div className="hero-icon-card" key={card.title}>
                      <ThreeDIcon name={card.icon} />
                      <span>
                        <strong>{card.title}</strong>
                        <em>{card.copy}</em>
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="portfolio-section about-section" id="about">
              <PortfolioHeading
                eyebrow={portfolio.aboutEyebrow}
                icon="bulb"
                id="about-title"
                title={portfolio.aboutTitle}
              />
              <div className="about-layout">
                <article className="portfolio-card about-copy-card" aria-labelledby="about-title">
                  <p>{portfolio.aboutLead}</p>
                  <p>{t.focus}</p>
                </article>
                <article className="portfolio-card toolkit-card">
                  <div className="compact-card-head">
                    <ThreeDIcon name="shield" />
                    <h3>{portfolio.toolkitTitle}</h3>
                  </div>
                  <div className="toolkit-list">
                    {t.skillGroups.slice(0, 3).map((group) => (
                      <div key={group.title}>
                        <strong>{group.title}</strong>
                        <span>{group.items.slice(0, 3).join(" / ")}</span>
                      </div>
                    ))}
                  </div>
                </article>
              </div>
            </section>

            <section className="portfolio-section credentials-section" id="credentials">
              <PortfolioHeading
                eyebrow={portfolio.credentialsEyebrow}
                icon="notebook"
                id="credentials-title"
                title={portfolio.credentialsTitle}
              />
              <CredentialsGrid
                onOpenCertificate={() => openModal("certificates")}
                t={t}
              />
            </section>
          </>
        ) : null}

        {page === "journey" ? (
          <section className="portfolio-section journey-section page-section" id="journey">
            <PortfolioHeading
              eyebrow={portfolio.journeyEyebrow}
              icon="medal"
              id="journey-title"
              title={portfolio.journeyTitle}
            />
            <JourneyOverview
              experiences={t.experiences}
              label={portfolio.journeyOverviewLabel}
            />
            <h3 className="journey-detail-title">{portfolio.journeyDetailTitle}</h3>
            <ExperienceList experiences={t.experiences} productLabel={t.productLabel} />
          </section>
        ) : null}

        {page === "skills" ? (
          <section className="portfolio-section skills-section page-section" id="skills">
            <PortfolioHeading
              eyebrow={portfolio.skillsEyebrow}
              icon="shield"
              id="skills-title"
              title={t.skillsTitle}
            />
            <p className="page-section-lead">{portfolio.skillsLead}</p>
            <SkillsGrid skillGroups={t.skillGroups} />
          </section>
        ) : null}

        {page === "works" ? (
          <section className="portfolio-section works-section page-section" id="works">
            <PortfolioHeading
              eyebrow={portfolio.worksEyebrow}
              icon="computer"
              id="works-title"
              title={portfolio.worksTitle}
            />
            <div className="works-grid">
              {productCards.map((product, index) => (
                <ProductCaseCard
                  index={index}
                  key={product.name}
                  product={product}
                  workCaseLabel={portfolio.workCaseLabel}
                  viewProject={portfolio.viewProject}
                />
              ))}
            </div>
            <div className="product-skills-section" id="product-skills">
              <PortfolioHeading
                eyebrow={portfolio.skillsEyebrow}
                icon="shield"
                id="product-skills-title"
                title={portfolio.productSkillTitle}
              />
              <p className="page-section-lead">{portfolio.skillsLead}</p>
              <SkillsGrid skillGroups={t.skillGroups} />
            </div>
          </section>
        ) : null}

        {page === "ai" ? (
          <AiWorkflowPage portfolio={portfolio} />
        ) : null}

        {page === "contact" ? (
          <section className="portfolio-section contact-section page-section" id="contact">
            <article className="contact-profile-card">
              <div className="contact-profile-icons" aria-hidden="true">
                <ThreeDIcon name="shield" />
                <ThreeDIcon name="lab" />
                <ThreeDIcon name="chart" />
              </div>
              <PortfolioHeading
                eyebrow={portfolio.contactEyebrow}
                icon="target"
                id="contact-title"
                title={portfolio.contactTitle}
              />
              <p>{portfolio.contactLead}</p>
              <div className="contact-profile-person">
                <img alt="" aria-hidden="true" src="/manh-profile.png" />
                <span>
                  <strong>{t.name}</strong>
                  <em>{t.heroBadge}</em>
                </span>
              </div>
            </article>
            <div className="contact-info-panel">
              <div className="contact-name-card">
                <ThreeDIcon name="notebook" />
                <div>
                  <span>{portfolio.portfolioEdition}</span>
                  <strong>{t.name}</strong>
                  <em>{t.heroBadge}</em>
                </div>
              </div>
              <div className="contact-grid">
                {t.contact.map((item) => (
                  <ContactRow key={`${item.label}-${item.value}`} {...item} />
                ))}
              </div>
              <div className="contact-interest-card">
                <div className="contact-interest-title">
                  <ThreeDIcon name="bulb" />
                  <strong>{t.interestsTitle}</strong>
                </div>
                <InterestChips interests={t.interests} label={t.interestsTitle} />
              </div>
            </div>
          </section>
        ) : null}
      </main>

      <nav className="portfolio-dock" aria-label={portfolio.bottomNavLabel}>
        {dockItems.map((item) => (
          <a
            aria-current={page === item.key ? "page" : undefined}
            className={page === item.key ? "is-active" : undefined}
            href={item.href}
            key={item.href}
          >
            <Icon name={item.icon} />
            <span>{item.label}</span>
          </a>
        ))}
      </nav>

      <ScrollMinimap
        activeId={activeMinimapId}
        items={minimapItems}
        label={portfolio.minimapLabel}
      />

      {activeModal ? (
        <div
          className={`modal-backdrop${isModalClosing ? " is-closing" : ""}`}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              closeModal();
            }
          }}
        >
          <section
            aria-labelledby="section-modal-title"
            aria-modal="true"
            className={`section-modal section-modal-${activeModal}`}
            id="section-modal"
            role="dialog"
          >
            <header className="modal-header">
              <div>
                <span className="modal-kicker">{t.name}</span>
                <h2 id="section-modal-title">{getModalTitle(activeModal, t)}</h2>
              </div>
              <button
                aria-label={t.modalCloseLabel}
                autoFocus
                className="modal-close"
                onClick={closeModal}
                type="button"
              >
                <Icon name="close" />
              </button>
            </header>
            <div className="modal-body">{renderModalBody(activeModal, t)}</div>
          </section>
        </div>
      ) : null}
    </div>
  );
}

function PortfolioHeading({
  eyebrow,
  icon,
  id,
  title,
}: {
  eyebrow: string;
  icon: ThreeDIconName;
  id: string;
  title: string;
}) {
  return (
    <div className="portfolio-section-heading">
      <ThreeDIcon name={icon} />
      <div>
        <span>{eyebrow}</span>
        <h2 id={id}>{title}</h2>
      </div>
      <span aria-hidden="true" />
    </div>
  );
}

function ScrollMinimap({
  activeId,
  items,
  label,
}: {
  activeId: string;
  items: readonly MinimapItem[];
  label: string;
}) {
  if (items.length === 0) {
    return null;
  }

  return (
    <aside className="scroll-minimap" aria-label={label}>
      <div className="scroll-minimap-bars">
        {items.map((item, index) => {
          return (
            <a
              aria-current={activeId === item.id ? "location" : undefined}
              aria-label={item.label}
              className={`scroll-minimap-bar${activeId === item.id ? " is-active" : ""}`}
              href={`#${item.id}`}
              key={item.id}
              style={{ "--bar-index": index } as CSSProperties}
              title={item.label}
            >
              <span>{item.label}</span>
            </a>
          );
        })}
      </div>
    </aside>
  );
}

function ThreeDIcon({
  className,
  name,
}: {
  className?: string;
  name: ThreeDIconName;
}) {
  return (
    <img
      alt=""
      aria-hidden="true"
      className={["three-d-icon", className].filter(Boolean).join(" ")}
      loading="lazy"
      src={`/3d-icons-transparent/${name}.png`}
    />
  );
}

function getPortfolioProducts(t: Content, locale: Locale) {
  const profiles: Record<
    string,
    {
      readonly copy: string;
      readonly domain: string;
      readonly frame: "monitor" | "tablet";
      readonly iconSrc: string;
      readonly screenSrcs: readonly string[];
    }
  > = productProfiles[locale];

  return t.experiences.flatMap((experience) => {
    if (!hasProducts(experience)) {
      return [];
    }

    return experience.products.map((product) => {
      const profile = profiles[product.name] ?? {
        copy: "",
        domain: t.productLabel,
        frame: "monitor" as const,
        iconSrc: "/product-icons/lms-pro.ico",
        screenSrcs: [],
      };

      return {
        ...product,
        company: experience.company,
        copy: profile.copy,
        date: experience.date,
        domain: profile.domain,
        frame: profile.frame,
        iconSrc: profile.iconSrc,
        screenSrcs: profile.screenSrcs,
      };
    });
  });
}

function getProductContextIcon(productName: string): ThreeDIconName {
  const iconMap: Record<string, ThreeDIconName> = {
    ActivePresenter: "computer",
    "LMS Pro": "shield",
    "Saola Animate": "bulb",
    uPresenter: "lab",
  };

  return iconMap[productName] ?? "computer";
}

function ProductCaseCard({
  index,
  product,
  viewProject,
  workCaseLabel,
}: {
  index: number;
  product: ReturnType<typeof getPortfolioProducts>[number];
  viewProject: string;
  workCaseLabel: string;
}) {
  return (
    <article
      className="portfolio-card work-card product-case-card"
      id={`work-${slugifyId(product.name)}`}
    >
      <div className="work-card-copy">
        <div className="work-case-kicker">
          <span>
            {workCaseLabel} / {String(index + 1).padStart(2, "0")}
          </span>
          <ThreeDIcon
            className="work-context-icon"
            name={getProductContextIcon(product.name)}
          />
        </div>
        <div className="work-card-brand">
          <span className="work-card-media">
            <img
              alt=""
              aria-hidden="true"
              className="product-logo"
              loading="lazy"
              src={product.iconSrc}
            />
          </span>
          <span className="work-domain">{product.domain}</span>
        </div>
        <h3>{product.name}</h3>
        <p>{product.copy}</p>
        <div className="work-meta">
          <span>{product.company}</span>
          <time>{product.date}</time>
        </div>
        <a
          className="work-link"
          href={product.href}
          target="_blank"
          rel="noreferrer"
        >
          <span>{viewProject}</span>
          <Icon name="external" />
        </a>
      </div>
      <ProductMonitor
        frame={product.frame}
        iconSrc={product.iconSrc}
        name={product.name}
        screenSrcs={product.screenSrcs}
      />
    </article>
  );
}

function ProductMonitor({
  frame,
  iconSrc,
  name,
  screenSrcs,
}: {
  frame: "monitor" | "tablet";
  iconSrc: string;
  name: string;
  screenSrcs: readonly string[];
}) {
  const slides = screenSrcs.length > 0 ? screenSrcs : [iconSrc];

  return (
    <div className={`product-monitor is-${frame}`} aria-label={`${name} preview`}>
      <div className="product-monitor-frame">
        {frame === "monitor" ? (
          <div className="product-monitor-bar" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
        ) : null}
        <div
          className="product-screen-slider"
          style={
            {
              "--slide-count": slides.length,
              "--slide-duration": `${slides.length * 4}s`,
            } as CSSProperties
          }
        >
          {slides.map((screen, slideIndex) => (
            <img
              alt={`${name} screen ${slideIndex + 1}`}
              className="product-screen-slide"
              key={`${name}-${screen}`}
              loading="lazy"
              src={screen}
              style={
                {
                  "--slide-index": slideIndex,
                  "--slide-count": slides.length,
                } as CSSProperties
              }
            />
          ))}
        </div>
      </div>
      <div className="product-monitor-stand" aria-hidden="true" />
    </div>
  );
}

function getPageMinimapItems(
  page: PortfolioPageKey,
  t: Content,
  portfolio: (typeof portfolioCopy)[Locale],
  productCards: ReturnType<typeof getPortfolioProducts>,
): readonly MinimapItem[] {
  if (page === "resume") {
    return [
      { id: "resume", label: portfolio.nav.resume },
      { id: "about", label: portfolio.aboutTitle },
      { id: "credentials", label: portfolio.credentialsTitle },
    ];
  }

  if (page === "journey") {
    return [
      { id: "journey-overview", label: portfolio.journeyOverviewLabel },
      ...t.experiences.map((experience, index) => ({
        id: `experience-${index}`,
        label: experience.role,
      })),
    ];
  }

  if (page === "skills") {
    return t.skillGroups.map((group, index) => ({
      id: `skill-group-${index}`,
      label: group.title,
    }));
  }

  if (page === "works") {
    return [
      ...productCards.map((product) => ({
        id: `work-${slugifyId(product.name)}`,
        label: product.name,
      })),
      { id: "product-skills", label: portfolio.productSkillTitle },
      ...t.skillGroups.map((group, index) => ({
        id: `skill-group-${index}`,
        label: group.title,
      })),
    ];
  }

  if (page === "ai") {
    return [
      { id: "ai-operating-system", label: portfolio.aiWorkflow.operatingTitle },
      { id: "ai-core-flow", label: portfolio.aiWorkflow.systemTitle },
      { id: "ai-guardrails", label: portfolio.aiWorkflow.guardrailTitle },
      { id: "ai-outcomes", label: portfolio.aiWorkflow.outcomeTitle },
      { id: "ai-artifacts", label: portfolio.aiWorkflow.artifactTitle },
    ];
  }

  return [{ id: "contact", label: portfolio.nav.contact }];
}

function slugifyId(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function CredentialsGrid({
  onOpenCertificate,
  t,
}: {
  onOpenCertificate: () => void;
  t: Content;
}) {
  return (
    <div className="credentials-grid">
      <article className="portfolio-card education-card">
        <SectionTitle icon="academy">{t.educationTitle}</SectionTitle>
        <div className="education-credential">
          <div className="education-content">
            <h3>{t.education.school}</h3>
            <time className="education-date">{t.education.date}</time>
            <div className="education-details">
              <p>
                <span className="education-detail-icon" aria-hidden="true">
                  <Icon name="building" />
                </span>
                <span>{t.education.faculty}</span>
              </p>
              <p>
                <span className="education-detail-icon" aria-hidden="true">
                  <Icon name="book" />
                </span>
                <span>{t.education.major}</span>
              </p>
            </div>
            <div className="education-meta">
              <span className="education-status-badge">{t.education.note}</span>
            </div>
          </div>
        </div>
      </article>

      <article className="portfolio-card certificates-card">
        <SectionTitle icon="certificate">{t.certTitle}</SectionTitle>
        <CertificateList
          certs={t.certs}
          mode="page"
          onOpenModal={onOpenCertificate}
          verifyLabel={t.verifyLabel}
        />
      </article>

      <article className="portfolio-card awards-card">
        <SectionTitle icon="star">{t.awardsTitle}</SectionTitle>
        <div className="awards-list">
          {t.awards.map((award) => (
            <div className="award-item" key={`${award.year}-${award.title}`}>
              <time className="year-pill">{award.year}</time>
              <p>{award.title}</p>
            </div>
          ))}
        </div>
      </article>
    </div>
  );
}

function JourneyOverview({
  experiences,
  label,
}: {
  experiences: readonly Experience[];
  label: string;
}) {
  const milestones = experiences
    .map((experience, index) => ({ experience, index }))
    .reverse();

  return (
    <article className="portfolio-card journey-overview" id="journey-overview" aria-label={label}>
      <svg className="journey-curve" viewBox="0 0 1000 220" aria-hidden="true">
        <path d="M72 142 C230 148 316 72 472 66 C610 60 720 114 928 62" />
      </svg>
      <div className="journey-overview-grid">
        {milestones.map(({ experience, index }, order) => (
          <a
            className="journey-milestone"
            href={`#experience-${index}`}
            key={`${experience.company}-${experience.date}`}
            style={{ "--milestone-order": order } as CSSProperties}
          >
            <span className="journey-dot" aria-hidden="true" />
            <time>{experience.date}</time>
            <strong>{experience.company}</strong>
            <span>{experience.role}</span>
          </a>
        ))}
      </div>
    </article>
  );
}

function AiWorkflowPage({ portfolio }: { portfolio: (typeof portfolioCopy)[Locale] }) {
  const workflow = portfolio.aiWorkflow;

  return (
    <section className="portfolio-section ai-section ai-workflow-page page-section" id="ai-workflow">
      <article className="portfolio-card ai-reference-hero">
        <div className="ai-copy">
          <PortfolioHeading
            eyebrow={portfolio.aiEyebrow}
            icon="lab"
            id="ai-title"
            title={portfolio.aiTitle}
          />
          <p>{portfolio.aiLead}</p>
        </div>
        <div className="ai-hero-icons" aria-hidden="true">
          <ThreeDIcon name="target" />
          <ThreeDIcon name="shield" />
          <ThreeDIcon name="computer" />
          <ThreeDIcon name="chart" />
        </div>
      </article>

      <section className="ai-overview-layout" id="ai-operating-system">
        <article className="portfolio-card ai-overview-card">
          <h3 className="ai-block-title">{workflow.overviewTitle}</h3>
          {workflow.overviewBody.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <div className="ai-role-grid">
            {workflow.roles.map((role) => (
              <div className="ai-role-card" key={role.title}>
                <ThreeDIcon name={role.icon} />
                <strong>{role.title}</strong>
                <span>{role.copy}</span>
              </div>
            ))}
          </div>
        </article>

        <article className="portfolio-card ai-cycle-card" aria-label={workflow.operatingTitle}>
          <h3 className="ai-block-title">{workflow.operatingTitle}</h3>
          <div className="ai-cycle-diagram">
            <div className="ai-cycle-center">
              <ThreeDIcon name="lab" />
              <span>{workflow.systemTitle}</span>
            </div>
            {workflow.phases.map((phase, index) => (
              <div
                className={`ai-cycle-node ai-cycle-node-${index + 1}`}
                key={phase.label}
              >
                <span>{phase.label}</span>
                <strong>{phase.title}</strong>
              </div>
            ))}
          </div>
        </article>
      </section>

      <section className="ai-flow-section" id="ai-core-flow" aria-labelledby="ai-core-flow-title">
        <h3 className="ai-block-title" id="ai-core-flow-title">
          {workflow.flowMapTitle}
        </h3>
        <div className="portfolio-card ai-flow-map">
          <div className="ai-flow-column">
            <span>{workflow.inputTitle}</span>
            <strong>{workflow.inputHeadline}</strong>
            <p>{workflow.inputCopy}</p>
          </div>
          <div className="ai-flow-connector" aria-hidden="true">
            <Icon name="chevron" />
          </div>
          <div className="ai-flow-workflow">
            {workflow.steps.map((step, index) => (
              <article className="ai-flow-step" key={step.title}>
                <div className="ai-step-index">{String(index + 1).padStart(2, "0")}</div>
                <ThreeDIcon name={step.icon} />
                <h4>{step.title}</h4>
                <p>{step.copy}</p>
              </article>
            ))}
          </div>
          <div className="ai-flow-connector" aria-hidden="true">
            <Icon name="chevron" />
          </div>
          <div className="ai-flow-column">
            <span>{workflow.outputTitle}</span>
            <strong>{workflow.outputHeadline}</strong>
            <p>{workflow.outputCopy}</p>
          </div>
        </div>
      </section>

      <section className="ai-phase-detail-section" aria-label={workflow.operatingTitle}>
        {workflow.phases.map((phase) => (
          <article className="portfolio-card ai-phase-detail-card" key={phase.label}>
            <div className="ai-phase-detail-head">
              <span>{phase.label}</span>
              <h3>{phase.title}</h3>
            </div>
            <div className="ai-phase-detail-grid">
              <div>
                <strong>{workflow.roleTitle}</strong>
                <p>QA / BA / PO / AI Agent</p>
              </div>
              <div>
                <strong>{workflow.aiActionTitle}</strong>
                <ul>
                  {phase.points.slice(0, 3).map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
              <div>
                <strong>{workflow.outputItemTitle}</strong>
                <p>{phase.points[phase.points.length - 1]}</p>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="ai-guardrail-layout" id="ai-guardrails" aria-labelledby="ai-guardrails-title">
        <article className="portfolio-card ai-guardrail-card">
          <h3 className="ai-block-title" id="ai-guardrails-title">
            {workflow.guardrailTitle}
          </h3>
          <div className="ai-gate-list">
            {workflow.gates.map((gate) => (
              <span key={gate}>{gate}</span>
            ))}
          </div>
        </article>

        <article className="portfolio-card ai-boundary-card">
          <h3 className="ai-block-title">{workflow.boundaryTitle}</h3>
          <div className="ai-boundary-grid">
            {workflow.boundary.map((group) => (
              <div key={group.title}>
                <strong>{group.title}</strong>
                <ul>
                  {group.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </article>
      </section>

      <section className="ai-outcome-layout" id="ai-outcomes" aria-labelledby="ai-outcomes-title">
        <article className="portfolio-card ai-outcome-card">
          <h3 className="ai-block-title" id="ai-outcomes-title">
            {workflow.outcomeTitle}
          </h3>
          <div className="ai-metric-grid">
            {workflow.outcomes.map((metric) => (
              <div className="ai-metric-card" key={`${metric.before}-${metric.after}`}>
                <span>{metric.before}</span>
                <Icon name="progress" />
                <strong>{metric.after}</strong>
              </div>
            ))}
          </div>
        </article>

        <article className="portfolio-card ai-expansion-card">
          <h3 className="ai-block-title">{workflow.expansionTitle}</h3>
          <div className="ai-expansion-list">
            {workflow.expansion.map((axis) => (
              <span key={axis}>{axis}</span>
            ))}
          </div>
        </article>
      </section>

      <article className="portfolio-card ai-artifact-card" id="ai-artifacts">
        <div className="compact-card-head">
          <ThreeDIcon name="notebook" />
          <h3>{workflow.artifactTitle}</h3>
        </div>
        <div className="ai-artifact-list">
          {workflow.artifacts.map((artifact) => (
            <span className="ai-artifact-chip" key={artifact}>
              {artifact}
            </span>
          ))}
        </div>
      </article>
    </section>
  );
}

function ExperienceList({
  experiences,
  productLabel,
}: {
  experiences: readonly Experience[];
  productLabel: string;
}) {
  return (
    <div className="timeline">
      {experiences.map((job, index) => (
        <article
          className="timeline-item"
          id={`experience-${index}`}
          key={`${job.role}-${job.date}`}
        >
          <div className="timeline-marker" aria-hidden="true" />
          <div className="timeline-content">
            <div className="timeline-head">
              <div>
                <h3>{job.role}</h3>
                <p>{job.company}</p>
              </div>
              <time>{job.date}</time>
            </div>
            <ul>
              {job.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
            {hasProducts(job) ? (
              <ProductLinks label={productLabel} products={job.products} />
            ) : null}
          </div>
        </article>
      ))}
    </div>
  );
}

function ProductLinks({
  label,
  products,
}: {
  label: string;
  products: readonly Product[];
}) {
  return (
    <div className="product-links">
      <strong>
        <Icon name="link" />
        <span>{label}</span>
      </strong>
      <div>
        {products.map((product) => (
          <a
            className="product-chip"
            href={product.href}
            key={product.name}
            target="_blank"
            rel="noreferrer"
          >
            <span>{product.name}</span>
            <Icon name="external" />
          </a>
        ))}
      </div>
    </div>
  );
}

function SkillsGrid({ skillGroups }: { skillGroups: readonly SkillGroup[] }) {
  return (
    <div className="skills-grid">
      {skillGroups.map((group, index) => (
        <article
          className={`skill-group${isToolGroup(index) ? " tool-skill-group" : ""}`}
          id={`skill-group-${index}`}
          key={group.title}
        >
          <h3>
            <ThreeDIcon
              className="skill-context-icon"
              name={skillGroupThreeDIcons[index] ?? "target"}
            />
            <span>{group.title}</span>
          </h3>
          <div className={isToolGroup(index) ? "tool-logo-list" : undefined}>
            {group.items.map((item) => (
              <SkillItem item={item} key={item} />
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}

function SkillItem({ item }: { item: string }) {
  const tool = toolLogoProfiles[item];

  if (!tool) {
    return <span>{item}</span>;
  }

  return (
    <span
      className="tool-logo-chip"
      style={{ "--tool-tone": tool.tone } as CSSProperties}
    >
      <span className="tool-logo-mark" aria-hidden="true">
        <img alt="" loading="lazy" src={tool.logo} />
      </span>
      <span>{item}</span>
    </span>
  );
}

function isToolGroup(index: number) {
  return index === 3;
}

function CertificateList({
  certificateFallback,
  certificateDownloadLabel,
  certificatePreviewTitle,
  certs,
  mode,
  onOpenModal,
  verifyLabel,
}: {
  certificateFallback?: string;
  certificateDownloadLabel?: string;
  certificatePreviewTitle?: string;
  certs: readonly Certificate[];
  mode: "page" | "modal";
  onOpenModal?: () => void;
  verifyLabel: string;
}) {
  const linkedCertificate = certs.find(hasHref);

  return (
    <>
      <div className="certificate-list">
        {certs.map((cert) => (
          <div className="certificate-item" key={`${cert.year}-${cert.title}`}>
            <time className="year-pill">{cert.year}</time>
            <div className="certificate-copy">
              <h3>{cert.title}</h3>
              {hasHref(cert) ? (
                mode === "page" ? (
                  <button
                    className="verify-link"
                    onClick={onOpenModal}
                    type="button"
                  >
                    <span>{verifyLabel}</span>
                    <Icon name="external" />
                  </button>
                ) : null
              ) : null}
            </div>
          </div>
        ))}
      </div>
      {mode === "modal" && linkedCertificate ? (
        <div className="certificate-preview">
          <div className="certificate-preview-head">
            <h3>
              <Icon name="certificate" />
              <span>{certificatePreviewTitle}</span>
            </h3>
            <div className="preview-actions">
              <a
                className="preview-open-link"
                href={certificatePdfUrl}
                download
              >
                <Icon name="download" />
                <span>{certificateDownloadLabel}</span>
              </a>
              <a
                className="preview-open-link"
                href={linkedCertificate.href}
                target="_blank"
                rel="noreferrer"
              >
                <span>{certificateFallback}</span>
                <Icon name="external" />
              </a>
            </div>
          </div>
          <iframe
            loading="lazy"
            src={certificatePdfPreviewUrl}
            title={certificatePreviewTitle}
          />
        </div>
      ) : null}
    </>
  );
}

function renderModalBody(section: ModalKey, t: Content) {
  if (section === "experience") {
    return <ExperienceList experiences={t.experiences} productLabel={t.productLabel} />;
  }

  if (section === "skills") {
    return <SkillsGrid skillGroups={t.skillGroups} />;
  }

  if (section === "certificates") {
    return (
      <CertificateList
        certificateDownloadLabel={t.certificateDownloadLabel}
        certificateFallback={t.certificateFallback}
        certificatePreviewTitle={t.certificatePreviewTitle}
        certs={t.certs}
        mode="modal"
        verifyLabel={t.verifyLabel}
      />
    );
  }

  return (
    <div className="modal-contact">
      <div className="modal-contact-list">
        {t.contact.map((item) => (
          <ContactRow key={`${item.label}-${item.value}`} {...item} />
        ))}
      </div>
      <div className="modal-interests">
        <div className="modal-interest-heading">
          <ThreeDIcon name="bulb" />
          <h3>{t.interestsTitle}</h3>
        </div>
        <InterestChips compact interests={t.interests} label={t.interestsTitle} />
      </div>
    </div>
  );
}

function getModalTitle(section: ModalKey, t: Content) {
  const titles: Record<ModalKey, string> = {
    certificates: t.certTitle,
    contact: t.contactTitle,
    experience: t.experienceTitle,
    skills: t.skillsTitle,
  };

  return titles[section];
}

function hasProducts(job: Experience): job is Experience & { products: readonly Product[] } {
  return "products" in job;
}

function hasHref(cert: Certificate): cert is Certificate & { href: string } {
  return "href" in cert && Boolean(cert.href);
}

function SectionTitle({
  children,
  icon,
  id,
}: {
  children: ReactNode;
  icon?: IconName;
  id?: string;
}) {
  return (
    <div className="section-title">
      {icon ? (
        <span className="section-title-icon" aria-hidden="true">
          <Icon name={icon} />
        </span>
      ) : null}
      <h2 id={id}>{children}</h2>
      <span className="section-title-line" aria-hidden="true" />
    </div>
  );
}

function InterestChips({
  compact = false,
  interests,
  label,
}: {
  compact?: boolean;
  interests: readonly string[];
  label: string;
}) {
  return (
    <div
      aria-label={label}
      className={`interest-strip interest-chip-list${compact ? " is-compact" : ""}`}
    >
      {interests.map((interest, index) => (
        <div className="interest-chip" key={interest}>
          <ThreeDIcon name={interestThreeDIcons[index] ?? "bulb"} />
          <strong>{interest}</strong>
        </div>
      ))}
    </div>
  );
}

function getContactThreeDIcon(icon: IconName, label: string): ThreeDIconName {
  const normalizedLabel = label
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[đĐ]/g, "d")
    .toLowerCase();

  if (normalizedLabel.includes("linkedin")) {
    return "chart";
  }

  if (normalizedLabel.includes("email") || icon === "mail") {
    return "computer";
  }

  if (normalizedLabel.includes("dien thoai") || icon === "phone") {
    return "target";
  }

  if (normalizedLabel.includes("dia chi") || normalizedLabel.includes("address")) {
    return "shield";
  }

  if (normalizedLabel.includes("que") || normalizedLabel.includes("hometown")) {
    return "target";
  }

  if (normalizedLabel.includes("ngay sinh") || normalizedLabel.includes("birthday")) {
    return "notebook";
  }

  return "bulb";
}

function ContactRow({
  icon,
  label,
  value,
  href,
}: {
  icon: IconName;
  label: string;
  value: string;
  href?: string;
}) {
  const threeDIcon = getContactThreeDIcon(icon, label);
  const body = (
    <>
      <span className="contact-icon contact-3d-icon" aria-hidden="true">
        <ThreeDIcon name={threeDIcon} />
      </span>
      <span>
        <strong>{label}</strong>
        <em>{value}</em>
      </span>
    </>
  );
  const rowClassName = `contact-row${
    href?.startsWith("mailto") ? " contact-row-email" : ""
  }`;

  if (href) {
    return (
      <a
        className={rowClassName}
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel="noreferrer"
      >
        {body}
      </a>
    );
  }

  return <div className={rowClassName}>{body}</div>;
}

function Icon({ className, name }: { className?: string; name: IconName }) {
  const stageIconIds: Partial<Record<IconName, string>> = {
    academy: "stage-icon-academy",
    book: "stage-icon-book-open",
    building: "stage-icon-academy",
    calendar: "stage-icon-calendar",
    certificate: "stage-icon-certificate",
    check: "stage-icon-check",
    chevron: "stage-icon-chevron-down",
    close: "stage-icon-close",
    database: "stage-icon-database",
    download: "stage-icon-download",
    external: "stage-icon-external-link",
    globe: "stage-icon-globe",
    home: "stage-icon-home",
    layers: "stage-icon-layers",
    link: "stage-icon-link",
    mail: "stage-icon-mail",
    map: "stage-icon-home",
    phone: "stage-icon-phone",
    progress: "stage-icon-progress",
    settings: "stage-icon-settings",
    shield: "stage-icon-shield-check",
    spark: "stage-icon-spark",
    star: "stage-icon-star",
    target: "stage-icon-target",
    user: "stage-icon-user",
    zap: "stage-icon-zap",
  };
  const classNames = ["stage-icon", className].filter(Boolean).join(" ");

  if (name !== "linkedin") {
    return (
      <svg className={classNames} aria-hidden="true">
        <use href={`/stage-icons.svg#${stageIconIds[name] ?? "stage-icon-spark"}`} />
      </svg>
    );
  }

  return (
    <svg className={classNames} aria-hidden="true" viewBox="0 0 24 24" fill="none">
      <g
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
        <path d="M2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </g>
    </svg>
  );
}
