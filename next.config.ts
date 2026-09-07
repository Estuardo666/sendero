import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "development";

const wpHost = (() => {
  try {
    return new URL(
      process.env.NEXT_PUBLIC_WP_URL ?? "http://sendero.local",
    ).hostname;
  } catch {
    return "sendero.local";
  }
})();

const nextConfig: NextConfig = {
  experimental: {
    // WordPress en Local atiende pocas peticiones a la vez: si Next lanza un
    // worker por página, PHP-FPM se satura y el build falla por timeout.
    staticGenerationMinPagesPerWorker: 50,
    staticGenerationMaxConcurrency: 4,
    staticGenerationRetryCount: 2,
  },
  images: {
    // En local WordPress corre con certificado autofirmado: dejar que el
    // optimizador descargue las imágenes falla, así que se sirven tal cual.
    unoptimized: isDev,
    remotePatterns: [
      { protocol: "http", hostname: wpHost },
      { protocol: "https", hostname: wpHost },
      { protocol: "https", hostname: "i.ytimg.com" },
    ],
  },
};

export default nextConfig;
