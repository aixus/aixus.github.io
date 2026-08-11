import assert from "node:assert/strict";
import { readFile, readdir } from "node:fs/promises";
import test from "node:test";

const routes = [
  ["/", "out/index.html"],
  ["/neo", "out/neo/index.html"],
  ["/neo/pagina-web", "out/neo/pagina-web/index.html"],
];

for (const [route, file] of routes) {
  test(`exporta ${route}`, async () => {
    const html = await readFile(new URL(`../${file}`, import.meta.url), "utf8");
    assert.match(html, /<!DOCTYPE html>/i);
    assert.match(html, /_next\/static/);
  });
}

test("conserva el formulario general de consulta", async () => {
  const html = await readFile(new URL("../out/index.html", import.meta.url), "utf8");
  assert.match(html, /name="from_name"/);
  assert.match(html, /name="from_email"/);
  assert.match(html, /name="message"/);
});

test("conserva el formulario de Página Web NEO", async () => {
  const html = await readFile(new URL("../out/neo/pagina-web/index.html", import.meta.url), "utf8");
  assert.match(html, /name="organization"/);
  assert.match(html, /name="project_type"/);
  assert.match(html, /name="project_details"/);
  assert.match(html, /Enviar consulta/);
});

test("incluye la integración de EmailJS en el JavaScript publicado", async () => {
  const chunksDirectory = new URL("../out/_next/static/chunks/", import.meta.url);
  const files = await readdir(chunksDirectory, { recursive: true });
  const scripts = await Promise.all(
    files
      .filter((file) => file.endsWith(".js"))
      .map((file) => readFile(new URL(file, chunksDirectory), "utf8")),
  );
  const bundle = scripts.join("\n");

  assert.match(bundle, /service_0kc69b9/);
  assert.match(bundle, /template_u76q6ff/);
  assert.match(bundle, /-gMkX3hKNo5ynn4BH/);
});
