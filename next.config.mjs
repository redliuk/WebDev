/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    // Static export: nessun server per l'ottimizzazione on-demand.
    unoptimized: true,
  },
};

export default nextConfig;
