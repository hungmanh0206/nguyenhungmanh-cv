import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

test("defines the bilingual CV content and external links", async () => {
  const page = await readFile(new URL("../app/page.tsx", import.meta.url), "utf8");

  assert.match(page, /NGUYỄN HÙNG MẠNH/);
  assert.match(page, /NGUYEN HUNG MANH/);
  assert.match(page, /AI Agent/);
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
  assert.match(page, /lms-pro\.sapp\.edu\.vn\/lms-pro-new-version\?tab=home/);
  assert.match(page, /Xem chứng chỉ/);
  assert.match(page, /View certificate/);
  assert.doesNotMatch(page, /logo-sapp|assets\/logo-sapp/i);
});

test("ships the profile image and both CV PDF assets", async () => {
  await Promise.all([
    access(new URL("../public/manh-profile.png", import.meta.url)),
    access(new URL("../public/nguyen-hung-manh-cv-vi.pdf", import.meta.url)),
    access(new URL("../public/nguyen-hung-manh-cv-en.pdf", import.meta.url)),
    access(new URL("../public/data-analysis-certificate.pdf", import.meta.url)),
    access(new URL("../public/stage-icons.svg", import.meta.url)),
  ]);
});
