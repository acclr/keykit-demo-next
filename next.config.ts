import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The SDK reads these from disk at request time, so they must ship with every server function.
  // keykit.config.ts imports @keykithq/sdk. That import is resolved from the
  // raw file, not from the server bundle, so the package has to be copied too.
  outputFileTracingIncludes: {
    "/*": [
      "./keykit.config.ts",
      "./.keykit/**/*",
      "./node_modules/@keykithq/sdk/package.json",
      "./node_modules/@keykithq/sdk/dist/**/*",
    ],
  },
};

export default nextConfig;
