// @ts-check
import withPlaiceholder from "@plaiceholder/next";

/**
 * @type {import('next').NextConfig}
 */

const config = {
  reactStrictMode: true,
  images: {
    domains: [
      "images.unsplash.com",
    ],
  },
};

export default withPlaiceholder(config);