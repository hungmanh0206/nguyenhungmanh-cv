import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

test("defines the bilingual CV content and external links", async () => {
  const page = await readFile(new URL("../app/page.tsx", import.meta.url), "utf8");

  assert.match(page, /NGUYỄN HÙNG MẠNH/);
  assert.match(page, /NGUYEN HUNG MANH/);
  assert.match(page, /nguyen-hung-manh-cv-vi\.pdf/);
  assert.match(page, /nguyen-hung-manh-cv-en\.pdf/);
  assert.match(page, /hust\.ediploma\.vn\/verify\/Zf3y-0Ovt-iJen/);
  assert.match(page, /linkedin\.com\/in\/nguyen-hung-manh-97316117b/);
  assert.doesNotMatch(page, /logo-sapp|assets\/logo-sapp/i);
});

test("ships the profile image and both CV PDF assets", async () => {
  await Promise.all([
    access(new URL("../public/manh-profile.png", import.meta.url)),
    access(new URL("../public/nguyen-hung-manh-cv-vi.pdf", import.meta.url)),
    access(new URL("../public/nguyen-hung-manh-cv-en.pdf", import.meta.url)),
  ]);
});
