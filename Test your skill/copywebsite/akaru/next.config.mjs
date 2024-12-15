import MillionLint from '@million/lint';
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [{
      protocol: "https",
      hostname: "cdn.sanity.io"
    }]
  }
};
export default MillionLint.next({
  rsc: true
})(nextConfig);