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
      "www.gravatar.com"
    ],
  },
};

export default withPlaiceholder(config);