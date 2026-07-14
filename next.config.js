const path = require("path");

/** @type {import('next').NextConfig} */
const svgrOptions = {
  // Paths sin fill heredan currentColor del <svg>
  svgProps: {
    fill: "currentColor",
  },
  svgoConfig: {
    plugins: [
      {
        name: "preset-default",
        params: {
          overrides: {
            removeViewBox: false,
          },
        },
      },
      {
        name: "convertColors",
        params: {
          currentColor: true,
        },
      },
    ],
  },
};

const nextConfig = {
  // Next.js 16: Turbopack es el bundler por defecto.
  // Forzar root al proyecto (evita tomar el package-lock del padre).
  turbopack: {
    root: path.join(__dirname),
    rules: {
      "*.svg": {
        loaders: [
          {
            loader: "@svgr/webpack",
            options: svgrOptions,
          },
        ],
        as: "*.js",
      },
    },
  },
  // Fallback si se usa `next build --webpack` / `next dev --webpack`
  webpack(config) {
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.(".svg"),
    );

    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: svgrOptions,
        },
      ],
    });

    if (fileLoaderRule) {
      fileLoaderRule.exclude = /\.svg$/i;
    }

    return config;
  },
};

module.exports = nextConfig;
