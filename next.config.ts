// @ts-check
import withPlaiceholder from "@plaiceholder/next";

/**
 * @type {import('next').NextConfig}
 */

const config = {
  reactStrictMode: true,
  images: {
    domains: [
      'www.gravatar.com',
      'img.freepik.com',
      "images.unsplash.com",
      "blogger.googleusercontent.com",
      "plus.unsplash.com",
      "encrypted-tbn0.gstatic.com",
      "www.kupywrestlingwallpapers.info"
    ],
  },
};

export default withPlaiceholder(config);