import { mkdir, writeFile } from "node:fs/promises";

const outputDir = "public/sites/sendero2-fmmarketingdigital-com-0ca8991d/lista-de-utiles-b70d8828/files";
const url = "https://sendero2.fmmarketingdigital.com/wp-content/uploads/2025/08/SENDERO-campana.docx";
await mkdir(outputDir, { recursive: true });
const response = await fetch(url);
if (!response.ok) throw new Error(`${response.status} ${url}`);
await writeFile(`${outputDir}/SENDERO-campana.docx`, Buffer.from(await response.arrayBuffer()));
console.log("Downloaded SENDERO-campana.docx");
