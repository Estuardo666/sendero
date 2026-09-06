import { mkdir, writeFile } from "node:fs/promises";

const outputDir = "public/sites/sendero2-fmmarketingdigital-com-0ca8991d/podcast-ffccab66/images";
// Episode 1's source thumbnail returns 404 on YouTube, matching the grey
// placeholder rendered by the original page. Keep that card intentionally
// assetless and download the available Episode 2 thumbnail.
const ids = ["k9G4oDJazhA"];
await mkdir(outputDir, { recursive: true });
await Promise.all(ids.map(async (id) => {
  const url = `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
  const response = await fetch(url);
  if (!response.ok) throw new Error(`${response.status} ${url}`);
  await writeFile(`${outputDir}/yt-${id}.jpg`, Buffer.from(await response.arrayBuffer()));
  console.log(`Downloaded yt-${id}.jpg`);
}));
