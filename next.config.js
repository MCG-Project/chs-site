module.exports = {
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Find the module rule for MP4 files
    const mp4Rule = config.module.rules.find(
      (rule) => rule.test && rule.test.toString().includes(".mp4")
    );

    // If the rule is found, remove 'i18n' property
    if (mp4Rule) {
      delete mp4Rule.i18n;
    }

    // Your existing webpack configuration
    config.module.rules.push({
      test: /\.(mp4)$/,
      use: {
        loader: "file-loader",
        options: {
          publicPath: "/_next/static/videos", // Set publicPath based on your project structure
          outputPath: "static/videos", // Set outputPath based on your project structure
          name: "[name].[ext]",
        },
      },
    });

    return config;
  },
};
