"use client";

import { ChangeEvent, ReactNode, useState } from "react";

type Locale = "vi" | "en";
type IconName =
  | "calendar"
  | "download"
  | "external"
  | "linkedin"
  | "mail"
  | "map"
  | "phone";

const certificateUrl = "https://hust.ediploma.vn/verify/Zf3y-0Ovt-iJen";
const linkedinUrl = "https://www.linkedin.com/in/nguyen-hung-manh-97316117b/";

const content = {
  vi: {
    languageName: "Tiếng Việt",
    languageLabel: "Ngôn ngữ",
    nav: ["Kinh nghiệm", "Kỹ năng", "Chứng chỉ", "Liên hệ"],
    heroBadge: "IT Tester | AI QA Engineer",
    name: "Nguyễn Hùng Mạnh",
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
    experiences: [
      {
        role: "IT Tester",
        company: "Công ty Cổ phần Giáo dục SAPP",
        date: "02/2026 - Nay",
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
      title: "Chuyên ngành Hệ thống thông tin",
      school: "Học viện Công nghệ Bưu chính Viễn thông",
      date: "2014 - 2019",
      note: "Đã tốt nghiệp 2019",
    },
    certTitle: "Chứng chỉ",
    verifyLabel: "Xác thực chứng chỉ",
    certs: [
      { year: "2020", title: "TOEIC 600" },
      {
        year: "2025",
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
    heroBadge: "IT Tester | AI QA Engineer",
    name: "Nguyen Hung Manh",
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
    experiences: [
      {
        role: "IT Tester",
        company: "SAPP Education JSC",
        date: "02/2026 - Present",
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
      title: "Information Systems Major",
      school: "Posts and Telecommunications Institute of Technology",
      date: "2014 - 2019",
      note: "Graduated in 2019",
    },
    certTitle: "Certifications",
    verifyLabel: "Verify credential",
    certs: [
      { year: "2020", title: "TOEIC 600" },
      {
        year: "2025",
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

export default function Home() {
  const [locale, setLocale] = useState<Locale>("vi");
  const t = content[locale];
  const navTargets = ["#experience", "#skills", "#certificates", "#contact"];

  function handleLocaleChange(event: ChangeEvent<HTMLSelectElement>) {
    setLocale(event.target.value as Locale);
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
            <a key={item} href={navTargets[index]}>
              {item}
            </a>
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
              <div className="timeline">
                {t.experiences.map((job) => (
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
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section id="skills" aria-labelledby="skills-title">
              <SectionTitle id="skills-title">{t.skillsTitle}</SectionTitle>
              <div className="skills-grid">
                {t.skillGroups.map((group) => (
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
            </section>

            <section className="split-section">
              <article className="section-card" aria-labelledby="education-title">
                <SectionTitle id="education-title">{t.educationTitle}</SectionTitle>
                <div className="compact-item">
                  <div>
                    <h3>{t.education.title}</h3>
                    <p>{t.education.school}</p>
                    <span>{t.education.note}</span>
                  </div>
                  <time>{t.education.date}</time>
                </div>
              </article>

              <article
                className="section-card"
                id="certificates"
                aria-labelledby="certificates-title"
              >
                <SectionTitle id="certificates-title">{t.certTitle}</SectionTitle>
                <div className="certificate-list">
                  {t.certs.map((cert) => (
                    <div className="certificate-item" key={`${cert.year}-${cert.title}`}>
                      <span className="year-pill">{cert.year}</span>
                      <div>
                        <h3>{cert.title}</h3>
                        {"href" in cert && cert.href ? (
                          <a
                            className="verify-link"
                            href={cert.href}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <span>{t.verifyLabel}</span>
                            <Icon name="external" />
                          </a>
                        ) : null}
                      </div>
                    </div>
                  ))}
                </div>
              </article>
            </section>

            <section className="section-card" aria-labelledby="awards-title">
              <SectionTitle id="awards-title">{t.awardsTitle}</SectionTitle>
              <div className="awards-list">
                {t.awards.map((award) => (
                  <div key={`${award.year}-${award.title}`}>
                    <span>{award.year}</span>
                    <p>{award.title}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p>{t.footer}</p>
        <a href="mailto:hungmanh0206@gmail.com">hungmanh0206@gmail.com</a>
      </footer>
    </div>
  );
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
