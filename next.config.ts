// @ts-check
import withPlaiceholder from "@plaiceholder/next";

/**
 * @type {import('next').NextConfig}
 */

const config = {
  reactStrictMode: true,
  images: {
    domains: ['www.gravatar.com', 'img.freepik.com', "images.unsplash.com","blogger.googleusercontent.com"],
  },
};

export default withPlaiceholder(config);