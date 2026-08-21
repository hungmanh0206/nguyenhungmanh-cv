"use client";

import {
  type KeyboardEvent as ReactKeyboardEvent,
  type ReactNode,
  useEffect,
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

const skillGroupIcons: readonly IconName[] = [
  "shield",
  "settings",
  "spark",
  "zap",
  "database",
];

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
            href: "https://lms-pro.sapp.edu.vn/lms-pro-new-version?tab=home",
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
            href: "https://lms-pro.sapp.edu.vn/lms-pro-new-version?tab=home",
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
type ThreeDIconName =
  | "bulb"
  | "chart"
  | "computer"
  | "lab"
  | "medal"
  | "notebook"
  | "shield"
  | "target";

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
      journey: "Hành trình",
      works: "Sản phẩm",
      ai: "AI Workflow",
      contact: "Liên hệ",
    },
    greeting: "Xin chào, tôi là",
    headline: "QA Engineer xây độ tin cậy cho sản phẩm số",
    heroLead:
      "Tôi kết hợp kiểm thử phần mềm, phân tích yêu cầu và AI-driven Testing để giúp sản phẩm LMS/eLearning phát hành ổn định hơn.",
    aboutEyebrow: "ABOUT ME",
    aboutTitle: "Một chút về tôi",
    aboutLead:
      "Tôi tập trung vào chất lượng sản phẩm từ lúc làm rõ yêu cầu đến khi xác nhận bản phát hành, đặc biệt với các nền tảng học tập số và luồng nghiệp vụ có AI hỗ trợ.",
    toolkitTitle: "Bộ kỹ năng sử dụng thường xuyên",
    journeyEyebrow: "JOURNEY",
    journeyTitle: "Hành trình phát triển",
    worksEyebrow: "FAVOURITE WORKS",
    worksTitle: "Sản phẩm đã tham gia",
    viewProject: "Xem sản phẩm",
    aiEyebrow: "AI WORKFLOW",
    aiTitle: "Quy trình QA có AI hỗ trợ",
    aiLead:
      "Ứng dụng kinh nghiệm xây dựng AI Agent vào QA workflow để giảm thao tác lặp lại, tăng độ phủ kiểm thử và rút ngắn vòng phản hồi chất lượng.",
    aiSteps: [
      {
        icon: "target" as const,
        title: "Phân tích yêu cầu",
        copy: "Tóm tắt phạm vi, xác định rủi ro và điểm cần làm rõ.",
      },
      {
        icon: "notebook" as const,
        title: "Thiết kế test case",
        copy: "Sinh gợi ý testcase, checklist và dữ liệu kiểm thử.",
      },
      {
        icon: "lab" as const,
        title: "Thực thi kiểm thử",
        copy: "Hỗ trợ API, regression và kiểm tra luồng nghiệp vụ trọng yếu.",
      },
      {
        icon: "chart" as const,
        title: "Báo cáo chất lượng",
        copy: "Chuẩn hóa kết quả, defect summary và đề xuất ưu tiên xử lý.",
      },
    ],
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
      journey: "Journey",
      works: "Works",
      ai: "AI Workflow",
      contact: "Contact",
    },
    greeting: "Hello, I am",
    headline: "QA Engineer building confidence for digital products",
    heroLead:
      "I combine software testing, requirement analysis, and AI-driven Testing to help LMS/eLearning products ship with greater stability.",
    aboutEyebrow: "ABOUT ME",
    aboutTitle: "A little about me",
    aboutLead:
      "I focus on product quality from requirement clarification through release validation, especially for digital learning platforms and AI-assisted workflows.",
    toolkitTitle: "Toolkit I use often",
    journeyEyebrow: "JOURNEY",
    journeyTitle: "My development journey",
    worksEyebrow: "FAVOURITE WORKS",
    worksTitle: "Products I contributed to",
    viewProject: "View project",
    aiEyebrow: "AI WORKFLOW",
    aiTitle: "AI-assisted QA workflow",
    aiLead:
      "I apply hands-on AI Agent experience to QA workflows to reduce repetitive tasks, increase test coverage, and shorten the product quality feedback loop.",
    aiSteps: [
      {
        icon: "target" as const,
        title: "Requirement analysis",
        copy: "Summarize scope, identify risks, and capture open questions.",
      },
      {
        icon: "notebook" as const,
        title: "Test case design",
        copy: "Generate testcase ideas, checklists, and test data.",
      },
      {
        icon: "lab" as const,
        title: "Test execution",
        copy: "Support API, regression, and critical business workflow testing.",
      },
      {
        icon: "chart" as const,
        title: "Quality reporting",
        copy: "Standardize results, defect summaries, and priority suggestions.",
      },
    ],
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
      icon: "computer" as const,
      domain: "Learning Management System",
      copy: "Nền tảng quản lý học tập tại SAPP với luồng học, vận hành lớp và báo cáo đào tạo.",
    },
    uPresenter: {
      icon: "bulb" as const,
      domain: "AI eLearning",
      copy: "Nền tảng tạo nội dung học tập có AI hỗ trợ cho slide, giọng đọc và quản lý học liệu.",
    },
    ActivePresenter: {
      icon: "notebook" as const,
      domain: "eLearning Authoring",
      copy: "Công cụ tạo bài giảng, quay màn hình, mô phỏng phần mềm và nội dung tương tác.",
    },
    "Saola Animate": {
      icon: "chart" as const,
      domain: "HTML5 Animation",
      copy: "Công cụ thiết kế animation HTML5 và nội dung tương tác chạy trên web.",
    },
  },
  en: {
    "LMS Pro": {
      icon: "computer" as const,
      domain: "Learning Management System",
      copy: "A SAPP learning management platform covering learning flows, class operations, and training reports.",
    },
    uPresenter: {
      icon: "bulb" as const,
      domain: "AI eLearning",
      copy: "An AI-assisted learning content platform for slides, voice generation, and learning asset management.",
    },
    ActivePresenter: {
      icon: "notebook" as const,
      domain: "eLearning Authoring",
      copy: "An authoring tool for courses, screen recording, software simulation, and interactive content.",
    },
    "Saola Animate": {
      icon: "chart" as const,
      domain: "HTML5 Animation",
      copy: "A tool for designing HTML5 animation and interactive web content.",
    },
  },
} as const satisfies Record<
  Locale,
  Record<string, { readonly copy: string; readonly domain: string; readonly icon: ThreeDIconName }>
