"use client";

import { ChangeEvent, ReactNode, useEffect, useState } from "react";

type Locale = "vi" | "en";
type IconName =
  | "book"
  | "building"
  | "calendar"
  | "download"
  | "external"
  | "linkedin"
  | "mail"
  | "map"
  | "phone";

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
    role: "QA Engineer định hướng AI-driven Testing",
    intro:
      "QA Engineer có kinh nghiệm kiểm thử phần mềm, phân tích yêu cầu và đảm bảo chất lượng sản phẩm. Tôi tập trung ứng dụng AI để tối ưu quy trình QA, từ phân tích yêu cầu, thiết kế test case đến báo cáo kiểm thử.",
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
      "Phát triển theo hướng AI QA Engineer, xây dựng các giải pháp kiểm thử thông minh, nâng cao độ phủ kiểm thử và rút ngắn vòng phản hồi chất lượng cho sản phẩm.",
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
    role: "QA Engineer focused on AI-driven Testing",
    intro:
      "QA Engineer with experience in software quality assurance and requirement analysis. I focus on using AI to improve QA workflows, from requirement analysis and test design to execution and reporting.",
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
      "Grow as an AI QA Engineer by building smarter testing solutions, improving test coverage, and shortening the quality feedback loop for product teams.",
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

export default function Home() {
  const [locale, setLocale] = useState<Locale>("vi");
  const [activeModal, setActiveModal] = useState<ModalKey | null>(null);
  const [isModalClosing, setIsModalClosing] = useState(false);
  const t = content[locale];

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

  function handleLocaleChange(event: ChangeEvent<HTMLSelectElement>) {
    setLocale(event.target.value as Locale);
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
    <div className="site-shell" id="top">
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label={t.name}>
          <span className="wordmark-mark">M</span>
          <span>{t.name}</span>
        </a>
        <nav className="nav-links" aria-label="Primary navigation">
          {t.nav.map((item, index) => (
            <button
              aria-controls={activeModal ? "section-modal" : undefined}
              aria-expanded={activeModal === modalSections[index]}
              aria-pressed={activeModal === modalSections[index]}
              className={activeModal === modalSections[index] ? "is-active" : undefined}
              key={item}
              onClick={() => openModal(modalSections[index])}
              type="button"
            >
              {item}
            </button>
          ))}
        </nav>
        <label className="language-select">
          <span>{t.languageLabel}</span>
          <select value={locale} onChange={handleLocaleChange}>
            <option value="vi">{content.vi.languageName}</option>
            <option value="en">{content.en.languageName}</option>
          </select>
        </label>
      </header>

      <main>
        <section className="hero-section" aria-labelledby="hero-title">
          <div className="hero-media">
            <img src="/manh-profile.png" alt={t.name} />
            <span>{t.heroBadge}</span>
          </div>
          <div className="hero-copy">
            <p className="eyebrow">{t.heroBadge}</p>
            <h1 id="hero-title">{t.name}</h1>
            <h2>{t.role}</h2>
            <p className="hero-intro">{t.intro}</p>
            <div className="hero-stats" aria-label="Profile highlights">
              {t.stats.map((stat) => (
                <div key={stat.label}>
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
        </section>

        <section className="cv-layout">
          <aside className="profile-panel" id="contact" aria-labelledby="contact-title">
            <SectionTitle id="contact-title">{t.contactTitle}</SectionTitle>
            <div className="contact-list">
              {t.contact.map((item) => (
                <ContactRow key={`${item.label}-${item.value}`} {...item} />
              ))}
            </div>
            <div className="divider" />
            <SectionTitle>{t.interestsTitle}</SectionTitle>
            <ul className="simple-list">
              {t.interests.map((interest) => (
                <li key={interest}>{interest}</li>
              ))}
            </ul>
          </aside>

          <div className="content-stack">
            <section className="section-card focus-card" aria-labelledby="focus-title">
              <SectionTitle id="focus-title">{t.focusTitle}</SectionTitle>
              <p>{t.focus}</p>
            </section>

            <section id="experience" aria-labelledby="experience-title">
              <SectionTitle id="experience-title">{t.experienceTitle}</SectionTitle>
              <ExperienceList
                experiences={t.experiences}
                productLabel={t.productLabel}
              />
            </section>

            <section id="skills" aria-labelledby="skills-title">
              <SectionTitle id="skills-title">{t.skillsTitle}</SectionTitle>
              <SkillsGrid skillGroups={t.skillGroups} />
            </section>

            <section className="split-section">
              <article
                className="section-card education-card"
                aria-labelledby="education-title"
              >
                <SectionTitle id="education-title">{t.educationTitle}</SectionTitle>
                <div className="education-credential">
                  <div className="education-content">
                    <h3>{t.education.school}</h3>
                    <time className="education-date">{t.education.date}</time>
                    <div className="education-details" aria-label={t.education.note}>
                      <p>
                        <Icon name="building" />
                        <span>{t.education.faculty}</span>
                      </p>
                      <p>
                        <Icon name="book" />
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
                className="section-card certificates-card"
                id="certificates"
                aria-labelledby="certificates-title"
              >
                <SectionTitle id="certificates-title">{t.certTitle}</SectionTitle>
                <CertificateList
                  certs={t.certs}
                  mode="page"
                  onOpenModal={() => openModal("certificates")}
                  verifyLabel={t.verifyLabel}
                />
              </article>
            </section>

            <section className="section-card awards-card" aria-labelledby="awards-title">
              <SectionTitle id="awards-title">{t.awardsTitle}</SectionTitle>
              <div className="awards-list">
                {t.awards.map((award) => (
                  <article className="award-item" key={`${award.year}-${award.title}`}>
                    <time className="year-pill">{award.year}</time>
                    <p>{award.title}</p>
                  </article>
                ))}
              </div>
            </section>
          </div>
        </section>
      </main>

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
                <span aria-hidden="true">×</span>
              </button>
            </header>
            <div className="modal-body">{renderModalBody(activeModal, t)}</div>
          </section>
        </div>
      ) : null}
    </div>
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
      <strong>{label}</strong>
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
      {skillGroups.map((group) => (
        <article className="skill-group" key={group.title}>
          <h3>{group.title}</h3>
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
            <h3>{certificatePreviewTitle}</h3>
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
        <SectionTitle>{t.interestsTitle}</SectionTitle>
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

function SectionTitle({ children, id }: { children: ReactNode; id?: string }) {
  return (
    <div className="section-title">
      <h2 id={id}>{children}</h2>
      <span aria-hidden="true" />
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
      <Icon name={icon} />
      <span>
        <strong>{label}</strong>
        <em>{value}</em>
      </span>
    </>
  );

  if (href) {
    return (
      <a
        className="contact-row"
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel="noreferrer"
      >
        {body}
      </a>
    );
  }

  return <div className="contact-row">{body}</div>;
}

function Icon({ name }: { name: IconName }) {
  const paths: Record<IconName, ReactNode> = {
    book: (
      <>
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5z" />
      </>
    ),
    building: (
      <>
        <path d="M4 21h16" />
        <path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16" />
        <path d="M9 7h1" />
        <path d="M14 7h1" />
        <path d="M9 11h1" />
        <path d="M14 11h1" />
        <path d="M10 21v-4h4v4" />
      </>
    ),
    calendar: (
      <>
        <path d="M8 2v4" />
        <path d="M16 2v4" />
        <path d="M3 10h18" />
        <rect x="3" y="4" width="18" height="18" rx="3" />
      </>
    ),
    download: (
      <>
        <path d="M12 3v12" />
        <path d="m7 10 5 5 5-5" />
        <path d="M5 21h14" />
      </>
    ),
    external: (
      <>
        <path d="M14 3h7v7" />
        <path d="M10 14 21 3" />
        <path d="M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5" />
      </>
    ),
    linkedin: (
      <>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
        <path d="M2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </>
    ),
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 7 9-7" />
      </>
    ),
    map: (
      <>
        <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0z" />
        <circle cx="12" cy="10" r="3" />
      </>
    ),
    phone: (
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.8 2.1z" />
    ),
  };

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
      <g
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {paths[name]}
      </g>
    </svg>
  );
}
