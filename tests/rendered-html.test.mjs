import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

test("defines the bilingual CV content and external links", async () => {
  const page = await readFile(new URL("../app/CvPortfolio.tsx", import.meta.url), "utf8");

  assert.match(page, /NGUYỄN HÙNG MẠNH/);
  assert.match(page, /NGUYEN HUNG MANH/);
  assert.match(page, /AI Agent/);
  assert.match(page, /href: "\/journey"/);
  assert.match(page, /href: "\/works"/);
  assert.match(page, /href: "\/ai-workflow"/);
  assert.match(page, /href: "\/contact"/);
  assert.match(page, /scroll-minimap/);
  assert.match(page, /scroll-minimap-bar/);
  assert.match(page, /journey-overview/);
  assert.doesNotMatch(page, /PORTFOLIO · 2026/);
  assert.doesNotMatch(page, /hero-icon-board/);
  assert.doesNotMatch(page, /work-case-kicker/);
  assert.match(page, /product-case-card/);
  assert.match(page, /product-monitor/);
  assert.match(page, /product-skills/);
  assert.match(page, /skill-context-icon/);
  assert.match(page, /ai-reference-hero/);
  assert.match(page, /ai-flow-map/);
  assert.match(page, /Preflight Gate/);
  assert.match(page, /Ambiguity Gate/);
  assert.match(page, /AI-led \/ Human-led/);
  assert.match(page, /contact-profile-card/);
  assert.match(page, /contact-action-row/);
  assert.match(page, /interest-chip/);
  assert.match(page, /\/tool-logos\/jira\.svg/);
  assert.match(page, /\/tool-logos\/postman\.svg/);
  assert.match(page, /\/tool-logos\/codex\.svg/);
  assert.match(page, /\/tool-logos\/vscode\.svg/);
  assert.match(page, /08\/2014-01\/2019/);
  assert.match(page, /Khoa Công nghệ thông tin/);
  assert.match(page, /Chuyên ngành Hệ thống thông tin/);
  assert.match(page, /Đã tốt nghiệp 01\/2019/);
  assert.match(page, /nguyen-hung-manh-cv-vi\.pdf/);
  assert.match(page, /nguyen-hung-manh-cv-en\.pdf/);
  assert.match(page, /data-analysis-certificate\.pdf/);
  assert.match(page, /hust\.ediploma\.vn\/verify\/Zf3y-0Ovt-iJen/);
  assert.match(page, /linkedin\.com\/in\/nguyen-hung-manh-97316117b/);
  assert.match(page, /atomisystems\.com\/activepresenter/);
  assert.match(page, /atomisystems\.com\/saola-animate/);
  assert.match(page, /upresenter\.ai\/vi/);
  assert.match(page, /Sản phẩm nội bộ/);
  assert.doesNotMatch(page, /uat-lms\.sapp\.edu\.vn\/lms-pro-new-version/);
  assert.match(page, /\/3d-icons-figma\/\$\{name\}\.png/);
  assert.match(page, /\/product-screens\/lms-pro-1\.png/);
  assert.match(page, /\/product-screens\/upresenter-1\.png/);
  assert.match(page, /\/product-screens\/activepresenter-1\.webp/);
  assert.match(page, /\/product-screens\/saola-animate-1\.webp/);
  assert.match(page, /\/product-icons\/activepresenter\.svg/);
  assert.match(page, /\/product-icons\/saola-animate\.png/);
  assert.match(page, /\/product-icons\/upresenter\.svg/);
  assert.match(page, /\/product-icons\/lms-pro\.ico/);
  assert.match(page, /Xem chứng chỉ/);
  assert.match(page, /View certificate/);
  assert.doesNotMatch(page, /portfolio-wordmark/);
  assert.doesNotMatch(page, /logo-sapp|assets\/logo-sapp/i);
});

test("ships the route pages, profile image, CV PDFs, and visual assets", async () => {
  await Promise.all([
    access(new URL("../app/journey/page.tsx", import.meta.url)),
    access(new URL("../app/skills/page.tsx", import.meta.url)),
    access(new URL("../app/works/page.tsx", import.meta.url)),
    access(new URL("../app/ai-workflow/page.tsx", import.meta.url)),
    access(new URL("../app/contact/page.tsx", import.meta.url)),
    access(new URL("../public/manh-profile.png", import.meta.url)),
    access(new URL("../public/nguyen-hung-manh-cv-vi.pdf", import.meta.url)),
    access(new URL("../public/nguyen-hung-manh-cv-en.pdf", import.meta.url)),
    access(new URL("../public/data-analysis-certificate.pdf", import.meta.url)),
    access(new URL("../public/stage-icons.svg", import.meta.url)),
    access(new URL("../public/3d-icons/target.webp", import.meta.url)),
    access(new URL("../public/3d-icons/computer.webp", import.meta.url)),
    access(new URL("../public/3d-icons-clean/target.png", import.meta.url)),
    access(new URL("../public/3d-icons-clean/computer.png", import.meta.url)),
    access(new URL("../public/3d-icons-transparent/target.png", import.meta.url)),
    access(new URL("../public/3d-icons-transparent/computer.png", import.meta.url)),
    access(new URL("../public/3d-icons-transparent/medal.png", import.meta.url)),
    access(new URL("../public/3d-icons-figma/target.png", import.meta.url)),
    access(new URL("../public/3d-icons-figma/ai-spark.png", import.meta.url)),
    access(new URL("../public/3d-icons-figma/shield.png", import.meta.url)),
    access(new URL("../public/3d-icons-figma/lab.png", import.meta.url)),
    access(new URL("../public/3d-icons-figma/books.png", import.meta.url)),
    access(new URL("../public/product-icons/activepresenter.svg", import.meta.url)),
    access(new URL("../public/product-icons/saola-animate.png", import.meta.url)),
    access(new URL("../public/product-icons/upresenter.svg", import.meta.url)),
    access(new URL("../public/product-icons/lms-pro.ico", import.meta.url)),
    access(new URL("../public/product-screens/activepresenter-1.webp", import.meta.url)),
    access(new URL("../public/product-screens/saola-animate-1.webp", import.meta.url)),
    access(new URL("../public/product-screens/upresenter-1.png", import.meta.url)),
    access(new URL("../public/product-screens/lms-pro-1.png", import.meta.url)),
    access(new URL("../public/tool-logos/jira.svg", import.meta.url)),
    access(new URL("../public/tool-logos/redmine.svg", import.meta.url)),
    access(new URL("../public/tool-logos/postman.svg", import.meta.url)),
    access(new URL("../public/tool-logos/claude-code.svg", import.meta.url)),
    access(new URL("../public/tool-logos/codex.svg", import.meta.url)),
    access(new URL("../public/tool-logos/vscode.svg", import.meta.url)),
    access(new URL("../public/tool-logos/excel.svg", import.meta.url)),
    access(new URL("../public/tool-logos/google-sheets.svg", import.meta.url)),
    access(new URL("../public/tool-logos/github.svg", import.meta.url)),
  ]);
});
