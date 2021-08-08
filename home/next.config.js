const { BLOG_URL } = process.env;

console.log("BLOG_URL: ", BLOG_URL);
module.exports = {
  images: {
    loader: "imgix",
    path: "",
  },
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: `/:path*`,
      },
      {
        source: "/blog",
        destination: `${BLOG_URL}/blog`,
      },
      {
        source: "/blog/:path*",
        destination: `${BLOG_URL}/blog/:path*`,
      },
    ];
  },
};
