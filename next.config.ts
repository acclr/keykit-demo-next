import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The Keykit SDK reads these from disk at request time, so they must ship with every server function.
  outputFileTracingIncludes: {
    "/*": ["./keykit.config.ts", "./.keykit/**/*"],
  },
};

export default nextConfig;
