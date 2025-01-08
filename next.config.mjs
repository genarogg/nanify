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
      "www.gravatar.com",
      "cdn.pixabay.com",
      "themesflat.co"
    ],
  },
};

export default withPlaiceholder(config);