import BuilderDevTools from "@builder.io/dev-tools/next";
import createNextIntlPlugin from 'next-intl/plugin';
const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = BuilderDevTools()({transpilePackages: ['three'],});

export default withNextIntl(nextConfig);
