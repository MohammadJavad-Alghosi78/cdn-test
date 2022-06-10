const handleCdn = () => {
  if (process.env.NODE_ENV === "production") {
    if (typeof window !== "undefined") {
      if (window.location.hostname.includes("vercel")) {
        return true;
      }
    }
  }
  return false;
};

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  assetPrefix: handleCdn() ? "www.mycdn.com" : "www.nocdn.com",
};

module.exports = nextConfig;
