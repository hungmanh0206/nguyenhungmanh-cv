import assert from "node:assert/strict";
import { access } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
      IMAGES: {
        input() {
          throw new Error("Image optimization is not used by this test.");
        },
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the bilingual CV website shell", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /Nguy.n H.ng M.nh|Nguyen Hung Manh/i);
  assert.match(html, /nguyen-hung-manh-cv-vi\.pdf/);
  assert.match(html, /hust\.ediploma\.vn\/verify\/Zf3y-0Ovt-iJen/);
  assert.match(html, /linkedin\.com\/in\/nguyen-hung-manh-97316117b/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape/i);
});

test("ships both CV PDF assets", async () => {
  await Promise.all([
    access(new URL("../public/nguyen-hung-manh-cv-vi.pdf", import.meta.url)),
    access(new URL("../public/nguyen-hung-manh-cv-en.pdf", import.meta.url)),
  ]);
});
