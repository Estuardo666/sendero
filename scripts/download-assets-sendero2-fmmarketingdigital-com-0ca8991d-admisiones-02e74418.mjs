import { mkdir, writeFile } from "node:fs/promises";

const outputDir = "public/sites/sendero2-fmmarketingdigital-com-0ca8991d/admisiones-02e74418/files";
const assets = [
  ["https://sendero2.fmmarketingdigital.com/wp-content/uploads/2025/08/Campana-Sendero-copy.pdf", "Campana-Sendero-copy.pdf"],
  ["https://sendero2.fmmarketingdigital.com/wp-content/uploads/2025/08/Sendero.docx", "Sendero.docx"],
];

await mkdir(outputDir, { recursive: true });
await Promise.all(assets.map(async ([url, filename]) => {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`${response.status} ${url}`);
  await writeFile(`${outputDir}/${filename}`, Buffer.from(await response.arrayBuffer()));
  console.log(`Downloaded ${filename}`);
}));