>;

export default function Home() {
  const [locale, setLocale] = useState<Locale>("vi");
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [activeModal, setActiveModal] = useState<ModalKey | null>(null);
  const [isModalClosing, setIsModalClosing] = useState(false);
  const languageComboboxRef = useRef<HTMLDivElement>(null);
  const t = content[locale];
  const portfolio = portfolioCopy[locale];
  const productCards = getPortfolioProducts(t, locale);
  const topNavItems = [
    { href: "#resume", icon: "user" as const, label: portfolio.nav.resume },
    { href: "#journey", icon: "progress" as const, label: portfolio.nav.journey },
    { href: "#works", icon: "layers" as const, label: portfolio.nav.works },
    { href: "#ai-workflow", icon: "spark" as const, label: portfolio.nav.ai },
    { href: "#contact", icon: "mail" as const, label: portfolio.nav.contact },
  ];
  const dockItems = [
    { href: "#resume", icon: "user" as const, label: portfolio.nav.resume },
    { href: "#works", icon: "layers" as const, label: portfolio.nav.works },
    { href: "#ai-workflow", icon: "spark" as const, label: portfolio.nav.ai },
    { href: "#contact", icon: "mail" as const, label: portfolio.nav.contact },
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
        <a className="wordmark portfolio-wordmark" href="#top" aria-label={t.name}>
          <span className="wordmark-mark">M</span>
          <span>{portfolio.brand}</span>
        </a>
        <nav className="nav-links portfolio-top-nav" aria-label={portfolio.primaryNavLabel}>
          {topNavItems.map((item) => (
            <a href={item.href} key={item.href}>
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

      <main className="portfolio-main">
        <section className="portfolio-hero" id="resume" aria-labelledby="hero-title">
          <div className="portfolio-hero-copy">
            <span className="portfolio-kicker">
              <ThreeDIcon name="target" />
              <span>{portfolio.greeting}</span>
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
            <ThreeDIcon className="floating-3d floating-3d-one" name="shield" />
            <ThreeDIcon className="floating-3d floating-3d-two" name="bulb" />
            <div className="portfolio-portrait-frame">
              <img src="/manh-profile.png" alt={t.name} />
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

        <section className="portfolio-section journey-section" id="journey">
          <PortfolioHeading
            eyebrow={portfolio.journeyEyebrow}
            icon="medal"
            id="journey-title"
            title={portfolio.journeyTitle}
          />
          <ExperienceList experiences={t.experiences} productLabel={t.productLabel} />
        </section>

        <section className="portfolio-section works-section" id="works">
          <PortfolioHeading
            eyebrow={portfolio.worksEyebrow}
            icon="computer"
            id="works-title"
            title={portfolio.worksTitle}
          />
          <div className="works-grid">
            {productCards.map((product) => (
              <article className="portfolio-card work-card" key={product.name}>
                <div className="work-card-media">
                  <ThreeDIcon name={product.icon} />
                </div>
                <span className="work-domain">{product.domain}</span>
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
                  <span>{portfolio.viewProject}</span>
                  <Icon name="external" />
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="portfolio-section ai-section" id="ai-workflow">
          <div className="ai-copy">
            <PortfolioHeading
              eyebrow={portfolio.aiEyebrow}
              icon="lab"
              id="ai-title"
              title={portfolio.aiTitle}
            />
            <p>{portfolio.aiLead}</p>
          </div>
          <div className="ai-steps-grid">
            {portfolio.aiSteps.map((step) => (
              <article className="portfolio-card ai-step-card" key={step.title}>
                <ThreeDIcon name={step.icon} />
                <h3>{step.title}</h3>
                <p>{step.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="portfolio-section credentials-section" id="credentials">
          <PortfolioHeading
            eyebrow={portfolio.credentialsEyebrow}
            icon="notebook"
            id="credentials-title"
            title={portfolio.credentialsTitle}
          />
          <div className="credentials-grid">
            <article
              className="portfolio-card education-card"
              aria-labelledby="education-title"
            >
              <SectionTitle icon="academy" id="education-title">
                {t.educationTitle}
              </SectionTitle>
              <div className="education-credential">
                <div className="education-content">
                  <h3>{t.education.school}</h3>
                  <time className="education-date">{t.education.date}</time>
                  <div className="education-details" aria-label={t.education.note}>
                    <p>
                      <span className="education-detail-icon" aria-hidden="true">
                        <Icon name="layers" />
                      </span>
                      <span>{t.education.faculty}</span>
                    </p>
                    <p>
                      <span className="education-detail-icon" aria-hidden="true">
                        <Icon name="database" />
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

            <article
              className="portfolio-card certificates-card"
              id="certificates"
              aria-labelledby="certificates-title"
            >
              <SectionTitle icon="certificate" id="certificates-title">
                {t.certTitle}
              </SectionTitle>
              <CertificateList
                certs={t.certs}
                mode="page"
                onOpenModal={() => openModal("certificates")}
                verifyLabel={t.verifyLabel}
              />
            </article>

            <article className="portfolio-card awards-card" aria-labelledby="awards-title">
              <SectionTitle icon="star" id="awards-title">
                {t.awardsTitle}
              </SectionTitle>
              <div className="awards-list">
                {t.awards.map((award) => (
                  <article className="award-item" key={`${award.year}-${award.title}`}>
                    <time className="year-pill">{award.year}</time>
                    <p>{award.title}</p>
                  </article>
                ))}
              </div>
            </article>
          </div>
        </section>

        <section className="portfolio-section contact-section" id="contact">
          <div className="contact-copy">
            <PortfolioHeading
              eyebrow={portfolio.contactEyebrow}
              icon="target"
              id="contact-title"
              title={portfolio.contactTitle}
            />
            <p>{portfolio.contactLead}</p>
            <div className="interest-strip" aria-label={t.interestsTitle}>
              {t.interests.map((interest) => (
                <span key={interest}>{interest}</span>
              ))}
            </div>
          </div>
          <div className="contact-grid">
            {t.contact.map((item) => (
              <ContactRow key={`${item.label}-${item.value}`} {...item} />
            ))}
          </div>
        </section>
      </main>

      <nav className="portfolio-dock" aria-label={portfolio.bottomNavLabel}>
        {dockItems.map((item) => (
          <a href={item.href} key={item.href}>
            <Icon name={item.icon} />
            <span>{item.label}</span>
          </a>
        ))}
      </nav>

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
      src={`/3d-icons/${name}.webp`}
    />
  );
}

function getPortfolioProducts(t: Content, locale: Locale) {
  const profiles: Record<
    string,
    { readonly copy: string; readonly domain: string; readonly icon: ThreeDIconName }
  > = productProfiles[locale];

  return t.experiences.flatMap((experience) => {
    if (!hasProducts(experience)) {
      return [];
    }

    return experience.products.map((product) => {
      const profile = profiles[product.name] ?? {
        copy: "",
        domain: t.productLabel,
        icon: "computer" as const,
      };

      return {
        ...product,
        company: experience.company,
        copy: profile.copy,
        date: experience.date,
        domain: profile.domain,
        icon: profile.icon,
      };
    });
  });
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
      {experiences.map((job) => (
        <article className="timeline-item" key={`${job.role}-${job.date}`}>
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
        <article className="skill-group" key={group.title}>
          <h3>
            <span className="skill-icon" aria-hidden="true">
              <Icon name={skillGroupIcons[index] ?? "layers"} />
            </span>
            <span>{group.title}</span>
          </h3>
          <div>
            {group.items.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
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
        <SectionTitle icon="spark">{t.interestsTitle}</SectionTitle>
        <ul className="simple-list">
          {t.interests.map((interest) => (
            <li key={interest}>{interest}</li>
          ))}
        </ul>
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
  const body = (
    <>
      <span className="contact-icon" aria-hidden="true">
        <Icon name={icon} />
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
